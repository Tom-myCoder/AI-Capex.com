import Link from "next/link";

const trendingStocks = [
  { ticker: "ASML", change: "+2.6%", positive: true },
  { ticker: "NVDA", change: "+1.8%", positive: true },
  { ticker: "AMAT", change: "-0.4%", positive: false },
  { ticker: "LRCX", change: "+0.9%", positive: true },
  { ticker: "KLAC", change: "+1.1%", positive: true },
];

const features = [
  {
    title: "Stock Tracking",
    description: "Monitor key semiconductor stocks.",
    icon: "\u{1F4C8}",
  },
  {
    title: "Industry Analysis",
    description: "Deep dives into capex and supply chain trends.",
    icon: "\u{1F52C}",
  },
  {
    title: "Technical Learning",
    description: "Resources for engineers and students.",
    icon: "\u2699\uFE0F",
  },
];

export default function Home() {
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

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-violet-500/50 transition-colors"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Stocks & Latest Analysis */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Trending Stocks */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">
              Trending Stocks
            </h2>
            <div className="space-y-3">
              {trendingStocks.map((stock) => (
                <div
                  key={stock.ticker}
                  className="flex items-center justify-between py-2 px-3 bg-gray-800/50 rounded-lg"
                >
                  <span className="font-medium text-white">
                    {stock.ticker}
                  </span>
                  <span
                    className={
                      stock.positive ? "text-green-400" : "text-red-400"
                    }
                  >
                    {stock.change}
                  </span>
                </div>
              ))}
            </div>
            <Link
              href="/investor"
              className="mt-6 block w-full text-center bg-violet-600 hover:bg-violet-500 text-white py-3 rounded-lg font-medium transition-colors"
            >
              View Dashboard
            </Link>
          </div>

          {/* Latest Analysis */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">
              Latest Analysis
            </h2>
            <div className="space-y-6">
              <Link href="/broadcom-avgo-q1-fy2026-earnings-research-note" className="block group">
                <h3 className="font-semibold text-white group-hover:text-violet-400 transition-colors">
                  Broadcom (AVGO) Q1 FY2026 Earnings &mdash; Research Note
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  March 4, 2026 | After-Hours Report
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  Broadcom reported record Q1 revenue of $19.3 billion, up 29%.
                </p>
              </Link>
              <Link href="/nvidia-q4-fy2026-earnings-analysis" className="block group">
                <h3 className="font-semibold text-white group-hover:text-violet-400 transition-colors">
                  NVIDIA Q4 FY2026 Earnings Analysis
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  February 25, 2026
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  Correlation to 2026 AI Infrastructure Spending Report.
                </p>
              </Link>
              <Link href="/applied-materials-q1-fy2026-earnings-report-linking-to-hyperscaler-ai-spending-surge" className="block group">
                <h3 className="font-semibold text-white group-hover:text-violet-400 transition-colors">
                  Applied Materials Q1 FY2026 Earnings: Linking to Hyperscaler AI Spending Surge
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  February 13, 2026
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  AMAT Q1 revenue $7.01B with &gt;20% 2026 semi growth implied, aligned with hyperscaler capex surge.
                </p>
              </Link>
              <Link href="/signal-palantir-earnings-implications-for-ai-capex-and-the-supply-chain" className="block group">
                <h3 className="font-semibold text-white group-hover:text-violet-400 transition-colors">
                  Palantir Earnings: Implications for AI Capex and the Supply Chain
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  February 7, 2026
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  Software-driven, targeted AI capex favoring high-end chips and selective equipment upgrades.
                </p>
              </Link>
              <Link href="/alphabets-massive-175-185b-2026-capex-guidance-a-clear-signal-of-accelerating-ai-infrastructure-demand-exceeding-industry-forecasts" className="block group">
                <h3 className="font-semibold text-white group-hover:text-violet-400 transition-colors">
                  Alphabet&apos;s Massive $175&ndash;185B 2026 Capex Guidance
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  February 6, 2026
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  A clear signal of accelerating AI infrastructure demand, exceeding industry forecasts.
                </p>
              </Link>
              <Link href="/kla-corporation-klac-earnings-call-analysis-q2-fy2026-results-and-stock-crash-2" className="block group">
                <h3 className="font-semibold text-white group-hover:text-violet-400 transition-colors">
                  KLA Corporation (KLAC) Q2 FY2026 Results and Stock Crash
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  February 3, 2026
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  Beat revenue and EPS but stock dropped ~10%. Market panic or durable slowdown?
                </p>
              </Link>
              <Link href="/capex-signal-0-what-this-notebook-is-and-how-to-read-it" className="block group">
                <h3 className="font-semibold text-white group-hover:text-violet-400 transition-colors">
                  Capex Signal #0 &mdash; What This Notebook Is (and How to Read It)
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  February 1, 2026
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  A weekly note on AI infrastructure spending and practical implications for semis.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
