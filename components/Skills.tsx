"use client";

import { motion } from "framer-motion";
import { resume } from "@/data/resume";

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build production ML systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resume.skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gray-700 transition-all"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((item, itemIndex) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: categoryIndex * 0.1 + itemIndex * 0.05,
                      duration: 0.5,
                    }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-lg text-sm border border-gray-700 hover:border-blue-500/50 transition-colors"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}