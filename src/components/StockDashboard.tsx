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

// ── Canonical segment definitions ─────────────────────────────────────────────
const SEGMENT_DEFS: { label: string; tickers: string[] }[] = [
  { label: "GPU / AI Chips",       tickers: ["NVDA", "AMD", "AVGO", "QCOM", "INTC"] },
  { label: "Memory",               tickers: ["MU", "WDC"] },
  { label: "Foundry",              tickers: ["TSM", "GFS"] },
  { label: "Equipment",            tickers: ["AMAT", "ASML", "LRCX", "KLAC", "ONTO"] },
  { label: "EDA / IP",             tickers: ["SNPS", "CDNS", "ARM"] },
  { label: "Packaging",            tickers: ["AMKR"] },
  { label: "Networking / Optical", tickers: ["MRVL", "NOK", "COHR", "LITE", "CIEN"] },
  { label: "Power",                tickers: ["ON", "WOLF", "MPWR", "BE"] },
  { label: "Security / AI Infra",  tickers: ["PANW", "CRWD"] },
  { label: "Cloud / Hyperscaler",  tickers: ["MSFT", "AMZN", "GOOGL", "META", "AAPL", "ORCL", "TSLA"] },
];

// Build sector lookup from definitions
function buildSectorMap(defs: typeof SEGMENT_DEFS): Record<string, string> {
  const map: Record<string, string> = {};
  for (const seg of defs) {
    for (const t of seg.tickers) map[t] = seg.label;
  }
  return map;
}

const SECTOR_COLORS: Record<string, string> = {
  "GPU / AI Chips":       "bg-violet-900/40 text-violet-300 border-violet-700/40",
  "Memory":               "bg-blue-900/40 text-blue-300 border-blue-700/40",
  "Foundry":              "bg-emerald-900/40 text-emerald-300 border-emerald-700/40",
  "Equipment":            "bg-cyan-900/40 text-cyan-300 border-cyan-700/40",
  "EDA / IP":             "bg-teal-900/40 text-teal-300 border-teal-700/40",
  "Packaging":            "bg-indigo-900/40 text-indigo-300 border-indigo-700/40",
  "Networking / Optical": "bg-rose-900/40 text-rose-300 border-rose-700/40",
  "Power":                "bg-orange-900/40 text-orange-300 border-orange-700/40",
  "Security / AI Infra":  "bg-pink-900/40 text-pink-300 border-pink-700/40",
  "Cloud / Hyperscaler":  "bg-amber-900/40 text-amber-300 border-amber-700/40",
  "Custom":               "bg-gray-700/60 text-gray-300 border-gray-600/40",
};

const REFRESH_INTERVAL_MS = 15 * 60 * 1000; // 15 minutes
const LS_CUSTOM_KEY = "ai-capex-watchlist-custom";
const LS_REMOVED_KEY = "ai-capex-watchlist-removed";

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
      <circle cx="14" cy="14" r={r} fill="none" stroke="#374151" strokeWidth="2.5" />
      <circle
        cx="14" cy="14" r={r} fill="none" stroke="#7c3aed" strokeWidth="2.5"
        strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
        transform="rotate(-90 14 14)"
      />
    </svg>
  );
}

export default function StockDashboard() {
  // ── Collapsible state ──────────────────────────────────────────────────────
  const [isOpen, setIsOpen] = useState(true);

  // ── Watchlist edit state ───────────────────────────────────────────────────
  const [customTickers, setCustomTickers] = useState<string[]>([]);
  const [removedTickers, setRemovedTickers] = useState<Set<string>>(new Set());
  const [editMode, setEditMode] = useState(false);
  const [addInput, setAddInput] = useState("");

  // Load persisted custom/removed from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const custom = JSON.parse(localStorage.getItem(LS_CUSTOM_KEY) ?? "[]") as string[];
      setCustomTickers(custom);
    } catch { /* ignore */ }
    try {
      const removed = JSON.parse(localStorage.getItem(LS_REMOVED_KEY) ?? "[]") as string[];
      setRemovedTickers(new Set(removed));
    } catch { /* ignore */ }
  }, []);

  // ── Active ticker list (canonical + custom, minus removed) ────────────────
  const allDefaultTickers = SEGMENT_DEFS.flatMap((s) => s.tickers);
  const allTickers = [
    ...allDefaultTickers.filter((t) => !removedTickers.has(t)),
    ...customTickers.filter((t) => !allDefaultTickers.includes(t) && !removedTickers.has(t)),
  ];

  const sectorMap = {
    ...buildSectorMap(SEGMENT_DEFS),
    ...Object.fromEntries(customTickers.filter((t) => !buildSectorMap(SEGMENT_DEFS)[t]).map((t) => [t, "Custom"])),
  };

  // ── Quote + fetch state ────────────────────────────────────────────────────
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
      nextRefreshAt.current = Date.now() + REFRESH_INTERVAL_MS;
      setSecondsLeft(REFRESH_INTERVAL_MS / 1000);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to fetch");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchStocks();
    nextRefreshAt.current = Date.now() + REFRESH_INTERVAL_MS;
    timerRef.current = setInterval(() => fetchStocks(), REFRESH_INTERVAL_MS);
    countdownRef.current = setInterval(() => {
      const secs = Math.max(0, Math.round((nextRefreshAt.current - Date.now()) / 1000));
      setSecondsLeft(secs);
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (countdownRef.current) clearInterval(countdownRef.current);
    };
  }, [fetchStocks]);

  // ── Edit helpers ───────────────────────────────────────────────────────────
  const handleAddTicker = () => {
    const sym = addInput.trim().toUpperCase();
    if (!sym || allTickers.includes(sym)) { setAddInput(""); return; }
    const next = [...customTickers, sym];
    setCustomTickers(next);
    setAddInput("");
    if (typeof window !== "undefined") localStorage.setItem(LS_CUSTOM_KEY, JSON.stringify(next));
  };

  const handleRemove = (ticker: string) => {
    const nextRemoved = new Set([...removedTickers, ticker]);
    setRemovedTickers(nextRemoved);
    // Also remove from custom if it was custom
    const nextCustom = customTickers.filter((t) => t !== ticker);
    setCustomTickers(nextCustom);
    if (typeof window !== "undefined") {
      localStorage.setItem(LS_REMOVED_KEY, JSON.stringify([...nextRemoved]));
      localStorage.setItem(LS_CUSTOM_KEY, JSON.stringify(nextCustom));
    }
  };

  const handleRestore = () => {
    setRemovedTickers(new Set());
    if (typeof window !== "undefined") localStorage.removeItem(LS_REMOVED_KEY);
  };

  // ── Sorting + filtering ────────────────────────────────────────────────────
  const sectors = Array.from(new Set(allTickers.map((t) => sectorMap[t] ?? "Custom")));
  const visibleQuotes = quotes.filter((q) => allTickers.includes(q.ticker));
  const sorted = [...visibleQuotes]
    .filter((q) => !filterSector || sectorMap[q.ticker] === filterSector)
    .sort((a, b) => {
      const va = a[sortField] ?? (sortDir === "desc" ? -Infinity : Infinity);
      const vb = b[sortField] ?? (sortDir === "desc" ? -Infinity : Infinity);
      return sortDir === "desc" ? vb - va : va - vb;
    });

  const toggleSort = (field: typeof sortField) => {
    if (sortField === field) setSortDir((d) => (d === "desc" ? "asc" : "desc"));
    else { setSortField(field); setSortDir("desc"); }
  };

  const SortIcon = ({ field }: { field: typeof sortField }) => {
    if (sortField !== field) return <span className="ml-1 text-gray-600">↕</span>;
    return <span className="ml-1 text-violet-400">{sortDir === "desc" ? "↓" : "↑"}</span>;
  };

  const gainers = visibleQuotes.filter((q) => (q.changePct ?? 0) > 0).length;
  const losers = visibleQuotes.filter((q) => (q.changePct ?? 0) < 0).length;

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
      {/* ── Header (always visible, click to collapse) ── */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="w-full px-4 py-3 border-b border-gray-800 flex flex-wrap items-center justify-between gap-3 text-left hover:bg-gray-800/30 transition-colors"
      >
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-white">AI Capex Supply Chain Stocks</h2>
            <svg
              className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {fetchedAt && (
            <p className="text-xs text-gray-500 mt-0.5">
              Updated {formatTime(fetchedAt)} · {allTickers.length} tickers
            </p>
          )}
        </div>

        {/* Right controls — stop propagation so clicks don't toggle collapse */}
        <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
          {visibleQuotes.length > 0 && (
            <div className="hidden sm:flex items-center gap-2 text-xs">
              <span className="text-green-400 font-medium">{gainers}↑</span>
              <span className="text-gray-600">/</span>
              <span className="text-red-400 font-medium">{losers}↓</span>
            </div>
          )}
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <CountdownRing secondsLeft={secondsLeft} />
            <span className="tabular-nums">
              {Math.floor(secondsLeft / 60)}:{String(secondsLeft % 60).padStart(2, "0")}
            </span>
          </div>
          <button
            onClick={() => fetchStocks(true)}
            disabled={refreshing}
            className="flex items-center gap-1.5 bg-violet-700 hover:bg-violet-600 disabled:opacity-50 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
          >
            <svg className={`w-3.5 h-3.5 ${refreshing ? "animate-spin" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            {refreshing ? "Refreshing…" : "Refresh"}
          </button>
        </div>
      </button>

      {/* ── Collapsible body ── */}
      {isOpen && (
        <>
          {/* Edit toolbar */}
          <div className="px-4 py-2 border-b border-gray-800 flex flex-wrap items-center gap-2">
            <button
              onClick={() => setEditMode((e) => !e)}
              className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                editMode
                  ? "bg-amber-800/50 border-amber-600 text-amber-300"
                  : "border-gray-700 text-gray-400 hover:text-gray-200"
              }`}
            >
              {editMode ? "✓ Done Editing" : "✏ Edit List"}
            </button>
            {editMode && (
              <>
                <div className="flex items-center gap-1.5">
                  <input
                    value={addInput}
                    onChange={(e) => setAddInput(e.target.value.toUpperCase())}
                    onKeyDown={(e) => { if (e.key === "Enter") handleAddTicker(); }}
                    placeholder="Add ticker…"
                    className="px-2.5 py-1 text-xs bg-gray-800 border border-gray-700 rounded-md text-white w-24 font-mono uppercase placeholder:text-gray-600"
                  />
                  <button
                    onClick={handleAddTicker}
                    disabled={!addInput.trim()}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-700 text-gray-300 hover:bg-gray-600 disabled:opacity-40 transition-colors"
                  >
                    Add
                  </button>
                </div>
                {removedTickers.size > 0 && (
                  <button
                    onClick={handleRestore}
                    className="text-xs px-2.5 py-1 rounded-full border border-gray-700 text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    Restore defaults ({removedTickers.size} hidden)
                  </button>
                )}
              </>
            )}
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
                    ? SECTOR_COLORS[s] ?? "bg-gray-700 border-gray-500 text-white"
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
              <button onClick={() => fetchStocks(true)} className="underline hover:text-red-300">
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
                    <th className="text-left px-4 py-2 font-medium hidden sm:table-cell">Sector</th>
                    <th className="text-right px-4 py-2 font-medium cursor-pointer hover:text-gray-300 select-none" onClick={() => toggleSort("price")}>
                      Price <SortIcon field="price" />
                    </th>
                    <th className="text-right px-4 py-2 font-medium cursor-pointer hover:text-gray-300 select-none" onClick={() => toggleSort("changePct")}>
                      Change <SortIcon field="changePct" />
                    </th>
                    <th className="text-right px-4 py-2 font-medium hidden md:table-cell cursor-pointer hover:text-gray-300 select-none" onClick={() => toggleSort("marketCap")}>
                      Mkt Cap <SortIcon field="marketCap" />
                    </th>
                    <th className="text-right px-4 py-2 font-medium hidden lg:table-cell cursor-pointer hover:text-gray-300 select-none" onClick={() => toggleSort("volume")}>
                      Volume <SortIcon field="volume" />
                    </th>
                    {editMode && <th className="px-4 py-2 font-medium text-red-500 text-center">Remove</th>}
                  </tr>
                </thead>
                <tbody>
                  {sorted.map((q, i) => {
                    const pos = (q.changePct ?? 0) >= 0;
                    const sector = sectorMap[q.ticker] ?? "Custom";
                    return (
                      <tr
                        key={q.ticker}
                        className={`border-b border-gray-800/50 hover:bg-gray-800/40 transition-colors ${i % 2 === 0 ? "" : "bg-gray-900/50"}`}
                      >
                        <td className="px-4 py-2.5">
                          <div className="font-semibold text-white">{q.ticker}</div>
                          {q.name && (
                            <div className="text-xs text-gray-500 truncate max-w-[140px]">{q.name}</div>
                          )}
                        </td>
                        <td className="px-4 py-2.5 hidden sm:table-cell">
                          <span className={`text-xs px-2 py-0.5 rounded-full border ${SECTOR_COLORS[sector] ?? "bg-gray-800 text-gray-400 border-gray-700"}`}>
                            {sector}
                          </span>
                        </td>
                        <td className="px-4 py-2.5 text-right tabular-nums text-white font-medium">
                          {formatPrice(q.price)}
                        </td>
                        <td className="px-4 py-2.5 text-right tabular-nums">
                          <div className={`inline-flex items-center gap-1 font-semibold ${pos ? "text-green-400" : "text-red-400"}`}>
                            <span>{pos ? "▲" : "▼"}</span>
                            <span>{formatChangePct(q.changePct)}</span>
                          </div>
                          {q.change !== null && (
                            <div className={`text-xs ${pos ? "text-green-600" : "text-red-600"}`}>
                              {q.change >= 0 ? "+" : ""}{q.change.toFixed(2)}
                            </div>
                          )}
                        </td>
                        <td className="px-4 py-2.5 text-right text-gray-400 hidden md:table-cell tabular-nums">
                          {formatMarketCap(q.marketCap)}
                        </td>
                        <td className="px-4 py-2.5 text-right text-gray-400 hidden lg:table-cell tabular-nums">
                          {formatVolume(q.volume)}
                        </td>
                        {editMode && (
                          <td className="px-4 py-2.5 text-center">
                            <button
                              onClick={() => handleRemove(q.ticker)}
                              className="w-5 h-5 rounded-full bg-red-800/60 text-red-300 hover:bg-red-700 transition-colors text-xs flex items-center justify-center mx-auto"
                              title={`Remove ${q.ticker}`}
                            >
                              ×
                            </button>
                          </td>
                        )}
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
        </>
      )}
    </div>
  );
}
