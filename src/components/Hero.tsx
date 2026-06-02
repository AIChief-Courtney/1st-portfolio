export default function Hero() {
  return (
    <>
      <section>
        <img
          src={"./courtney.png"}
          alt="Hero"
        />
      </section>
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-bold">
            Building
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              AI Products
            </span>
          </h1>

          <p className="mt-8 text-xl text-slate-300 max-w-3xl mx-auto">
            AI Engineer specializing in LLMs, RAG Systems, Prompt Engineering,
            Vector Databases, Full-Stack Development, and AI Automation.
          </p>

          <div className="mt-12 flex justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="px-8 py-4 rounded-xl border border-slate-700"
            >
              Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
