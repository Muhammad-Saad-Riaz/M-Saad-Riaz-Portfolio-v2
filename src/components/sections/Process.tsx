"use client";

import { motion } from "framer-motion";
import { processContent } from "@/data/portfolio-data";
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
          className="mb-14"
        >
          <span className="inline-flex items-center gap-3 uppercase text-gold text-xs font-semibold tracking-[0.2em]">
            <span className="h-px w-8 bg-gold/50" />
            {processContent.label}
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
          {processContent.heading}
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, }}
          className="font-sans text-muted-foreground text-base mb-12 max-w-xl leading-relaxed"
        >
          {processContent.subheading}
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processContent.steps.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.article
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
                  className="absolute top-4 right-4 font-clash font-semibold text-7xl text-gold/8 group-hover:text-gold/14 pointer-events-none leading-none select-none transition-colors duration-300"
                >
                  {step.step}
                </span>

                {/* Icon */}
                <div className="relative z-10 mb-7 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background transition-colors duration-300 group-hover:border-gold/30">
                  <Icon size={18} strokeWidth={1.7} className="text-gold" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="relative z-10 mb-3 font-clash text-lg font-semibold tracking-wide text-ivory transition-colors duration-300 group-hover:text-gold">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 font-sans text-sm leading-6 text-muted-custom">
                  {step.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
