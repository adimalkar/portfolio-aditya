// @flow strict
'use client';

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [visibleLines, setVisibleLines] = useState(0);
  const [showOutput, setShowOutput] = useState(false);
  
  const fullText = "Aditya Malkar";
  
  // Name typing effect
  useEffect(() => {
    if (isTyping && displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (displayText.length === fullText.length) {
      setIsTyping(false);
    }
  }, [displayText, isTyping]);

  // Code lines reveal animation
  useEffect(() => {
    const totalLines = 12;
    if (visibleLines < totalLines) {
      const timeout = setTimeout(() => {
        setVisibleLines(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      // Show output after all lines are visible
      setTimeout(() => setShowOutput(true), 500);
    }
  }, [visibleLines]);

  const codeLines = [
    { content: <><span className="text-[#8b5cf6]">class</span> <span className="text-[#00d4ff]">DataScientist</span><span className="text-gray-400">:</span></>, delay: 0 },
    { content: <><span className="ml-4 text-[#8b5cf6]">def</span> <span className="text-[#00ff88]">__init__</span><span className="text-gray-400">(self):</span></>, delay: 1 },
    { content: <><span className="ml-8 text-white">self.</span><span className="text-[#00d4ff]">name</span><span className="text-gray-400"> = </span><span className="text-amber-300">&quot;Aditya Malkar&quot;</span></>, delay: 2 },
    { content: <><span className="ml-8 text-white">self.</span><span className="text-[#00d4ff]">skills</span><span className="text-gray-400"> = [</span></>, delay: 3 },
    { content: <><span className="ml-12 text-amber-300">&quot;Python&quot;</span><span className="text-gray-400">, </span><span className="text-amber-300">&quot;PyTorch&quot;</span><span className="text-gray-400">,</span></>, delay: 4 },
    { content: <><span className="ml-12 text-amber-300">&quot;TensorFlow&quot;</span><span className="text-gray-400">,</span></>, delay: 5 },
    { content: <><span className="ml-12 text-amber-300">&quot;AWS&quot;</span><span className="text-gray-400">, </span><span className="text-amber-300">&quot;Spark&quot;</span><span className="text-gray-400">, </span><span className="text-amber-300">&quot;LangChain&quot;</span></>, delay: 6 },
    { content: <><span className="ml-8 text-gray-400">]</span></>, delay: 7 },
    { content: <><span className="ml-8 text-white">self.</span><span className="text-[#00d4ff]">passion</span><span className="text-gray-400"> = </span><span className="text-amber-300">&quot;Building AI Solutions&quot;</span></>, delay: 8 },
    { content: <><span className="ml-4 text-[#8b5cf6]">def</span> <span className="text-[#00ff88]">is_hireable</span><span className="text-gray-400">(self):</span></>, delay: 9 },
    { content: <><span className="ml-8 text-[#8b5cf6]">return</span> <span className="text-orange-400">True</span> <span className="text-gray-500"># Always!</span></>, delay: 10 },
  ];

  return (
    <section className="relative flex flex-col items-center justify-between pt-24 lg:pt-32 pb-4 lg:pb-12">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-[#00ff88] rounded-full animate-ping opacity-75" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-[#00d4ff] rounded-full animate-pulse" />
      <div className="absolute bottom-20 left-20 w-2 h-2 bg-[#8b5cf6] rounded-full animate-bounce" />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <p className="text-sm text-[#00ff88] font-mono mb-2 tracking-widest animate-pulse">
            {'>'} INITIALIZING PORTFOLIO...
          </p>
          
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            I&apos;m{' '}
            <span className="gradient-text font-extrabold">
              {displayText}
              <span className="typing-cursor text-[#00ff88]">|</span>
            </span>
            <br />
            <span className="text-[#00d4ff]">{personalData.designation}</span>
          </h1>
          
          <p className="mt-4 text-gray-400 text-sm lg:text-base max-w-lg">
            🎓 MS in Data Science | 💻 ML & AI Enthusiast | 🧠 Lifelong Learner
          </p>

          <div className="my-8 flex items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-[#00ff88] hover:scale-125 duration-300 hover:text-[#00d4ff] hover:drop-shadow-[0_0_10px_rgba(0,255,136,0.8)]"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-[#00ff88] hover:scale-125 duration-300 hover:text-[#00d4ff] hover:drop-shadow-[0_0_10px_rgba(0,255,136,0.8)]"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.twitter}
              target='_blank'
              className="transition-all text-[#00ff88] hover:scale-125 duration-300 hover:text-[#00d4ff] hover:drop-shadow-[0_0_10px_rgba(0,255,136,0.8)]"
            >
              <FaTwitterSquare size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="group relative p-[2px] rounded-full overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#8b5cf6] animate-spin-slow" style={{animation: 'spin 3s linear infinite'}} />
              <button className="relative px-4 text-xs md:px-8 py-3 md:py-4 bg-[#0a0e1a] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3 group-hover:bg-[#0d1829]">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link 
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-[#00ff88] to-[#00d4ff] px-4 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-[#0a0e1a] no-underline transition-all duration-200 ease-out hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] md:font-semibold" 
              role="button" 
              target="_blank" 
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>

        </div>
        
        {/* Code Terminal Card */}
        <div className="order-1 lg:order-2 relative group">
          {/* Glow effect behind the card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#8b5cf6] rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition duration-1000 animate-pulse" />
          
          <div className="relative rounded-lg border border-[#1e3a5f] bg-[#0a0e1a]/90 backdrop-blur-xl overflow-hidden animate-float">
            {/* Terminal header */}
            <div className="flex flex-row bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#00ff88] to-[#00d4ff]"></div>
            </div>
            <div className="px-4 lg:px-8 py-4">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] hover:scale-110 transition-transform cursor-pointer"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)] hover:scale-110 transition-transform cursor-pointer"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] hover:scale-110 transition-transform cursor-pointer"></div>
                </div>
                <span className="text-xs text-gray-500 font-mono animate-pulse">aditya_malkar.py</span>
              </div>
            </div>
            
            {/* Code content with line-by-line animation */}
            <div className="overflow-hidden border-t border-[#1e3a5f] px-4 lg:px-8 py-4 lg:py-8">
              <code className="font-mono text-xs md:text-sm lg:text-base block">
                {codeLines.map((line, index) => (
                  <div 
                    key={index}
                    className={`transition-all duration-500 ${
                      visibleLines > index 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {line.content}
                    {visibleLines === index + 1 && visibleLines <= codeLines.length && (
                      <span className="inline-block w-2 h-4 bg-[#00ff88] ml-1 animate-blink"></span>
                    )}
                  </div>
                ))}
              </code>
            </div>
            
            {/* Terminal output line */}
            <div className={`border-t border-[#1e3a5f] px-4 lg:px-8 py-3 bg-[#0a0e1a]/50 transition-all duration-500 ${
              showOutput ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="text-[#00ff88] animate-pulse">❯</span>
                <span className="text-gray-400">DataScientist().is_hireable()</span>
                <span className={`text-[#00ff88] transition-all duration-300 ${showOutput ? 'opacity-100' : 'opacity-0'}`}>
                  True <span className="animate-ping inline-block">✓</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs text-gray-500 mb-2">Scroll to explore</span>
        <svg className="w-6 h-6 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;
