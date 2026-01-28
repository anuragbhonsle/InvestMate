import React from "react";
import { Link } from "react-router-dom";
import BackgroundWrapper from "./components/BackgroundWrapper.jsx";

export default function LandingPage() {
  return (
    <BackgroundWrapper>
      <div>
        {/* GitHub link at top-right */}
        <a
          href="https://github.com/anuragbhonsle"
          target="_blank"
          rel="noopener noreferrer"
          className="
    absolute top-5 right-5 z-30
    p-2 rounded-full
    bg-black/40 hover:bg-black/70
    transition-all duration-300
    hover:scale-110 hover:shadow-[0_0_12px_rgba(255,255,255,0.4)]

  "
          title="GitHub Source"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white/90 hover:text-white-400 transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.1-.75.08-.74.08-.74 1.22.08 1.86 1.26 1.86 1.26 1.08 1.85 2.84 1.32 3.54 1.01.11-.79.42-1.32.76-1.63-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.51.12-3.15 0 0 1.01-.32 3.3 1.23a11.46 11.46 0 013-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.64.24 2.85.12 3.15.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="max-w-2xl space-y-6">
          <h1
            className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg lg:whitespace-nowrap"
            style={{
              fontFamily: "Inter",
              textShadow:
                window.innerWidth >= 640
                  ? `
      0 0 4px rgba(255, 255, 255, 0.7),
      0 0 10px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.3)
    `
                  : "0 0 2px rgba(0,0,0,0.2)", // subtle fallback on small screens
            }}
          >
            Investment Calculator
          </h1>

          <p className="font-inter italic text-sm sm:text-lg lg:text-base text-zinc-200 leading-relaxed">
            Visualize how your money can grow over time with compound interest.
          </p>
          <Link
            to="/app"
            className="inline-flex items-center justify-center rounded-full border border-white/20
                       bg-white px-8 py-3 text-base font-semibold text-zinc-900
                       shadow-lg shadow-white/20 transition
                       hover:bg-white/90 hover:shadow-white/40
                       focus:outline-none focus:ring-2 focus:ring-white/60 font-inter"
          >
            Go to Calculator
          </Link>
        </div>
      </main>

      <footer className="absolute bottom-4 w-full text-center text-sm text-white">
        © 2026 Investment Calculator · Built by{" "}
        <a
          href="https://x.com/Anuraaaag7"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          Anurag
        </a>
      </footer>
    </BackgroundWrapper>
  );
}
