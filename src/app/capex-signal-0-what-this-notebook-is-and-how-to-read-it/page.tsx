import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capex Signal #0 — What This Notebook Is (and How to Read It) — AI Capex",
};

export default function CapexSignal0Page() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      {/* Article Header */}
      <div className="mb-10">
        <p className="text-violet-400 text-sm uppercase tracking-wider mb-3">
          analysis
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
          Capex Signal #0 — What This Notebook Is (and How to Read It)
        </h1>
        <div>
          <p className="text-white font-medium">Capex Signal</p>
          <p className="text-gray-500 text-sm mt-1">01 Feb 2026 · 1 min read</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-800 mb-12" />

      {/* Article Body */}
      <article className="space-y-6">

        {/* Intro */}
        <p className="text-gray-300 leading-relaxed">
          Capex Signal is a weekly note on AI infrastructure spending and the practical implications for semis. I&apos;m starting where signals are cleanest: semiconductor equipment (WFE / semicap). Over time, I&apos;ll expand outward to AI chips and memory/HBM, because that&apos;s where capex becomes revenue.
        </p>

        {/* The Core Idea */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Core Idea</h2>
        <p className="text-gray-300 leading-relaxed">
          In this sector, the market gets loud fast. To stay grounded, I use a simple hierarchy:
        </p>

        <ol className="mt-4 ml-6 space-y-3 text-gray-300 leading-relaxed">
          <li className="flex gap-3">
            <span className="font-semibold text-white shrink-0">1.</span>
            <span><span className="font-semibold text-white">Constraint</span> (what is actually limiting output?)</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-white shrink-0">2.</span>
            <span><span className="font-semibold text-white">Intensity</span> (how much more equipment/process complexity is required?)</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-white shrink-0">3.</span>
            <span><span className="font-semibold text-white">Durability</span> (is it a one-quarter timing issue or a multi-year slope?)</span>
          </li>
        </ol>

        <p className="text-gray-300 leading-relaxed mt-6">
          Most &quot;AI capex&quot; arguments break because they skip step (1).
        </p>

        {/* What You'll Get Each Week */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">What You&apos;ll Get Each Week</h2>
        <p className="text-gray-300 leading-relaxed">
          Each weekly post has two layers:
        </p>

        <div className="mt-6 space-y-6">
          <div>
            <p className="font-semibold text-white mb-3">Free Layer (investor-friendly):</p>
            <ul className="ml-6 space-y-2 text-gray-300 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-violet-400 mt-1 shrink-0">•</span>
                <span>8–12 bullets: what changed + why it matters</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400 mt-1 shrink-0">•</span>
                <span>Short &quot;so what&quot;: how I&apos;d interpret it and what to watch next</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white mb-3">Premium Layer (technical depth):</p>
            <ul className="ml-6 space-y-2 text-gray-300 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-violet-400 mt-1 shrink-0">•</span>
                <span>The mechanism in plain language (process/physics intuition, not jargon for its own sake)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400 mt-1 shrink-0">•</span>
                <span>A durability check: base/bull/bear framing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400 mt-1 shrink-0">•</span>
                <span>A short &quot;what would change my mind&quot; trigger list</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400 mt-1 shrink-0">•</span>
                <span>Sources / receipts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400 mt-1 shrink-0">•</span>
                <span>A small options/trading education corner (general, risk-defined; not personalized advice)</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed mt-6">
          For now, I&apos;ll publish primarily free while the format gels. If the premium layer proves useful and readers ask for it, I&apos;ll turn on paid access gradually.
        </p>

        {/* How to Use This */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">How to Use This</h2>

        <div className="space-y-4 mt-6">
          <div>
            <p className="font-semibold text-white mb-2">If you&apos;re a long-term investor:</p>
            <p className="text-gray-300 leading-relaxed ml-4">
              treat this as a framework and a watchlist of triggers.
            </p>
          </div>

          <div>
            <p className="font-semibold text-white mb-2">If you trade around earnings:</p>
            <p className="text-gray-300 leading-relaxed ml-4">
              treat it as a way to separate real cycle changes from one-off sentiment moves.
            </p>
          </div>
        </div>

        {/* Scope + Rules */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Scope + Rules</h2>

        <ul className="mt-6 space-y-3 text-gray-300 leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="text-violet-400 mt-1 shrink-0">•</span>
            <span><span className="font-semibold text-white">Focus:</span> semicap + semis (AMAT/LRCX/KLAC/ASML + NVDA/TSMC/AMD + memory/HBM) and selected AI apps (e.g., PLTR).</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-violet-400 mt-1 shrink-0">•</span>
            <span><span className="font-semibold text-white">No crypto.</span></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-violet-400 mt-1 shrink-0">•</span>
            <span><span className="font-semibold text-white">Not investment advice.</span></span>
          </li>
        </ul>

        <p className="text-gray-300 leading-relaxed mt-8">
          If you want a starting point, begin with the most recent weekly post, then use the archive to follow themes like AI capex, packaging intensity, and memory/HBM constraints.
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
