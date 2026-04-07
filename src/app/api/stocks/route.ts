import { NextResponse } from "next/server";
import yahooFinance from "yahoo-finance2";

// AI Supply Chain watchlist — compute, equipment, memory, packaging, substrates
const TICKERS = [
  "NVDA", "AMD", "AVGO", "QCOM", "INTC",
  "AMAT", "ASML", "LRCX", "KLAC", "ONTO",
  "MU", "WDC",
  "TSM", "ARM", "MRVL",
  "ON", "WOLF",
  "ACLS", "CAMT", "FORM",
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
