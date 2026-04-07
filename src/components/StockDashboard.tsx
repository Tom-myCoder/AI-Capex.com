"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface StockQuote {
  ticker: string;
  price: number | null;
  change: number | null;
  changePct: number | null;
  marketCap: number | null;
  volume: number | null;
  name: string | null;
  error?: string;
}

// Sector labels for the watchlist
const SECTORS: Record<string, string> = {
  NVDA: "Compute",
  AMD: "Compute",
  AVGO: "Compute",
  QCOM: "Compute",
  INTC: "Compute",
  AMAT: "Equipment",
  ASML: "Equipment",
  LRCX: "Equipment",
  KLAC: "Equipment",
  ONTO: "Equipment",
  MU: "Memory",
  WDC: "Memory",
  TSM: "Foundry",
  ARM: "IP/Silicon",
  MRVL: "IP/Silicon",
  ON: "Power",
  WOLF: "Power",
  ACLS: "Pkg/Test",
  CAMT: "Pkg/Test",
  FORM: "Pkg/Test",
};

const SECTOR_COLORS: Record<string, string> = {
  Compute: "bg-violet-900/40 text-violet-300 border-violet-700/40",
  Equipment: "bg-blue-900/40 text-blue-300 border-blue-700/40",
  Memory: "bg-cyan-900/40 text-cyan-300 border-cyan-700/40",
  Foundry: "bg-emerald-900/40 text-emerald-300 border-emerald-700/40",
  "IP/Silicon": "bg-indigo-900/40 text-indigo-300 border-indigo-700/40",
  Power: "bg-orange-900/40 text-orange-300 border-orange-700/40",
  "Pkg/Test": "bg-rose-900/40 text-rose-300 border-rose-700/40",
};

const REFRESH_INTERVAL_MS = 15 * 60 * 1000; // 15 minutes

function formatPrice(price: number | null): string {
  if (price === null) return "—";
  return price >= 1000
    ? `$${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    : `$${price.toFixed(2)}`;
}

function formatChangePct(pct: number | null): string {
  if (pct === null) return "—";
  const sign = pct >= 0 ? "+" : "";
  return `${sign}${pct.toFixed(2)}%`;
}

function formatVolume(vol: number | null): string {
  if (vol === null) return "—";
  if (vol >= 1_000_000) return `${(vol / 1_000_000).toFixed(1)}M`;
  if (vol >= 1_000) return `${(vol / 1_000).toFixed(0)}K`;
  return vol.toString();
}

function formatMarketCap(cap: number | null): string {
  if (cap === null) return "—";
  if (cap >= 1_000_000_000_000)
    return `$${(cap / 1_000_000_000_000).toFixed(2)}T`;
  if (cap >= 1_000_000_000) return `$${(cap / 1_000_000_000).toFixed(1)}B`;
  return `$${(cap / 1_000_000).toFixed(0)}M`;
}

function formatTime(isoStr: string): string {
  return new Date(isoStr).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

// Countdown ring component
function CountdownRing({ secondsLeft }: { secondsLeft: number }) {
  const total = REFRESH_INTERVAL_MS / 1000;
  const pct = secondsLeft / total;
  const r = 10;
  const circ = 2 * Math.PI * r;
  const dash = circ * pct;

  return (
    <svg width="28" height="28" viewBox="0 0 28 28" className="shrink-0">
      <circle
        cx="14"
        cy="14"
        r={r}
        fill="none"
        stroke="#374151"
        strokeWidth="2.5"
      />
      <circle
        cx="14"
        cy="14"
        r={r}
        fill="none"
        stroke="#7c3aed"
        strokeWidth="2.5"
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        transform="rotate(-90 14 14)"
      />
    </svg>
  );
}

export default function StockDashboard() {
  const [quotes, setQuotes] = useState<StockQuote[]>([]);
  const [fetchedAt, setFetchedAt] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(REFRESH_INTERVAL_MS / 1000);
  const [sortField, setSortField] = useState<"changePct" | "price" | "marketCap" | "volume">("changePct");
  const [sortDir, setSortDir] = useState<"desc" | "asc">("desc");
  const [filterSector, setFilterSector] = useState<string | null>(null);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const nextRefreshAt = useRef<number>(0);

  const fetchStocks = useCallback(async (isManual = false) => {
    if (isManual) setRefreshing(true);
    setError(null);

    try {
      const res = await fetch("/api/stocks", { cache: "no-store" });
      if (!res.ok) throw new Error(`API error ${res.status}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setQuotes(data.quotes ?? []);
      setFetchedAt(data.fetchedAt ?? null);
      // Reset countdown
      nextRefreshAt.current = Date.now() + REFRESH_INTERVAL_MS;
      setSecondsLeft(REFRESH_INTERVAL_MS / 1000);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to fetch");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  // Initial fetch + auto-refresh every 15 min
  useEffect(() => {
    fetchStocks();
    nextRefreshAt.current = Date.now() + REFRESH_INTERVAL_MS;

    timerRef.current = setInterval(() => {
      fetchStocks();
    }, REFRESH_INTERVAL_MS);

    // Countdown tick every second
    countdownRef.current = setInterval(() => {
      const secs = Math.max(0, Math.round((nextRefreshAt.current - Date.now()) / 1000));
      setSecondsLeft(secs);
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (countdownRef.current) clearInterval(countdownRef.current);
    };
  }, [fetchStocks]);

  // Sorting + filtering
  const sectors = Array.from(new Set(Object.values(SECTORS)));
  const sorted = [...quotes]
    .filter((q) => !filterSector || SECTORS[q.ticker] === filterSector)
    .sort((a, b) => {
      const va = a[sortField] ?? (sortDir === "desc" ? -Infinity : Infinity);
      const vb = b[sortField] ?? (sortDir === "desc" ? -Infinity : Infinity);
      return sortDir === "desc" ? vb - va : va - vb;
    });

  const toggleSort = (field: typeof sortField) => {
    if (sortField === field) {
      setSortDir((d) => (d === "desc" ? "asc" : "desc"));
    } else {
      setSortField(field);
      setSortDir("desc");
    }
  };

  const SortIcon = ({ field }: { field: typeof sortField }) => {
    if (sortField !== field) return <span className="ml-1 text-gray-600">↕</span>;
    return (
      <span className="ml-1 text-violet-400">
        {sortDir === "desc" ? "↓" : "↑"}
      </span>
    );
  };

  // Market breadth counts
  const gainers = quotes.filter((q) => (q.changePct ?? 0) > 0).length;
  const losers = quotes.filter((q) => (q.changePct ?? 0) < 0).length;

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-white">AI Supply Chain Stocks</h2>
          {fetchedAt && (
            <p className="text-xs text-gray-500 mt-0.5">
              Updated {formatTime(fetchedAt)}
            </p>
          )}
        </div>

        <div className="flex items-center gap-3">
          {/* Breadth */}
          {quotes.length > 0 && (
            <div className="hidden sm:flex items-center gap-2 text-xs">
              <span className="text-green-400 font-medium">{gainers}↑</span>
              <span className="text-gray-600">/</span>
              <span className="text-red-400 font-medium">{losers}↓</span>
            </div>
          )}

          {/* Countdown */}
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <CountdownRing secondsLeft={secondsLeft} />
            <span className="tabular-nums">
              {Math.floor(secondsLeft / 60)}:{String(secondsLeft % 60).padStart(2, "0")}
            </span>
          </div>

          {/* Manual refresh */}
          <button
            onClick={() => fetchStocks(true)}
            disabled={refreshing}
            className="flex items-center gap-1.5 bg-violet-700 hover:bg-violet-600 disabled:opacity-50 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
          >
            <svg
              className={`w-3.5 h-3.5 ${refreshing ? "animate-spin" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            {refreshing ? "Refreshing…" : "Refresh"}
          </button>
        </div>
      </div>

      {/* Sector filter pills */}
      <div className="px-4 py-2 border-b border-gray-800 flex flex-wrap gap-1.5">
        <button
          onClick={() => setFilterSector(null)}
          className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
            filterSector === null
              ? "bg-gray-700 border-gray-500 text-white"
              : "border-gray-700 text-gray-400 hover:text-gray-200"
          }`}
        >
          All
        </button>
        {sectors.map((s) => (
          <button
            key={s}
            onClick={() => setFilterSector(filterSector === s ? null : s)}
            className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
              filterSector === s
                ? SECTOR_COLORS[s]
                : "border-gray-700 text-gray-400 hover:text-gray-200"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Loading / error states */}
      {loading && (
        <div className="px-4 py-10 text-center text-gray-500 text-sm animate-pulse">
          Fetching live prices…
        </div>
      )}

      {!loading && error && (
        <div className="px-4 py-6 text-center text-red-400 text-sm">
          {error} —{" "}
          <button
            onClick={() => fetchStocks(true)}
            className="underline hover:text-red-300"
          >
            retry
          </button>
        </div>
      )}

      {/* Table */}
      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800 text-gray-500 text-xs">
                <th className="text-left px-4 py-2 font-medium">Ticker</th>
                <th className="text-left px-4 py-2 font-medium hidden sm:table-cell">
                  Sector
                </th>
                <th
                  className="text-right px-4 py-2 font-medium cursor-pointer hover:text-gray-300 select-none"
                  onClick={() => toggleSort("price")}
                >
                  Price
                  <SortIcon field="price" />
                </th>
                <th
                  className="text-right px-4 py-2 font-medium cursor-pointer hover:text-gray-300 select-none"
                  onClick={() => toggleSort("changePct")}
                >
                  Change
                  <SortIcon field="changePct" />
                </th>
                <th
                  className="text-right px-4 py-2 font-medium hidden md:table-cell cursor-pointer hover:text-gray-300 select-none"
                  onClick={() => toggleSort("marketCap")}
                >
                  Mkt Cap
                  <SortIcon field="marketCap" />
                </th>
                <th
                  className="text-right px-4 py-2 font-medium hidden lg:table-cell cursor-pointer hover:text-gray-300 select-none"
                  onClick={() => toggleSort("volume")}
                >
                  Volume
                  <SortIcon field="volume" />
                </th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((q, i) => {
                const pos = (q.changePct ?? 0) >= 0;
                const sector = SECTORS[q.ticker] ?? "—";
                return (
                  <tr
                    key={q.ticker}
                    className={`border-b border-gray-800/50 hover:bg-gray-800/40 transition-colors ${
                      i % 2 === 0 ? "" : "bg-gray-900/50"
                    }`}
                  >
                    {/* Ticker + name */}
                    <td className="px-4 py-2.5">
                      <div className="font-semibold text-white">{q.ticker}</div>
                      {q.name && (
                        <div className="text-xs text-gray-500 truncate max-w-[140px]">
                          {q.name}
                        </div>
                      )}
                    </td>

                    {/* Sector */}
                    <td className="px-4 py-2.5 hidden sm:table-cell">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border ${
                          SECTOR_COLORS[sector] ?? "bg-gray-800 text-gray-400 border-gray-700"
                        }`}
                      >
                        {sector}
                      </span>
                    </td>

                    {/* Price */}
                    <td className="px-4 py-2.5 text-right tabular-nums text-white font-medium">
                      {formatPrice(q.price)}
                    </td>

                    {/* Change % */}
                    <td className="px-4 py-2.5 text-right tabular-nums">
                      <div
                        className={`inline-flex items-center gap-1 font-semibold ${
                          pos ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        <span>{pos ? "▲" : "▼"}</span>
                        <span>{formatChangePct(q.changePct)}</span>
                      </div>
                      {q.change !== null && (
                        <div className={`text-xs ${pos ? "text-green-600" : "text-red-600"}`}>
                          {q.change >= 0 ? "+" : ""}{q.change.toFixed(2)}
                        </div>
                      )}
                    </td>

                    {/* Market cap */}
                    <td className="px-4 py-2.5 text-right text-gray-400 hidden md:table-cell tabular-nums">
                      {formatMarketCap(q.marketCap)}
                    </td>

                    {/* Volume */}
                    <td className="px-4 py-2.5 text-right text-gray-400 hidden lg:table-cell tabular-nums">
                      {formatVolume(q.volume)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Footer */}
      <div className="px-4 py-2 border-t border-gray-800 text-xs text-gray-600 flex justify-between">
        <span>Data via Yahoo Finance · Delays may apply</span>
        <span>Auto-refreshes every 15 min</span>
      </div>
    </div>
  );
}
