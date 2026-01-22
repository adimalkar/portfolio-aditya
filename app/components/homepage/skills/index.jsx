// @flow strict
'use client';

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

function Skills() {
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
    <div 
      ref={sectionRef}
      id="skills" 
      className="relative z-50 border-t my-12 lg:my-24 border-[#1e3a5f] pt-12"
    >
      {/* Decorative glow */}
      <div className="w-[150px] h-[150px] bg-[#00ff88] rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-[100px] opacity-20"></div>

      {/* Top border gradient */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#00ff88] to-transparent w-full" />
        </div>
      </div>

      {/* Section header */}
      <div className={`flex justify-center my-5 lg:py-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-[#00ff88]"></span>
          <span className="bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 backdrop-blur-sm border border-[#00ff88]/30 text-[#00ff88] p-2 px-5 text-xl rounded-md font-mono">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-[#00d4ff]"></span>
        </div>
      </div>

      {/* Skills marquee */}
      <div className={`w-full my-12 transition-all duration-1000 delay-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <Marquee
          gradient={false}
          speed={60}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div 
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-110 cursor-pointer"
              key={id}
            >
              <div className="h-full w-full rounded-lg border border-[#1e3a5f] bg-[#0a0e1a]/80 backdrop-blur-sm shadow-none group-hover:border-[#00ff88] group-hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] transition-all duration-500">
                {/* Top gradient line */}
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#00ff88]/50 to-transparent group-hover:via-[#00ff88] transition-all duration-500" />
                  </div>
                </div>
                
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-10 sm:h-12 relative">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={48}
                      height={48}
                      className="h-full w-auto rounded-lg transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base font-medium group-hover:text-[#00ff88] transition-colors duration-300">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
      
      {/* Additional skills text */}
      <div className="text-center text-gray-400 text-sm">
        <p>Also proficient in: <span className="text-[#00d4ff]">R, SQL, PySpark, Pandas, Scikit-learn, Keras, LangChain, Streamlit, MediaPipe</span></p>
      </div>
    </div>
  );
}

export default Skills;
