"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/portfolio-data";
import { Search, ClipboardList, Code2, Rocket, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
    Search,
    ClipboardList,
    Code2,
    Rocket,
  };

export default function Process() {

  return (
    <section id="process" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-3 uppercase text-gold text-xs font-semibold tracking-widest">
            <span className="h-px w-8 bg-gold/50" />
            Process
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-3xl lg:text-4xl font-clash font-semibold tracking-wider leading-tight max-w-xl text-ivory"
        >
          How I Work
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-sans text-muted-foreground text-base mb-12 max-w-xl leading-relaxed"
        >
          Every project follows a clear process focused on communication,
          quality, and delivering reliable results.
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                className="group relative flex flex-col p-6 bg-surface/50 border border-border hover:border-gold/40 hover:bg-surface transition-colors duration-300 rounded-xl overflow-hidden"
              >
                {/* Faint background step number */}
                <span
                  aria-hidden="true"
                  className="absolute top-4 right-4 font-clash font-semibold text-7xl text-gold/10 group-hover:text-gold/20 pointer-events-none leading-none select-none transition-colors duration-300"
                >
                  0{step.step}
                </span>

                {/* Icon */}
                <div className="mb-5 bg-background flex items-center justify-center h-11 w-11 rounded-full border border-border group-hover:border-gold/30 transition-colors duration-300">
                  <Icon size={18} className="text-gold" />
                </div>

                {/* Title */}
                <div className="font-clash font-semibold tracking-wide text-lg text-ivory mb-3">
                  {step.title}
                </div>

                {/* Description */}
                <p className=" font-sans text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
