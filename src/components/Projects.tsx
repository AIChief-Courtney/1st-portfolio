const projects = [
  {
    title: "Enterprise RAG Platform",
    description:
      "Built a Retrieval-Augmented Generation system using OpenAI embeddings and vector databases.",
  },
  {
    title: "AI Resume Analyzer",
    description: "Developed an LLM-powered resume screening platform.",
  },
  {
    title: "Customer Support Agent",
    description: "Created an autonomous AI chatbot reducing support workload.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-8 rounded-2xl bg-slate-900 border border-slate-800"
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

              <p className="text-slate-400">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
