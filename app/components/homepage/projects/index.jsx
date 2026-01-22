'use client';

import { projectsData } from '@/utils/data/projects-data';
import { useEffect, useRef, useState } from 'react';
import ProjectCard from './project-card';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} id='projects' className="relative z-50 my-12 lg:my-24">
      {/* Decorative glow */}
      <div className="w-[200px] h-[200px] bg-[#00d4ff] rounded-full absolute -top-10 right-0 filter blur-[120px] opacity-15"></div>
      
      <div className="sticky top-10">
        <div className="flex items-center justify-start relative">
          <span className={`bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 backdrop-blur-sm border border-[#00ff88]/30 absolute left-0 w-fit text-[#00ff88] px-5 py-3 text-xl rounded-md font-mono transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-gradient-to-r from-[#00ff88]/50 to-transparent ml-40"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-8">
          {projectsData.slice(0, 6).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className={`sticky-card w-full mx-auto max-w-3xl sticky transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                top: `calc(${(index + 1) * 2}rem + 80px)` 
              }}
            >
              <div className="box-border flex items-center justify-center rounded-lg transition-all duration-500">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
