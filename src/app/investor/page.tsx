import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor — AI Capex",
};

export default function InvestorPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-white">Investor</h1>
      <p className="mt-4 text-gray-400">
        Investor resources and analysis coming soon. Subscribe to get notified
        when new content is published.
      </p>
    </div>
  );
}
