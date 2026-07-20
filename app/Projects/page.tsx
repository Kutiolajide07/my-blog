import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "AWS React Deployment",
      description:
        "Deploying a production-ready React application on AWS EC2 using Ubuntu, Nginx and Linux.",
      tech: "AWS • React • Ubuntu • Nginx",
      href: "/blog/aws-react-nginx",
      status: "Completed",
    },
    {
      title: "Azure Monitoring Lab",
      description:
        "Azure Monitor, Log Analytics, Azure Monitor Agent and Data Collection Rules.",
      tech: "Azure • AMA • DCR",
      status: "Coming Soon",
    },
    {
      title: "Microsoft Sentinel SOC Lab",
      description:
        "Threat hunting, KQL queries and incident investigation.",
      tech: "Microsoft Sentinel • KQL",
      status: "Coming Soon",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <header className="mb-12">
        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          Engineering Portfolio
        </span>

        <h1 className="mt-6 text-5xl font-bold">
          Projects
        </h1>

        <p className="mt-4 max-w-3xl text-xl text-gray-600">
          Practical cloud engineering, DevOps and security projects documenting
          my learning journey and hands-on experience.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border p-8 shadow-sm hover:shadow-lg transition"
          >
            <p className="text-sm font-semibold text-blue-600">
              {project.tech}
            </p>

            <h2 className="mt-4 text-2xl font-bold">
              {project.title}
            </h2>

            <p className="mt-4 text-gray-600">
              {project.description}
            </p>

            <div className="mt-6">
              {project.href ? (
                <Link
                  href={project.href}
                  className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
                >
                  Read Case Study →
                </Link>
              ) : (
                <span className="font-semibold text-gray-500">
                  {project.status}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}