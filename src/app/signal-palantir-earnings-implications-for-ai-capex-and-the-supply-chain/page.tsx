import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Palantir Earnings: Implications for AI Capex and the Supply Chain — AI Capex",
};

export default function PalantirEarningsPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      {/* Article Header */}
      <div className="mb-10">
        <p className="text-violet-400 text-sm uppercase tracking-wider mb-3">
          analysis
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
          Palantir Earnings: Implications for AI Capex and the Supply Chain
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

        {/* Lede */}
        <p className="text-gray-300 leading-relaxed text-lg">
          Palantir's earnings call signals software-driven, targeted AI capex that favors high-end chips and selective equipment upgrades.
        </p>

        {/* Main Body Paragraph */}
        <p className="text-gray-300 leading-relaxed">
          Palantir emphasized strong enterprise AI spending focused on software, cloud infrastructure, and targeted on-prem deployments rather than broad, immediate hardware rollouts. That pattern suggests near-term AI capex will be concentrated where software and specialized compute deliver the most value — supporting continued demand for high-performance accelerators (NVIDIA-class H100/H200) and the fabs that produce them (TSMC).
        </p>

        <p className="text-gray-300 leading-relaxed">
          For the equipment and supply chain, buyers are more likely to prioritize yield improvements, precision upgrades, and delivery reliability over large-volume new capacity builds.
        </p>

        {/* So What */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">So What</h2>
        <p className="text-gray-300 leading-relaxed">
          Expect chipmakers and leading fabs to capture disproportionate near-term benefit from AI workloads. Equipment orders will skew toward high-value upgrades, refurbishments, and precision tools that improve yield and throughput rather than mass new-system purchases. Supply-chain focus will shift to component availability, logistics, and aftermarket services.
        </p>

        {/* Watch */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Watch</h2>
        <p className="text-gray-300 leading-relaxed">
          Palantir's customer deployment cadence (on-prem vs cloud), NVIDIA backlog and guidance, TSMC capacity allocation notices, and announcements of multi-site RFQs that emphasize yield and throughput.
        </p>

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
