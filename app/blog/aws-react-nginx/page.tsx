import Image from "next/image";

export default function AwsReactNginxPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <article className="space-y-10">

<header className="mb-16">
  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
    AWS • React • Ubuntu • Nginx • Linux
  </span>

  <h1 className="mt-6 text-5xl font-extrabold tracking-tight">
    Deploying a Production React Application on AWS EC2 Using Ubuntu & Nginx
  </h1>

  <p className="mt-6 max-w-3xl text-xl text-gray-600 leading-8">
    In this project I deployed a React application on an Ubuntu EC2 instance,
    configured Nginx as a production web server, validated the deployment using
    Linux networking tools, and resolved a deployment issue caused by an empty
    Nginx document root.
  </p>

  <div className="mt-8">
    <Image
      src="/images/blog/aws-react-nginx/react-app.png"
      alt="React application deployed on AWS"
      width={1200}
      height={650}
      className="rounded-2xl border shadow-xl"
    />
  </div>
</header>

        {/* ------------------------------------------------ */}

    <section className="grid gap-6 md:grid-cols-2 mb-16">

<div className="rounded-xl border p-6">
<h3 className="font-bold text-lg mb-4">
Project Overview
</h3>

<ul className="space-y-3">
<li>✔ Platform: AWS EC2</li>
<li>✔ Operating System: Ubuntu Server</li>
<li>✔ Frontend: React</li>
<li>✔ Web Server: Nginx</li>
<li>✔ Networking: Security Groups</li>
<li>✔ Validation: Linux CLI</li>
</ul>

</div>

<div className="rounded-xl border p-6">
<h3 className="font-bold text-lg mb-4">
Skills Demonstrated
</h3>

<div className="flex flex-wrap gap-2">

<span className="badge">AWS</span>
<span className="badge">Linux</span>
<span className="badge">Nginx</span>
<span className="badge">React</span>
<span className="badge">SSH</span>
<span className="badge">Networking</span>
<span className="badge">Deployment</span>

</div>

</div>

</section>

        {/* ------------------------------------------------ */}

        <section>
  <h2 className="text-3xl font-bold mb-6">Architecture Overview</h2>

  <div className="rounded-xl border bg-white dark:bg-slate-900 p-8 overflow-x-auto">
    <svg
      viewBox="0 0 900 420"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="arrow"
          markerWidth="10"
          markerHeight="10"
          refX="5"
          refY="5"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 Z" fill="#64748b" />
        </marker>
      </defs>

      {/* Internet */}
      <rect x="320" y="20" width="260" height="50" rx="10" fill="#2563eb" />
      <text x="450" y="52" textAnchor="middle" fill="white" fontSize="18">
        Internet
      </text>

      {/* Security Group */}
      <line x1="450" y1="70" x2="450" y2="105" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

      <rect x="280" y="110" width="340" height="60" rx="10" fill="#0f766e" />
      <text x="450" y="145" textAnchor="middle" fill="white" fontSize="18">
        AWS Security Group (HTTP 80 / SSH 22)
      </text>

      {/* Ubuntu */}
      <line x1="450" y1="170" x2="450" y2="205" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

      <rect x="300" y="210" width="300" height="60" rx="10" fill="#ea580c" />
      <text x="450" y="245" textAnchor="middle" fill="white" fontSize="18">
        Ubuntu EC2 Server
      </text>

      {/* Left */}
      <line x1="380" y1="270" x2="250" y2="320" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
      <rect x="120" y="320" width="220" height="60" rx="10" fill="#7c3aed" />
      <text x="230" y="355" textAnchor="middle" fill="white" fontSize="18">
        systemd
      </text>

      {/* Right */}
      <line x1="520" y1="270" x2="650" y2="320" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

      <rect x="560" y="320" width="240" height="60" rx="10" fill="#0284c7" />
      <text x="680" y="355" textAnchor="middle" fill="white" fontSize="18">
        Nginx → React Build
      </text>
    </svg>
  </div>

  <p className="mt-6">
    User requests flow from the Internet through an AWS Security Group to an Ubuntu EC2 instance. Nginx serves the React production build, while systemd manages the web server process to ensure reliable operation.
  </p>
</section>

        {/* ------------------------------------------------ */}

        <section>

          <h2 className="text-3xl font-bold mb-5">
            Building for Production
          </h2>

          <p className="mb-5">
            React applications aren't deployed directly from source code.
            Development files must first be compiled into an optimized production
            build.
          </p>

<pre className="bg-slate-900 text-green-300 rounded-xl p-5 overflow-x-auto">
{`npm install
npm run build`}
</pre>

          <p className="mt-5">
            The build process generated compressed JavaScript, CSS and HTML assets
            designed for performance and browser caching. Those static files were
            then copied into Nginx's document root where they could be served
            efficiently to clients.
          </p>

        </section>

        {/* ------------------------------------------------ */}

        <section>

          <h2 className="text-3xl font-bold mb-5">
            Why Nginx?
          </h2>

          <p className="mb-5">
            During development, React provides its own development server.
            Production environments require something different a lightweight,
            performant web server capable of efficiently serving static assets.
          </p>

          <p className="mb-5">
            Nginx fulfils this role exceptionally well. It provides fast request
            handling, low memory consumption and robust support for production
            workloads.
          </p>

          <blockquote className="border-l-4 border-blue-600 pl-5 italic text-lg">
            Choosing the correct web server isn't simply about serving files.
            It's about reliability, performance and operational simplicity.
          </blockquote>

        </section>

        {/* ------------------------------------------------ */}

        <section>

          <h2 className="text-3xl font-bold mb-5">
            Solving React Routing with Nginx
          </h2>

          <p className="mb-5">
            One of the most interesting aspects of the deployment involved
            supporting client-side routing.
          </p>

          <p className="mb-5">
            Without additional configuration, navigating directly to routes such as
            <code className="mx-1">/about</code> would result in a 404 error because
            Nginx attempts to locate a physical file rather than allowing React
            Router to handle navigation.
          </p>

<pre className="bg-slate-900 text-green-300 rounded-xl p-5 overflow-x-auto">
{`location / {
    try_files $uri /index.html;
}`}
</pre>

          <p className="mt-5">
            This small configuration change delegates routing back to React,
            allowing deep links and browser refreshes to function correctly.
          </p>

        </section>

        {/* ------------------------------------------------ */}

        <section>

          <h2 className="text-3xl font-bold mb-5">
            Operating the Application
          </h2>

          <p className="mb-5">
            Successfully deploying an application provides only limited assurance.
            Operational confidence comes from understanding the health of the
            underlying platform.
          </p>

<pre className="bg-slate-900 text-green-300 rounded-xl p-5 overflow-x-auto">
{`systemctl status nginx
journalctl -u nginx
ps aux | grep nginx
ss -tuln
df -h
free -h`}
</pre>

          <p className="mt-5">
            Each command answers a different operational question:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Is the service running?</li>
            <li>Did it start successfully?</li>
            <li>Which ports are listening?</li>
            <li>Are resources becoming constrained?</li>
            <li>Are logs reporting unexpected failures?</li>
          </ul>

        </section>

        {/* ------------------------------------------------ */}

        <section>

          <h2 className="text-3xl font-bold mb-5">
            Looking Beyond "It Works"
          </h2>

          <p className="mb-5">
            Opening a webpage confirms only one thing:
          </p>

          <blockquote className="border-l-4 border-green-600 pl-5 italic text-lg">
            A single HTTP request completed successfully.
          </blockquote>

          <p className="mt-5 mb-5">
            It tells us nothing about long-term reliability.
          </p>

          <p>
            Engineers must also consider service recovery, log analysis,
            configuration validation, process health, networking, disk
            utilisation, memory consumption and application observability.
          </p>

        </section>

        {/* ------------------------------------------------ */}

        <section>

          <h2 className="text-3xl font-bold mb-5">
            The Lesson That Changed My Perspective
          </h2>

          <p className="mb-5">
            Before completing this deployment, I viewed Linux primarily as the
            platform hosting an application.
          </p>

          <p className="mb-5">
            This project shifted that perspective.
          </p>

          <p className="mb-5">
            Linux is not simply the environment where applications execute it is
            the operational foundation that enables reliability.
          </p>

          <p className="mb-5">
            Users never see Nginx worker processes, systemd services, TCP sockets,
            file permissions or application logs.
          </p>

          <p>
            They simply expect a website to load.
          </p>

          <blockquote className="border-l-4 border-purple-600 pl-5 italic text-lg mt-6">
            Users experience outcomes.
            Engineers understand the systems that produce those outcomes.
          </blockquote>

        </section>

        {/* ------------------------------------------------ */}

        <section>

          <h2 className="text-3xl font-bold mb-5">
            Key Technical Takeaways
          </h2>

          <ul className="list-disc pl-6 space-y-3">
            <li>
              Building applications and operating applications require different
              engineering mindsets.
            </li>

            <li>
              Nginx remains an excellent lightweight solution for serving
              production-ready React applications.
            </li>

            <li>
              Understanding Linux services is just as important as understanding
              application code.
            </li>

            <li>
              Observability through logs, monitoring and process inspection is
              fundamental to production operations.
            </li>

            <li>
              Every deployment should be designed with recovery, validation and
              maintainability in mind.
            </li>

          </ul>

        </section>

        {/* ------------------------------------------------ */}

        <section>

          <h2 className="text-3xl font-bold mb-5">
            Looking Ahead
          </h2>

          <p className="mb-5">
            This deployment represents one milestone in a broader engineering
            journey.
          </p>

          <p className="mb-5">
            The next phase involves expanding into Infrastructure as Code,
            containerisation, CI/CD pipelines, cloud monitoring, automation and
            cloud security.
          </p>

          <p>
            Every project continues reinforcing an important lesson:
            successful cloud engineering is rarely about mastering a single tool.
            It is about understanding how infrastructure, operating systems,
            networking, security and applications work together to deliver
            reliable services.
          </p>

        </section>

        <hr className="my-12" />

        <footer className="text-center text-gray-500">

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Olajide Kuti
          </h3>

          <p className="mt-3">
            Cloud Engineer • Microsoft Azure • AWS • Linux • DevOps •
            Cloud Security • AI-Assisted Engineering
          </p>

        </footer>

      </article>
    </main>
  );
}