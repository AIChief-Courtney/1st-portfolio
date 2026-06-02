import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 mt-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white mb-2">
            Get in Touch
          </h2>
          <p>
            Email:{" "}
            <a
              href="mailto:orion@example.com"
              className="text-cyan-400 hover:underline"
            >
              orion@example.com
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-2xl text-white">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-slate-500 text-sm">
        &copy; 2026 Orion Sterling. All rights reserved.
      </div>
    </footer>
  );
}
