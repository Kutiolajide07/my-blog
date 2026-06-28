import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <Link
          href="/"
          className="text-3xl font-bold text-blue-700 hover:text-blue-800 transition"
        >
          Olajide's Tech Blog
        </Link>

        <div className="flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link href="/blog" className="hover:text-blue-600 transition">
            Blog
          </Link>

          <Link href="/tutorials" className="hover:text-blue-600 transition">
            Tutorials
          </Link>

          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>

          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}