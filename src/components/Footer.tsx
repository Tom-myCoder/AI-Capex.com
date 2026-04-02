import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-800 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-gray-500">
            AI Capex &copy; {new Date().getFullYear()}
          </span>
          <div className="flex items-center gap-6">
            <Link
              href="/subscribe"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              Sign up
            </Link>
            <Link
              href="/about"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
