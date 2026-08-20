"use client";

import { useInView } from "@/lib/useInView";
import {
  FileText,
  Code2,
  Boxes,
  Bot,
  FlaskConical,
  Eye,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

const pipelineSteps = [
  { icon: FileText, label: "Requirements", color: "text-navy-300" },
  { icon: Boxes, label: "Architecture", color: "text-navy-300" },
  { icon: Code2, label: "Specification", color: "text-navy-300" },
  { icon: Bot, label: "AI Agent", color: "text-accent-400", featured: true },
  { icon: FlaskConical, label: "Testing", color: "text-navy-300" },
  { icon: Eye, label: "Review", color: "text-navy-300" },
  { icon: RefreshCw, label: "Iteration", color: "text-navy-300" },
];

const capabilities = [
  "AI-Assisted Coding",
  "Agentic Development",
  "Spec-Driven Development",
  "AI Coding Agents",
  "Prompt Engineering",
  "AI-Assisted Debugging",
  "AI-Assisted Testing",
  "AI-Assisted Refactoring",
  "Human-in-the-Loop Review",
];

const workflow = [
  {
    title: "Define Requirements",
    desc: "Start with clear objectives and functional specifications before any code is written.",
  },
  {
    title: "Architect the Solution",
    desc: "Design the system, define boundaries and make technical decisions with domain context.",
  },
  {
    title: "AI-Assisted Implementation",
    desc: "Use coding agents to accelerate implementation while maintaining architectural standards.",
  },
  {
    title: "Human Review & Control",
    desc: "Review every output. Maintain control over security, quality, and architectural integrity.",
  },
];

export default function AIEngineering() {
  const { ref, isInView } = useInView();

  return (
    <section
      className="py-24 relative"
      id="ai-engineering"
      aria-labelledby="ai-heading"
    >
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className={`${isInView ? "animate-slide-up" : "opacity-0"}`}>
          <p className="text-accent-400 font-mono text-sm tracking-wider uppercase mb-2">
            Methodology
          </p>
          <h2
            id="ai-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-2"
          >
            AI-Assisted Software Engineering
          </h2>
          <p className="text-navy-400 mb-12 max-w-2xl">
            Engineering with AI agents, specifications and human-guided
            iteration. AI is part of the engineering workflow, not a replacement
            for engineering.
          </p>
        </div>

        {/* Horizontal pipeline */}
        <div
          className={`mb-16 overflow-x-auto pb-4 ${isInView ? "animate-slide-up" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex items-center gap-2 min-w-max">
            {pipelineSteps.map((step, idx) => (
              <div key={step.label} className="flex items-center gap-2">
                <div
                  className={`flex flex-col items-center gap-2 px-4 py-3 rounded-lg border transition-all duration-300 ${
                    step.featured
                      ? "bg-accent-500/10 border-accent-500/30 ring-1 ring-accent-500/20"
                      : "bg-navy-900/40 border-navy-800/50 hover:border-navy-700/60"
                  }`}
                >
                  <step.icon
                    className={`w-5 h-5 ${step.color}`}
                  />
                  <span
                    className={`text-xs font-mono whitespace-nowrap ${
                      step.featured ? "text-accent-400" : "text-navy-400"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {idx < pipelineSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-navy-700 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: methodology steps */}
          <div
            className={`space-y-6 ${isInView ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            {workflow.map((item, idx) => (
              <div key={item.title} className="flex gap-4">
                <span className="text-accent-400/40 font-mono text-sm font-bold mt-0.5 flex-shrink-0">
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-navy-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: capabilities */}
          <div
            className={`${isInView ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="bg-navy-900/40 border border-navy-800/50 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4 text-sm">
                Capabilities
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="px-3 py-1.5 rounded-md text-xs font-medium bg-navy-800/60 text-navy-300 border border-navy-700/50"
                  >
                    {cap}
                  </span>
                ))}
              </div>

              <div className="p-4 bg-navy-800/40 rounded-lg border border-navy-700/30">
                <p className="text-navy-400 text-xs font-mono leading-relaxed">
                  <span className="text-accent-400">Principle:</span> AI
                  accelerates implementation — architecture, security, quality
                  and technical decisions remain human-driven.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
