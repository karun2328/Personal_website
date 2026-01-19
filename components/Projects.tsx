"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { resume } from "@/data/resume";

// Mini Chart Component for benchmark visualization
function MiniChart({ data }: { data: number[] }) {
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const range = maxValue - minValue || 1;

  return (
    <div className="flex items-end justify-between h-20 gap-1">
      {data.map((value, index) => {
        const height = ((value - minValue) / range) * 100;
        return (
          <motion.div
            key={index}
            initial={{ height: 0 }}
            whileInView={{ height: `${height}%` }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t opacity-80"
          />
        );
      })}
    </div>
  );
}

export default function Projects() {
  // Dummy benchmark data for visualization (not real performance numbers)
  const benchmarkData = [2, 3.5, 5, 8, 6, 4.5, 7];

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Production-oriented work in LLM inference optimization and serving
          </p>
        </motion.div>

        <div className="space-y-12">
          {resume.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -4 }}
              className="group relative p-8 md:p-10 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gray-700 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.type}</p>
                    {project.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Approach & Results
                    </h4>
                    <ul className="space-y-3">
                      {project.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className="text-gray-300 flex items-start"
                        >
                          <span className="text-blue-400 mr-2">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Benchmark Performance
                    </h4>
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                      <MiniChart data={benchmarkData} />
                      <p className="text-xs text-gray-400 mt-2 text-center">
                        Relative performance metrics (benchmark visualization)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}