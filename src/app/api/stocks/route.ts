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

// --- Source 1: Yahoo Finance chart endpoint (per ticker, less IP-blocked than quote) ---
async function fetchYahooChart(ticker: string): Promise<StockQuote | null> {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?interval=1d&range=1d`;
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
      "Accept": "*/*",
      "Referer": "https://finance.yahoo.com/",
    },
    signal: AbortSignal.timeout(6000),
  });
  if (!res.ok) return null;

  const data = await res.json();
  const meta = data?.chart?.result?.[0]?.meta;
  if (!meta) return null;

  const price: number = meta.regularMarketPrice ?? meta.chartPreviousClose ?? 0;
  const prevClose: number = meta.chartPreviousClose ?? meta.previousClose ?? price;
  const change = price - prevClose;
  const changePct = prevClose !== 0 ? (change / prevClose) * 100 : 0;

  return {
    ticker,
    price,
    change,
    changePct,
    marketCap: meta.marketCap ?? null,
    volume: meta.regularMarketVolume ?? null,
    name: meta.shortName ?? meta.longName ?? null,
  };
}

// --- Source 2: Financial Modeling Prep free tier (no API key, works from serverless) ---
interface FMPQuote {
  symbol?: string;
  price?: number;
  change?: number;
  changesPercentage?: number;
  marketCap?: number;
  volume?: number;
  name?: string;
}

async function fetchFMP(tickers: string[]): Promise<StockQuote[]> {
  const symbols = tickers.join(",");
  const url = `https://financialmodelingprep.com/api/v3/quote-short/${symbols}?apikey=demo`;
  const res = await fetch(url, {
    headers: { "Accept": "application/json" },
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`FMP: ${res.status}`);
  const data: FMPQuote[] = await res.json();
  if (!Array.isArray(data)) throw new Error("FMP: unexpected response");

  const map = new Map<string, FMPQuote>();
  for (const q of data) { if (q.symbol) map.set(q.symbol, q); }

  return tickers.map((t): StockQuote => {
    const q = map.get(t);
    if (!q) return { ticker: t, price: null, change: null, changePct: null, marketCap: null, volume: null, name: null, error: "no data" };
    return {
      ticker: t,
      price: q.price ?? null,
      change: q.change ?? null,
      changePct: q.changesPercentage ?? null,
      marketCap: q.marketCap ?? null,
      volume: q.volume ?? null,
      name: q.name ?? null,
    };
  });
}

// --- Source 3: Yahoo Finance quote endpoint (batch, may be blocked but worth trying) ---
interface YahooQuoteRaw {
  symbol?: string;
  regularMarketPrice?: number;
  regularMarketChange?: number;
  regularMarketChangePercent?: number;
  marketCap?: number;
  regularMarketVolume?: number;
  shortName?: string;
}

async function fetchYahooBatch(tickers: string[]): Promise<StockQuote[]> {
  const symbols = tickers.join(",");
  const url = `https://query2.finance.yahoo.com/v7/finance/quote?symbols=${symbols}&fields=regularMarketPrice,regularMarketChange,regularMarketChangePercent,marketCap,regularMarketVolume,shortName&formatted=false`;
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
      "Accept": "application/json",
      "Referer": "https://finance.yahoo.com/",
    },
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`Yahoo batch: ${res.status}`);
  const data = await res.json();
  const results: YahooQuoteRaw[] = data?.quoteResponse?.result ?? [];
  if (results.length === 0) throw new Error("Yahoo batch: empty result");

  const map = new Map<string, YahooQuoteRaw>();
  for (const q of results) { if (q.symbol) map.set(q.symbol, q); }

  return tickers.map((t): StockQuote => {
    const q = map.get(t);
    if (!q) return { ticker: t, price: null, change: null, changePct: null, marketCap: null, volume: null, name: null, error: "no data" };
    return {
      ticker: t,
      price: q.regularMarketPrice ?? null,
      change: q.regularMarketChange ?? null,
      changePct: q.regularMarketChangePercent ?? null,
      marketCap: q.marketCap ?? null,
      volume: q.regularMarketVolume ?? null,
      name: q.shortName ?? null,
    };
  });
}

export async function GET() {
  // Strategy 1: Yahoo chart endpoint — fetch all tickers in parallel
  try {
    const results = await Promise.all(TICKERS.map(fetchYahooChart));
    const quotes = results.map((q, i): StockQuote =>
      q ?? { ticker: TICKERS[i], price: null, change: null, changePct: null, marketCap: null, volume: null, name: null, error: "no data" }
    );
    const successCount = quotes.filter(q => q.price !== null).length;
    if (successCount >= TICKERS.length * 0.7) {
      // At least 70% success — good enough
      return NextResponse.json(
        { quotes, fetchedAt: new Date().toISOString(), source: "yahoo-chart" },
        { headers: { "Cache-Control": "no-store, max-age=0" } }
      );
    }
  } catch {
    // fall through
  }

  // Strategy 2: Yahoo batch quote endpoint
  try {
    const quotes = await fetchYahooBatch(TICKERS);
    const successCount = quotes.filter(q => q.price !== null).length;
    if (successCount >= TICKERS.length * 0.7) {
      return NextResponse.json(
        { quotes, fetchedAt: new Date().toISOString(), source: "yahoo-batch" },
        { headers: { "Cache-Control": "no-store, max-age=0" } }
      );
    }
  } catch {
    // fall through
  }

  // Strategy 3: Financial Modeling Prep
  try {
    const quotes = await fetchFMP(TICKERS);
    return NextResponse.json(
      { quotes, fetchedAt: new Date().toISOString(), source: "fmp" },
      { headers: { "Cache-Control": "no-store, max-age=0" } }
    );
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json(
      { error: `All sources failed. Last error: ${msg}` },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}
