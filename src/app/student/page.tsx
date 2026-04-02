import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student — AI Capex",
};

export default function StudentPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-white">Student</h1>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
        Student Resources
      </h2>

      <ul className="space-y-3">
        <li>
          <span className="text-gray-300">🗺️ Learning Path — </span>
          <a href="#" className="text-violet-400 hover:text-violet-300">
            Start here
          </a>
        </li>
        <li>
          <span className="text-gray-300">📘 Semiconductor 101 — </span>
          <a href="#" className="text-violet-400 hover:text-violet-300">
            Read now
          </a>
        </li>
        <li>
          <span className="text-gray-300">📋 Key Metrics Cheat Sheet — </span>
          <a href="#" className="text-violet-400 hover:text-violet-300">
            Open cheat sheet
          </a>
        </li>
        <li>
          <span className="text-gray-300">
            🏭 The Players — Who Makes What —{" "}
          </span>
          <a href="#" className="text-violet-400 hover:text-violet-300">
            Explore the roles
          </a>
        </li>
        <li>
          <span className="text-gray-300">💰 The Capex Multiplier — </span>
          <a href="#" className="text-violet-400 hover:text-violet-300">
            Follow the money
          </a>
        </li>
      </ul>
    </div>
  );
}
