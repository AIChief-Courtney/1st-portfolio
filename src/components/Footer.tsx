import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-slate-800">
      {/* Gradient Line */}

      <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left */}

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-3">
              Let's Build Something Amazing
            </h3>

            <p className="text-slate-400">
              AI Engineering • Full-Stack Development • AI Consulting
            </p>

            <a
              href="mailto:orion@example.com"
              className="
                inline-flex
                mt-5

                text-cyan-400
                font-medium

                transition-colors
                duration-300

                hover:text-cyan-300
              "
            >
              orion@example.com
            </a>
          </div>

          {/* Right */}

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                group

                flex
                h-12
                w-12
                items-center
                justify-center

                rounded-xl

                bg-slate-900
                border
                border-slate-800

                text-slate-300

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-cyan-500/50
                hover:text-cyan-400
                hover:shadow-lg
                hover:shadow-cyan-500/20
              "
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center

                rounded-xl

                bg-slate-900
                border
                border-slate-800

                text-slate-300

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-cyan-500/50
                hover:text-cyan-400
                hover:shadow-lg
                hover:shadow-cyan-500/20
              "
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center

                rounded-xl

                bg-slate-900
                border
                border-slate-800

                text-slate-300

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-cyan-500/50
                hover:text-cyan-400
                hover:shadow-lg
                hover:shadow-cyan-500/20
              "
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2026 Orion Sterling. All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}