export default function AgenticAIPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <article className="space-y-8">

        <header>
          <p className="text-sm text-gray-500">
            Published: 11 July 2026 • 6 min read
          </p>

          <h1 className="text-5xl font-bold mt-3 mb-4">
            Building Safer and Smarter DevOps Workflows with Agentic AI
          </h1>

          <p className="text-xl text-gray-600">
            Week 2 Reflection – DevOps Micro Internship with Agentic AI
          </p>

          <div className="mt-6 rounded-xl bg-slate-100 dark:bg-slate-800 p-5">
            <strong>Topics:</strong> Claude Code • Skills • Subagents • MCP •
            Hooks • Permissions • Claude Memory • DevOps • Infrastructure as
            Code
          </div>
        </header>

        <section>
          <h2 className="mb-4 text-3xl font-bold">Introduction</h2>

          <p className="mb-4">
            Continuous learning has always been central to my career in IT.
            Having worked extensively with Microsoft 365 administration,
            identity and access management, endpoint management, Azure services,
            and cloud security technologies, I have learned that technical
            excellence comes from continually adapting to new tools, engineering
            practices, and emerging technologies.
          </p>

          <p>
            Week 2 of the DevOps Training on Agentic AI provided an
            excellent opportunity to explore how artificial intelligence can
            become an active participant in modern software engineering and
            infrastructure automation rather than simply serving as a
            conversational assistant.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">
            Claude Code as an Engineering Assistant
          </h2>

          <p className="mb-4">
            One of the most valuable experiences this week was working with
            Claude Code directly inside the development workflow. Rather than
            generating isolated code snippets, Claude Code became part of the
            engineering process by assisting with documentation, project
            navigation, troubleshooting, configuration, and infrastructure
            tasks.
          </p>

          <p>
            This reinforced an important principle: AI delivers the greatest
            value when combined with engineering judgement, verification, and
            structured workflows. The technology accelerates delivery, but
            responsibility for design, validation, and decision-making remains
            firmly with the engineer.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">
            Skills, Subagents and Modular Thinking
          </h2>

          <p className="mb-4">
            Another concept I found particularly valuable was the use of Skills
            and Subagents. Delegating specialised work to focused AI agents
            closely mirrors how experienced engineering teams organise expertise
            across infrastructure, security, automation, and operations.
          </p>

          <p>
            Breaking larger problems into smaller reusable workflows encourages
            modular thinking, improves maintainability, and creates solutions
            that can scale alongside increasingly complex projects.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">
            Working with Model Context Protocol (MCP)
          </h2>

          <p className="mb-4">
            Configuring Model Context Protocol (MCP) servers proved to be one of
            the most challenging aspects of the week. Since I was working within
            a managed Windows environment, I encountered differences in Docker
            configuration, package installation, Windows PATH configuration, and
            tooling compatibility compared to the standard course
            demonstrations.
          </p>

          <p className="mb-4">
            Although resolving these issues required additional investigation,
            they reflected real-world enterprise environments where engineers
            frequently adapt solutions to organisational standards instead of
            relying solely on tutorial examples.
          </p>

          <blockquote className="my-6 border-l-4 border-blue-600 pl-4 italic text-lg">
            "The most valuable learning often happens during troubleshooting
            rather than during successful execution."
          </blockquote>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">
            Hooks, Permissions and Safety Rails
          </h2>

          <p className="mb-4">
            Another highlight was implementing Hooks, Permissions, and Safety
            Rails within Claude Code. Configuring safeguards to prevent
            destructive commands demonstrated the importance of governance in
            AI-assisted engineering workflows.
          </p>

          <p>
            As organisations increasingly integrate AI into DevOps and cloud
            engineering, balancing automation with security, operational
            control, and responsible governance will become an essential
            engineering practice.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">
            Claude Memory
          </h2>

          <p>
            Exploring Claude Memory demonstrated how project-specific knowledge
            can persist across sessions. Retaining architectural decisions,
            project conventions, and implementation guidance improves
            consistency while reducing repetitive context-setting during
            long-term engineering projects.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">Key Takeaways</h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              AI is most effective when integrated into disciplined engineering
              workflows.
            </li>
            <li>
              Engineering judgement remains more important than automation
              alone.
            </li>
            <li>
              Security and governance must accompany every automated workflow.
            </li>
            <li>
              Real-world environments require adaptability beyond tutorial
              examples.
            </li>
            <li>
              Documenting implementation and troubleshooting accelerates
              continuous learning.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">Looking Ahead</h2>

          <p className="mb-4">
            As I continue developing my expertise in DevOps, Cloud Engineering,
            and Cloud Security, I see Agentic AI becoming an important
            complement to my existing Microsoft cloud experience. Combining
            Infrastructure as Code, automation, and AI-assisted engineering has
            significant potential to improve productivity, consistency, and
            operational quality when implemented with appropriate governance.
          </p>

          <p>
            Week 2 has reinforced that successful AI adoption is not simply
            about using new tools. It is about integrating them into
            established engineering practices that prioritise security,
            maintainability, collaboration, and continuous improvement. Those
            principles will continue to guide my learning journey as I build
            expertise across Azure, DevOps, and cloud security.
          </p>
        </section>

        <hr className="my-10" />

        <footer className="text-center text-gray-500">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Olajide Kuti
          </h3>

          <p className="mt-2">
            Cloud Engineer • Microsoft Azure • Microsoft 365 • Cloud Security •
            DevOps • AI-Assisted Engineering
          </p>
        </footer>

      </article>
    </main>
  );
}