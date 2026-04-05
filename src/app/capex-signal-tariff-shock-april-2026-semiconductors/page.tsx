import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capex Signal: Tariff Shock — How the April 2026 Trade War Reshapes AI Infrastructure — AI Capex",
};

export default function CapexSignalTariffShockApril2026Page() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      {/* Article Header */}
      <div className="mb-10">
        <p className="text-violet-400 text-sm uppercase tracking-wider mb-3">
          analysis
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
          Capex Signal: Tariff Shock &mdash; How the April 2026 Trade War Reshapes AI Infrastructure
        </h1>
        <div>
          <p className="text-white font-medium">Capex Signal</p>
          <p className="text-gray-500 text-sm mt-1">04 Apr 2026 · 10 min read</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-800 mb-12" />

      {/* Article Body */}
      <article className="space-y-6">

        <p className="text-gray-300 leading-relaxed">
          This week the market got a stress test it didn&apos;t ask for. Trump&apos;s sweeping reciprocal tariff package &mdash; a{" "}
          <span className="font-semibold text-white">10% universal baseline</span> on all imports effective April 5, with escalating country-specific rates (34% on China, 20% EU, 24% Japan, 46% Vietnam) kicking in April 9 &mdash; triggered a broad semiconductor selloff. NVDA slid roughly{" "}
          <span className="font-semibold text-white">7%</span>. TSMC dropped{" "}
          <span className="font-semibold text-white">7%+</span>. The Philadelphia Semiconductor Index (SOX) got hit harder than the broad market.
        </p>

        <p className="text-gray-300 leading-relaxed">
          Then came the exemption carve-out: smartphones, computers, flat panel displays, and semiconductor chips themselves were pulled out of the reciprocal tariff framework via presidential memorandum. Markets breathed. But Commerce Secretary Lutnick immediately signaled a sector-specific semiconductor tariff regime is coming &mdash; potentially within weeks &mdash; explicitly designed to force reshoring. So we&apos;re not out of the woods; we&apos;re just in a different part of the forest.
        </p>

        <p className="text-gray-300 leading-relaxed">
          Here&apos;s how I&apos;m reading the week, company by company, and what it means for the AI infrastructure capex thesis.
        </p>

        {/* Tariff Situation */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Tariff Situation &mdash; What We Know Right Now</h2>

        <p className="text-gray-300 leading-relaxed">
          The architecture of the tariff regime as of this writing:
        </p>

        <div className="overflow-x-auto mt-4">
          <table className="w-full bg-gray-900 border border-gray-800 rounded-lg overflow-hidden text-sm text-gray-300">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-4 py-3 text-left font-semibold text-white">Category</th>
                <th className="px-4 py-3 text-left font-semibold text-white">Status</th>
                <th className="px-4 py-3 text-left font-semibold text-white">Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3">Reciprocal tariffs (universal 10% baseline)</td>
                <td className="px-4 py-3 text-yellow-400 font-medium">Active Apr 5</td>
                <td className="px-4 py-3">Electronics/chips temporarily exempted</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3">Country-specific escalation (China +34%, Japan +24%)</td>
                <td className="px-4 py-3 text-yellow-400 font-medium">Active Apr 9</td>
                <td className="px-4 py-3">Supply chain diversification pressure</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3">Semiconductor chips (advanced AI chips)</td>
                <td className="px-4 py-3 text-green-400 font-medium">Exempted (reciprocal)</td>
                <td className="px-4 py-3">25% Section 232 already in place since Jan 15</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3">Semiconductor-specific tariff regime</td>
                <td className="px-4 py-3 text-red-400 font-medium">Coming ~weeks</td>
                <td className="px-4 py-3">Reshoring incentive; terms unknown</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Semiconductor manufacturing equipment</td>
                <td className="px-4 py-3 text-green-400 font-medium">Exempted (reciprocal)</td>
                <td className="px-4 py-3">AMAT, LRCX, KLAC, ASML relatively protected</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-300 leading-relaxed mt-4">
          My read: the tariff exemption for chips and equipment is real relief for the near term, but the sector-specific regime is the sword of Damocles. TSMC has already pledged{" "}
          <span className="font-semibold text-white">$165 billion</span> in U.S. fab investment to secure exemptions &mdash; a number that tells you how serious the reshoring pressure is. Samsung&apos;s $13B pledge is in the same playbook. The long-term effect is inflationary for advanced chip manufacturing and structurally supportive for U.S.-located equipment suppliers (AMAT, LRCX, KLAC). The short-term is noise.
        </p>

        {/* Earnings Scorecard */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Recent Earnings Scorecard</h2>

        <p className="text-gray-300 leading-relaxed">
          A busy reporting season just wrapped. Here&apos;s the scorecard for the companies that moved the needle:
        </p>

        <div className="overflow-x-auto mt-4">
          <table className="w-full bg-gray-900 border border-gray-800 rounded-lg overflow-hidden text-sm text-gray-300">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-4 py-3 text-left font-semibold text-white">Ticker</th>
                <th className="px-4 py-3 text-left font-semibold text-white">Quarter</th>
                <th className="px-4 py-3 text-left font-semibold text-white">Revenue</th>
                <th className="px-4 py-3 text-left font-semibold text-white">YoY Growth</th>
                <th className="px-4 py-3 text-left font-semibold text-white">vs. Consensus</th>
                <th className="px-4 py-3 text-left font-semibold text-white">Key Signal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3 font-medium text-white">MU</td>
                <td className="px-4 py-3">Q2 FY26</td>
                <td className="px-4 py-3">$23.9B</td>
                <td className="px-4 py-3 text-green-400 font-medium">+196%</td>
                <td className="px-4 py-3 text-green-400">Beat ($18.7B guide)</td>
                <td className="px-4 py-3">HBM4 ramp; Q3 guide $33.5B</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3 font-medium text-white">AVGO</td>
                <td className="px-4 py-3">Q1 FY26</td>
                <td className="px-4 py-3">$19.3B</td>
                <td className="px-4 py-3 text-green-400 font-medium">+29%</td>
                <td className="px-4 py-3 text-green-400">Beat; AI rev $8.4B</td>
                <td className="px-4 py-3">Q2 guide $22B; $100B AI in &apos;27</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3 font-medium text-white">MRVL</td>
                <td className="px-4 py-3">Q4 FY26</td>
                <td className="px-4 py-3">$2.22B</td>
                <td className="px-4 py-3 text-green-400 font-medium">+22%</td>
                <td className="px-4 py-3 text-green-400">Beat; +15% after-hours</td>
                <td className="px-4 py-3">DC rev $1.65B; FY27 guide $11B</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3 font-medium text-white">SNPS</td>
                <td className="px-4 py-3">Q1 FY26</td>
                <td className="px-4 py-3">$2.41B</td>
                <td className="px-4 py-3 text-green-400 font-medium">+66%</td>
                <td className="px-4 py-3 text-green-400">Beat; NI EPS $3.77</td>
                <td className="px-4 py-3">Ansys contributing $886M; EDA +96%</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3 font-medium text-white">AMAT</td>
                <td className="px-4 py-3">Q1 FY26</td>
                <td className="px-4 py-3">$7.01B</td>
                <td className="px-4 py-3 text-green-400 font-medium">Record</td>
                <td className="px-4 py-3 text-green-400">Beat; +11% post-earnings</td>
                <td className="px-4 py-3">Semi equip +20% in 2026 implied</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">ASML</td>
                <td className="px-4 py-3">Q4 FY25</td>
                <td className="px-4 py-3">&euro;32.7B FY</td>
                <td className="px-4 py-3 text-green-400 font-medium">Record</td>
                <td className="px-4 py-3 text-green-400">Bookings &euro;13.2B (2x est.)</td>
                <td className="px-4 py-3">EUV backlog &euro;38.8B; sold thru 2027</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* MU Deep Dive */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Micron (MU) &mdash; The Number That Broke My Model</h2>

        <p className="text-gray-300 leading-relaxed">
          Let me be direct: a{" "}
          <span className="font-semibold text-white">196% year-over-year revenue jump to $23.9 billion</span> is not a normal earnings report. Micron is now guiding Q3 FY2026 to{" "}
          <span className="font-semibold text-white">$33.5 billion</span>. That&apos;s roughly the entire quarterly revenue of Intel at its peak &mdash; from a memory company. The driver is HBM4.
        </p>

        <p className="text-gray-300 leading-relaxed">
          Micron has its entire calendar 2026 HBM supply sold out, and the company can only meet{" "}
          <span className="font-semibold text-white">55&ndash;60%</span> of total DRAM customer demand. They raised capex guidance from $20B to over{" "}
          <span className="font-semibold text-white">$25 billion</span> this fiscal year to chase the HBM4 ramp &mdash; with mass production ramping in the second half of 2026. The HBM TAM projection is equally striking: from $35B in 2025 to{" "}
          <span className="font-semibold text-white">$100 billion by 2028</span>, arriving two years earlier than prior estimates.
        </p>

        <p className="text-gray-300 leading-relaxed">
          My take: the market&apos;s 7% post-earnings selloff was a valuation argument, not a thesis argument. The stock got ahead of itself on a $33.5B Q3 guide that the Street had to recalibrate around. But the underlying demand signal &mdash; HBM supply fully committed, HBM4 needed for NVIDIA&apos;s Rubin platform, 40% CAGR TAM through 2028 &mdash; is as clean a constraint signal as I&apos;ve seen. The{" "}
          <span className="font-semibold text-white">Constraint</span> is real. The{" "}
          <span className="font-semibold text-white">Intensity</span> is accelerating. The{" "}
          <span className="font-semibold text-white">Durability</span> is locked in by architecture: every future NVIDIA accelerator generation will require more HBM per chip, not less.
        </p>

        {/* MRVL Deep Dive */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Marvell (MRVL) &mdash; Custom Silicon Is Now a $1.5B Business</h2>

        <p className="text-gray-300 leading-relaxed">
          Marvell&apos;s Q4 FY2026 was the cleanest execution story of the quarter. Data center revenue hit{" "}
          <span className="font-semibold text-white">$1.65 billion</span> &mdash; now{" "}
          <span className="font-semibold text-white">75%</span> of total sales &mdash; and the custom AI ASIC business that was essentially zero two years ago generated{" "}
          <span className="font-semibold text-white">$1.5 billion in annual revenue</span> in FY2026. Management guided FY2027 revenue to{" "}
          <span className="font-semibold text-white">$11 billion</span>, and as high as{" "}
          <span className="font-semibold text-white">$15 billion</span> by FY2028.
        </p>

        <p className="text-gray-300 leading-relaxed">
          What I&apos;m watching closely: Marvell&apos;s 1.6T optical interconnect solutions. These are the cables between the racks in AI clusters &mdash; and as GPU cluster sizes grow from thousands to tens of thousands of accelerators, the interconnect layer becomes the next bottleneck. Marvell is positioned in both the custom ASIC layer (doing for networking what Broadcom does for compute) and the optical transceiver space. The stock jumped 16% on the Q4 print for good reason.
        </p>

        {/* SNPS Deep Dive */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Synopsys (SNPS) &mdash; The Ansys Flywheel Starts Spinning</h2>

        <p className="text-gray-300 leading-relaxed">
          Synopsys closed the Ansys acquisition and the first quarter with it showed what the combined entity looks like: revenue of{" "}
          <span className="font-semibold text-white">$2.41 billion</span>, up{" "}
          <span className="font-semibold text-white">66% YoY</span>, with Ansys contributing{" "}
          <span className="font-semibold text-white">$886 million</span>. EDA (design automation) revenue surged{" "}
          <span className="font-semibold text-white">96% YoY</span> to $2.0 billion. Non-GAAP operating margin was{" "}
          <span className="font-semibold text-white">42.1%</span>.
        </p>

        <p className="text-gray-300 leading-relaxed">
          The stock sold off despite the beat &mdash; partly valuation, partly the $13.5B of acquisition debt sitting on the balance sheet. But I think the market is underweighting the synergy timeline. The first joint SNPS+Ansys solutions hit in 1H 2026, with monetization in FY2027. If you&apos;re building a custom AI chip today &mdash; and everyone is &mdash; you need both EDA (Synopsys) and multi-physics simulation (Ansys) in the same workflow. This combination is becoming the design stack for AI silicon. The backlog of{" "}
          <span className="font-semibold text-white">$11.3 billion</span> tells you the funnel is not thinning.
        </p>

        {/* WFE / Equipment */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Wafer Fab Equipment &mdash; The $139B Market That Tariffs Can&apos;t Kill</h2>

        <p className="text-gray-300 leading-relaxed">
          SEMI is projecting global semiconductor equipment sales will hit{" "}
          <span className="font-semibold text-white">$139 billion in 2026</span>, on their way to{" "}
          <span className="font-semibold text-white">$156 billion in 2027</span>. WFE (wafer fab equipment specifically) is expected to grow{" "}
          <span className="font-semibold text-white">~9%</span> this year to roughly $128&ndash;135 billion. Morgan Stanley recently revised their WFE forecast upward from +5% to{" "}
          <span className="font-semibold text-white">+10% growth</span>, with memory as the key incremental driver.
        </p>

        <p className="text-gray-300 leading-relaxed">
          ASML is the clearest signal in the equipment space. Q4 2025 bookings of{" "}
          <span className="font-semibold text-white">&euro;13.2 billion</span> came in at nearly double analyst expectations. EUV bookings alone hit{" "}
          <span className="font-semibold text-white">&euro;7.4 billion</span>. The year-end EUV backlog sits at{" "}
          <span className="font-semibold text-white">&euro;25.5 billion</span>, and the total backlog is{" "}
          <span className="font-semibold text-white">&euro;38.8 billion</span>. EUV systems are effectively sold out through 2027. For 2026, ASML is guiding{" "}
          <span className="font-semibold text-white">&euro;34&ndash;39 billion</span> in total revenue with{" "}
          <span className="font-semibold text-white">51&ndash;53% gross margins</span>.
        </p>

        <p className="text-gray-300 leading-relaxed">
          Applied Materials ran the same playbook: Q1 FY2026 revenue of{" "}
          <span className="font-semibold text-white">$7.01 billion</span>, gross margins at{" "}
          <span className="font-semibold text-white">49.1%</span> (a 25-year high), and implicit guidance for{" "}
          <span className="font-semibold text-white">20%+ semiconductor equipment business growth</span> in calendar 2026. The tariff selloff hit AMAT, LRCX, and KLAC this week, but equipment is exempted from reciprocal tariffs and the reshoring thesis is structurally bullish for U.S. equipment makers over any multi-year horizon.
        </p>

        {/* Hyperscaler Capex */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Hyperscaler Capex &mdash; $700 Billion and Accelerating</h2>

        <p className="text-gray-300 leading-relaxed">
          The four-hyperscaler aggregate capex number for 2026 has now crystallized around{" "}
          <span className="font-semibold text-white">$635&ndash;665 billion</span>, up roughly{" "}
          <span className="font-semibold text-white">67&ndash;74%</span> year-over-year. To put that in perspective: the combined capex of Amazon (~$200B), Alphabet (~$175&ndash;185B), Microsoft (~$145B), and Meta (~$115&ndash;135B) is larger than the GDP of most countries. Add Oracle and you&apos;re at $700B+.
        </p>

        <p className="text-gray-300 leading-relaxed">
          About{" "}
          <span className="font-semibold text-white">75%</span> of this spend is AI-related infrastructure &mdash; roughly{" "}
          <span className="font-semibold text-white">$450&ndash;500 billion</span> in AI-specific capex this year alone. Bank of America estimates these five companies will spend approximately{" "}
          <span className="font-semibold text-white">90%</span> of their operating cash flow on capex in 2026. Amazon is projected to go{" "}
          <span className="font-semibold text-white">free-cash-flow negative</span> this year for the first time in years.
        </p>

        <p className="text-gray-300 leading-relaxed">
          This is the demand foundation that makes the rest of the watchlist make sense. When hyperscalers are willing to burn through all of their operating cash flow on AI infrastructure, the supply chain &mdash; NVDA, MU, TSM, AVGO, MRVL, AMAT, LRCX, KLAC, ASML &mdash; has essentially locked-in demand for years. The constraint isn&apos;t demand. The constraint is supply.
        </p>

        {/* NVDA and Blackwell */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">NVIDIA &mdash; Blackwell Sold Out, Rubin Next</h2>

        <p className="text-gray-300 leading-relaxed">
          NVIDIA doesn&apos;t report until later this spring, but the signals this week are unambiguous. Blackwell B200 and GB200 NVL72 systems are effectively sold out through mid-2026 with a backlog estimated at{" "}
          <span className="font-semibold text-white">3.6 million units</span> from cloud providers alone. Volume production of the Blackwell architecture ramped in February 2026. Roughly{" "}
          <span className="font-semibold text-white">35,000 NVL72 racks</span> are expected to ship this year &mdash; at ~$3M per rack, that&apos;s{" "}
          <span className="font-semibold text-white">~$105 billion in NVDA rack revenue</span> before you count discrete GPU sales.
        </p>

        <p className="text-gray-300 leading-relaxed">
          The infrastructure reality: a single GB200 NVL72 rack draws up to{" "}
          <span className="font-semibold text-white">120 kW</span>. At 35,000 racks that&apos;s 4.2 GW of new power demand from Blackwell alone. Power infrastructure &mdash; the{" "}
          <span className="font-semibold text-white">Constraint</span> nobody talks about enough &mdash; is becoming the binding variable on deployment velocity. This is where Wolfspeed&apos;s 10kV SiC MOSFETs and 300mm SiC wafer platform become relevant: 30% lower system power cost, 300% higher power density. The power semiconductor play is real.
        </p>

        {/* TSMC and Packaging */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">TSMC &mdash; CoWoS Bottleneck, N2 Ramping, $52B Capex</h2>

        <p className="text-gray-300 leading-relaxed">
          TSMC reports Q1 2026 results on April 16. Guidance was{" "}
          <span className="font-semibold text-white">$34.6&ndash;35.8 billion</span> in revenue, which would represent up to{" "}
          <span className="font-semibold text-white">40% YoY growth</span>. The company is investing{" "}
          <span className="font-semibold text-white">$52&ndash;56 billion</span> in capex this year &mdash; up 30% from 2025 &mdash; with more than 10% of that going to advanced packaging.
        </p>

        <p className="text-gray-300 leading-relaxed">
          The CoWoS bottleneck is real and structural. TSMC is scaling CoWoS capacity from ~35,000 wafers per month in late 2024 to a projected{" "}
          <span className="font-semibold text-white">130,000 wafers/month by end of 2026</span> &mdash; nearly 4x. Even so, NVIDIA alone will consume over half of total global CoWoS demand (~685,000 units vs. projected supply of ~590,000). The gap is still{" "}
          <span className="font-semibold text-white">~20% short</span> of NVIDIA&apos;s needs. This packaging bottleneck is why every serious investor in AI infrastructure should understand advanced packaging &mdash; CoWoS, SoIC, InFO &mdash; not just leading-edge logic.
        </p>

        <p className="text-gray-300 leading-relaxed">
          N2 is ramping. Mass production kicked off in late 2025 and is scaling through 2026, with A16 (HPC-optimized with Super Power Rail) in volume by 2H 2026. This is the process node that will define the next generation of AI accelerators &mdash; from NVIDIA&apos;s Rubin to custom XPUs at the hyperscalers.
        </p>

        {/* Broadcom */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Broadcom &mdash; Six XPU Customers, $100B AI Revenue Target</h2>

        <p className="text-gray-300 leading-relaxed">
          I covered AVGO Q1 FY2026 in depth in the March 4 research note. Quick summary: AI revenue of{" "}
          <span className="font-semibold text-white">$8.4 billion (+106% YoY)</span>, Q2 guidance of{" "}
          <span className="font-semibold text-white">$22 billion</span> ($1.44B above consensus), and a confirmed{" "}
          <span className="font-semibold text-white">sixth XPU customer in OpenAI</span> with 1 GW deployment targeted for 2027. Management gave line-of-sight to{" "}
          <span className="font-semibold text-white">$100 billion in AI chip revenue in 2027</span> from named customers with concrete deployment timelines.
        </p>

        <p className="text-gray-300 leading-relaxed">
          The tariff angle on Broadcom: their XPU customers are U.S. hyperscalers building U.S. data centers. The silicon is fabbed at TSMC. To the extent that reshoring pressure accelerates TSMC&apos;s Arizona expansion (TSMC&apos;s N3 Arizona fab is now in advanced construction), Broadcom&apos;s XPU supply chain actually becomes more tariff-resilient over time. Near term, the tariff noise is just that &mdash; noise.
        </p>

        {/* Macro Framework */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Constraint &rarr; Intensity &rarr; Durability: Where We Stand</h2>

        <div className="space-y-6">
          <div>
            <p className="font-semibold text-white mb-2">Constraint</p>
            <p className="text-gray-300 leading-relaxed">
              Every node in the stack is constrained simultaneously: CoWoS packaging (TSMC, ~20% short of NVDA demand), HBM4 (Micron, 2026 sold out), advanced logic (TSMC N2, EUV booked through 2027), and now power infrastructure (120 kW/rack Blackwell clusters). This is not a one-node problem. It&apos;s a system-level constraint across the entire vertical stack.
            </p>
          </div>

          <div>
            <p className="font-semibold text-white mb-2">Intensity</p>
            <p className="text-gray-300 leading-relaxed">
              The intensity reading from this week&apos;s data is off the charts. Micron guiding $33.5B for a single quarter. Broadcom targeting $100B in AI chip revenue in 2027. Hyperscalers collectively spending $450&ndash;500B on AI infrastructure this year. ASML backlog doubling Street estimates. The demand signal is not modulating &mdash; it&apos;s accelerating.
            </p>
          </div>

          <div>
            <p className="font-semibold text-white mb-2">Durability</p>
            <p className="text-gray-300 leading-relaxed">
              This is the question the tariff shock raised. My answer: the durability is structural, not cyclical. The constraints are architectural (HBM4 per chip increases each generation), the demand is contractual (XPU customer commitments are multi-year), and the supply side investments are locked in (TSMC $52B capex, Micron $25B capex, AMAT &gt;20% equipment growth). Tariffs create noise in the timeline but don&apos;t break the thesis.
            </p>
          </div>
        </div>

        {/* What to Watch */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">What to Watch Next Week</h2>

        <ul className="space-y-3">
          <li className="text-gray-300 leading-relaxed flex items-start gap-2">
            <span className="text-violet-400 mt-1 shrink-0">&#8250;</span>
            <span>
              <span className="font-semibold text-white">TSMC Q1 2026 earnings (April 16):</span>{" "}
              The most important semiconductor print of the quarter. Revenue guidance of $34.6&ndash;35.8B. If they print above the top of that range and hold CoWoS pricing, the equipment names catch a bid immediately.
            </span>
          </li>
          <li className="text-gray-300 leading-relaxed flex items-start gap-2">
            <span className="text-violet-400 mt-1 shrink-0">&#8250;</span>
            <span>
              <span className="font-semibold text-white">Sector-specific semiconductor tariff details:</span>{" "}
              Lutnick said &ldquo;weeks.&rdquo; Watch for Section 232 investigation completion and proposed tariff rates. The reshoring incentive structure will matter more than the headline rate.
            </span>
          </li>
          <li className="text-gray-300 leading-relaxed flex items-start gap-2">
            <span className="text-violet-400 mt-1 shrink-0">&#8250;</span>
            <span>
              <span className="font-semibold text-white">ASML Q1 2026 earnings (April 16):</span>{" "}
              Revenue guide &euro;8.2&ndash;8.9B. The bookings number matters most &mdash; after the blowout Q4 record &euro;13.2B, can they maintain the pace?
            </span>
          </li>
          <li className="text-gray-300 leading-relaxed flex items-start gap-2">
            <span className="text-violet-400 mt-1 shrink-0">&#8250;</span>
            <span>
              <span className="font-semibold text-white">LRCX Q3 FY2026 (late April):</span>{" "}
              Lam guided 10&ndash;15% WFE growth for 2026. Post-tariff selloff may have created an entry point.
            </span>
          </li>
          <li className="text-gray-300 leading-relaxed flex items-start gap-2">
            <span className="text-violet-400 mt-1 shrink-0">&#8250;</span>
            <span>
              <span className="font-semibold text-white">Hyperscaler Q1 earnings (late April/early May):</span>{" "}
              AMZN, MSFT, GOOG, META will all report. The capex guidance updates will be closely watched &mdash; any upward revision is a direct catalyst for the equipment and foundry names.
            </span>
          </li>
          <li className="text-gray-300 leading-relaxed flex items-start gap-2">
            <span className="text-violet-400 mt-1 shrink-0">&#8250;</span>
            <span>
              <span className="font-semibold text-white">Wolfspeed (WOLF):</span>{" "}
              The 300mm SiC wafer platform and 10kV MOSFET launches are the company&apos;s clearest path to relevance in AI data center power. Execution on commercialization is the watch item &mdash; WOLF has a history of overpromising timelines.
            </span>
          </li>
        </ul>

        {/* Bottom Line */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Bottom Line</h2>

        <p className="text-gray-300 leading-relaxed">
          The tariff shock created a week of volatility that in my view does not alter the medium-term thesis. Chips and equipment are exempted from reciprocal tariffs. The sector-specific regime coming is a reshoring incentive that &mdash; over three to five years &mdash; is net bullish for the U.S. supply chain. TSMC&apos;s Arizona commitment, Micron&apos;s Idaho and New York fabs, AMAT and LRCX&apos;s domestic manufacturing footprints all benefit structurally.
        </p>

        <p className="text-gray-300 leading-relaxed">
          The earnings data from this quarter is uniformly strong. Micron at $23.9B. Marvell at $2.22B with $11B in FY2027 sights. Broadcom $8.4B in AI chips and a credible path to $100B. ASML with &euro;38.8B in backlog. SNPS with $11.3B in backlog. The numbers say the AI infrastructure capex supercycle is not plateauing &mdash; it&apos;s compounding.
        </p>

        <p className="text-gray-300 leading-relaxed">
          The market giveth volatility. The fundamentals giveth clarity. I know which one I&apos;m weighting more heavily.
        </p>

        <p className="text-white font-medium mt-8">&mdash; J</p>

        <div className="mt-8 p-5 bg-gray-900 border border-gray-800 rounded-lg">
          <p className="text-white font-semibold mb-2">Key data points this week</p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Micron Q2 FY2026: $23.9B revenue (+196% YoY) | Q3 FY2026 guide: $33.5B | Marvell Q4 FY2026: $2.22B (+22% YoY), FY2027 target $11B | Broadcom Q1 FY2026: $8.4B AI revenue (+106% YoY), Q2 guide $22B | ASML Q4 2025 bookings: &euro;13.2B (2x estimates), backlog &euro;38.8B | AMAT Q1 FY2026: $7.01B, record 49.1% gross margin | SNPS Q1 FY2026: $2.41B (+66% YoY), Ansys &euro;886M contribution | Hyperscaler 2026 capex: ~$650&ndash;700B aggregate | TSMC CoWoS target: 130K wafers/month by end 2026 | WFE market 2026 SEMI forecast: $139B
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
