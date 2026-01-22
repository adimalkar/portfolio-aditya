// @flow strict
import Link from 'next/link';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="relative border-t bg-[#0a0e1a]/80 backdrop-blur-xl border-[#1e3a5f] text-white">
      {/* Top gradient line */}
      <div className="flex justify-center">
        <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent"></div>
      </div>
      
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-8 lg:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left section - Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-[#00ff88]">ADITYA</span>
              <span className="text-white ml-1">MALKAR</span>
            </Link>
            <p className="text-sm text-gray-400">
              Data Scientist & ML Engineer
            </p>
          </div>

          {/* Center section - Quick links */}
          <div className="flex items-center gap-6 text-sm">
            <Link href="/#about" className="text-gray-400 hover:text-[#00ff88] transition-colors duration-300">
              About
            </Link>
            <Link href="/#projects" className="text-gray-400 hover:text-[#00ff88] transition-colors duration-300">
              Projects
            </Link>
            <Link href="/#contact" className="text-gray-400 hover:text-[#00ff88] transition-colors duration-300">
              Contact
            </Link>
          </div>

          {/* Right section - Social links */}
          <div className="flex items-center gap-4">
            <Link
              target="_blank"
              href="https://github.com/adimalkar"
              className="text-gray-400 hover:text-[#00ff88] transition-all duration-300 hover:scale-110"
            >
              <BsGithub size={20} />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/aditya-malkar-694490253/"
              className="text-gray-400 hover:text-[#00d4ff] transition-all duration-300 hover:scale-110"
            >
              <BsLinkedin size={20} />
            </Link>
            <Link
              target="_blank"
              href="https://twitter.com/malkar_aditya"
              className="text-gray-400 hover:text-[#8b5cf6] transition-all duration-300 hover:scale-110"
            >
              <FaTwitterSquare size={20} />
            </Link>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-6 border-t border-[#1e3a5f]/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {currentYear} Aditya Malkar. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 font-mono">
            <span className="text-[#00ff88]">{'<'}</span>
            Built with Next.js & Tailwind
            <span className="text-[#00ff88]">{'/>'}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
