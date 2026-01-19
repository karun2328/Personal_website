"use client";

import { motion } from "framer-motion";
import { Zap, Server, Cpu } from "lucide-react";

const focusAreas = [
  {
    title: "Inference Optimization",
    subtitle: "Latency/Throughput Tradeoffs",
    icon: Zap,
    description:
      "Benchmarking transformer inference across frameworks (PyTorch, ONNXRuntime, TensorRT) to optimize latency and throughput on GPU and CPU hardware.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Serving & Concurrency",
    subtitle: "REST APIs, Batching, Load Testing",
    icon: Server,
    description:
      "Building production-oriented REST-based inference APIs with intelligent batching, concurrency handling, and load testing for scalable ML systems.",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Hardware-Aware Systems",
    subtitle: "GPU Memory, Profiling, Kernels",
    icon: Cpu,
    description:
      "Designing CUDA kernels, optimizing GPU memory hierarchy, and conducting hardware-aware profiling to achieve maximum performance on real hardware.",
    color: "from-green-500 to-emerald-500",
  },
];

export default function FocusAreas() {
  return (
    <section id="focus" className="py-32 px-4 sm:px-6 lg:px-8 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Focus Areas
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Core expertise in optimizing LLM inference and deployment at scale
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative p-8 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gray-700 transition-all group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}
              />
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-lg bg-gradient-to-br ${area.color} flex items-center justify-center mb-6`}
                >
                  <area.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold mb-2 text-white">
                  {area.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{area.subtitle}</p>
                <p className="text-gray-300 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}