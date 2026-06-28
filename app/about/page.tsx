export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Page Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-500 mb-12">
          About Me
        </h1>

        {/* Welcome */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">
            Welcome
          </h2>

          <p className="text-lg leading-9 text-gray-300">
            Hello, I'm{" "}
            <span className="font-semibold text-white">
              Olajide Kuti
            </span>.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-300">
            Welcome to my blog, a place where I document my journey into cloud
            security, share practical technical knowledge, and support others
            who are following a similar path.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-300">
            I believe that consistency, curiosity, and continuous learning are
            the foundations of a successful technology career.
          </p>
        </section>

        {/* Journey */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">
            My Journey
          </h2>

          <p className="text-lg leading-9 text-gray-300">
            My professional journey began in IT support, where I developed a
            strong understanding of Microsoft technologies, troubleshooting,
            and supporting business users.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-300">
            As I gained experience, I became increasingly interested in cloud
            computing and cybersecurity. Rather than simply reading about new
            technologies, I committed to learning through hands-on practice,
            building projects, and continuously improving my skills.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-300">
            Today, I continue to expand my knowledge of Microsoft Azure,
            Microsoft Defender, Microsoft Sentinel, Identity and Access
            Management, DevSecOps, Infrastructure as Code, automation, and
            cloud governance while documenting what I learn along the way.
          </p>
        </section>

        {/* Topics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">
            What You'll Find Here
          </h2>

          <div className="grid gap-5 md:grid-cols-2">

            {[
              "☁️ Microsoft Azure",
              "🔐 Cloud Security",
              "🛡 Microsoft Defender",
              "📊 Microsoft Sentinel",
              "👤 Identity & Access Management",
              "⚙️ Infrastructure as Code",
              "🔄 DevSecOps",
              "🚀 Career Development",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-gray-800 bg-gray-900 px-6 py-5 text-lg text-gray-200 transition hover:border-blue-500 hover:bg-gray-800"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">
            My Vision
          </h2>

          <p className="text-lg leading-9 text-gray-300">
            My vision is to help organisations embrace cloud technologies with
            confidence by designing secure, efficient, and resilient solutions
            that protect their people, data, and infrastructure.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-300">
            Through this blog, I aim to simplify cloud security concepts,
            document practical projects, share real-world experiences, and
            support professionals who are transitioning into cybersecurity.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-300">
            I hope the knowledge shared here encourages continuous learning,
            strengthens technical confidence, and demonstrates that consistent
            effort is one of the most valuable investments anyone can make in
            their career.
          </p>
        </section>

        {/* Philosophy */}
        <section className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-10 shadow-2xl mb-16">
          <h2 className="text-3xl font-bold mb-6">
            My Philosophy
          </h2>

          <blockquote className="text-2xl italic font-medium leading-relaxed">
            “Success is rarely the result of one extraordinary moment.
            It is built through small, disciplined actions repeated
            consistently over time.”
          </blockquote>

          <p className="mt-6 text-right text-lg text-blue-100 font-semibold">
            — Olajide Kuti
          </p>
        </section>

        {/* Thank You */}
        <section>
          <h2 className="text-3xl font-bold text-blue-400 mb-6">
            Thank You
          </h2>

          <p className="text-lg leading-9 text-gray-300">
            Thank you for taking the time to visit my blog.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-300">
            Whether you're beginning your cloud security journey, preparing for
            Microsoft certifications, or looking to strengthen your Azure
            security knowledge, I hope you'll find practical insights,
            encouragement, and useful resources here.
          </p>

          <p className="mt-10 text-xl font-semibold text-blue-500">
            — Olajide Kuti
          </p>
        </section>

      </div>
    </main>
  );
}