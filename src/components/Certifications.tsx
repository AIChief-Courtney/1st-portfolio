import { FaCheckCircle } from "react-icons/fa";

const certifications = [
  "AWS Certified Cloud Practitioner",
  "Google Generative AI",
  "OpenAI Prompt Engineering",
  "Microsoft Azure AI Engineer",
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-medium uppercase tracking-widest">
            Achievements
          </span>
          <h2 className="mt-4 text-5xl font-bold text-white">Certifications</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Verified professional certifications in AI, Cloud Computing, and
            Software Engineering.
          </p>
        </div>

        <div className="space-y-4">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="
                flex items-center gap-4
                p-5
                rounded-xl

                bg-slate-900
                border border-slate-800

                transition-all duration-300

                hover:border-cyan-500/50
                hover:bg-slate-800/80
                hover:translate-x-1
              "
            >
              <FaCheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />

              <span className="text-white font-medium">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
