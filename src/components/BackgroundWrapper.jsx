// src/components/BackgroundWrapper.jsx
import React from "react";
import cat from "../assets/cat.gif";

export default function BackgroundWrapper({ children }) {
  return (
    <div className="relative min-h-screen w-full">
      {/* Fixed GIF Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <img
          src={cat}
          alt="background"
          className="w-full h-full object-cover pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
