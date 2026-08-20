"use client";

import { useInView } from "@/lib/useInView";
import {
  Cloud,
  Workflow,
  Database,
  Layers,
  ArrowDown,
  Zap,
} from "lucide-react";

const layers = [
  {
    icon: Cloud,
    label: "Clients",
    sublabel: "Web · Mobile · API Consumers",
    color: "text-navy-300",
    borderColor: "border-navy-700/50",
  },
  {
    icon: Layers,
    label: "API Gateway",
    sublabel: "Routing · Auth · Rate Limiting",
    color: "text-accent-400",
    borderColor: "border-accent-500/30",
  },
  {
    icon: Zap,
    label: "Lambda / Backend Services",
    sublabel: "Serverless Functions · Microservices",
    color: "text-accent-400",
    borderColor: "border-accent-500/40",
    featured: true,
  },
  {
    icon: Workflow,
    label: "Event Processing",
    sublabel: "ETL · Event-Driven · Async Pipelines",
    color: "text-navy-300",
    borderColor: "border-navy-700/50",
  },
  {
    icon: Database,
    label: "Storage & Analytics",
    sublabel: "S3 · DynamoDB · PostgreSQL · Redshift",
    color: "text-navy-400",
    borderColor: "border-navy-700/40",
  },
];

const concepts = [
  "Serverless",
  "Event-driven systems",
  "ETL pipelines",
  "Microservices",
  "Cloud architecture",
  "Distributed processing",
  "API integrations",
  "Domain-Driven Design",
];

export default function Architecture() {
  const { ref, isInView } = useInView();

  return (
    <section
      className="py-24 relative"
      id="architecture"
      aria-labelledby="architecture-heading"
    >
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className={`${isInView ? "animate-slide-up" : "opacity-0"}`}>
          <p className="text-accent-400 font-mono text-sm tracking-wider uppercase mb-2">
            Systems Design
          </p>
          <h2
            id="architecture-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Architecture & Cloud
          </h2>
          <p className="text-navy-400 mb-12 max-w-2xl">
            Designing distributed systems that handle real complexity — from
            event-driven pipelines to serverless microservices on AWS.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-4 ${isInView ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            {layers.map((layer, idx) => (
              <div key={layer.label}>
                <div
                  className={`flex items-center gap-4 p-4 rounded-lg border bg-navy-900/40 transition-all duration-300 hover:bg-navy-800/60 ${
                    layer.borderColor
                  } ${layer.featured ? "ring-1 ring-accent-500/20" : ""}`}
                >
                  <layer.icon className={`w-5 h-5 ${layer.color} flex-shrink-0`} />
                  <div>
                    <p className={`text-sm font-semibold ${layer.color}`}>
                      {layer.label}
                    </p>
                    <p className="text-navy-500 text-xs">{layer.sublabel}</p>
                  </div>
                </div>
                {idx < layers.length - 1 && (
                  <div className="flex justify-center py-2" aria-hidden="true">
                    <ArrowDown className="w-4 h-4 text-navy-700" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div
            className={`${isInView ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="bg-navy-900/60 border border-navy-800/50 rounded-xl p-8">
              <h3 className="text-white font-semibold mb-6">
                Key Architectural Concepts
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {concepts.map((concept) => (
                  <div
                    key={concept}
                    className="flex items-center gap-2 text-sm text-navy-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-400/60 flex-shrink-0" />
                    {concept}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-navy-800/40 rounded-lg border border-navy-700/30">
                <p className="text-navy-400 text-xs font-mono leading-relaxed">
                  <span className="text-accent-400">Focus:</span> Building
                  backend systems that scale with business demands — from
                  serverless event processing to distributed data pipelines
                  across cloud infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
