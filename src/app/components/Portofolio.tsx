
'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import Projects from '../data/projects';

gsap.registerPlugin(TextPlugin);

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const title = section.querySelector('.projects-title');

        if (entry.isIntersecting) {
          if (title) {
            const text = title.textContent || '';
            title.textContent = '';

            gsap.to(title, {
              duration: 1.2,
              text,
              ease: 'none',
            });
          }

          gsap.fromTo(
            section.querySelectorAll('.project-card'),
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 }
          );

          gsap.fromTo(
            section.querySelectorAll('.project-index'),
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, stagger: 0.2, ease: 'back.out(1.7)' }
          );
        } else {
          gsap.set(section.querySelectorAll('.project-card'), {
            y: 30,
            opacity: 0,
          });

          gsap.set(section.querySelectorAll('.project-index'), {
            scale: 0,
            opacity: 0,
          });

          if (title) title.textContent = 'PROJECTS';
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-background text-foreground mt-6 mb-6 sm:mt-8 sm:mb-8"
    >
      <h1 className="text-5xl font-bold mb-12 border-b border-white inline-block">
        <span className="projects-title">PROJECTS</span>
      </h1>

      <div className="flex gap-8 justify-center flex-wrap">
        {Projects.map((project, index) => (
          <div
            key={index}
            className="project-card relative w-[300px] bg-background p-6 rounded-lg hover:scale-105 transition"
            style={{
              border: '4px solid #6C3BAA',
              boxShadow: '0 4px 10px rgba(0,0,0,0.6)',
            }}
          >
            <div className="project-index absolute text-[#6C3BAA] text-5xl font-bold -top-6 left-4 bg-background px-2">
              {String(index + 1).padStart(2, '0')}
            </div>

            <h2 className="text-2xl font-semibold text-white mb-4 mt-6">
              {project.name}
            </h2>

            <p className="text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}