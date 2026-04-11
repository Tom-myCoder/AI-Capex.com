import { NextResponse } from "next/server";
import YahooFinance from "yahoo-finance2";

const yahooFinance = new YahooFinance();

// AI Capex Supply Chain watchlist — updated April 2026
const TICKERS = [
  // GPU / AI Chips
  "NVDA", "AMD", "AVGO", "QCOM", "INTC",
  // Memory
  "MU", "WDC",
  // Foundry
  "TSM", "GFS",
  // Equipment
  "AMAT", "ASML", "LRCX", "KLAC", "ONTO",
  // EDA / IP
  "SNPS", "CDNS", "ARM",
  // Packaging
  "AMKR",
  // Networking / Optical
  "MRVL", "NOK", "COHR", "LITE", "CIEN",
  // Power
  "ON", "WOLF", "MPWR", "BE",
  // Security / AI Infra
  "PANW", "CRWD",
  // Cloud / Hyperscalers
  "MSFT", "AMZN", "GOOGL", "META", "AAPL", "ORCL", "TSLA",
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toStockQuote(ticker: string, q: any): StockQuote {
  return {
    ticker,
    price: q?.regularMarketPrice ?? null,
    change: q?.regularMarketChange ?? null,
    changePct: q?.regularMarketChangePercent ?? null,
    marketCap: q?.marketCap ?? null,
    volume: q?.regularMarketVolume ?? null,
    name: q?.shortName ?? null,
  };
}

export async function GET() {
  try {
    // yahoo-finance2 handles Yahoo cookie/crumb negotiation automatically
    const settled = await Promise.allSettled(
      TICKERS.map((t) => yahooFinance.quote(t) as Promise<unknown>)
    );

    const quotes: StockQuote[] = settled.map((result, i) => {
      const ticker = TICKERS[i];
      if (result.status === "fulfilled") {
        return toStockQuote(ticker, result.value);
      }
      const reason = result.reason;
      return {
        ticker,
        price: null,
        change: null,
        changePct: null,
        marketCap: null,
        volume: null,
        name: null,
        error: reason instanceof Error ? reason.message : "fetch failed",
      };
    });

    return NextResponse.json(
      { quotes, fetchedAt: new Date().toISOString(), source: "yahoo-finance2" },
      { headers: { "Cache-Control": "no-store, max-age=0" } }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
