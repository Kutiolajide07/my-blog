import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold mb-4">Blog</h1>

      <p className="text-lg text-gray-600 mb-10">
        Articles on Microsoft Azure, Cloud Security, DevOps, AI and Infrastructure Engineering.
      </p>

      <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
        <p className="text-sm text-gray-500">
          11 July 2026 • 6 min read
        </p>

        <h2 className="text-3xl font-bold mt-2 mb-3">
          Building Safer and Smarter DevOps Workflows with Agentic AI
        </h2>

        <p className="mb-6">
          My Week 2 reflection covering Claude Code, MCP, Hooks, Permissions,
          Claude Memory and practical lessons learned from integrating AI into
          engineering workflows.
        </p>

        <Link
          href="/blog/agentic-ai"
          className="inline-block rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          Read Article →
        </Link>
      </div>
    </main>
  );
}