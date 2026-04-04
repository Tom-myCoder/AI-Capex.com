import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Applied Materials Q1 FY2026 Earnings — AI Capex",
};

export default function AppliedMaterialsQ1FY2026EarningsPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      {/* Article Header */}
      <div className="mb-10">
        <p className="text-violet-400 text-sm uppercase tracking-wider mb-3">
          analysis
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
          Applied Materials Q1 FY2026 Earnings Report: Linking to Hyperscaler AI Spending Surge
        </h1>
        <div>
          <p className="text-white font-medium">Capex Signal</p>
          <p className="text-gray-500 text-sm mt-1">13 Feb 2026 · 2 min read</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-800 mb-12" />

      {/* Article Body */}
      <article className="space-y-6">

        {/* Overview */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Overview</h2>
        <p className="text-gray-300 leading-relaxed">
          Applied Materials (AMAT) reported Q1 FY2026 results on February 12, 2026, delivering solid performance amid the AI boom. Revenue was{" "}
          <span className="font-semibold text-white">$7.01 billion</span> (down 2% YoY but at the high end of guidance), with non-GAAP EPS of{" "}
          <span className="font-semibold text-white">$2.38</span> (flat YoY) and gross margin of{" "}
          <span className="font-semibold text-white">49.1%</span> (up 20 bps). GAAP EPS rose{" "}
          <span className="font-semibold text-white">75% to $2.54</span>, net income{" "}
          <span className="font-semibold text-white">$2.026 billion</span>, and operating cash flow{" "}
          <span className="font-semibold text-white">$1.69 billion</span> (+61% YoY).
        </p>

        {/* Key Financial Highlights and Call Insights */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Key Financial Highlights and Call Insights</h2>

        <div className="space-y-6">
          <div>
            <p className="font-semibold text-white mb-2">Segment Performance</p>
            <p className="text-gray-300 leading-relaxed">
              Semiconductor Systems revenue <span className="font-semibold text-white">$5.14 billion</span> (down 8% YoY); Applied Global Services{" "}
              <span className="font-semibold text-white">$1.56 billion</span> (up 15%, record spares); Display{" "}
              <span className="font-semibold text-white">$304 million</span> (up 59%). CEO Gary Dickerson noted resilience in AI/logic, with services providing stability.
            </p>
          </div>

          <div>
            <p className="font-semibold text-white mb-2">Outlook and WFE Guidance</p>
            <p className="text-gray-300 leading-relaxed">
              Q2 FY2026 revenue <span className="font-semibold text-white">$7.65 billion ±$500 million</span> (up 9% QoQ midpoint), non-GAAP EPS{" "}
              <span className="font-semibold text-white">$2.64 ±$0.20</span>. For full-year 2026, AMAT implied{" "}
              <span className="font-semibold text-white">&gt;20% growth in semi equipment spending</span>, driven by AI infrastructure and advanced nodes (e.g., gate-all-around, backside power delivery). Dickerson projected WFE at{" "}
              <span className="font-semibold text-white">~$124–134 billion</span>, aligning with mid-teens growth from 2025's ~$110 billion, but emphasized H2 acceleration.
            </p>
          </div>

          <div>
            <p className="font-semibold text-white mb-2">Strategic Focus</p>
            <p className="text-gray-300 leading-relaxed">
              AMAT highlighted AI as a multi-year tailwind, with services/spares at record levels. CFO Brice Hill noted China revenue stabilization but ongoing export curbs (~$600M FY2026 impact). R&D emphasis on AI enablers like materials engineering.
            </p>
          </div>
        </div>

        {/* Linking to Previous Hyperscaler Spending */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Linking to Previous Hyperscaler Spending</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          AMAT&apos;s outlook directly ties to recent hyperscaler capex announcements, which signal exploding AI data-center demand and validate the equipment supercycle. Total hyperscaler 2026 capex ~<span className="font-semibold text-white">$670–720 billion</span> (up 80–90% YoY) far exceeds prior forecasts, driving WFE toward AMAT&apos;s upper end.
        </p>

        {/* Hyperscaler Capex Table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-900 border border-gray-800 rounded-lg overflow-hidden text-sm text-gray-300">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-4 py-3 text-left font-semibold text-white">Company</th>
                <th className="px-4 py-3 text-left font-semibold text-white">2026 Capex</th>
                <th className="px-4 py-3 text-left font-semibold text-white">YoY Growth</th>
                <th className="px-4 py-3 text-left font-semibold text-white">Key Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3">Alphabet/Google</td>
                <td className="px-4 py-3">$175–185B</td>
                <td className="px-4 py-3">+97%</td>
                <td className="px-4 py-3">~60% servers/AI compute. Pichai&apos;s "structural AI shift" implies massive GPU/HBM needs</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3">Meta</td>
                <td className="px-4 py-3">$115–135B</td>
                <td className="px-4 py-3">+60–87%</td>
                <td className="px-4 py-3">Focused on AI infrastructure/Llama. Supports AMAT&apos;s H2 acceleration</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3">Microsoft</td>
                <td className="px-4 py-3">~$120B+</td>
                <td className="px-4 py-3">+50%</td>
                <td className="px-4 py-3">Azure AI-driven. Nadella&apos;s backlog comments reinforce AMAT&apos;s &gt;20% semi growth</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Amazon</td>
                <td className="px-4 py-3">~$200B</td>
                <td className="px-4 py-3">+60%</td>
                <td className="px-4 py-3">AWS/AI focused. Jassy&apos;s power doubling plans amplify AMAT&apos;s outlook</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-300 leading-relaxed mt-6">
          AMAT&apos;s <span className="font-semibold text-white">$124–134B WFE</span> aligns with this hyperscaler surge (exceeding KLAC&apos;s $119–122B but below LRCX&apos;s $135B), as ~50–60% of capex flows to chips/servers, requiring advanced tools. This exceeds earlier mid-teens WFE growth, confirming hotter AI demand.
        </p>

        {/* Implications and Risks */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Implications and Risks</h2>
        <p className="text-gray-300 leading-relaxed">
          The linkage validates sustained capex, potentially pushing WFE to <span className="font-semibold text-white">$135B+</span> if H2 ramps materialize. For AMAT, this means <span className="font-semibold text-white">10–20% revenue growth</span> (consensus $30–32B 2026), but risks include China curbs ($600M hit) and supply bottlenecks (e.g., DRAM prices up 40–50%). Overall, hyperscaler spend exceeds predictions, benefiting the chain.
        </p>

        {/* Connection to Portfolio */}
        <div className="mt-8 p-5 bg-gray-900 border border-gray-800 rounded-lg">
          <p className="text-white font-semibold mb-2">Brief Summary</p>
          <p className="text-gray-300 leading-relaxed text-sm">
            AMAT&apos;s Q1 FY2026 revenue $7.01B (down 2% YoY) beat guidance, with Q2 $7.65B ±$500M and &gt;20% 2026 semi growth implied. This aligns with/exceeds hyperscaler capex (Google $180B, Meta $125B, Microsoft $120B, Amazon $200B total ~$670–720B), signaling hotter AI-driven WFE (~$124–134B).
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
