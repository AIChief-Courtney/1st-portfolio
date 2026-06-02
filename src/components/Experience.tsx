export default function Experience() {
  const jobs = [
    {
      role: "AI Engineer",
      company: "Tech Company",
      year: "2025-Present",
    },
    {
      role: "Software Engineer",
      company: "Nexora",
      year: "2023-2025",
    },
    {
      role: "Full-Stack Developer",
      company: "Microsoft",
      year: "2023-2025",
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>

        {jobs.map((job) => (
          <div key={job.role} className="mb-8 border-l-2 border-cyan-500 pl-6">
            <h3 className="text-2xl">{job.role}</h3>

            <p className="text-slate-400">{job.company}</p>

            <p>{job.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
