"use client";

import { profile } from "@/data/profile";
import { useInView } from "@/lib/useInView";
import { GraduationCap, Globe } from "lucide-react";

export default function Education() {
  const { ref, isInView } = useInView();
  const { education, languages } = profile;

  return (
    <section
      className="py-24 relative"
      id="education"
      aria-labelledby="education-heading"
    >
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className={`${isInView ? "animate-slide-up" : "opacity-0"}`}>
          <p className="text-accent-400 font-mono text-sm tracking-wider uppercase mb-2">
            Background
          </p>
          <h2
            id="education-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-12"
          >
            Education & Languages
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            className={`bg-navy-900/40 border border-navy-800/50 rounded-xl p-6 ${
              isInView ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-5 h-5 text-accent-400" />
              <h3 className="text-white font-semibold">Education</h3>
            </div>
            <div>
              <p className="text-white font-medium">{education.degree}</p>
              <p className="text-navy-400 text-sm mt-1">{education.institution}</p>
              <p className="text-navy-500 text-sm">{education.location}</p>
              <p className="text-navy-500 text-xs font-mono mt-2">{education.period}</p>
            </div>
          </div>

          <div
            className={`bg-navy-900/40 border border-navy-800/50 rounded-xl p-6 ${
              isInView ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-5 h-5 text-accent-400" />
              <h3 className="text-white font-semibold">Languages</h3>
            </div>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.language} className="flex justify-between items-center">
                  <span className="text-navy-300 text-sm">{lang.language}</span>
                  <span className="text-navy-500 text-xs font-mono">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
