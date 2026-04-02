import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineer — AI Capex",
};

export default function EngineerPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-white">Engineer</h1>
      <p className="mt-4 text-gray-400">
        Engineering resources and technical deep dives coming soon.
      </p>
    </div>
  );
}
