"use client";

import { Mail, Linkedin, Github } from "lucide-react";
import { resume } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {resume.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${resume.email}`}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href={resume.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={resume.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}