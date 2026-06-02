export default function Certifications() {
  const certs = [
    "AWS Certified Cloud Practitioner",
    "Google Generative AI",
    "OpenAI Prompt Engineering",
    "Microsoft Azure AI Engineer",
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Certifications</h2>

        <ul className="space-y-4">
          {certs.map((cert) => (
            <li key={cert}>✓ {cert}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
