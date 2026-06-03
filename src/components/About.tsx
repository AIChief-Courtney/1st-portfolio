export default function About() {
  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src="/Handsome_courtney.png"
            alt="Courtney Sterling"
            className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover ring-4 ring-cyan-500/30 shadow-lg transform transition-transform duration-500 hover:scale-105 animate-fade-in"
          />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white animate-slide-in-left">
            About Me
          </h2>
          <p className="text-slate-300 text-lg leading-8 animate-fade-in delay-100">
            Hi, I'm Courtney. I'm a senior AI and Full-Stack engineer with 11+
            years of experience building AI solutions, web applications, and
            backend systems. As an AI Engineer, I specialize in integration and
            deployment, working with Machine Learning, Deep Learning, and Large
            Language Model development. My tech stack includes Python,
            TensorFlow, PyTorch, LangChain, Hugging Face, and OpenAI APIs. For
            frontend, I work with React, Next.js, Vue.js, JavaScript,
            TypeScript, HTML, and CSS. For backend, I utilize Python, Node.js,
            Django, FastAPI, and Express.js.
          </p>
          <p className="text-slate-300 text-lg leading-8 mt-4 animate-fade-in delay-200">
            I also have extensive experience with databases like MySQL, MongoDB,
            Redis, and CI/CD pipelines for deployment and infrastructure
            management. My AI work includes LLM-powered chat apps, AI agents,
            recommendation systems, NLP solutions, automation tools,
            document-processing systems, and predictive models. I’m skilled in
            model training, fine-tuning, prompt engineering, vector databases,
            RAG systems, embeddings, and integrating AI workflows into web
            applications.
          </p>
        </div>
      </div>
    </section>
  );
}
