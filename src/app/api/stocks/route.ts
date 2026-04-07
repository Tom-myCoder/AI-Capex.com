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

// Raw shape returned by Yahoo Finance v7 API
interface YahooQuoteRaw {
  symbol?: string;
  regularMarketPrice?: number;
  regularMarketChange?: number;
  regularMarketChangePercent?: number;
  marketCap?: number;
  regularMarketVolume?: number;
  shortName?: string;
}

async function fetchYahooQuotes(tickers: string[]): Promise<StockQuote[]> {
  const symbols = tickers.join(",");
  const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbols}&fields=regularMarketPrice,regularMarketChange,regularMarketChangePercent,marketCap,regularMarketVolume,shortName`;

  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept: "application/json",
    },
    next: { revalidate: 0 }, // never cache — always fresh
  });

  if (!res.ok) {
    throw new Error(`Yahoo Finance returned ${res.status}`);
  }

  const data = await res.json();
  const results: YahooQuoteRaw[] = data?.quoteResponse?.result ?? [];

  // Build a map for quick lookup
  const resultMap = new Map<string, StockQuote>();
  for (const q of results) {
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

  // Return in our defined order, filling missing with nulls
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
  try {
    const quotes = await fetchYahooQuotes(TICKERS);
    return NextResponse.json(
      {
        quotes,
        fetchedAt: new Date().toISOString(),
      },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
