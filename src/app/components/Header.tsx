"use client";
import { useState } from "react";

export default function Header() {
  const [, setActiveSection] = useState("home");

  return (
    <header className="p-6 text-white flex justify-between fixed top-0 left-0 max-w-max z-50 bg-transparent backdrop-blur-md">
      <nav className="flex justify-start px-6">
        {["home", "about", "resume", "portfolio"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="ml-4 transition-colors duration-300 hover:text-[#6C3BAA]" 
            onClick={() => setActiveSection(section)} 
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>
    </header>
  );
}
