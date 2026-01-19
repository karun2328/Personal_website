"use client";

import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import { Calendar, MapPin } from "lucide-react";

// Group bullets by theme
function groupBullets(bullets: string[]) {
  const themes: { [key: string]: string[] } = {
    "Data Pipelines": [],
    "Inference & Serving": [],
    "Optimization": [],
    "Reliability & Traceability": [],
    "Collaboration": [],
  };

  bullets.forEach((bullet) => {
    const lower = bullet.toLowerCase();
    if (lower.includes("pipeline") || lower.includes("preprocessing")) {
      themes["Data Pipelines"].push(bullet);
    } else if (
      lower.includes("inference") ||
      lower.includes("latency") ||
      lower.includes("throughput") ||
      lower.includes("retrieval") ||
      lower.includes("batching") ||
      lower.includes("serving")
    ) {
      themes["Inference & Serving"].push(bullet);
    } else if (
      lower.includes("optimization") ||
      lower.includes("optimize") ||
      lower.includes("improve") ||
      lower.includes("performance") ||
      lower.includes("reduce")
    ) {
      themes["Optimization"].push(bullet);
    } else if (
      lower.includes("trace") ||
      lower.includes("reliability") ||
      lower.includes("integrity") ||
      lower.includes("classification") ||
      lower.includes("signal")
    ) {
      themes["Reliability & Traceability"].push(bullet);
    } else {
      themes["Collaboration"].push(bullet);
    }
  });

  // Remove empty themes
  return Object.entries(themes).filter(([_, bullets]) => bullets.length > 0);
}

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-4 sm:px-6 lg:px-8 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building production ML systems for enterprise-scale inference
          </p>
        </motion.div>

        <div className="relative">
          <div className="space-y-16">
            {resume.experience.map((exp, index) => {
              const groupedBullets = groupBullets(exp.bullets);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={`${exp.company}-${exp.position}-${index}`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className={`relative flex flex-col md:flex-row items-start gap-8 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content card */}
                  <div
                    className={`flex-1 ${
                      isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="p-8 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gray-700 transition-all"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">
                            {exp.position}
                          </h3>
                          <p className="text-xl text-blue-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-col md:items-end gap-1 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>
                              {exp.startDate} - {exp.endDate}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6 mt-6">
                        {groupedBullets.map(([theme, bullets]) => (
                          <div key={theme}>
                            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                              {theme}
                            </h4>
                            <ul className="space-y-2">
                              {bullets.map((bullet, bulletIndex) => (
                                <li
                                  key={bulletIndex}
                                  className="text-gray-300 flex items-start leading-relaxed"
                                >
                                  <span className="text-blue-400 mr-2 mt-1">
                                    •
                                  </span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}