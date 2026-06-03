const jobs = [
  {
    role: "Senior AI Engineer",
    company: "Meta",
    year: "2025 - Present",
    logo: "/meta_logo.png",
    description:
      "Built enterprise RAG systems, AI agents, vector search infrastructure, and LLM-powered SaaS platforms.",
  },
  {
    role: "Software Engineer",
    company: "NVIDIA",
    year: "2023 - 2025",
    logo: "/nvidia_logo.png",
    description:
      "Developed scalable full-stack applications using React, TypeScript, Node.js, and cloud services.",
  },
  {
    role: "Full-Stack Developer",
    company: "Microsoft",
    year: "2021 - 2023",
    logo: "/microsoft_logo.png",
    description:
      "Created enterprise-grade web platforms and internal productivity solutions.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 bg-gradient-to-b from-black via-slate-950 to-black"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-4">Experience</h2>

          <p className="text-slate-400 text-lg">
            Building AI products and modern web applications.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500" />

          <div className="space-y-12">
            {jobs.map((job) => (
              <div
                key={`${job.company}-${job.role}`}
                className="group relative pl-24"
              >
                {/* Logo Avatar */}

                <div className="absolute left-0 top-0">
                  <div
                    className="
                    h-16 w-16
                    rounded-2xl
                    bg-slate-900
                    border border-slate-700
                    shadow-xl
                    flex items-center justify-center
                    transition-all duration-500
                    group-hover:scale-110
                    group-hover:border-cyan-400
                    group-hover:shadow-cyan-500/20
                  "
                  >
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>

                {/* Card */}

                <div
                  className="
                  bg-slate-900/70
                  backdrop-blur-xl
                  border border-slate-800
                  rounded-3xl
                  p-8
                  transition-all duration-500
                  hover:border-cyan-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                  hover:shadow-cyan-500/10
                "
                >
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-white">
                      {job.role}
                    </h3>

                    <span className="text-cyan-400 font-medium">
                      {job.company}
                    </span>

                    <span className="text-slate-500">{job.year}</span>
                  </div>

                  <p className="text-slate-400 leading-8">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
