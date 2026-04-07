import { NextResponse } from "next/server";

// AI Supply Chain watchlist — compute, equipment, memory, packaging, substrates
const TICKERS = [
  "NVDA", "AMD", "AVGO", "QCOM", "INTC",   // compute / logic
  "AMAT", "ASML", "LRCX", "KLAC", "ONTO",   // equipment
  "MU", "WDC",                                // memory
  "TSM", "ARM", "MRVL",                       // foundry / IP / custom silicon
  "ON", "WOLF",                               // power / SiC
  "ACLS", "CAMT", "FORM",                    // advanced packaging / test
];

export interface StockQuote {
  ticker: string;
  price: number | null;
  change: number | null;
  changePct: number | null;
  marketCap: number | null;
  volume: number | null;
  name: string | null;
  error?: string;
}

// Raw shape returned by Yahoo Finance
interface YahooQuoteRaw {
  symbol?: string;
  regularMarketPrice?: number;
  regularMarketChange?: number;
  regularMarketChangePercent?: number;
  marketCap?: number;
  regularMarketVolume?: number;
  shortName?: string;
}

// Try Yahoo Finance v8 endpoint (often less blocked than v7)
async function tryYahooV8(tickers: string[]): Promise<YahooQuoteRaw[]> {
  const symbols = tickers.join("%2C");
  const url = `https://query2.finance.yahoo.com/v8/finance/quote?symbols=${symbols}&fields=regularMarketPrice%2CregularMarketChange%2CregularMarketChangePercent%2CmarketCap%2CregularMarketVolume%2CshortName`;

  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
      "Accept": "application/json",
      "Accept-Language": "en-US,en;q=0.9",
      "Referer": "https://finance.yahoo.com/",
      "Origin": "https://finance.yahoo.com",
    },
    signal: AbortSignal.timeout(8000),
  });

  if (!res.ok) throw new Error(`Yahoo v8: ${res.status}`);
  const data = await res.json();
  return data?.quoteResponse?.result ?? [];
}

// Try Yahoo Finance v7 endpoint
async function tryYahooV7(tickers: string[]): Promise<YahooQuoteRaw[]> {
  const symbols = tickers.join(",");
  const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbols}&fields=regularMarketPrice,regularMarketChange,regularMarketChangePercent,marketCap,regularMarketVolume,shortName`;

  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      "Accept": "*/*",
      "Referer": "https://finance.yahoo.com/",
    },
    signal: AbortSignal.timeout(8000),
  });

  if (!res.ok) throw new Error(`Yahoo v7: ${res.status}`);
  const data = await res.json();
  return data?.quoteResponse?.result ?? [];
}

// Try the Yahoo Finance query2 v7 (different host, sometimes works when query1 is blocked)
async function tryYahooQuery2V7(tickers: string[]): Promise<YahooQuoteRaw[]> {
  const symbols = tickers.join(",");
  const url = `https://query2.finance.yahoo.com/v7/finance/quote?symbols=${symbols}&fields=regularMarketPrice,regularMarketChange,regularMarketChangePercent,marketCap,regularMarketVolume,shortName&formatted=false&lang=en-US&region=US`;

  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      "Accept": "application/json, text/plain, */*",
      "Accept-Language": "en-US,en;q=0.5",
    },
    signal: AbortSignal.timeout(8000),
  });

  if (!res.ok) throw new Error(`Yahoo query2 v7: ${res.status}`);
  const data = await res.json();
  return data?.quoteResponse?.result ?? [];
}

function buildQuotes(rawResults: YahooQuoteRaw[], tickers: string[]): StockQuote[] {
  const resultMap = new Map<string, StockQuote>();
  for (const q of rawResults) {
    const ticker = q.symbol ?? "";
    if (!ticker) continue;
    resultMap.set(ticker, {
      ticker,
      price: q.regularMarketPrice ?? null,
      change: q.regularMarketChange ?? null,
      changePct: q.regularMarketChangePercent ?? null,
      marketCap: q.marketCap ?? null,
      volume: q.regularMarketVolume ?? null,
      name: q.shortName ?? null,
    });
  }

  return tickers.map((t): StockQuote => {
    return (
      resultMap.get(t) ?? {
        ticker: t,
        price: null,
        change: null,
        changePct: null,
        marketCap: null,
        volume: null,
        name: null,
        error: "no data",
      }
    );
  });
}

export async function GET() {
  const errors: string[] = [];

  // Try each Yahoo endpoint in sequence — stop at first success
  const attempts = [tryYahooV8, tryYahooQuery2V7, tryYahooV7];

  for (const attempt of attempts) {
    try {
      const raw = await attempt(TICKERS);
      if (raw.length === 0) {
        errors.push(`${attempt.name}: empty result`);
        continue;
      }
      const quotes = buildQuotes(raw, TICKERS);
      return NextResponse.json(
        { quotes, fetchedAt: new Date().toISOString(), source: attempt.name },
        { headers: { "Cache-Control": "no-store, max-age=0" } }
      );
    } catch (e) {
      errors.push(e instanceof Error ? e.message : String(e));
    }
  }

  // All attempts failed
  return NextResponse.json(
    { error: `All sources failed: ${errors.join(" | ")}` },
    { status: 500, headers: { "Cache-Control": "no-store" } }
  );
}
