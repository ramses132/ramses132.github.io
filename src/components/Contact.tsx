"use client";

import { profile } from "@/data/profile";
import { useInView } from "@/lib/useInView";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const { ref, isInView } = useInView();

  return (
    <section
      className="py-24 relative"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div
          className={`text-center max-w-2xl mx-auto ${
            isInView ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <p className="text-accent-400 font-mono text-sm tracking-wider uppercase mb-2">
            Get in Touch
          </p>
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Have a backend or architecture challenge?
          </h2>
          <p className="text-navy-400 text-xl mb-12">
            Let&apos;s talk.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`mailto:${profile.contact.email}`}
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg text-sm font-medium transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email Me
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-navy-700 hover:border-navy-500 text-navy-300 hover:text-white px-8 py-4 rounded-lg text-sm font-medium transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-navy-700 hover:border-navy-500 text-navy-300 hover:text-white px-8 py-4 rounded-lg text-sm font-medium transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
