"use client";

import { experiences } from "@/data/experience";
import { useInView } from "@/lib/useInView";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export default function ExperienceTimeline() {
  const { ref, isInView } = useInView();

  return (
    <section
      className="py-24 relative"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className={`${isInView ? "animate-slide-up" : "opacity-0"}`}>
          <p className="text-accent-400 font-mono text-sm tracking-wider uppercase mb-2">
            Career
          </p>
          <h2
            id="experience-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-12"
          >
            Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-navy-800/60"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <ExperienceItem
                key={exp.id}
                experience={exp}
                index={idx}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({
  experience: exp,
  index,
  isInView,
}: {
  experience: (typeof experiences)[0];
  index: number;
  isInView: boolean;
}) {
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`relative flex items-start ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row`}
      style={{ animationDelay: `${0.1 + index * 0.05}s` }}
    >
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10" aria-hidden="true">
        <div
          className={`w-3 h-3 rounded-full border-2 ${
            exp.current
              ? "bg-accent-400 border-accent-400 shadow-lg shadow-accent-400/30"
              : "bg-navy-900 border-navy-600"
          }`}
        />
      </div>

      {/* Content */}
      <div
        className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
          isLeft ? "md:pr-8 md:text-right" : "md:pl-8"
        } ${isInView ? "animate-slide-up" : "opacity-0"}`}
        style={{ animationDelay: `${0.1 + index * 0.05}s` }}
      >
        <div className="bg-navy-900/40 border border-navy-800/50 rounded-xl p-6 hover:border-navy-700/60 transition-all duration-300">
          <div className={`flex items-center gap-2 mb-2 ${isLeft ? "md:justify-end" : ""}`}>
            {exp.current && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-accent-500/15 text-accent-400 border border-accent-500/30">
                Current
              </span>
            )}
          </div>

          <h3 className="text-white font-semibold text-lg">{exp.role}</h3>

          <div className={`flex items-center gap-3 mt-1 mb-3 text-sm text-navy-400 ${isLeft ? "md:justify-end" : ""}`}>
            <span className="flex items-center gap-1">
              <Briefcase className="w-3.5 h-3.5" />
              {exp.company}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {exp.location}
            </span>
          </div>

          {exp.context && (
            <p className="text-accent-400/80 text-xs font-mono mb-2">{exp.context}</p>
          )}

          <div className={`flex items-center gap-1 text-xs text-navy-500 mb-3 ${isLeft ? "md:justify-end" : ""}`}>
            <Calendar className="w-3 h-3" />
            {exp.period}
          </div>

          <p className="text-navy-400 text-sm mb-3">{exp.description}</p>

          <ul className={`space-y-1 mb-4 ${isLeft ? "md:text-right" : ""}`}>
            {exp.highlights.map((h) => (
              <li key={h} className="text-navy-500 text-xs">
                {h}
              </li>
            ))}
          </ul>

          <div className={`flex flex-wrap gap-1.5 ${isLeft ? "md:justify-end" : ""}`}>
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs font-mono bg-navy-800/60 text-navy-400 rounded border border-navy-700/30"
              >
                {tech}
              </span>
            ))}
          </div>

          {exp.aiNote && (
            <div className={`mt-3 p-2 bg-accent-500/5 border border-accent-500/15 rounded-md ${isLeft ? "md:text-right" : ""}`}>
              <p className="text-accent-400/70 text-xs font-mono leading-relaxed">
                {exp.aiNote}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
