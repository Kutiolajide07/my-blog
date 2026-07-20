import Link from "next/link";

const articles = [
  {
    date: "17 July 2026",
    readTime: "10 min read",
    title: "Deploying a Production React Application on AWS EC2 Using Ubuntu & Nginx",
    description:
      "A hands-on engineering case study covering React deployment on Ubuntu EC2, Nginx configuration, Linux administration, troubleshooting, and production operations.",
    href: "/blog/aws-react-nginx",
    category: "AWS • React • Ubuntu • Nginx",
  },
  {
    date: "11 July 2026",
    readTime: "6 min read",
    title: "Building Safer and Smarter DevOps Workflows with Agentic AI",
    description:
      "My Week 2 reflection covering Claude Code, Skills, Subagents, MCP, Hooks, Permissions, Claude Memory and practical lessons learned from integrating AI into engineering workflows.",
    href: "/blog/agentic-ai",
    category: "DevOps • AI • Claude Code",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <header className="mb-12">
        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          Technical Articles
        </span>

        <h1 className="mt-6 text-5xl font-bold">Tech Blog</h1>

        <p className="mt-4 max-w-3xl text-xl text-gray-600">
          Practical articles covering Microsoft Azure, AWS, Cloud Security,
          Linux, DevOps, AI and Infrastructure Engineering.
        </p>
      </header>

      {/* Articles */}
      <section className="space-y-8">
        {articles.map((article) => (
          <article
            key={article.href}
            className="rounded-2xl border p-8 shadow-sm hover:shadow-md transition"
          >
            <p className="text-sm text-blue-600 font-medium">
              {article.category}
            </p>

            <p className="mt-2 text-sm text-gray-500">
              {article.date} • {article.readTime}
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              {article.title}
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              {article.description}
            </p>

            <Link
              href={article.href}
              className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
            >
              Read Article →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}