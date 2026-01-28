"use client";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Header() {
  const [, setActiveSection] = useState("home");
  const headerRef = useRef<HTMLDivElement | null>(null);
  const lastScroll = useRef(0);

  useEffect(() => {
    if (!headerRef.current) return;

    gsap.from(headerRef.current, { y: -50, opacity: 0, duration: 1, ease: "power2.out" });

    const links = headerRef.current.querySelectorAll("a");
    gsap.from(links, { y: -20, opacity: 0, stagger: 0.1, duration: 0.6, ease: "power2.out" });

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (!headerRef.current) return;

      if (currentScroll > lastScroll.current) {
        gsap.to(headerRef.current, { y: -100, duration: 0.5, ease: "power2.out" });
      } else {
        gsap.to(headerRef.current, { y: 0, duration: 0.5, ease: "power2.out" });
      }
      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="p-6 text-white flex justify-between fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md"
    >
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