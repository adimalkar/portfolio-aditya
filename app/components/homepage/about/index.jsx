// @flow strict
'use client';

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function AboutSection() {
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
      id="about" 
      className="my-12 lg:my-16 relative pt-20"
    >
      {/* Decorative side label */}
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 backdrop-blur-sm border border-[#00ff88]/30 w-fit text-[#00ff88] rotate-90 p-2 px-5 text-xl rounded-md font-mono">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-gradient-to-b from-[#00ff88] to-transparent"></span>
      </div>

      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="order-2 lg:order-1">
          <p className="font-mono mb-5 text-[#00ff88] text-sm tracking-widest flex items-center gap-2">
            <span className="text-[#00d4ff]">{'>'}</span> WHO_I_AM
            <span className="w-8 h-[1px] bg-[#00ff88]" />
          </p>
          
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white">
            Turning <span className="gradient-text">Data</span> into <span className="text-[#00d4ff]">Insights</span>
          </h2>
          
          <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
            {personalData.description}
          </p>
          
          {/* Tech stack badges */}
          <div className="mt-6 flex flex-wrap gap-2">
            {['Python', 'PyTorch', 'TensorFlow', 'AWS', 'Spark', 'LangChain'].map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 text-xs font-mono bg-[#0a0e1a]/80 border border-[#1e3a5f] rounded-full text-[#00ff88] hover:border-[#00ff88] transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative group w-fit">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00ff88]/20 via-[#00d4ff]/20 to-[#8b5cf6]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Image frame with corner accents */}
            <div className="relative">
              <div className="absolute -inset-[2px] bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#8b5cf6] rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src={personalData.profile}
                width={300}
                height={300}
                alt="Aditya Malkar"
                className="relative rounded-lg transition-all duration-500 hover:scale-105 cursor-pointer z-10 bg-[#0a0e1a]"
              />
              
              {/* Decorative corner accents - inside the image container */}
              <div className="absolute -top-3 -left-3 w-5 h-5 border-t-2 border-l-2 border-[#00ff88] z-20" />
              <div className="absolute -top-3 -right-3 w-5 h-5 border-t-2 border-r-2 border-[#00d4ff] z-20" />
              <div className="absolute -bottom-3 -left-3 w-5 h-5 border-b-2 border-l-2 border-[#00d4ff] z-20" />
              <div className="absolute -bottom-3 -right-3 w-5 h-5 border-b-2 border-r-2 border-[#8b5cf6] z-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
