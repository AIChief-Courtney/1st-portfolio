export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-b from-black via-slate-950 to-black"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-cyan-400 font-medium uppercase tracking-[0.3em]">
          Contact
        </span>

        <h2 className="mt-4 text-5xl md:text-6xl font-bold text-white">
          Let's Build Something
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Extraordinary
          </span>
        </h2>

        <p className="mt-8 text-lg text-slate-400 max-w-2xl mx-auto">
          Available for AI Engineering, Full-Stack Development, AI Products,
          SaaS Platforms, and Consulting Projects.
        </p>

        <div className="mt-14">
          <a
            href="mailto:you@example.com"
            className="
              group
              relative
              inline-flex
              items-center
              justify-center

              overflow-hidden

              rounded-2xl

              px-10
              py-5

              font-semibold
              text-white

              transition-all
              duration-500

              hover:-translate-y-1
              hover:scale-105
            "
          >
            {/* Animated Background */}

            <span
              className="
                absolute
                inset-0

                bg-gradient-to-r
                from-cyan-500
                via-blue-500
                to-purple-500

                transition-all
                duration-700

                group-hover:scale-110
              "
            />

            {/* Glow */}

            <span
              className="
                absolute
                -inset-1

                rounded-2xl

                bg-gradient-to-r
                from-cyan-500
                via-blue-500
                to-purple-500

                blur-xl
                opacity-40

                transition-all
                duration-700

                group-hover:opacity-80
              "
            />

            {/* Shine Effect */}

            <span
              className="
                absolute
                inset-0

                -translate-x-full
                skew-x-12

                bg-gradient-to-r
                from-transparent
                via-white/30
                to-transparent

                transition-transform
                duration-1000

                group-hover:translate-x-full
              "
            />

            {/* Content */}

            <span className="relative z-10 flex items-center gap-3">
              Contact Me
              <svg
                className="
                  h-5
                  w-5

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
