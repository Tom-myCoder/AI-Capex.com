import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KLA Corporation (KLAC) Earnings Call Analysis: Q2 FY2026 Results and Stock Crash — AI Capex",
};

export default function KLACEarningsPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      {/* Article Header */}
      <div className="mb-10">
        <p className="text-violet-400 text-sm uppercase tracking-wider mb-3">
          analysis
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
          KLA Corporation (KLAC) Earnings Call Analysis: Q2 FY2026 Results and Stock Crash
        </h1>
        <div>
          <p className="text-white font-medium">Capex Signal</p>
          <p className="text-gray-500 text-sm mt-1">03 Feb 2026 · 1 min read</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-800 mb-12" />

      {/* Article Body */}
      <article className="space-y-6">

        {/* Subtitle */}
        <p className="text-white font-semibold text-lg">
          January 29, 2026 | Earnings Analysis
        </p>

        {/* Opening */}
        <p className="text-gray-300 leading-relaxed">
          KLA Corporation (KLAC), a leader in semiconductor process control and metrology equipment, reported fiscal Q2 FY2026 results on Jan 29, 2026. Despite beating revenue and EPS estimates, the stock dropped <span className="font-semibold text-white">~10% the following day</span> — a sentiment-driven selloff after a <span className="font-semibold text-white">140% prior-year gain</span>. Below is a concise analysis of the call, guidance, and whether the move signals a durable slowdown or a temporary market reaction.
        </p>

        {/* What Happened on the Call */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">What Happened on the Call</h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          A simple results summary:
        </p>

        {/* Results Table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-900 border border-gray-800 rounded-lg overflow-hidden text-sm text-gray-300">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-4 py-3 text-left font-semibold text-white">Metric</th>
                <th className="px-4 py-3 text-left font-semibold text-white">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3">Revenue</td>
                <td className="px-4 py-3"><span className="font-semibold text-white">$3.0B</span> (up 7.1% YoY) — beat midpoint guidance</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3">Non-GAAP EPS</td>
                <td className="px-4 py-3"><span className="font-semibold text-white">$8.85</span> — beat expectations</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Management Tone</td>
                <td className="px-4 py-3">Bullish on multi-year AI-driven demand but cautious on H1 2026 due to component shortages, tariff-driven cost pressures, and DRAM-related margin headwinds</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Why the Stock Dropped */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Why the Stock Dropped</h2>

        <ul className="space-y-3">
          <li className="text-gray-300 leading-relaxed flex items-start gap-3">
            <span className="text-violet-400 mt-1 shrink-0">&#8250;</span>
            <span><span className="font-semibold text-white">Wide guidance ranges</span> and cautious commentary created uncertainty despite the beats.</span>
          </li>
          <li className="text-gray-300 leading-relaxed flex items-start gap-3">
            <span className="text-violet-400 mt-1 shrink-0">&#8250;</span>
            <span><span className="font-semibold text-white">Supply constraints and margin pressure</span> (75–100 bps) from DRAM/cost increases.</span>
          </li>
          <li className="text-gray-300 leading-relaxed flex items-start gap-3">
            <span className="text-violet-400 mt-1 shrink-0">&#8250;</span>
            <span><span className="font-semibold text-white">Profit-taking</span> after a massive prior run-up; market priced perfection.</span>
          </li>
        </ul>

        {/* Bottom Line Box */}
        <div className="mt-8 p-5 bg-gray-900 border border-gray-800 rounded-lg">
          <p className="text-white font-semibold mb-2">Bottom Line</p>
          <p className="text-gray-300 leading-relaxed text-sm">
            This looks like market panic on a mixed set of signals, not the end of the AI capex cycle. KLAC&apos;s fundamentals remain strong; monitor follow-on commentary from peers and order/backlog updates for confirmation. The stock decline represents a capitulation event driven by momentum reversal and compressed multiple expectations, not deteriorating underlying demand.
          </p>
        </div>

      </article>

      {/* Disclaimer */}
      <div className="mt-16 pt-8 border-t border-gray-800">
        <p className="text-gray-500 text-sm italic">
          This research note is provided for informational purposes only and does not constitute investment advice, a solicitation, or an offer to buy or sell any security. The information contained herein is based on sources believed to be reliable but is not guaranteed as to accuracy or completeness. Past performance is not indicative of future results. AI Capex and its contributors may hold positions in securities discussed. Readers should conduct their own due diligence and consult a qualified financial adviser before making any investment decisions.
        </p>
      </div>
    </main>
  );
}
