"use client";

import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { useInView } from "@/lib/useInView";

function ArchitectureDiagram() {
  const boxH = 36;
  const rowGap = 50;
  const startY = 20;
  const cx = 200;

  const rows = [
    { y: startY, boxes: [{ x: 155, w: 90, label: "Clients", color: "#38bdf8", opacity: 0.8, featured: false }] },
    {
      y: startY + rowGap,
      boxes: [{ x: 150, w: 100, label: "API Gateway", color: "#38bdf8", opacity: 0.9, featured: false }],
    },
    {
      y: startY + rowGap * 2,
      boxes: [{ x: 135, w: 130, label: "Lambda / Services", color: "#0ea5e9", opacity: 1, featured: true }],
    },
    {
      y: startY + rowGap * 3,
      boxes: [
        { x: 55, w: 100, label: "Event Processing", color: "#38bdf8", opacity: 0.8, featured: false },
        { x: 165, w: 80, label: "ETL Pipeline", color: "#38bdf8", opacity: 0.8, featured: false },
        { x: 255, w: 90, label: "Auth / IAM", color: "#38bdf8", opacity: 0.8, featured: false },
      ],
    },
    {
      y: startY + rowGap * 4,
      boxes: [
        { x: 55, w: 100, label: "DynamoDB", color: "#627d98", opacity: 0.7, featured: false },
        { x: 165, w: 80, label: "PostgreSQL", color: "#627d98", opacity: 0.7, featured: false },
        { x: 255, w: 90, label: "Redshift", color: "#627d98", opacity: 0.7, featured: false },
      ],
    },
    {
      y: startY + rowGap * 5,
      boxes: [{ x: 120, w: 160, label: "S3 Data Lake", color: "#334e68", opacity: 0.5, featured: false }],
    },
  ];

  const viewH = startY + rowGap * 5 + boxH + 20;

  return (
    <div className="relative w-full h-80 md:h-[480px]" aria-hidden="true">
      <svg viewBox={`0 0 400 ${viewH}`} className="w-full h-full" fill="none">
        {/* Connection lines between rows */}
        {rows.slice(0, -1).map((row, ri) => {
          const nextRow = rows[ri + 1];
          const fromBoxes = row.boxes;
          const toBoxes = nextRow.boxes;
          return fromBoxes.flatMap((fb, fi) =>
            toBoxes.map((tb, ti) => {
              const x1 = fb.x + fb.w / 2;
              const y1 = row.y + boxH;
              const x2 = tb.x + tb.w / 2;
              const y2 = nextRow.y;
              return (
                <line
                  key={`${ri}-${fi}-${ti}`}
                  x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="#38bdf8" strokeWidth="1" opacity="0.3"
                  strokeDasharray="4 4"
                >
                  <animate attributeName="stroke-dashoffset" from="8" to="0" dur="2s" repeatCount="indefinite" />
                </line>
              );
            })
          );
        })}

        {/* Rows */}
        {rows.map((row, ri) =>
          row.boxes.map((box, bi) => (
            <g key={`${ri}-${bi}`}>
              <rect
                x={box.x} y={row.y} width={box.w} height={boxH}
                rx="6"
                fill={box.featured ? "#0a1929" : "#102a43"}
                stroke={box.color}
                strokeWidth={box.featured ? 1.5 : 1}
                opacity={box.opacity}
              />
              <text
                x={box.x + box.w / 2} y={row.y + boxH / 2 + 4}
                textAnchor="middle"
                fill={box.featured ? "#38bdf8" : "#d9e2ec"}
                fontSize="9"
                fontFamily="monospace"
              >
                {box.label}
              </text>
            </g>
          ))
        )}

        {/* Pulse dots on middle row */}
        <circle cx={105} cy={startY + rowGap * 3 + boxH / 2} r="2" fill="#38bdf8" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx={cx} cy={startY + rowGap * 3 + boxH / 2} r="2" fill="#38bdf8" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" begin="1s" />
        </circle>
        <circle cx={300} cy={startY + rowGap * 3 + boxH / 2} r="2" fill="#38bdf8" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" begin="2s" />
        </circle>
      </svg>
    </div>
  );
}

export default function Hero() {
  const { ref, isInView } = useInView();

  return (
    <section
      className="min-h-screen flex items-center relative overflow-hidden"
      id="hero"
      aria-label="Hero section"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-32 md:py-0 w-full" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 ${isInView ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="space-y-2">
              <p className="text-accent-400 font-mono text-sm tracking-wider uppercase">
                Solutions Architect
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Ramses
                <br />
                <span className="text-navy-200">Salazar</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-navy-300 font-light">
                Senior Backend Developer
              </h2>
            </div>

            <p className="text-navy-400 text-base md:text-lg leading-relaxed max-w-lg">
              Building scalable systems with modern cloud architecture and
              AI-assisted engineering workflows.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-navy-900/50 border border-navy-800/50 rounded-lg p-3 text-center"
                >
                  <div className="text-accent-400 font-mono text-sm font-semibold">
                    {stat.value}
                  </div>
                  <div className="text-navy-400 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-navy-700 hover:border-navy-500 text-navy-300 hover:text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors"
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-500 hover:text-accent-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-500 hover:text-accent-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${profile.contact.email}`}
                className="text-navy-500 hover:text-accent-400 transition-colors"
                aria-label="Send email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className={`hidden md:block ${isInView ? "animate-fade-in" : "opacity-0"}`}>
            <ArchitectureDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
