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

      {/* Start Here */}
<section className="bg-gray-50 py-24">
  <div className="mx-auto max-w-7xl px-6">

    <h2 className="mb-4 text-center text-5xl font-bold text-gray-900">
      Start Here
    </h2>

    <p className="mx-auto mb-14 max-w-3xl text-center text-lg text-gray-600">
      Whether you're here to learn about my journey, explore cloud security,
      or follow my professional growth, these are the best places to begin.
    </p>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      <Link
        href="/about"
        className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
      >
        <div className="text-5xl">👤</div>
        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          About Me
        </h3>
        <p className="mt-4 leading-7 text-gray-600">
          Learn about my background, career journey, and passion for cloud
          security.
        </p>
        <p className="mt-6 font-semibold text-blue-600 group-hover:underline">
          Read More →
        </p>
      </Link>

      <Link
        href="/vision"
        className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
      >
        <div className="text-5xl">🚀</div>
        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Vision 2.0
        </h3>
        <p className="mt-4 leading-7 text-gray-600">
          Read the personal vision that guides my growth and the cloud security
          professional I am intentionally becoming.
        </p>
        <p className="mt-6 font-semibold text-blue-600 group-hover:underline">
          Read My Vision →
        </p>
      </Link>

      <Link
        href="/projects"
        className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
      >
        <div className="text-5xl">💼</div>
        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Projects
        </h3>
        <p className="mt-4 leading-7 text-gray-600">
          Explore the Azure, cloud security, automation, and DevSecOps projects
          I'm building as part of my learning journey.
        </p>
        <p className="mt-6 font-semibold text-blue-600 group-hover:underline">
          View Projects →
        </p>
      </Link>

      <TopicCard
        icon="🛡️"
        title="Cloud Security"
        description="Microsoft Defender, Microsoft Sentinel, Zero Trust, Identity Protection and Security Best Practices."
      />

      <TopicCard
        icon="☁️"
        title="Microsoft Azure"
        description="Azure Virtual Machines, Networking, Storage, Azure Entra ID, RBAC and Security."
      />

      <TopicCard
        icon="⚙️"
        title="DevSecOps"
        description="Git, GitHub, Docker, Kubernetes, CI/CD and Infrastructure as Code."
      />

    </div>

  </div>
</section>
    </main>
  );
}