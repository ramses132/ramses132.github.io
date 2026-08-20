"use client";

import { profile } from "@/data/profile";
import { useInView } from "@/lib/useInView";
import { CheckCircle } from "lucide-react";

export default function About() {
  const { ref, isInView } = useInView();

  return (
    <section
      className="py-24 relative"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className={`${isInView ? "animate-slide-up" : "opacity-0"}`}>
          <p className="text-accent-400 font-mono text-sm tracking-wider uppercase mb-2">
            About
          </p>
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-12"
          >
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className={`space-y-6 ${isInView ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <p className="text-navy-300 text-lg leading-relaxed">
              {profile.about.intro}
            </p>
            <p className="text-navy-400 leading-relaxed">
              {profile.about.body}
            </p>
          </div>

          <div className={`space-y-4 ${isInView ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
            {profile.about.highlights.map((highlight) => (
              <div key={highlight} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent-400 mt-0.5 flex-shrink-0" />
                <span className="text-navy-300 text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
