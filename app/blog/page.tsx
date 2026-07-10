import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold mb-4">Blog</h1>

      <p className="text-xl text-gray-600 mb-10">
        Articles on Microsoft Azure, Cloud Security, DevOps, AI and Infrastructure Engineering.
      </p>

      <article className="rounded-xl border p-8 shadow-sm">
        <p className="text-sm text-gray-500">
          11 July 2026 • 6 min read
        </p>

        <h2 className="mt-3 text-3xl font-bold">
          Building Safer and Smarter DevOps Workflows with Agentic AI
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          My Week 2 reflection covering Claude Code, Skills, Subagents, MCP,
          Hooks, Permissions, Claude Memory and practical lessons learned from
          integrating AI into engineering workflows.
        </p>

        <Link
          href="/blog/agentic-ai"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Read Article →
        </Link>
      </article>
    </main>
  );
}