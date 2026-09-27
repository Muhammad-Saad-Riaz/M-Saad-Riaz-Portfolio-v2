"use client";

import { motion, Variants } from "framer-motion";
import { experienceContent } from "@/data/portfolio-data";
import {
  ExternalLink,
  ShoppingBag,
  ShoppingCart,
  Megaphone,
  ChartNoAxesCombined,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "../ui/badge";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const iconMap: Record<string, LucideIcon> = {
  ShoppingBag,
  ShoppingCart,
  Megaphone,
  ChartNoAxesCombined,
};

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <span className="h-px w-8 bg-gold/50" />
            {experienceContent.label}
          </span>
        </motion.div>

        {/* Section Intro */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="mb-12 max-w-3xl"
        >
          <h2 className="mb-5 font-clash text-3xl font-semibold leading-tight tracking-tight text-ivory md:text-4xl lg:text-[2.7rem]">
            {experienceContent.heading}
          </h2>

          <p className="max-w-2xl font-sans text-base leading-7 text-muted-custom">
            {experienceContent.subheading}
          </p>
        </motion.div>

        {/* Experience Entry */}
        {experienceContent.items.map((experience) => (
          <motion.article
            key={`${experience.company}-${experience.role}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative overflow-hidden rounded-2xl border border-border bg-surface/40"
          >
            {/* Subtle top accent */}
            <div
              aria-hidden="true"
              className="h-px w-full bg-gradient-to-r from-gold/60 via-gold/20 to-transparent"
            />

            <div className="p-6 md:p-8 lg:p-10">
              {/* Header */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between"
              >
                <div>
                  <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    {experience.company}
                  </p>

                  <h3 className="font-clash text-2xl font-semibold leading-tight tracking-wide text-ivory md:text-3xl">
                    {experience.role}
                  </h3>

                  <p className="mt-2 font-sans text-sm font-medium text-muted-custom">
                    {experience.brand}
                  </p>
                </div>

                <div className="shrink-0">
                  <span className="inline-flex items-center rounded-full border border-border bg-background/40 px-3 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-custom">
                    Professional Experience
                  </span>
                </div>
              </motion.div>

              {/* Main Description */}
              <motion.p
                variants={itemVariants}
                className="mt-8 max-w-4xl font-sans text-base leading-7 text-muted-custom"
              >
                {experience.description}
              </motion.p>

              {/* Responsibilities */}
              <motion.div
                variants={itemVariants}
                className="mt-10 border-t border-border pt-8"
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-6 bg-gold/50" />

                  <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-text">
                    Areas of Work
                  </h4>
                </div>

                <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
                  {experience.areas.map((area) => (
                    <div key={area.title}>
                      <div className="mb-2.5 flex items-center gap-2.5">
                        {(() => {
                          const Icon = iconMap[area.icon];

                          return Icon ? (
                            <Icon
                              size={16}
                              strokeWidth={1.75}
                              className="shrink-0 text-gold"
                              aria-hidden="true"
                            />
                          ) : null;
                        })()}

                        <h5 className="font-sans text-sm font-semibold text-text">
                          {area.title}
                        </h5>
                      </div>

                      <p className="font-sans text-sm leading-6 text-muted-custom">
                        {area.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Technologies */}
              <motion.div
                variants={itemVariants}
                className="mt-10 border-t border-border pt-8"
              >
                <h4 className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-custom">
                  Technologies & Tools
                </h4>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <Badge
                      key={technology}
                      variant="outline"
                      className="text-xs font-sans font-medium text-muted-foreground py-3 px-3 bg-surface"
                    >
                      {technology}
                    </Badge>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              {experience.liveUrl && (
                <motion.div variants={itemVariants} className="mt-10">
                  <a
                    href={experience.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 font-sans text-sm font-semibold text-background shadow-lg shadow-gold/10 transition-all duration-200 hover:bg-gold-light hover:shadow-gold/20"
                  >
                    Visit ZaraNwa
                    <ExternalLink
                      size={14}
                      aria-hidden="true"
                    />
                  </a>
                </motion.div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}