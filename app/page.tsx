import Link from "next/link";
import TopicCard from "@/components/TopicCard";

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-14">
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
              href="/projects"
              className="rounded-lg border border-blue-400 px-8 py-4 text-lg font-semibold text-blue-300 transition hover:bg-blue-900/40"
            >
              View Projects
            </Link>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
              <h3 className="text-3xl font-bold text-blue-400">50+</h3>
              <p className="mt-1 text-gray-300">Technical Tutorials</p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-6">
              <h3 className="text-3xl font-bold text-blue-400">20+</h3>
              <p className="mt-1 text-gray-300">Hands-on Labs</p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-6">
              <h3 className="text-3xl font-bold text-blue-400">100%</h3>
              <p className="mt-1 text-gray-300">
                Practical Learning
              </p>
            </div>
          </div>
        </div>
      </section>

{/* Featured Projects */}

<section className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-12 flex items-center justify-between">
      <div>
        <h2 className="text-5xl font-bold text-gray-900">
          Featured Projects
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Practical cloud engineering projects demonstrating Azure, AWS,
          Linux, DevOps and Security.
        </p>
      </div>

      <Link
        href="/projects"
        className="font-semibold text-blue-600 hover:underline"
      >
        View All →
      </Link>
    </div>

    <div className="grid gap-6 lg:grid-cols-3">

      <article className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          AWS • React • Ubuntu • Nginx
        </span>

        <h3 className="mt-6 text-2xl font-bold">
          Production React Deployment
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          Deploying a production-ready React application on AWS EC2 using Ubuntu,
          Nginx, Linux administration and networking.
        </p>

        <Link
          href="/blog/aws-react-nginx"
          className="mt-8 inline-block font-semibold text-blue-600 hover:underline"
        >
          Read Case Study →
        </Link>

      </article>

      <article className="rounded-2xl border bg-white p-6 shadow-sm">

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          Azure Security
        </span>

        <h3 className="mt-6 text-2xl font-bold">
          Azure Monitoring Lab
        </h3>

        <p className="mt-4 text-gray-600">
          Azure Monitor, Log Analytics, Azure Monitor Agent and Data Collection
          Rules.
        </p>

        <p className="mt-8 font-semibold text-gray-400">
          Coming Soon
        </p>

      </article>

      <article className="rounded-2xl border bg-white p-8 shadow-sm">

        <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
          Microsoft Sentinel
        </span>

        <h3 className="mt-6 text-2xl font-bold">
          SOC Investigation Lab
        </h3>

        <p className="mt-4 text-gray-600">
          Threat hunting, KQL queries, incident investigation and Defender XDR.
        </p>

        <p className="mt-8 font-semibold text-gray-400">
          Coming Soon
        </p>

      </article>

    </div>

  </div>
</section>

      {/* Start Here */}
<section className="bg-slate-100 py-24">

  <div className="mx-auto max-w-6xl px-6">

    <div className="mb-12 flex items-center justify-between">

      <h2 className="text-5xl font-bold">
        Latest Articles
      </h2>

      <Link
        href="/blog"
        className="font-semibold text-blue-600 hover:underline"
      >
        View All →
      </Link>

    </div>

    <div className="grid gap-8">

      <Link
        href="/blog/aws-react-nginx"
        className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-xl"
      >
        <p className="text-sm text-blue-600 font-semibold">
          AWS • React • Ubuntu • Nginx
        </p>

        <h3 className="mt-3 text-3xl font-bold">
          Deploying a Production React Application on AWS EC2
        </h3>

        <p className="mt-4 text-gray-600">
          A complete engineering case study covering deployment, Linux,
          networking, troubleshooting and production operations.
        </p>
      </Link>

      <Link
        href="/blog/agentic-ai"
        className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-xl"
      >
        <p className="text-sm text-blue-600 font-semibold">
          DevOps • AI
        </p>

        <h3 className="mt-3 text-3xl font-bold">
          Building Safer and Smarter DevOps Workflows with Agentic AI
        </h3>

        <p className="mt-4 text-gray-600">
          My Week 2 engineering reflection covering Claude Code, Skills, MCP,
          Hooks and AI-assisted development.
        </p>
      </Link>

    </div>

  </div>

</section>

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