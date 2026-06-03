import { FaPython, FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import { SiFastapi, SiOpenai, SiLangchain } from "react-icons/si";

const projects = [
  {
    title: "Enterprise RAG Platform",
    description:
      "Built a Retrieval-Augmented Generation system using OpenAI embeddings and vector databases.",
    tech: [
      <SiOpenai key="openai" />,
      <SiLangchain key="langchain" />,
      <FaPython key="python" />,
    ],
  },
  {
    title: "AI Resume Analyzer",
    description: "Developed an LLM-powered resume screening platform.",
    tech: [
      <FaReact key="react" />,
      <FaNodeJs key="node" />,
      <SiFastapi key="fastapi" />,
    ],
  },
  {
    title: "Customer Support Agent",
    description: "Created an autonomous AI chatbot reducing support workload.",
    tech: [
      <FaPython key="python2" />,
      <FaDocker key="docker" />,
      <FaAws key="aws" />,
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-white text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`
                relative p-8 rounded-2xl bg-slate-900 border border-slate-800
                transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20
                opacity-0 translate-y-10
                motion-safe:animate-[fadeIn_0.7s_ease_forwards]
                [animation-delay:${idx * 0.2}s]
              `}
            >
              {/* Project Title and Description */}
              <div className="mb-20">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {project.title}
                </h3>
                <p className="text-slate-400">{project.description}</p>
              </div>

              {/* Tech-stack Icons Fixed at Bottom */}
              <div className="absolute bottom-5 left-0 w-full flex justify-center gap-3">
                {project.tech.map((icon, techIdx) => (
                  <div
                    key={techIdx}
                    className="p-3 bg-slate-800 rounded-xl flex items-center justify-center text-white text-xl
                               transition-transform duration-300 hover:scale-125 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
