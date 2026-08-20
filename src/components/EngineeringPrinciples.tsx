"use client";

import { engineeringPrinciples } from "@/data/skills";
import { useInView } from "@/lib/useInView";

export default function EngineeringPrinciples() {
  const { ref, isInView } = useInView();

  return (
    <section
      className="py-24 relative"
      id="principles"
      aria-labelledby="principles-heading"
    >
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className={`${isInView ? "animate-slide-up" : "opacity-0"}`}>
          <p className="text-accent-400 font-mono text-sm tracking-wider uppercase mb-2">
            Approach
          </p>
          <h2
            id="principles-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-12"
          >
            How I Build
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {engineeringPrinciples.map((principle, idx) => (
            <div
              key={principle.number}
              className={`bg-navy-900/40 border border-navy-800/50 rounded-xl p-6 hover:border-navy-700/60 transition-all duration-300 ${
                isInView ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <span className="text-accent-400/40 font-mono text-3xl font-bold leading-none">
                  {principle.number}
                </span>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-navy-400 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
