// @flow strict
'use client';

import Link from 'next/link';
import * as React from 'react';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <div className="group relative rounded-lg border border-[#1e3a5f] bg-[#0a0e1a]/90 backdrop-blur-xl w-full overflow-hidden transition-all duration-500 hover:border-[#00ff88]/50 hover:shadow-[0_0_40px_rgba(0,255,136,0.15)]">
      {/* Top gradient line */}
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#00ff88] to-[#00d4ff]"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-[#00d4ff] to-transparent"></div>
      </div>
      
      {/* Terminal header */}
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative border-b border-[#1e3a5f]">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
        </div>
        <p className="text-center ml-3 text-[#00ff88] text-base lg:text-xl font-medium">
          {project.name}
        </p>
      </div>
      
      {/* Code content */}
      <div className="overflow-hidden px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="flex items-center">
            <span className="text-[#8b5cf6]">class</span>
            <span className="ml-2 text-[#00d4ff]">Project</span>
            <span className="text-gray-400">:</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name</span>
            <span className="text-gray-400">= </span>
            <span className="text-amber-300">&quot;{project.name}&quot;</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">tools</span>
            <span className="text-gray-400">{` = [`}</span>
          </div>
          <div className="ml-8 lg:ml-16 flex flex-wrap">
            {project.tools.map((tag, i) => (
              <React.Fragment key={i}>
                <span className="text-amber-300">&quot;{tag}&quot;</span>
                {project.tools?.length - 1 !== i && (
                  <span className="text-gray-400">, </span>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="ml-4 lg:ml-8">
            <span className="text-gray-400">]</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">role</span>
            <span className="text-gray-400">= </span>
            <span className="text-orange-400">&quot;{project.role}&quot;</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2 mt-2">
            <span className="text-gray-500"># Description</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-[#00d4ff] text-xs md:text-sm leading-relaxed">&quot;&quot;&quot;{project.description}&quot;&quot;&quot;</span>
          </div>
        </code>
      </div>
      
      {/* Action buttons */}
      <div className="border-t border-[#1e3a5f] px-4 lg:px-8 py-4 flex items-center gap-4">
        {project.code && (
          <Link 
            href={project.code} 
            target="_blank"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#00ff88] transition-colors duration-300"
          >
            <FaCode />
            <span>View Code</span>
          </Link>
        )}
        {project.demo && (
          <Link 
            href={project.demo} 
            target="_blank"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#00d4ff] transition-colors duration-300"
          >
            <FaExternalLinkAlt />
            <span>Live Demo</span>
          </Link>
        )}
        {!project.code && !project.demo && (
          <span className="text-sm text-gray-500 italic">Private Repository</span>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
