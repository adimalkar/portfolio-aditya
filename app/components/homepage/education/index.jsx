// @flow strict
'use client';

import { educations } from "@/utils/data/educations";
import { useEffect, useRef, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import lottieFile from '../../../assets/lottie/study.json';
import AnimationLottie from "../../helper/animation-lottie";

function Education() {
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
    <div ref={sectionRef} id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#1e3a5f] pt-12">
      {/* Decorative glow */}
      <div className="w-[150px] h-[150px] bg-[#00d4ff] rounded-full absolute top-20 right-10 filter blur-[100px] opacity-20"></div>

      {/* Top gradient line */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent w-full" />
        </div>
      </div>

      {/* Section header */}
      <div className={`flex justify-center my-5 lg:py-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-[#00d4ff]"></span>
          <span className="bg-gradient-to-r from-[#00d4ff]/20 to-[#00ff88]/20 backdrop-blur-sm border border-[#00d4ff]/30 text-[#00d4ff] p-2 px-5 text-xl rounded-md font-mono">
            Education
          </span>
          <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-[#00ff88]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Lottie Animation */}
          <div className={`flex justify-center items-start transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          {/* Education cards */}
          <div>
            <div className="flex flex-col gap-6">
              {educations.map((education, index) => (
                <div
                  key={education.id}
                  className={`group relative p-[1px] rounded-lg overflow-hidden transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  {/* Animated border gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] via-[#00ff88] to-[#8b5cf6] opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative bg-[#0a0e1a] rounded-lg p-5 backdrop-blur-sm">
                    {/* Duration badge */}
                    <div className="flex justify-center mb-4">
                      <span className="text-xs sm:text-sm text-[#00d4ff] font-mono bg-[#00d4ff]/10 px-3 py-1 rounded-full">
                        {education.duration}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-x-6">
                      <div className="text-[#00d4ff] transition-all duration-300 group-hover:scale-110 group-hover:text-[#00ff88]">
                        <FaGraduationCap size={40} />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-1 font-semibold text-white group-hover:text-[#00d4ff] transition-colors duration-300">
                          {education.title}
                        </p>
                        <p className="text-sm sm:text-base text-gray-400">
                          {education.institution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
