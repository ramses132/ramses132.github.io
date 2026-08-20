"use client";

import { skillCategories } from "@/data/skills";
import { useInView } from "@/lib/useInView";

export default function TechStack() {
  const { ref, isInView } = useInView();

  return (
    <section
      className="py-24 relative"
      id="skills"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className={`${isInView ? "animate-slide-up" : "opacity-0"}`}>
          <p className="text-accent-400 font-mono text-sm tracking-wider uppercase mb-2">
            Expertise
          </p>
          <h2
            id="skills-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-12"
          >
            Technical Stack
          </h2>
        </div>

        <div className="space-y-10">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.name}
              className={`${isInView ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.1 + catIdx * 0.1}s` }}
            >
              <h3 className="text-sm font-mono text-navy-400 uppercase tracking-wider mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
                      skill.featured
                        ? "bg-accent-500/15 text-accent-400 border border-accent-500/30 hover:bg-accent-500/25"
                        : "bg-navy-800/60 text-navy-300 border border-navy-700/50 hover:bg-navy-700/60 hover:text-navy-200"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
