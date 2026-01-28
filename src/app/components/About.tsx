
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function About() {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!aboutRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const section = aboutRef.current;
          if (!section) return;

          const ctx = gsap.context(() => {
            gsap.fromTo(
              section.querySelectorAll(".about-card"),
              { y: 100, opacity: 0, scale: 0.8 },
              { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.7)" }
            );

            gsap.fromTo(
              section.querySelectorAll(".about-title"),
              { x: -50, opacity: 0 },
              { x: 0, opacity: 1, duration: 1, delay: 0.2 }
            );

            gsap.fromTo(
              section.querySelectorAll(".about-text"),
              { x: -30, opacity: 0 },
              { x: 0, opacity: 1, duration: 1, delay: 0.4, stagger: 0.2 }
            );

            gsap.fromTo(
              section.querySelectorAll(".about-info-item"),
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, delay: 0.6, stagger: 0.2 }
            );
          }, section);

          return () => ctx.revert();
        }
      },
      { threshold: 0.3 } 
    );

    observer.observe(aboutRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <section
      ref={aboutRef}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <div className="about-card">
        <h1 className="about-title text-5xl font-bold mb-4 border-b border-white inline-block">
          ABOUT
        </h1>

        <p className="about-text max-w-2xl text-lg text-white mx-auto mb-4">
          Software developer with a Bachelor degree in Computer Science, with a
          strong focus on React and Next.js. Eager to deepen my knowledge of
          JavaScript technologies and grow my skills in software development.
        </p>

        <a
          href="mailto:hera.sadikaj@yahoo.com"
          className="about-info-item text-[#6C3BAA] hover:text-[#d7bbfa] mb-4"
        >
          sadikajhera@gmail.com
        </a>

        <p className="about-info-item text-white">-Tirana, Albania-</p>
      </div>
    </section>
  );
}