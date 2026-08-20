"use client";

import { projects } from "@/data/projects";
import { useInView } from "@/lib/useInView";
import { AlertTriangle, Lightbulb, Layers, Code, TrendingUp } from "lucide-react";

export default function Projects() {
  const { ref, isInView } = useInView();

  return (
    <section
      className="py-24 relative"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className={`${isInView ? "animate-slide-up" : "opacity-0"}`}>
          <p className="text-accent-400 font-mono text-sm tracking-wider uppercase mb-2">
            Portfolio
          </p>
          <h2
            id="projects-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Featured Projects
          </h2>
          <p className="text-navy-400 mb-12 max-w-2xl">
            Selected projects showcasing backend engineering, cloud architecture, and systems integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`bg-navy-900/40 border border-navy-800/50 rounded-xl p-6 hover:border-navy-700/60 transition-all duration-300 group ${
                isInView ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
            >
              <h3 className="text-white font-semibold text-lg mb-4 group-hover:text-accent-400 transition-colors">
                {project.name}
              </h3>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <AlertTriangle className="w-4 h-4 text-navy-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-mono text-navy-500 uppercase tracking-wider mb-1">
                      Problem
                    </p>
                    <p className="text-navy-400 text-sm">{project.problem}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Lightbulb className="w-4 h-4 text-accent-400/60 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-mono text-navy-500 uppercase tracking-wider mb-1">
                      Solution
                    </p>
                    <p className="text-navy-400 text-sm">{project.solution}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Layers className="w-4 h-4 text-navy-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-mono text-navy-500 uppercase tracking-wider mb-1">
                      Architecture
                    </p>
                    <p className="text-navy-400 text-sm">{project.architecture}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Code className="w-4 h-4 text-navy-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-mono text-navy-500 uppercase tracking-wider mb-1">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs font-mono bg-navy-800/60 text-navy-400 rounded border border-navy-700/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <TrendingUp className="w-4 h-4 text-accent-400/60 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-mono text-navy-500 uppercase tracking-wider mb-1">
                      Impact
                    </p>
                    <p className="text-navy-400 text-sm">{project.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
