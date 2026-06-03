export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/courtney_background.png"
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover scale-105 brightness-70"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/70 to-black" />

      {/* Glow Effects */}
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
      <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl animate-pulse" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {/* Badge */}
        <div className="mb-8 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-2 backdrop-blur-md">
          <span className="text-sm font-medium tracking-widest text-cyan-400 uppercase">
            AI Engineer • Full-Stack Developer
          </span>
        </div>

        {/* Heading */}
        <h1 className="max-w-6xl text-6xl font-black leading-none text-white md:text-8xl lg:text-9xl">
          Building
          <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Intelligent
          </span>
          <span className="block text-slate-100">AI Agents</span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
          Creating production-grade AI systems, RAG applications, autonomous
          workflows, scalable cloud platforms, and modern full-stack products
          that solve real-world problems.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-white shadow-2xl shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400"
          >
            Explore Projects
          </a>

          <a
            href="/resume.pdf"
            className="rounded-2xl border border-slate-600 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-white/10"
          >
            Download Resume
          </a>
        </div>

        {/* Tech Stack */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {[
            "React",
            "TypeScript",
            "Node.js",
            "Python",
            "LangChain",
            "OpenAI",
            "AWS",
            "Docker",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700 bg-slate-900/50 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm transition hover:border-cyan-400 hover:text-cyan-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 flex flex-col items-center">

          <div className="flex h-12 w-7 justify-center rounded-full border border-slate-500">
            <div className="mt-2 h-2 w-2 animate-bounce rounded-full bg-cyan-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
