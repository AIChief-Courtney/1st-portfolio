import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiFastapi,
  SiOpenai,
  SiLangchain,
  SiPostgresql,
  SiMongodb,
  SiRedis,
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython size={28} className="text-yellow-400" /> },
  {
    name: "TypeScript",
    icon: <SiTypescript size={28} className="text-blue-500" />,
  },
  { name: "React", icon: <FaReact size={28} className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs size={28} className="text-green-500" /> },
  { name: "FastAPI", icon: <SiFastapi size={28} className="text-teal-400" /> },
  {
    name: "OpenAI API",
    icon: <SiOpenai size={28} className="text-pink-500" />,
  },
  {
    name: "LangChain",
    icon: <SiLangchain size={28} className="text-purple-500" />,
  },
  { name: "RAG", icon: <SiOpenai size={28} className="text-purple-300" /> },
  {
    name: "Vector Databases",
    icon: <SiPostgresql size={28} className="text-blue-700" />,
  },
  {
    name: "Prompt Engineering",
    icon: <SiOpenai size={28} className="text-pink-400" />,
  },
  { name: "Docker", icon: <FaDocker size={28} className="text-blue-600" /> },
  { name: "AWS", icon: <FaAws size={28} className="text-orange-400" /> },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={28} className="text-blue-700" />,
  },
  { name: "MongoDB", icon: <SiMongodb size={28} className="text-green-600" /> },
  { name: "Redis", icon: <SiRedis size={28} className="text-red-500" /> },
  {
    name: "GitHub Actions",
    icon: <FaGithub size={28} className="text-gray-300" />,
  },
];

export default function Skills() {
  return (
    <section className="py-24 bg-black" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-white text-center">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center p-5 rounded-xl bg-slate-900 border border-slate-700 transform transition duration-500 hover:scale-110 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 hover:text-white cursor-pointer"
              style={{
                animation: `fadeIn 0.5s ease ${(idx + 1) * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              <div className="mb-2">{skill.icon}</div>
              <span className="text-white font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Custom Keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            to { opacity: 1; transform: translateY(0); }
            from { opacity: 0; transform: translateY(20px); }
          }
        `}
      </style>
    </section>
  );
}
