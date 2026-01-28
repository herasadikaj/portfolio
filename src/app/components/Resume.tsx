
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Skills from "../data/skills";
import Web from "../data/web";
import Experience from "../data/experience";
import Hobbies from "../data/hobbies";

const Resume = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const section = sectionRef.current;
          if (!section) return;

          const ctx = gsap.context(() => {
            gsap.fromTo(
              section.querySelectorAll(".section-title"),
              { y: -20, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" }
            );

            gsap.fromTo(
              section.querySelectorAll(".skill-bar-inner"),
              { scaleX: 0, transformOrigin: "left", opacity: 0 },
              { scaleX: 1, opacity: 1, duration: 1, stagger: 0.1, ease: "power2.out" }
            );

            gsap.fromTo(
              section.querySelectorAll(".experience-card"),
              { x: -50, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }
            );

            gsap.fromTo(
              section.querySelectorAll(".hobby-item"),
              { y: 10, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" }
            );
          }, section);

          return () => ctx.revert();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => {

      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="resume-container grid grid-cols-1 md:grid-cols-2 gap-10 p-6 sm:p-10"
    >
      <div className="col-span-1 space-y-10">
        <div className="software-skills">
          <h2 className="section-title text-white text-lg font-bold mb-4 border-b-2 border-white inline-block">
            SOFTWARE SKILLS
          </h2>
          {Skills.map((skill, i) => (
            <div key={i} className="flex items-center mb-4">
              <skill.Icon className="w-10 h-10 text-white mr-4" />
              <div className="w-full">
                <p className="text-white text-sm">{skill.name}</p>
                <div className="bg-[#d7bbfa] h-2 w-full rounded mt-1">
                  <div
                    className="skill-bar-inner bg-[#6C3BAA] h-2 rounded"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="web-skills">
          <h2 className="section-title text-white text-lg font-bold mb-4 border-b-2 border-white inline-block">
            WEB DEVELOPMENT
          </h2>
          {Web.map((tech, i) => (
            <div key={i} className="flex items-center mb-4">
              <tech.Icon className="w-10 h-10 text-white mr-4" />
              <div className="w-full">
                <p className="text-white text-sm">{tech.name}</p>
                <div className="bg-[#d7bbfa] h-2 w-full rounded mt-1">
                  <div
                    className="skill-bar-inner bg-[#6C3BAA] h-2 rounded"
                    style={{ width: `${tech.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-1 space-y-10">
        <div className="experience-section">
          <h2 className="section-title text-white text-lg font-bold mb-6 border-b-2 border-white inline-block">
            EXPERIENCE
          </h2>
          {Experience.map((exp, i) => (
            <div key={i} className="experience-card mb-6">
              <h3 className="text-white text-md font-semibold">{exp.name}</h3>
              <p className="text-gray-400 text-sm">
                {exp.position} - {exp.location}
              </p>
              <p className="text-gray-500 text-xs mt-2">{exp.skills}</p>
            </div>
          ))}
        </div>

        <div className="education-section">
          <h2 className="section-title text-white text-lg font-bold mb-4 border-b-2 border-white inline-block">
            EDUCATION
          </h2>
          <h3 className="text-white text-md">BSc in Computer Science</h3>
          <p className="text-gray-400 text-sm">Faculty of Natural Science</p>
          <p className="text-gray-500 text-xs mt-2">
            2021 - 2024 | Tirana, Albania
          </p>
        </div>

        <div className="hobbies-section">
          <h2 className="section-title text-lg font-bold mb-4 border-b-2 border-white inline-block text-white">
            HOBBIES
          </h2>
          <div className="flex flex-col gap-6">
            {Hobbies.map((hobby, i) => (
              <div
                key={i}
                className="hobby-item flex items-center transition-transform hover:scale-105"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4">
                  <hobby.Icon className="w-8 h-8 text-black" />
                </div>
                <p className="text-white text-sm">{hobby.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;