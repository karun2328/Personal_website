"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { resume } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" className="py-32 px-4 sm:px-6 lg:px-8 bg-black/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
        </motion.div>

        <div className="space-y-8">
          {resume.education.map((edu, index) => (
            <motion.div
              key={`${edu.institution}-${index}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="p-8 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gray-700 transition-all"
            >
              <div className="flex items-start gap-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0"
                >
                  <GraduationCap className="w-8 h-8 text-white" />
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-blue-400 font-medium mb-3">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-gray-400">
                    <span>{edu.graduationDate}</span>
                    {edu.gpa && (
                      <span className="px-3 py-1 bg-gray-800 rounded-lg border border-gray-700">
                        GPA: {edu.gpa}
                      </span>
                    )}
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