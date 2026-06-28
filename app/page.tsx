import Link from "next/link";
import TopicCard from "@/components/TopicCard";

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="mb-4 text-lg font-semibold uppercase tracking-wider text-blue-400">
            Welcome to
          </p>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Olajide&apos;s Tech Blog
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Practical tutorials, hands-on labs, and real-world projects covering
            Microsoft Azure, Cloud Security, Microsoft 365, DevOps,
            Networking, and Cloud Computing.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              href="/blog"
              className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Read Articles
            </Link>

            <Link
              href="/tutorials"
              className="rounded-lg border border-blue-400 px-8 py-4 text-lg font-semibold text-blue-300 transition hover:bg-blue-900/40"
            >
              Explore Tutorials
            </Link>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-6">
              <h3 className="text-4xl font-bold text-blue-400">50+</h3>
              <p className="mt-2 text-gray-300">Technical Tutorials</p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-6">
              <h3 className="text-4xl font-bold text-blue-400">20+</h3>
              <p className="mt-2 text-gray-300">Hands-on Labs</p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-6">
              <h3 className="text-4xl font-bold text-blue-400">100%</h3>
              <p className="mt-2 text-gray-300">
                Practical Learning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-4 text-center text-5xl font-bold text-gray-900">
            Featured Topics
          </h2>

          <p className="mx-auto mb-14 max-w-3xl text-center text-lg text-gray-600">
            Explore the latest tutorials and practical guides covering
            today's most in-demand cloud and IT technologies.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TopicCard
              icon="☁️"
              title="Microsoft Azure"
              description="Azure Virtual Machines, Networking, Storage, Azure Entra ID, RBAC and Security."
            />

            <TopicCard
              icon="🛡️"
              title="Cloud Security"
              description="Microsoft Defender, Microsoft Sentinel, Zero Trust, Identity Protection and Security Best Practices."
            />

            <TopicCard
              icon="⚙️"
              title="DevOps"
              description="Git, GitHub, Docker, Kubernetes, CI/CD and Infrastructure as Code."
            />

            <TopicCard
              icon="💼"
              title="Microsoft 365"
              description="Exchange Online, Teams, SharePoint, OneDrive, Intune and Microsoft Entra."
            />

            <TopicCard
              icon="🌐"
              title="Networking"
              description="TCP/IP, DNS, VPNs, Routing, Firewalls and Network Troubleshooting."
            />

            <TopicCard
              icon="☁️"
              title="Cloud Computing"
              description="Cloud Architecture, Scalability, High Availability and Best Practices."
            />
          </div>
        </div>
      </section>
    </main>
  );
}