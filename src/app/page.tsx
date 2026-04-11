"use client";

import Link from "next/link";
import { useState } from "react";
import StockDashboard from "@/components/StockDashboard";

const features = [
  {
    title: "Stock Tracking",
    description: "Monitor key semiconductor and AI infrastructure stocks across 10 supply chain segments.",
    icon: "📈",
    href: "#stock-dashboard",
  },
  {
    title: "Industry Analysis",
    description: "Deep dives into capex cycles, earnings signals, and supply chain trends.",
    icon: "🔬",
    href: "#latest-analysis",
  },
  {
    title: "Technical Learning",
    description: "Resources for engineers and students entering semiconductor and AI hardware.",
    icon: "⚙️",
    href: "/about",
  },
  {
    title: "Web Tools for Learning / Trading",
    description: "Curated tools for options trading, AI research, semiconductor data, and market analysis.",
    icon: "🛠️",
    href: "#web-tools",
  },
];

const webTools = [
  { name: "Options Tracker", url: "https://options.ai-capex.com", desc: "Wheel strategy portfolio tracker — track CSPs and covered calls" },
  { name: "EDGAR Full-Text Search", url: "https://efts.sec.gov/LATEST/search-index?q=%22advanced+packaging%22&dateRange=custom&startdt=2024-01-01&forms=10-K,10-Q", desc: "SEC filings search — find capex disclosures and supply chain language" },
  { name: "SEMI.org Industry Data", url: "https://www.semi.org/en/products-services/market-data", desc: "Equipment billings, fab utilization, and global semiconductor market data" },
  { name: "TechInsights", url: "https://www.techinsights.com", desc: "Die teardowns, process node analysis, and IP landscape" },
  { name: "SemiAnalysis", url: "https://semianalysis.com", desc: "Deep technical analysis on AI chips, HBM, and advanced packaging" },
  { name: "Barchart Options", url: "https://www.barchart.com/options", desc: "Options flow, IV rank, and screener for wheel strategy candidates" },
  { name: "Finviz Screener", url: "https://finviz.com/screener.ashx?v=111&f=ind_semiconductors", desc: "Semiconductor stock screener with fundamentals and technicals" },
  { name: "YCHARTS Capex", url: "https://ycharts.com/indicators/us_semiconductor_capex", desc: "Semiconductor capex spending trends and historical data" },
  { name: "ASML Investor Portal", url: "https://www.asml.com/en/investors", desc: "Litho equipment orders, backlog, and technology roadmap" },
  { name: "IC Insights", url: "https://www.icinsights.com", desc: "Semiconductor market forecasts, ranking reports, and fab capex tracking" },
];

const analyses = [
  { href: "/capex-signal-weekly-april-11-2026", title: "Capex Signal: April 11, 2026 — TSMC Blows Out Q1, Meta Doubles Down on CoreWeave, Tariff Fog Thickens", date: "April 11, 2026", summary: "TSMC $35.7B (+35%), Micron $23.9B (+196%) with $33.5B Q3 guide, Meta commits $21B to CoreWeave, ASML reports Tuesday with €39B backlog. Section 232 tariff investigation scope and the policy whiplash risk." },
  { href: "/capex-signal-tariff-shock-april-2026-semiconductors", title: "Capex Signal: Q1 2026 Earnings Sweep — Memory Supercycle, Custom Silicon, and the Tariff Overhang", date: "April 4, 2026", summary: "Micron $23.9B (+196%), Marvell $11B FY27 target, ASML bookings 2x estimates, and the real 2026 trade policy overhang." },
  { href: "/capex-signal-the-supercycle-stress-test-earnings-wars-and-efficiency-shocks", title: "The Supercycle Stress Test — Earnings, Wars, and Efficiency Shocks", date: "April 4, 2026", summary: "NVIDIA $68B, Micron 196% growth, Google TurboQuant scare, Iran war supply chain threats. Is the supercycle over?" },
  { href: "/broadcom-avgo-q1-fy2026-earnings-research-note", title: "Broadcom (AVGO) Q1 FY2026 Earnings — Research Note", date: "March 4, 2026 | After-Hours Report", summary: "Broadcom reported record Q1 revenue of $19.3 billion, up 29%." },
  { href: "/nvidia-q4-fy2026-earnings-analysis", title: "NVIDIA Q4 FY2026 Earnings Analysis", date: "February 25, 2026", summary: "Correlation to 2026 AI Infrastructure Spending Report." },
  { href: "/applied-materials-q1-fy2026-earnings-report-linking-to-hyperscaler-ai-spending-surge", title: "Applied Materials Q1 FY2026 Earnings: Linking to Hyperscaler AI Spending Surge", date: "February 13, 2026", summary: "AMAT Q1 revenue $7.01B with >20% 2026 semi growth implied, aligned with hyperscaler capex surge." },
  { href: "/signal-palantir-earnings-implications-for-ai-capex-and-the-supply-chain", title: "Palantir Earnings: Implications for AI Capex and the Supply Chain", date: "February 7, 2026", summary: "Software-driven, targeted AI capex favoring high-end chips and selective equipment upgrades." },
  { href: "/alphabets-massive-175-185b-2026-capex-guidance-a-clear-signal-of-accelerating-ai-infrastructure-demand-exceeding-industry-forecasts", title: "Alphabet's Massive $175–185B 2026 Capex Guidance", date: "February 6, 2026", summary: "A clear signal of accelerating AI infrastructure demand, exceeding industry forecasts." },
  { href: "/kla-corporation-klac-earnings-call-analysis-q2-fy2026-results-and-stock-crash-2", title: "KLA Corporation (KLAC) Q2 FY2026 Results and Stock Crash", date: "February 3, 2026", summary: "Beat revenue and EPS but stock dropped ~10%. Market panic or durable slowdown?" },
  { href: "/capex-signal-0-what-this-notebook-is-and-how-to-read-it", title: "Capex Signal #0 — What This Notebook Is (and How to Read It)", date: "February 1, 2026", summary: "A weekly note on AI infrastructure spending and practical implications for semis." },
];

export default function Home() {
  const [analysisOpen, setAnalysisOpen] = useState(true);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/50 via-gray-950 to-gray-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Insights on Semiconductor Investment
            </h1>
            <p className="mt-6 text-lg text-gray-400 max-w-xl">
              Analyze trends, track key stocks, and learn from industry experts.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="/about"
                className="bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards — tight gap after hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <a
              key={feature.title}
              href={feature.href}
              className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-violet-500/50 transition-colors group"
            >
              <div className="text-2xl mb-2">{feature.icon}</div>
              <h3 className="text-base font-semibold text-white group-hover:text-violet-300 transition-colors">
                {feature.title}
              </h3>
              <p className="mt-1.5 text-sm text-gray-400">
                {feature.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Stock Dashboard */}
      <section id="stock-dashboard" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <StockDashboard />
      </section>

      {/* Latest Analysis — collapsible */}
      <section id="latest-analysis" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
          <button
            onClick={() => setAnalysisOpen((o) => !o)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800/30 transition-colors"
          >
            <div>
              <h2 className="text-xl font-bold text-white">Latest Analysis</h2>
              <p className="text-xs text-gray-500 mt-0.5">{analyses.length} articles · click to {analysisOpen ? "collapse" : "expand"}</p>
            </div>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${analysisOpen ? "rotate-180" : ""}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {analysisOpen && (
            <div className="px-6 pb-6 space-y-5 border-t border-gray-800 pt-5">
              {analyses.map((a) => (
                <Link key={a.href} href={a.href} className="block group">
                  <h3 className="font-semibold text-white group-hover:text-violet-400 transition-colors">
                    {a.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">{a.date}</p>
                  <p className="mt-1.5 text-sm text-gray-400">{a.summary}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Web Tools */}
      <section id="web-tools" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-800">
            <h2 className="text-xl font-bold text-white">Web Tools for Learning / Trading</h2>
            <p className="text-xs text-gray-500 mt-0.5">Curated resources for semiconductor research and options trading</p>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {webTools.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-1 p-4 bg-gray-800/50 border border-gray-700/60 rounded-lg hover:border-violet-500/50 hover:bg-gray-800 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                    {tool.name}
                  </span>
                  <svg className="w-3.5 h-3.5 text-gray-600 group-hover:text-violet-400 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{tool.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
