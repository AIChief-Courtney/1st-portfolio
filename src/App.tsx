import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="w-[170px] h-[179px]" alt="" />
          <img
            src={reactLogo}
            alt="React logo"
            className="absolute -left-12 top-4 w-16 animate-spin"
          />
          <img
            src={viteLogo}
            alt="Vite logo"
            className="absolute -right-12 top-4 w-16"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl font-bold">Get Started</h1>
          <p className="text-lg text-gray-600">
            Edit <code className="bg-gray-100 px-1 rounded">src/App.tsx</code>
            and save to test
            <code className="bg-gray-100 px-1 rounded">HMR</code>
          </p>
        </div>
        <button
          type="button"
          onClick={() => setCount((count) => count + 1)}
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Count is {count}
        </button>
      </section>
      <div className="border-t border-gray-200"></div>
      <section
        id="next-steps"
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 py-16"
      >
        <div className="p-6 border rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Documentation</h2>
          <p className="text-gray-500 mb-6">Your questions, answered</p>
          <ul className="space-y-3">
            <li>
              <a
                href="https://vite.dev/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-blue-600 hover:underline"
              >
                <img src={viteLogo} alt="" className="w-6 h-6" /> Explore Vite
              </a>
            </li>
            <li>
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-blue-600 hover:underline"
              >
                <img src={reactLogo} alt="" className="w-6 h-6" /> Learn More
              </a>
            </li>
          </ul>
        </div>
        <div className="p-6 border rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Connect with Us</h2>
          <p className="text-gray-500 mb-6"> Join the Vite community </p>
          <ul className="space-y-3">
            <li>
              <a
                href="https://github.com/vitejs/vite"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://chat.vite.dev/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                href="https://x.com/vite_js"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                X.com
              </a>
            </li>
            <li>
              <a
                href="https://bsky.app/profile/vite.dev"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div className="border-t border-gray-200"></div>
      <section id="spacer" className="h-24"></section>
    </>
  );
}

export default App;
