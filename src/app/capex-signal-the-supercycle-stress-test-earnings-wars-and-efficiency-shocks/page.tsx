import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Capex Signal: The Supercycle Stress Test — Earnings, Wars, and Efficiency Shocks — AI Capex",
};

export default function CapexSignalSupercycleStressTestPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      {/* Article Header */}
      <div className="mb-10">
        <p className="text-violet-400 text-sm uppercase tracking-wider mb-3">
          analysis
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
          Capex Signal: The Supercycle Stress Test &mdash; Earnings, Wars, and
          Efficiency Shocks
        </h1>
        <div>
          <p className="text-white font-medium">Capex Signal</p>
          <p className="text-gray-500 text-sm mt-1">
            04 Apr 2026 &middot; 8 min read
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-800 mb-12" />

      {/* Article Body */}
      <article className="space-y-6">
        {/* Personal Note */}
        <div className="p-5 bg-violet-950/30 border border-violet-800/40 rounded-lg">
          <p className="text-gray-300 leading-relaxed">
            First &mdash; I owe you an update. Life got busy. Between the day
            job, the options book, and the general chaos of Q1 earnings season, I
            let the notebook go quiet for a month. That ends now. There&apos;s
            been too much happening in the AI capex world to stay silent, and
            honestly, the last five weeks have been the most interesting stretch
            since I started writing this. Let&apos;s get into it.
          </p>
        </div>

        {/* Overview */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">
          The Big Picture: What Happened Since March 4
        </h2>
        <p className="text-gray-300 leading-relaxed">
          When I last wrote &mdash; the Broadcom Q1 FY2026 note &mdash; the
          narrative was clean: hyperscaler capex was accelerating, custom silicon
          was gaining share, and the equipment cycle was heating up. A month
          later, the picture is messier but arguably more interesting. We got
          blowout earnings across the board, stocks that sold off anyway, a
          memory compression scare courtesy of Google, and a real shooting war in
          the Middle East threatening the physical supply chain. The supercycle
          isn&apos;t over &mdash; but it&apos;s being{" "}
          <span className="text-white font-semibold">stress-tested</span>.
        </p>

        {/* NVIDIA Section */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">
          NVIDIA: $68B Quarter, Stock Down 20% From Peak
        </h2>
        <p className="text-gray-300 leading-relaxed">
          NVIDIA posted Q4 FY2026 revenue of{" "}
          <span className="font-semibold text-white">$68.1 billion</span> &mdash;
          up 73% year-over-year &mdash; with full-year FY2026 revenue hitting{" "}
          <span className="font-semibold text-white">$215.9 billion</span> (up
          65%). Guided Q1 FY2027 to{" "}
          <span className="font-semibold text-white">$78 billion &plusmn;2%</span>
          . Gross margins guided to ~75%. By any normal standard, these are
          staggering numbers.
        </p>
        <p className="text-gray-300 leading-relaxed">
          The stock dropped ~5.5% on the report and has continued sliding. As of
          this writing, NVDA sits around{" "}
          <span className="font-semibold text-white">$177</span>, down roughly
          20% from its all-time high.
        </p>
        <p className="text-gray-300 leading-relaxed">
          So what gives? Three things:
        </p>
        <ul className="mt-4 space-y-3">
          <li className="text-gray-300 leading-relaxed flex items-start gap-2">
            <span className="text-violet-400 mt-1 shrink-0">&#8250;</span>
            <span>
              <span className="font-semibold text-white">
                Gross margin compression fears.
              </span>{" "}
              The inclusion of stock-based compensation in non-GAAP metrics
              starting Q1 FY2027 spooked some analysts. The ~75% non-GAAP margin
              guide is still excellent, but the market had priced in perfection.
            </span>
          </li>
          <li className="text-gray-300 leading-relaxed flex items-start gap-2">
            <span className="text-violet-400 mt-1 shrink-0">&#8250;</span>
            <span>
              <span className="font-semibold text-white">
                Geopolitical overhang.
              </span>{" "}
              The Iran conflict is acting as a constant drag on risk appetite for
              anything touching global supply chains. More on this below.
            </span>
          </li>
          <li className="text-gray-300 leading-relaxed flex items-start gap-2">
            <span className="text-violet-400 mt-1 shrink-0">&#8250;</span>
            <span>
              <span className="font-semibold text-white">
                Valuation gravity.
              </span>{" "}
              After a 140%+ run from mid-2024, the stock needed to digest gains.
              The market is asking: &ldquo;at $215B in annual revenue, how much
              upside is left?&rdquo; The answer is probably a lot &mdash; but
              it&apos;s harder to model when geopolitics and efficiency gains
              create noise.
            </span>
          </li>
        </ul>
        <p className="text-gray-300 leading-relaxed mt-4">
          My read: NVIDIA&apos;s fundamentals are{" "}
          <span className="font-semibold text-white">not</span> the problem.
          This is a multiple compression event on top of macro fear, not a
          demand inflection. The $78B Q1 guide alone tells you the spending
          pipeline is intact.
        </p>

        {/* Micron Section */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">
          Micron: 196% Revenue Growth, Stock Dumps 20%+ &mdash; The &ldquo;Earnings
          Paradox&rdquo;
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Micron&apos;s Q2 FY2026 might be the single most absurd
          beat-and-dump I&apos;ve seen in semicap. Revenue:{" "}
          <span className="font-semibold text-white">$23.86 billion</span> (up
          196% YoY). EPS:{" "}
          <span className="font-semibold text-white">$12.20</span> (vs. $9.30
          consensus &mdash; a 31% beat). Gross margins:{" "}
          <span className="font-semibold text-white">74.9%</span>. HBM4 and
          HBM3E contracts sold out through the rest of the calendar year.
        </p>
        <p className="text-gray-300 leading-relaxed">
          The stock dropped ~6% post-earnings and fell 20%+ from highs over the
          following sessions. Why?
        </p>
        <ul className="mt-4 space-y-3">
          <li className="text-gray-300 leading-relaxed flex items-start gap-2">
            <span className="text-red-400 mt-1 shrink-0">&#8250;</span>
            <span>
              <span className="font-semibold text-white">
                Capex guidance spooked the market.
              </span>{" "}
              Micron raised FY2026 capex to over $25B (from $20B), with a
              &ldquo;meaningful step up&rdquo; of $10B+ in 2027. Investors saw
              margin dilution risk.
            </span>
          </li>
          <li className="text-gray-300 leading-relaxed flex items-start gap-2">
            <span className="text-red-400 mt-1 shrink-0">&#8250;</span>
            <span>
              <span className="font-semibold text-white">
                Google&apos;s TurboQuant &mdash; the efficiency scare.
              </span>{" "}
              On March 24, Google Research published TurboQuant, a compression
              algorithm that reduces LLM KV-cache memory footprint by up to 6x
              with no accuracy loss. The market immediately asked: &ldquo;does
              this kill HBM demand?&rdquo; Micron lost $25B+ in market cap in 48
              hours.
            </span>
          </li>
          <li className="text-gray-300 leading-relaxed flex items-start gap-2">
            <span className="text-red-400 mt-1 shrink-0">&#8250;</span>
            <span>
              <span className="font-semibold text-white">
                Peak-margin anxiety.
              </span>{" "}
              At 74.9% gross margins, the market decided there&apos;s nowhere to
              go but down. Classic semiconductor cyclical thinking &mdash; even
              though the structural demand story here is fundamentally different
              from prior memory cycles.
            </span>
          </li>
        </ul>

        {/* TurboQuant callout */}
        <div className="p-5 bg-gray-900 border border-gray-800 rounded-lg mt-6">
          <p className="text-white font-semibold mb-2">
            My take on TurboQuant
          </p>
          <p className="text-gray-300 leading-relaxed text-sm">
            The market overreacted. TurboQuant targets{" "}
            <span className="text-white font-semibold">
              inference KV-cache only
            </span>{" "}
            &mdash; it doesn&apos;t touch training memory, which is where the
            HBM demand supercycle lives. Training workloads are capacity-bound,
            not efficiency-bound. Every major hyperscaler is still building
            multi-gigawatt clusters that need enormous HBM stacks. TurboQuant is
            real and useful, but it&apos;s an inference optimization, not a
            demand destroyer. If anything, making inference cheaper increases
            deployment, which eventually drives{" "}
            <span className="text-white font-semibold">more</span> training.
            Jevons paradox applies here.
          </p>
        </div>

        {/* Microsoft and Meta */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">
          Microsoft &amp; Meta: Same Spending, Opposite Reactions
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Microsoft posted Q1 FY2026 revenue of{" "}
          <span className="font-semibold text-white">$77.7B</span> (+18% YoY),
          with Azure growing 40%. But the headline was capex:{" "}
          <span className="font-semibold text-white">~$35B in the quarter</span>{" "}
          (+74% YoY), with plans to increase AI capacity by 80% and nearly
          double the datacenter footprint over two years. The stock dipped
          &mdash; investors questioned whether the ROI timeline justifies the
          spend.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Meta, meanwhile, reported{" "}
          <span className="font-semibold text-white">$59.9B revenue</span>{" "}
          (beating $58.4B consensus) with EPS of $8.88 (vs. $8.24 expected) and
          the stock{" "}
          <span className="font-semibold text-white">surged 10%+</span>. Full-year
          2026 capex consensus sits near $110B. The difference? Meta showed
          clear evidence that AI spending is flowing to the bottom line.
          Microsoft hasn&apos;t made that case as cleanly yet.
        </p>
        <p className="text-gray-300 leading-relaxed">
          For the capex thesis, both outcomes are bullish. The money is being
          spent either way. But the market is starting to differentiate between
          hyperscalers that can{" "}
          <span className="text-white font-semibold">monetize</span> AI
          infrastructure and those still in &ldquo;build it and they will
          come&rdquo; mode.
        </p>

        {/* Earnings Scorecard Table */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">
          Q1 2026 Earnings Scorecard
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-900 border border-gray-800 rounded-lg overflow-hidden text-sm text-gray-300">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-4 py-3 text-left font-semibold text-white">
                  Company
                </th>
                <th className="px-4 py-3 text-left font-semibold text-white">
                  Revenue
                </th>
                <th className="px-4 py-3 text-left font-semibold text-white">
                  YoY Growth
                </th>
                <th className="px-4 py-3 text-left font-semibold text-white">
                  Key Signal
                </th>
                <th className="px-4 py-3 text-left font-semibold text-white">
                  Stock Reaction
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3 font-semibold text-white">
                  NVIDIA (Q4 FY26)
                </td>
                <td className="px-4 py-3">$68.1B</td>
                <td className="px-4 py-3">+73%</td>
                <td className="px-4 py-3">Q1 FY27 guide $78B</td>
                <td className="px-4 py-3 text-red-400 font-medium">
                  -5.5%, -20% from peak
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3 font-semibold text-white">
                  Micron (Q2 FY26)
                </td>
                <td className="px-4 py-3">$23.86B</td>
                <td className="px-4 py-3">+196%</td>
                <td className="px-4 py-3">
                  HBM sold out, capex raised to $25B+
                </td>
                <td className="px-4 py-3 text-red-400 font-medium">
                  -6%, then -20% over 6 sessions
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3 font-semibold text-white">
                  Microsoft (Q1 FY26)
                </td>
                <td className="px-4 py-3">$77.7B</td>
                <td className="px-4 py-3">+18%</td>
                <td className="px-4 py-3">
                  ~$35B capex, Azure +40%
                </td>
                <td className="px-4 py-3 text-red-400 font-medium">Dipped</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3 font-semibold text-white">
                  Meta (Q1 2026)
                </td>
                <td className="px-4 py-3">$59.9B</td>
                <td className="px-4 py-3">Beat</td>
                <td className="px-4 py-3">AI monetization visible</td>
                <td className="px-4 py-3 text-green-400 font-medium">
                  +10%
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3 font-semibold text-white">
                  Broadcom (Q1 FY26)
                </td>
                <td className="px-4 py-3">$19.3B</td>
                <td className="px-4 py-3">+29%</td>
                <td className="px-4 py-3">AI rev $8.4B, 6 XPU customers</td>
                <td className="px-4 py-3 text-green-400 font-medium">
                  +2&ndash;5%
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-white">
                  AMAT (Q1 FY26)
                </td>
                <td className="px-4 py-3">$7.01B</td>
                <td className="px-4 py-3">-2%</td>
                <td className="px-4 py-3">
                  WFE guide $124&ndash;134B, &gt;20% growth
                </td>
                <td className="px-4 py-3 text-yellow-400 font-medium">
                  Flat
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Iran War Section */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">
          The Iran War: From Geopolitical Noise to Supply Chain Reality
        </h2>
        <p className="text-gray-300 leading-relaxed">
          This is the variable I wasn&apos;t tracking a month ago, and it&apos;s
          quickly becoming the most important one. The US-Iran conflict has
          escalated from a market overhang into a{" "}
          <span className="font-semibold text-white">
            direct threat to semiconductor manufacturing inputs
          </span>
          .
        </p>
        <p className="text-gray-300 leading-relaxed">
          Here&apos;s what happened: Iranian missile strikes on Qatar&apos;s{" "}
          <span className="font-semibold text-white">
            Ras Laffan Industrial City
          </span>{" "}
          in late February knocked offline roughly{" "}
          <span className="font-semibold text-white">
            30% of global semiconductor-grade helium supply
          </span>{" "}
          in a matter of days. Spot helium prices surged 40&ndash;100%.
          Force majeure declarations followed.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Why does helium matter? It&apos;s irreplaceable in semiconductor
          lithography and deposition processes. There is no substitute. The
          Semiconductor Industry Association has warned that a sustained helium
          disruption would send shockwaves through the entire global chip
          manufacturing industry.
        </p>

        <div className="space-y-4 mt-6">
          <div>
            <p className="font-semibold text-white mb-2">
              The supply chain pressure points:
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-red-400 mt-1 shrink-0">&#8250;</span>
            <p className="text-gray-300 leading-relaxed">
              <span className="font-semibold text-white">Helium:</span> ~30% of
              global semi-grade supply disrupted. TSMC, Samsung, and Intel all
              depend on steady helium for EUV lithography and CVD processes.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-red-400 mt-1 shrink-0">&#8250;</span>
            <p className="text-gray-300 leading-relaxed">
              <span className="font-semibold text-white">Bromine:</span>{" "}
              Two-thirds of global production comes from Israel and Jordan &mdash;
              both affected by regional instability. Critical for semiconductor
              etching chemistry.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-red-400 mt-1 shrink-0">&#8250;</span>
            <p className="text-gray-300 leading-relaxed">
              <span className="font-semibold text-white">Energy routes:</span>{" "}
              Taiwan imports nearly all its energy. A prolonged Strait of Hormuz
              disruption threatens TSMC&apos;s ability to maintain output &mdash;
              and TSMC fabricates ~90% of the world&apos;s most advanced chips.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-red-400 mt-1 shrink-0">&#8250;</span>
            <p className="text-gray-300 leading-relaxed">
              <span className="font-semibold text-white">
                Direct threats to tech:
              </span>{" "}
              Iran&apos;s Revolutionary Guard has explicitly called US tech
              companies &ldquo;legitimate targets&rdquo; &mdash; Apple, Google,
              Meta, Microsoft, NVIDIA were all named.
            </p>
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed mt-6">
          The near-term impact is manageable &mdash; Samsung and SK Hynix have
          helium reserves and HBM contracts locked through the year. But the
          binding constraint on AI scaling in 2026 is increasingly{" "}
          <span className="font-semibold text-white">
            material and energy infrastructure
          </span>
          , not the willingness to spend on GPU clusters. If the conflict
          escalates or persists, the ~$650 billion in planned global AI
          infrastructure investment could face real execution delays.
        </p>

        {/* Is the Supercycle Over? */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">
          So &mdash; Is the Supercycle Over?
        </h2>
        <p className="text-gray-300 leading-relaxed">
          No. And I&apos;ll tell you why with one number:{" "}
          <span className="font-semibold text-white">
            semiconductor industry 2026 sales are projected at $975B&ndash;$1T
          </span>
          , with hyperscalers allocating 75% of $602B in capex to AI
          infrastructure. TSMC&apos;s record $56B capex budget for 2026 is
          unprecedented. Micron&apos;s HBM is sold out. NVIDIA is guiding $78B
          for a single quarter.
        </p>
        <p className="text-gray-300 leading-relaxed">
          What we&apos;re seeing is not the end of the cycle &mdash; it&apos;s
          the{" "}
          <span className="font-semibold text-white">
            first real stress test
          </span>
          . The market ran ahead of fundamentals in late 2025, priced perfection
          into every name, and is now reconciling with reality: wars happen,
          algorithms get more efficient, and capex budgets have to be digested.
          None of that changes the structural demand picture.
        </p>
        <p className="text-gray-300 leading-relaxed">
          My framework from{" "}
          <span className="text-violet-400">Capex Signal #0</span> still holds:
        </p>
        <ul className="mt-4 space-y-2">
          <li className="text-gray-300 leading-relaxed flex items-start gap-2">
            <span className="text-violet-400 mt-1 shrink-0">1.</span>
            <span>
              <span className="font-semibold text-white">Constraint:</span>{" "}
              Power, helium, and advanced packaging capacity &mdash; not demand.
            </span>
          </li>
          <li className="text-gray-300 leading-relaxed flex items-start gap-2">
            <span className="text-violet-400 mt-1 shrink-0">2.</span>
            <span>
              <span className="font-semibold text-white">Intensity:</span>{" "}
              Still accelerating. HBM stacks are getting taller, EUV layers are
              increasing, and custom silicon is adding complexity.
            </span>
          </li>
          <li className="text-gray-300 leading-relaxed flex items-start gap-2">
            <span className="text-violet-400 mt-1 shrink-0">3.</span>
            <span>
              <span className="font-semibold text-white">Durability:</span>{" "}
              Multi-year. TSMC expects AI chip revenue to grow at a 60% CAGR
              through 2029. This is not a one-quarter phenomenon.
            </span>
          </li>
        </ul>

        {/* What to Watch */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">
          What to Watch Next
        </h2>
        <ul className="space-y-3">
          <li className="text-gray-300 leading-relaxed flex items-start gap-2">
            <span className="text-violet-400 mt-1 shrink-0">&#8250;</span>
            <span>
              <span className="font-semibold text-white">
                TSMC Q1 2026 earnings (April 16):
              </span>{" "}
              Revenue guided $34.6&ndash;$35.8B (+38% YoY). The most important
              datapoint for the entire AI supply chain. Watch helium supply
              commentary closely.
            </span>
          </li>
          <li className="text-gray-300 leading-relaxed flex items-start gap-2">
            <span className="text-violet-400 mt-1 shrink-0">&#8250;</span>
            <span>
              <span className="font-semibold text-white">
                AMAT Q2 earnings (May 14):
              </span>{" "}
              Will the H2 acceleration materialize? Watch WFE guidance updates
              and China exposure commentary post the $253M BIS settlement.
            </span>
          </li>
          <li className="text-gray-300 leading-relaxed flex items-start gap-2">
            <span className="text-violet-400 mt-1 shrink-0">&#8250;</span>
            <span>
              <span className="font-semibold text-white">
                Iran conflict trajectory:
              </span>{" "}
              Helium supply, Strait of Hormuz shipping, and whether threats
              against US tech companies escalate beyond rhetoric.
            </span>
          </li>
          <li className="text-gray-300 leading-relaxed flex items-start gap-2">
            <span className="text-violet-400 mt-1 shrink-0">&#8250;</span>
            <span>
              <span className="font-semibold text-white">
                TurboQuant adoption:
              </span>{" "}
              Watch for ICLR 2026 presentation and whether hyperscalers actually
              deploy it at scale. If inference gets cheaper, model deployment
              accelerates &mdash; which could be net bullish for training
              infrastructure.
            </span>
          </li>
          <li className="text-gray-300 leading-relaxed flex items-start gap-2">
            <span className="text-violet-400 mt-1 shrink-0">&#8250;</span>
            <span>
              <span className="font-semibold text-white">
                Memory pricing:
              </span>{" "}
              DRAM and HBM pricing power has been Micron&apos;s best friend. Any
              cracks in ASPs will be the first signal that the market is right to
              be cautious.
            </span>
          </li>
        </ul>

        {/* Bottom Line */}
        <div className="p-5 bg-gray-900 border border-gray-800 rounded-lg mt-8">
          <p className="text-white font-semibold mb-2">Bottom Line</p>
          <p className="text-gray-300 leading-relaxed text-sm">
            The AI capex supercycle is alive. The numbers prove it &mdash; $68B
            quarters from NVIDIA, 196% revenue growth from Micron, $35B single-quarter
            capex from Microsoft, and $56B annual capex from TSMC. What&apos;s
            changed is the risk surface: geopolitical disruption to critical
            materials, efficiency breakthroughs that spook memory valuations, and
            a market that&apos;s pricing in the possibility (however small) that
            the spending might not compound forever. Separate the signal from the
            noise. The capex is real. The demand is structural. The volatility is
            the price of admission.
          </p>
        </div>

        <p className="text-gray-300 leading-relaxed mt-8">
          I&apos;m back. More signals coming. &mdash;{" "}
          <span className="text-white font-semibold">J</span>
        </p>
      </article>

      {/* Disclaimer */}
      <div className="mt-16 pt-8 border-t border-gray-800">
        <p className="text-gray-500 text-sm italic">
          This research note is provided for informational purposes only and
          does not constitute investment advice, a solicitation, or an offer to
          buy or sell any security. The information contained herein is based on
          sources believed to be reliable but is not guaranteed as to accuracy or
          completeness. Past performance is not indicative of future results. AI
          Capex and its contributors may hold positions in securities discussed.
          Readers should conduct their own due diligence and consult a qualified
          financial adviser before making any investment decisions.
        </p>
      </div>
    </main>
  );
}
