'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaLinkedin, FaPinterest, FaInstagram } from 'react-icons/fa';

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            section.querySelectorAll('.hero-name'),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 }
          );

          gsap.fromTo(
            section.querySelectorAll('.hero-surname'),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.3 }
          );

          gsap.fromTo(
            section.querySelectorAll('.hero-title'),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.6 }
          );

          gsap.fromTo(
            section.querySelectorAll('.hero-buttons'),
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.9, stagger: 0.2 }
          );

          gsap.fromTo(
            section.querySelectorAll('.hero-social a'),
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 1.2, stagger: 0.2 }
          );
        } else {
          section.querySelectorAll('.hero-name').forEach(el =>
            gsap.set(el, { y: 50, opacity: 0 })
          );
          section.querySelectorAll('.hero-surname').forEach(el =>
            gsap.set(el, { y: 50, opacity: 0 })
          );
          section.querySelectorAll('.hero-title').forEach(el =>
            gsap.set(el, { y: 50, opacity: 0 })
          );
          section.querySelectorAll('.hero-buttons').forEach(el =>
            gsap.set(el, { y: 30, opacity: 0 })
          );
          section.querySelectorAll('.hero-social a').forEach(el =>
            gsap.set(el, { y: 20, opacity: 0 })
          );
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
      observer.disconnect();
    };
  }, []);

  return (
    <main ref={heroRef}>
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
        <h2 className="hero-name text-2xl md:text-5xl mb-1">Hera</h2>
        <h1 className="hero-surname text-5xl md:text-7xl font-bold mb-4">
          Sadikaj
        </h1>
        <h3 className="hero-title text-2xl md:text-4xl mb-8">
          Web Developer
        </h3>

        <div className="hero-buttons flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="https://github.com/herasadikaj"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-transparent border-2 border-[#d7bbfa] text-white rounded-full hover:border-[#6C3BAA] w-[250px] sm:w-[200px] text-lg"
          >
            Portfolio
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-transparent border-2 border-[#d7bbfa] text-white rounded-full hover:border-[#6C3BAA] w-[250px] sm:w-[200px] text-lg"
          >
            Resume
          </a>
        </div>

        <div className="hero-social mt-12 flex gap-8 justify-center text-4xl">
          <a
            href="https://www.linkedin.com/in/hera-sadikaj-832136245/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform text-white"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.pinterest.com/herasadikaj/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform text-white"
          >
            <FaPinterest />
          </a>

          <a
            href="https://www.instagram.com/hera.sadikaj/?next=%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform text-white"
          >
            <FaInstagram />
          </a>
        </div>
      </section>
    </main>
  );
}
