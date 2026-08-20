"use client";

import { Server } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-800/50 py-8" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-navy-500">
            <Server className="w-4 h-4" />
            <span className="text-sm">
              &copy; {year} {profile.name}
            </span>
          </div>
          <div className="flex gap-6 text-sm text-navy-500">
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-navy-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-navy-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              className="hover:text-navy-300 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
