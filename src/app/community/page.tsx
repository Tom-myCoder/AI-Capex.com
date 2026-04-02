import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community — AI Capex",
};

export default function CommunityPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-white">Community</h1>
      <p className="mt-4 text-gray-400">
        Community features coming soon. Join our newsletter to connect with
        other semiconductor investors and engineers.
      </p>
    </div>
  );
}
