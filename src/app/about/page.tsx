import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — AI Capex",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        {/* Page Title */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          About <span className="text-violet-400">Capex Signal</span>
        </h1>

        {/* Intro */}
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          Capex Signal is a weekly notebook on AI infrastructure spending (
          <strong className="text-white">capex</strong>) and what it implies
          for:
        </p>
        <ul className="mt-4 space-y-2 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-400" />
            <span>
              <strong className="text-white">Semiconductor equipment</strong>{" "}
              (semicap / WFE) first — tools are the truth serum
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-400" />
            <span>
              Then expanding outward to{" "}
              <strong className="text-white">AI chips</strong> and{" "}
              <strong className="text-white">memory / HBM</strong> as the
              downstream expression of that capex
            </span>
          </li>
        </ul>

        {/* Divider */}
        <hr className="my-12 border-gray-800" />

        {/* What You'll Get */}
        <section>
          <h2 className="text-2xl font-bold text-white">What you&apos;ll get</h2>

          {/* Free */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-violet-400 uppercase tracking-wide">
              Free (public)
            </h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-500" />
                <span>Investor-friendly bullets on what changed this week</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-500" />
                <span>
                  A short <strong className="text-white">&ldquo;so what&rdquo;</strong>: why it
                  matters and what to watch next
                </span>
              </li>
            </ul>
          </div>

          {/* Premium */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-violet-400 uppercase tracking-wide">
              Premium{" "}
              <span className="text-gray-500 normal-case font-normal text-sm">
                (eventually paid)
              </span>
            </h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-500" />
                <span>
                  The deeper layer:{" "}
                  <strong className="text-white">mechanism</strong> +{" "}
                  <strong className="text-white">durability</strong> +{" "}
                  <strong className="text-white">second-order effects</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-500" />
                <span>
                  A clearer take (opinionated, but labeled) and explicit{" "}
                  <strong className="text-white">
                    &ldquo;what would change my mind&rdquo;
                  </strong>{" "}
                  triggers
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-500" />
                <span>
                  Sources / citations so you can verify the claims
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-500" />
                <span>
                  A small{" "}
                  <strong className="text-white">
                    options / trading education corner
                  </strong>{" "}
                  (general, risk-defined; not personalized advice)
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Divider */}
        <hr className="my-12 border-gray-800" />

        {/* Why This Is Different */}
        <section>
          <h2 className="text-2xl font-bold text-white">
            Why this is different
          </h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Most market commentary stops at headlines. Capex Signal starts from
            a simple premise:
          </p>

          {/* Blockquote */}
          <blockquote className="mt-6 border-l-4 border-violet-500 bg-gray-900 rounded-r-lg pl-6 pr-6 py-5">
            <p className="text-lg italic text-gray-100 leading-relaxed">
              &ldquo;In semis, what matters is not the story — it&apos;s the
              constraint.&rdquo;
            </p>
          </blockquote>

          <p className="mt-6 text-gray-300 leading-relaxed">
            Constraints show up first in{" "}
            <strong className="text-white">equipment intensity</strong>,{" "}
            <strong className="text-white">process complexity</strong>,{" "}
            <strong className="text-white">lead times</strong>,{" "}
            <strong className="text-white">yield</strong>, and{" "}
            <strong className="text-white">
              packaging / memory bottlenecks
            </strong>
            . That&apos;s where durable signals tend to live.
          </p>
        </section>

        {/* Divider */}
        <hr className="my-12 border-gray-800" />

        {/* Ground Rules */}
        <section>
          <h2 className="text-2xl font-bold text-white">Ground rules</h2>
          <ul className="mt-6 space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-500" />
              <span>This is not investment advice.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-500" />
              <span>
                I aim to be clear and opinionated, but I{" "}
                <strong className="text-white">
                  separate facts from interpretation
                </strong>
                .
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-500" />
              <span>I do not cover crypto.</span>
            </li>
          </ul>

          <p className="mt-8 text-gray-400 leading-relaxed">
            If you like the free notes, follow along — and if the premium layer
            proves useful, we&apos;ll turn it on.
          </p>
        </section>

      </div>
    </div>
  );
}
