import React from 'react';
import Skills from '../data/skills';
import Web from '../data/web';
import Experience from '../data/experience';
import Hobbies from '../data/hobbies';

const Resume = () => {
  return (
    <div className="resume-container grid grid-cols-2 gap-10 p-10">
      
      <div className="col-span-1">
        <div className="software-skills mb-10">
          <h2 className="text-white text-lg font-bold mb-4 border-b-2 border-white inline-block">
            SOFTWARE SKILLS
          </h2>
          {Skills.map((skill, index) => (
            <div key={index} className="flex items-center mb-4">
              <skill.Icon className="w-10 h-10 text-white mr-4" />
              <div className="w-full">
                <p className="text-white text-sm">{skill.name}</p>
                <div className="bg-[#d7bbfa] h-2 w-full rounded mt-1">
                  <div
                    className="bg-[#6C3BAA] h-2 rounded"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="web-skills mb-10">
          <h2 className="text-white text-lg font-bold mb-4 border-b-2 border-white inline-block">
            WEB DEVELOPMENT
          </h2>
          {Web.map((tech, index) => (
            <div key={index} className="flex items-center mb-4">
              <tech.Icon className="w-10 h-10 text-white mr-4" />
              <div className="w-full">
                <p className="text-white text-sm">{tech.name}</p>
                <div className="bg-[#d7bbfa] h-2 w-full rounded mt-1">
                  <div
                    className="bg-[#6C3BAA] h-2 rounded"
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-1 ml-16">
        <div className="experience-section mb-14">
          <h2 className="text-white text-lg font-bold mb-6 border-b-2 border-white inline-block">
            EXPERIENCE
          </h2>
          {Experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-white text-md font-semibold">{exp.name}</h3>
              <p className="text-gray-400 text-sm">{exp.position} - {exp.location}</p>
              <p className="text-gray-500 text-xs mt-2">{exp.skills}</p>
            </div>
          ))}
        </div>

        <div className="education-section mb-14">
          <h2 className="text-white text-lg font-bold mb-4 border-b-2 border-white inline-block">
            EDUCATION
          </h2>
          <h3 className="text-white text-md">BS in Computer Science</h3>
          <p className="text-gray-400 text-sm">Faculty of Natural Science</p>
          <p className="text-gray-500 text-xs mt-2">2021 - 2024 | Tirana, Albania</p>
        </div>

        <div className="hobbies-section mt-14">
          <h2 className="text-white text-lg font-bold mb-4 border-b-2 border-white inline-block">
            HOBBIES
          </h2>
          <div>
            {Hobbies.map((hobby, index) => (
              <div key={index} className="flex items-center mb-6">
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
