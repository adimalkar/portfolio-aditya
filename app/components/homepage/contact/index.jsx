// @flow strict
'use client';

import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function ContactSection() {
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
    <div ref={sectionRef} id="contact" className="my-12 lg:my-16 relative mt-24 text-white pt-12">
      {/* Decorative side label */}
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 backdrop-blur-sm border border-[#00ff88]/30 w-fit text-[#00ff88] rotate-90 p-2 px-5 text-xl rounded-md font-mono">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-gradient-to-b from-[#00ff88] to-transparent"></span>
      </div>

      {/* Section header */}
      <div className={`flex justify-center mb-12 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="text-center">
          <p className="font-mono mb-2 text-[#00ff88] text-sm tracking-widest">
            {'>'} GET_IN_TOUCH
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-white">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
        </div>
      </div>

      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center transition-all duration-1000 delay-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <ContactForm />
        
        <div className="lg:w-3/4">
          <div className="flex flex-col gap-5 lg:gap-8">
            {/* Email */}
            <div className="group flex items-center gap-4 p-3 rounded-lg hover:bg-[#0a0e1a]/50 transition-all duration-300">
              <div className="p-3 rounded-full bg-[#1e3a5f] group-hover:bg-[#00ff88] transition-all duration-300">
                <MdAlternateEmail
                  className="text-[#00ff88] group-hover:text-[#0a0e1a] transition-all duration-300"
                  size={20}
                />
              </div>
              <span className="text-gray-300 group-hover:text-[#00ff88] transition-colors duration-300">
                {personalData.email}
              </span>
            </div>

            {/* Phone */}
            <div className="group flex items-center gap-4 p-3 rounded-lg hover:bg-[#0a0e1a]/50 transition-all duration-300">
              <div className="p-3 rounded-full bg-[#1e3a5f] group-hover:bg-[#00d4ff] transition-all duration-300">
                <IoMdCall
                  className="text-[#00d4ff] group-hover:text-[#0a0e1a] transition-all duration-300"
                  size={20}
                />
              </div>
              <span className="text-gray-300 group-hover:text-[#00d4ff] transition-colors duration-300">
                {personalData.phone}
              </span>
            </div>

            {/* Location */}
            <div className="group flex items-center gap-4 p-3 rounded-lg hover:bg-[#0a0e1a]/50 transition-all duration-300">
              <div className="p-3 rounded-full bg-[#1e3a5f] group-hover:bg-[#8b5cf6] transition-all duration-300">
                <CiLocationOn
                  className="text-[#8b5cf6] group-hover:text-[#0a0e1a] transition-all duration-300"
                  size={20}
                />
              </div>
              <span className="text-gray-300 group-hover:text-[#8b5cf6] transition-colors duration-300">
                {personalData.address}
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-10">
            <p className="text-sm text-gray-400 mb-4 font-mono">// Social Links</p>
            <div className="flex items-center gap-4">
              <Link 
                target="_blank" 
                href={personalData.github}
                className="group p-4 rounded-full bg-[#1e3a5f]/50 border border-[#1e3a5f] hover:border-[#00ff88] hover:bg-[#00ff88]/10 transition-all duration-300"
              >
                <IoLogoGithub
                  className="text-gray-400 group-hover:text-[#00ff88] transition-all duration-300"
                  size={24}
                />
              </Link>
              <Link 
                target="_blank" 
                href={personalData.linkedIn}
                className="group p-4 rounded-full bg-[#1e3a5f]/50 border border-[#1e3a5f] hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all duration-300"
              >
                <BiLogoLinkedin
                  className="text-gray-400 group-hover:text-[#00d4ff] transition-all duration-300"
                  size={24}
                />
              </Link>
              <Link 
                target="_blank" 
                href={personalData.twitter}
                className="group p-4 rounded-full bg-[#1e3a5f]/50 border border-[#1e3a5f] hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-all duration-300"
              >
                <FaXTwitter
                  className="text-gray-400 group-hover:text-[#8b5cf6] transition-all duration-300"
                  size={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
