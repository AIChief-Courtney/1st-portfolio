const skills = [
  "Python",
  "TypeScript",
  "React",
  "Node.js",
  "FastAPI",
  "OpenAI API",
  "LangChain",
  "RAG",
  "Vector Databases",
  "Prompt Engineering",
  "Docker",
  "AWS",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "GitHub Actions",
];

export default function Skills() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Technical Skills</h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-5 py-3 rounded-lg bg-slate-900 border border-slate-700"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
