import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capex Signal: April 11, 2026 — TSMC Blows Out Q1, Meta Doubles Down on CoreWeave, Tariff Fog Thickens — AI Capex",
};

export default function CapexSignalApril112026Page() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      {/* Article Header */}
      <div className="mb-10">
        <p className="text-violet-400 text-sm uppercase tracking-wider mb-3">
          analysis
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
          Capex Signal: April 11, 2026 &mdash; TSMC Blows Out Q1, Meta Doubles Down on CoreWeave, Tariff Fog Thickens
        </h1>
        <div>
          <p className="text-white font-medium">Capex Signal</p>
          <p className="text-gray-500 text-sm mt-1">11 Apr 2026 · 10 min read</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-800 mb-12" />

      {/* Article Body */}
      <article className="space-y-6">

        {/* Opening */}
        <p className="text-gray-300 leading-relaxed">
          Buckle up &mdash; this was a heavy week. TSMC just printed one of the best quarters in its history, Micron&apos;s HBM4 ramp is ahead of schedule, and Meta committed{" "}
          <span className="font-semibold text-white">$21 billion</span> to CoreWeave in a single deal announcement. Meanwhile the macro backdrop got noisier: semiconductor-specific tariff investigations are accelerating, the global 10% baseline tariff went into effect under Section 122, and ASML reports Wednesday (April 15) with the bar set high. The constraint&mdash;intensity&mdash;durability framework still holds, but this week added a new variable: policy whiplash as a genuine supply-chain risk.
        </p>

        {/* ===== TSMC ===== */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">TSMC &mdash; Monthly Revenue Confirms Record Q1, Full Earnings Call April 16</h2>
        <p className="text-gray-300 leading-relaxed">
          TSMC&apos;s Q1 2026 revenue is effectively confirmed via Taiwan&apos;s mandatory monthly filing (released April 10): Q1 consolidated sales of{" "}
          <span className="font-semibold text-white">NT$1,134.10 billion (~$35.71 billion)</span>, landing at the very top of the January guidance range ($34.6&ndash;$35.8B) and up{" "}
          <span className="font-semibold text-white">35.1% year-over-year</span>. March alone printed{" "}
          <span className="font-semibold text-white">NT$415.19 billion</span> &mdash; the highest single month in TSMC&apos;s history &mdash; up 45.2% YoY, driven by the continued N2 (2nm) ramp and AI accelerator demand. The{" "}
          <span className="font-semibold text-white">full earnings call is April 16</span> (in five days), where we&apos;ll get margin actuals, CoWoS commentary, and updated forward guidance. The gross margin guide from January was{" "}
          <span className="font-semibold text-white">63&ndash;65%</span> for Q1; the capex budget of $52&ndash;$56B was set at the Q4 2025 call &mdash; both pending confirmation April 16.
        </p>

        {/* TSMC table */}
        <div className="overflow-x-auto mt-6">
          <table className="w-full bg-gray-900 border border-gray-800 rounded-lg overflow-hidden text-sm text-gray-300">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-4 py-3 text-left font-semibold text-white">Metric</th>
                <th className="px-4 py-3 text-left font-semibold text-white">Status</th>
                <th className="px-4 py-3 text-left font-semibold text-white">vs. Guidance / Prior Year</th>
                <th className="px-4 py-3 text-left font-semibold text-white">Read</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3">Q1 Revenue (monthly filing)</td>
                <td className="px-4 py-3 font-semibold text-white">$35.71B ✓ confirmed</td>
                <td className="px-4 py-3">$34.6&ndash;$35.8B guide</td>
                <td className="px-4 py-3 text-green-400 font-medium">Top of range</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3">YoY Growth</td>
                <td className="px-4 py-3 font-semibold text-white">+35.1% ✓ confirmed</td>
                <td className="px-4 py-3">+38% guided at midpoint</td>
                <td className="px-4 py-3 text-green-400 font-medium">Strong</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3">Gross Margin Q1</td>
                <td className="px-4 py-3 text-yellow-400">Pending &mdash; Apr 16</td>
                <td className="px-4 py-3">63&ndash;65% guided (Jan)</td>
                <td className="px-4 py-3 text-yellow-400 font-medium">Watch call</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3">2026 Capex Budget</td>
                <td className="px-4 py-3 font-semibold text-white">$52&ndash;$56B</td>
                <td className="px-4 py-3">Record level</td>
                <td className="px-4 py-3 text-green-400 font-medium">70&ndash;80% leading-edge</td>
              </tr>
              <tr>
                <td className="px-4 py-3">CoWoS Capacity (exit 2026)</td>
                <td className="px-4 py-3 font-semibold text-white">~130K wpm</td>
                <td className="px-4 py-3">~75K wpm (end-2025)</td>
                <td className="px-4 py-3 text-green-400 font-medium">~73% expansion</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-300 leading-relaxed mt-4">
          My read: TSMC is executing almost perfectly. The CoWoS expansion from ~75K to ~130K wafers/month by year-end is the most important capacity number in semiconductors right now &mdash; it&apos;s the binding constraint on Blackwell NVL72 rack supply. Nvidia has reportedly locked up more than half of that capacity through 2027. The Taiwan-U.S. trade agreement framework (announced in January) adds a political tailwind, reducing near-term tariff risk on TSMC ADR holders. The full-year capex budget of $52&ndash;56B &mdash; record by a wide margin &mdash; signals TSMC&apos;s own conviction in demand durability well into 2027&ndash;28.
        </p>

        {/* ===== MACRO / TARIFFS ===== */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Tariff Fog &mdash; Real Risk or Headline Noise?</h2>
        <p className="text-gray-300 leading-relaxed">
          This is the dominant macro story right now and I want to be direct about what we know vs. what&apos;s speculation. After the Supreme Court struck down country-specific &ldquo;reciprocal&rdquo; tariffs in February as unconstitutional under IEEPA, the Trump administration pivoted to a flat{" "}
          <span className="font-semibold text-white">10% global tariff</span> under Section 122 of the Trade Act of 1974, effective through{" "}
          <span className="font-semibold text-white">July 24, 2026</span>. That&apos;s now law.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Separately, the Commerce Department has opened a Section 232 investigation into semiconductor imports &mdash; covering substrates, bare wafers, legacy chips, leading-edge chips, and SME components, with public comments due by{" "}
          <span className="font-semibold text-white">April 16</span>. The investigation scope is broad enough to touch nearly every link in the supply chain. A 25% tariff on advanced AI chips (H200, MI325X) is already in effect, though with carve-outs for chips imported to support U.S. manufacturing buildout.
        </p>
        <p className="text-gray-300 leading-relaxed">
          The practical supply-chain implication: foundry price increases of{" "}
          <span className="font-semibold text-white">10&ndash;15%</span> are being reported on mature-node wafers. For the AI infrastructure build at the leading edge, the bigger risk isn&apos;t direct tariffs on TSMC wafers (Taiwan has a special trade framework) but second-order effects &mdash; packaging substrates, OSAT services, and EDA tool pricing if reciprocal measures escalate.
        </p>
        <p className="text-gray-300 leading-relaxed">
          My read: The SOX index has absorbed this reasonably well &mdash; it&apos;s off its highs but not in panic mode at ~8,874. The market is correctly discounting that tariffs on AI-critical semiconductors are a political tool, not an end state. Companies that are actively building U.S. fabs (TSMC Arizona, Intel 18A Ohio, Samsung Taylor) have political cover. The real watch item is the April 16 public comment deadline &mdash; industry pushback on the Section 232 scope will be intense.
        </p>

        {/* ===== META / CoreWeave ===== */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Meta &amp; CoreWeave &mdash; $21B Deal Is the Week&apos;s Signal Flare</h2>
        <p className="text-gray-300 leading-relaxed">
          On April 9, CoreWeave and Meta announced an expanded infrastructure deal worth{" "}
          <span className="font-semibold text-white">$21 billion</span>, running through December 2032. The deal scales AI inference workloads and includes early deployments of the{" "}
          <span className="font-semibold text-white">NVIDIA Vera Rubin platform</span> &mdash; which means this is not just a renewal but a forward commitment on next-generation silicon. The deal supersedes their prior $14.2B arrangement (which ran to 2031) and now represents over 35% of CoreWeave&apos;s total revenue, helping diversify the company away from its prior ~62% Microsoft concentration.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Zoom out: Meta has committed to{" "}
          <span className="font-semibold text-white">$115&ndash;$135 billion in capex in 2026</span> &mdash; an amount that would have been unthinkable for a single company three years ago. Microsoft is on pace for $145B, Google $175&ndash;$185B, Amazon $200B. The combined four-hyperscaler number approaches{" "}
          <span className="font-semibold text-white">$665 billion</span> at the high end. To put that in context: the entire WFE market this year is projected at ~$135B. Every dollar of hyperscaler capex needs roughly 20 cents of semiconductor equipment spend.
        </p>
        <p className="text-gray-300 leading-relaxed">
          The CoreWeave deal also validates the &ldquo;AI infrastructure intermediary&rdquo; model &mdash; hyperscalers contracting large GPU clusters to specialized compute providers rather than building entirely in-house. This is structurally good for Nvidia (GPU vendor of choice), TSMC (sole N4 + CoWoS supplier), and SK Hynix / Micron (HBM).
        </p>

        {/* ===== Micron ===== */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Micron (MU) &mdash; HBM4 Ahead of Schedule, $33.5B Q3 Guide</h2>
        <p className="text-gray-300 leading-relaxed">
          Micron&apos;s fiscal Q2 2026 (quarter ended February 2026) was a stunner: revenue of{" "}
          <span className="font-semibold text-white">$23.86 billion</span>, more than double the{" "}
          <span className="font-semibold text-white">$8.05 billion</span> reported a year earlier and well above the $19.6B consensus. Management guided Q3 2026 revenue at{" "}
          <span className="font-semibold text-white">$33.5 billion</span> with gross margins potentially approaching{" "}
          <span className="font-semibold text-white">81%</span> &mdash; a number that would represent one of the highest margin quarters in DRAM history.
        </p>
        <p className="text-gray-300 leading-relaxed">
          The HBM story is equally compelling. Micron&apos;s HBM4 &mdash; delivering{" "}
          <span className="font-semibold text-white">11 Gbps</span> and{" "}
          <span className="font-semibold text-white">&gt;2.8 TB/s</span> total bandwidth &mdash; is on track to ramp with high yields in Q2 calendar 2026 (ahead of the original roadmap). Micron has now locked in its entire 2026 HBM supply at agreed prices, with the HBM TAM on track to reach{" "}
          <span className="font-semibold text-white">~$35 billion in 2025, growing to ~$100 billion by 2028</span> (CAGR ~40%). That two-year TAM pull-forward from prior estimates is significant. The capex budget is now{" "}
          <span className="font-semibold text-white">$20 billion</span> for FY2026, fully funded by operating cash flow.
        </p>
        <p className="text-gray-300 leading-relaxed">
          My read: The Q2 and Q3 guide are not typos &mdash; this is what an AI memory supercycle looks like. Micron has finally reached the supply-demand tightness that SK Hynix enjoyed for the past 18 months. One watch item: &ldquo;peak cycle&rdquo; narratives are already emerging (MU stock is actually down ~4% this week despite the results), which is worth noting even if the data doesn&apos;t support cycle exhaustion yet.
        </p>

        {/* ===== ASML Preview ===== */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">ASML Q1 2026 Preview &mdash; Earnings April 15 (Watch Closely)</h2>
        <p className="text-gray-300 leading-relaxed">
          ASML reports before the open on{" "}
          <span className="font-semibold text-white">Wednesday, April 15</span>. The setup: Q1 2026 revenue guidance was EUR 8.2&ndash;8.9B with 51&ndash;53% gross margin. Consensus sits at ~$10B revenue and $7.68&ndash;$7.85 EPS normalized. ASML closed 2025 with{" "}
          <span className="font-semibold text-white">€32.7 billion in net sales</span> (+15% YoY), earnings +28.5%, and a record order backlog approaching{" "}
          <span className="font-semibold text-white">€39 billion</span>.
        </p>
        <p className="text-gray-300 leading-relaxed">
          The ASML result functions as a leading indicator for WFE spend broadly &mdash; its EUV booking numbers are a proxy for TSMC/Samsung/Intel leading-edge capex commitments 12&ndash;18 months out. YTD the stock is up ~23%, and SK Hynix + Samsung have reportedly placed multi-billion-dollar EUV orders through 2027. Watch for: new bookings number vs. Q4 2025 (which was already strong), any commentary on the China business under the latest BIS rules, and gross margin trajectory given ASM equipment mix shift to High-NA EUV.
        </p>

        {/* ===== NVDA / Blackwell ===== */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">NVDA &amp; Blackwell &mdash; Still the Center of Gravity</h2>
        <p className="text-gray-300 leading-relaxed">
          No earnings this week from Nvidia (next report late May), but several data points reinforced the thesis. Blackwell B200 / GB200 entered full volume production in February 2026 with a backlog of{" "}
          <span className="font-semibold text-white">3.6 million units</span> from cloud providers alone. Jensen&apos;s characterization of demand as &ldquo;off the charts&rdquo; is not marketing &mdash; CoWoS sold-out status through mid-2026, with Nvidia holding &gt;50% of TSMC&apos;s advanced packaging allocation for 2026&ndash;2027, corroborates it. The Vera Rubin platform (cited in the Meta/CoreWeave deal) is the next-generation successor, and its initial deployments are already being committed in 2026 deal structures.
        </p>
        <p className="text-gray-300 leading-relaxed">
          The GB200 NVL72 rack draws up to{" "}
          <span className="font-semibold text-white">120kW per rack</span>, forcing a comprehensive liquid cooling retrofit across data center designs &mdash; which is a direct read-through for power management (MPWR, ON Semi) and thermal management supply chains.
        </p>

        {/* ===== Equipment ===== */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Equipment (AMAT, LRCX, KLAC) &mdash; WFE on Track for $135B in 2026</h2>
        <p className="text-gray-300 leading-relaxed">
          No earnings from the big three this week, but the WFE market backdrop strengthened. The Morgan Stanley 2026 WFE forecast was revised upward from +5% to{" "}
          <span className="font-semibold text-white">+10% growth</span>, with the market now estimated at{" "}
          <span className="font-semibold text-white">$128.3 billion</span>; SEMI&apos;s own projection puts WFE at $135.2B (+9%). Memory is the key incremental driver: NAND equipment up 12.7% to $15.7B (3D NAND stacking) plus HBM-driven DRAM capex from Micron, SK Hynix, and Samsung. Foundry and logic at +5.5% on AI accelerator capacity additions.
        </p>
        <p className="text-gray-300 leading-relaxed">
          YTD performance for the equipment names has been strong: AMAT +35.8%, KLAC +24.9%, LRCX +27.6%. Susquehanna raised its AMAT price target to $500 (Positive rating) ahead of their Q1 print. The tariff risk here is real but manageable &mdash; equipment imports are largely covered by CHIPS Act domestic manufacturing carve-outs, and the Section 232 investigation specifically includes SME (semiconductor manufacturing equipment) components, making industry lobbying on this front particularly intense.
        </p>

        {/* ===== Intel ===== */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Intel (INTC) &mdash; 18A Is Real, But 2027 Is When It Matters</h2>
        <p className="text-gray-300 leading-relaxed">
          Intel&apos;s Panther Lake, the first consumer processor built on the 18A process, shipped in early 2026 as Core Ultra Series 3 &mdash; with &gt;200 OEM designs and an NPU capable of{" "}
          <span className="font-semibold text-white">180+ TOPS</span>. The stock has rallied{" "}
          <span className="font-semibold text-white">~85% from its April 2025 lows</span>, driven by 18A validation milestones and the Terafab partnership with Elon Musk&apos;s AI and robotics program. But the honest read from Tom&apos;s Hardware: yields on 18A won&apos;t hit industry-standard levels until{" "}
          <span className="font-semibold text-white">2027</span>. Current yields support Panther Lake shipments but aren&apos;t yet at &ldquo;desired cost level.&rdquo; Intel is also cutting its 2026 capex budget (unlike TSMC and Micron), which reflects the ongoing financial triage. I&apos;m watching Intel as a 2027 story on the foundry side &mdash; not a 2026 catalyst.
        </p>

        {/* ===== MPWR / Power ===== */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Power (MPWR, ON, WOLF) &mdash; MPWR Hits All-Time High</h2>
        <p className="text-gray-300 leading-relaxed">
          Monolithic Power Systems (MPWR) hit an all-time high of{" "}
          <span className="font-semibold text-white">$1,312.94</span> this week, up roughly 90.8% over the past 12 months. Goldman Sachs called power management the most &ldquo;under-appreciated bottleneck&rdquo; in the AI supply chain. Strong Q4 2025 results included 20.8% YoY revenue growth, a dividend hike from $1.56 to $2.00/quarter, and positive AI data center segment guidance. Analyst consensus PT at ~$1,218 &mdash; stock is trading through consensus, which reflects how real the power constraint thesis has become. The 120kW GB200 racks are converting a theoretical thesis into hard procurement conversations today.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Wolfspeed launched the industry&apos;s first commercially available{" "}
          <span className="font-semibold text-white">10kV SiC power MOSFET</span> in March, offering 30% system cost reduction and &gt;300% power density improvement at ultra-high voltage. ON Semi is navigating automotive SiC demand normalization while positioning for the data center power conversion opportunity. ON reports later in Q2.
        </p>

        {/* ===== PLTR ===== */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Palantir (PLTR) &mdash; Defense AI Goes Permanent</h2>
        <p className="text-gray-300 leading-relaxed">
          Palantir&apos;s Q4 2025 earnings (Feb 2, 2026) were the most recent data point: EPS of{" "}
          <span className="font-semibold text-white">$0.25</span> (beat $0.21 consensus), total revenue{" "}
          <span className="font-semibold text-white">$1.41 billion</span>. U.S. government revenue rose{" "}
          <span className="font-semibold text-white">66%</span> to $570 million &mdash; the DoD elevated Maven AI to a Program of Record with permanent funding, which is a major structural win. Commercial AIP revenue crossed $2.1B annually (100%+ growth since April 2023 debut). 2026 guidance: revenue $7.18&ndash;$7.20B, U.S. commercial &gt;$3.14B. Next earnings May 4, 2026.
        </p>
        <p className="text-gray-300 leading-relaxed">
          For the AI capex thesis, PLTR is the read-through on software-driven AI capex selection &mdash; when government and enterprise customers choose which GPU clusters to buy and how to utilize them, Palantir&apos;s platform increasingly sits at that decision layer. The Maven PR designation removes the annual budget cycle risk that was the main bear case.
        </p>

        {/* ===== Scorecard ===== */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Week&apos;s Earnings Scorecard</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-900 border border-gray-800 rounded-lg overflow-hidden text-sm text-gray-300">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-4 py-3 text-left font-semibold text-white">Company</th>
                <th className="px-4 py-3 text-left font-semibold text-white">Key Number</th>
                <th className="px-4 py-3 text-left font-semibold text-white">YoY</th>
                <th className="px-4 py-3 text-left font-semibold text-white">Signal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3 font-medium">TSM Q1 2026 (monthly filing)</td>
                <td className="px-4 py-3">$35.71B revenue</td>
                <td className="px-4 py-3 text-green-400">+35.1%</td>
                <td className="px-4 py-3 text-green-400 font-medium">Top of guide; full call Apr 16</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3 font-medium">MU Q2 FY2026</td>
                <td className="px-4 py-3">$23.86B revenue</td>
                <td className="px-4 py-3 text-green-400">+196%</td>
                <td className="px-4 py-3 text-green-400 font-medium">HBM4 ahead of schedule</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3 font-medium">MU Q3 Guide</td>
                <td className="px-4 py-3">$33.5B revenue</td>
                <td className="px-4 py-3 text-green-400">~40%+</td>
                <td className="px-4 py-3 text-green-400 font-medium">~81% gross margin possible</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">ASML Q1 2026</td>
                <td className="px-4 py-3">Reports Apr 15</td>
                <td className="px-4 py-3">&mdash;</td>
                <td className="px-4 py-3 text-yellow-400 font-medium">Consensus ~$10B; backlog key</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ===== Constraint → Intensity → Durability ===== */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Constraint &rarr; Intensity &rarr; Durability Framework Check</h2>

        <div className="space-y-6">
          <div className="p-5 bg-gray-900 border border-gray-800 rounded-lg">
            <p className="font-semibold text-white mb-2">Constraint &mdash; What&apos;s Actually Tight?</p>
            <p className="text-gray-300 leading-relaxed text-sm">
              CoWoS advanced packaging is the single tightest physical constraint in the AI supply chain right now. TSMC is running at near-full utilization, Nvidia holds &gt;50% allocation, and CoWoS-L/S is reportedly fully booked. A close second: HBM supply. Micron&apos;s entire 2026 HBM volume is locked in, and SK Hynix is similarly committed. The tariff fog introduces a new category of constraint: policy uncertainty around SME imports, which could slow equipment deployment timelines if the Section 232 investigation broadens to include inspection tools and lithography systems.
            </p>
          </div>

          <div className="p-5 bg-gray-900 border border-gray-800 rounded-lg">
            <p className="font-semibold text-white mb-2">Intensity &mdash; How Hard Are Customers Pushing?</p>
            <p className="text-gray-300 leading-relaxed text-sm">
              The Meta/CoreWeave $21B deal and the hyperscaler capex announcements (&ldquo;combined $635&ndash;$665B in 2026&rdquo;) leave no doubt: intensity is at a historical peak and still accelerating. This is a 74% increase from 2025 levels at the high end. The Vera Rubin platform being embedded in 2026 deal structures means we&apos;re already contracting the generation after Blackwell. Intensity is not moderating.
            </p>
          </div>

          <div className="p-5 bg-gray-900 border border-gray-800 rounded-lg">
            <p className="font-semibold text-white mb-2">Durability &mdash; How Long Does This Cycle Run?</p>
            <p className="text-gray-300 leading-relaxed text-sm">
              TSMC&apos;s $52&ndash;56B capex budget (funded largely in 2026&ndash;2027 cash) and Micron&apos;s $20B are both multi-year commitments that create structural demand floors for equipment, materials, and substrates through 2028. HBM TAM forecasted at ~$100B by 2028 (vs. $35B in 2025). ASML&apos;s €39B backlog represents roughly 3+ years of forward equipment revenue. Every major data point this week pointed to a longer, deeper cycle than the one currently priced by consensus. The one durability risk I&apos;m watching: trade policy escalation that fragments the global supply chain and increases lead times materially. That scenario would slow the cycle without ending it &mdash; which is actually worse for investors holding at current multiples.
            </p>
          </div>
        </div>

        {/* ===== What to Watch ===== */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4">What to Watch Next Week</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-2 text-gray-300 leading-relaxed">
            <span className="text-violet-400 mt-1 shrink-0">&#8250;</span>
            <span><span className="font-semibold text-white">ASML Q1 2026 (Wednesday, April 15)</span> &mdash; New bookings number is the single most important data point for the WFE cycle. If bookings are 2x consensus (as they were in Q4 2024), that will confirm 2027 equipment demand is already locked in.</span>
          </li>
          <li className="flex items-start gap-2 text-gray-300 leading-relaxed">
            <span className="text-violet-400 mt-1 shrink-0">&#8250;</span>
            <span><span className="font-semibold text-white">Section 232 semiconductor public comment deadline (April 16)</span> &mdash; The industry response to the scope of this investigation will set the tone for tariff escalation risk through mid-2026. SIA and SEMI lobbying organizations will file; watch for scope narrowing or broadening language from Commerce.</span>
          </li>
          <li className="flex items-start gap-2 text-gray-300 leading-relaxed">
            <span className="text-violet-400 mt-1 shrink-0">&#8250;</span>
            <span><span className="font-semibold text-white">TSMC full earnings call (April 16)</span> &mdash; Q1 revenue is already confirmed via monthly filing ($35.71B); the call gives us Q1 gross/operating margin actuals, CoWoS allocation detail, N2 yield commentary, Q2 guidance, and any update on the U.S. Arizona fab ramp timeline. This is the key event next week.</span>
          </li>
          <li className="flex items-start gap-2 text-gray-300 leading-relaxed">
            <span className="text-violet-400 mt-1 shrink-0">&#8250;</span>
            <span><span className="font-semibold text-white">NFLX / hyperscaler earnings season warm-up</span> &mdash; Meta reports April 29, Amazon and Alphabet late April/early May. These capex commentary rounds are the most important inputs to the AI infrastructure capex model.</span>
          </li>
          <li className="flex items-start gap-2 text-gray-300 leading-relaxed">
            <span className="text-violet-400 mt-1 shrink-0">&#8250;</span>
            <span><span className="font-semibold text-white">SOX index technical level</span> &mdash; Currently ~8,874. The index has held up despite the tariff headlines, but the Section 232 comment period + any escalatory Commerce action this week could create a short-term correction entry point in equipment names.</span>
          </li>
        </ul>

        {/* Closing */}
        <div className="mt-10 p-5 bg-gray-900 border border-gray-800 rounded-lg">
          <p className="text-gray-300 leading-relaxed text-sm">
            Bottom line: The AI infrastructure capex supercycle is structurally intact and, if anything, accelerating. TSMC at the top of guidance, Micron printing 196% growth, Meta committing $21B to CoreWeave in a single shot, and ASML sitting on a €39B backlog &mdash; these are not cycle-late signals. The tariff overhang is a genuine risk that I&apos;m watching closely, but the political incentive structure (the U.S. wants domestic AI leadership, not higher GPU prices) makes a full-on anti-semiconductor tariff regime unlikely. The more interesting risk is second-order supply-chain disruption from policy uncertainty slowing capex decisions in the back half of 2026. That&apos;s worth pricing.
          </p>
          <p className="text-gray-300 leading-relaxed text-sm mt-3">
            Positions I&apos;m thinking about: TSMC (TSM) remains the cleanest way to own the entire AI silicon ecosystem. MPWR is expensive but Goldman is right &mdash; power management is underappreciated. Waiting on ASML&apos;s call Tuesday before adding there.
          </p>
        </div>

        <p className="text-white font-semibold mt-8">&mdash; J</p>

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
