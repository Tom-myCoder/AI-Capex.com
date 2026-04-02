import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools — AI Capex",
};

export default function ToolsPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-white">Tools</h1>
      <p className="text-gray-400 mt-4">
        A collection of trading and investing tools built to help you make better decisions.
      </p>

      <hr className="border-gray-800 my-8" />

      <h2 className="text-2xl font-bold text-white">Options Tracker</h2>

      <a
        href="#"
        className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 mt-4"
      >
        🚀 Launch Options Tracker
      </a>

      <h3 className="text-xl font-semibold text-white mt-8 mb-4">What it does</h3>
      <p className="text-gray-300">
        A complete options portfolio management system with real-time market data:
      </p>

      <ul className="text-gray-300 space-y-3 mt-4 list-disc list-inside">
        <li>
          <span className="text-white font-semibold">Track all your positions</span> — Calls, puts,
          spreads across multiple brokers
        </li>
        <li>
          <span className="text-white font-semibold">Live P&L updates</span> — Yahoo Finance
          integration for current option prices
        </li>
        <li>
          <span className="text-white font-semibold">Risk visualization</span> — Payoff charts
          showing profit/loss scenarios at expiration
        </li>
        <li>
          <span className="text-white font-semibold">Price history</span> — Track how your
          positions evolve over time with Theta decay projections
        </li>
        <li>
          <span className="text-white font-semibold">Decision support</span> — Smart alerts when
          positions approach expiry or hit key levels
        </li>
        <li>
          <span className="text-white font-semibold">Data portability</span> — Export/import your
          portfolio as CSV or JSON for backup
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-white mt-8 mb-4">Key capabilities</h3>

      <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-800">
              <th className="text-left text-gray-300 text-sm uppercase px-4 py-3 font-semibold">
                Feature
              </th>
              <th className="text-left text-gray-300 text-sm uppercase px-4 py-3 font-semibold">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-800">
              <td className="text-gray-300 px-4 py-3 font-medium">Real-time Prices</td>
              <td className="text-gray-300 px-4 py-3">
                Fetches live option quotes from Yahoo Finance
              </td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="text-gray-300 px-4 py-3 font-medium">Payoff Charts</td>
              <td className="text-gray-300 px-4 py-3">
                Visual P&L curves with break-even analysis and price simulation
              </td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="text-gray-300 px-4 py-3 font-medium">Greek Exposure</td>
              <td className="text-gray-300 px-4 py-3">
                Track your portfolio&apos;s sensitivity to price, time, and volatility
              </td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="text-gray-300 px-4 py-3 font-medium">Historical Tracking</td>
              <td className="text-gray-300 px-4 py-3">
                Price history with Theta decay projections to expiry
              </td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="text-gray-300 px-4 py-3 font-medium">Multi-broker</td>
              <td className="text-gray-300 px-4 py-3">
                Organize positions by broker (TD, Robinhood, etc.)
              </td>
            </tr>
            <tr>
              <td className="text-gray-300 px-4 py-3 font-medium">Local Storage</td>
              <td className="text-gray-300 px-4 py-3">
                All data stays in your browser — private and secure
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-white mt-8 mb-4">Who it&apos;s for</h3>

      <ul className="text-gray-300 space-y-3 list-disc list-inside">
        <li>Options traders managing multiple positions</li>
        <li>Income traders selling covered calls / cash-secured puts</li>
        <li>Spread traders tracking complex multi-leg strategies</li>
        <li>Anyone who wants to visualize risk before expiration</li>
      </ul>

      <hr className="border-gray-800 my-8" />

      <h2 className="text-2xl font-bold text-white">More tools coming soon</h2>

      <ul className="text-gray-300 space-y-3 mt-4 list-disc list-inside">
        <li>
          <span className="text-white font-semibold">Position Sizer</span> — Calculate optimal
          position size based on risk tolerance and account size
        </li>
        <li>
          <span className="text-white font-semibold">Earnings Calendar</span> — Track upcoming
          earnings for your watchlist with historical move data
        </li>
        <li>
          <span className="text-white font-semibold">Volatility Analyzer</span> — Compare implied
          vs historical volatility across tickers
        </li>
      </ul>

      <p className="text-gray-500 mt-6 italic">Have a tool idea? Let me know.</p>
    </div>
  );
}
