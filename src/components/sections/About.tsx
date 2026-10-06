"use client";

import { motion } from "framer-motion";
import { aboutContent, personalInfo } from "@/data/portfolio-data";
import {
  Code2,
  Zap,
  MessageCircle,
  MapPin,
  LucideIcon,
} from "lucide-react";
import Image from "next/image";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Zap,
  MessageCircle,
};

export default function About() {
  return (
    <section id="about" className="px-6 py-12">
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
            About
          </span>
        </motion.div>

        {/* Introduction + Photo */}
        <div className="mb-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="order-2 lg:order-1"
          >
            <h2 className="mb-7 max-w-2xl font-clash text-3xl font-semibold leading-[1.08] tracking-tight text-ivory md:text-4xl lg:text-[2.7rem]">
              {aboutContent.heading}
            </h2>

            <div className="mb-9 flex max-w-2xl flex-col gap-5">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-sans text-base leading-7 text-muted-custom"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Personal Details */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5 font-sans text-sm text-muted-custom">
                <MapPin
                  size={15}
                  strokeWidth={1.75}
                  className="shrink-0 text-gold"
                  aria-hidden="true"
                />

                <span>{personalInfo.location}</span>
              </div>

              <div className="flex items-center gap-2.5 font-sans text-sm text-muted-custom">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/70 opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
                </span>

                <span>{personalInfo.availability}</span>
              </div>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative">
              {/* Subtle Gold Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-4 rounded-2xl bg-gold/8 blur-[45px]"
              />

              {/* Portrait */}
              <div className="relative h-64 w-64 overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl md:h-72 md:w-72">
                <Image
                  src={aboutContent.photo}
                  alt={`Portrait of ${personalInfo.fullName}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 256px, 288px"
                />
              </div>

              {/* Corner Accent */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 rounded-br-2xl border-b-2 border-r-2 border-gold/30"
              />
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          aria-hidden="true"
          className="mb-16 h-px w-full bg-border"
        />

        {/* Value Pillars */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {aboutContent.cards.map((card) => {
            const Icon = iconMap[card.icon];

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-border bg-surface/40 p-7 transition-colors duration-300 hover:border-gold/25 hover:bg-surface"
              >
                {/* Icon */}
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background transition-transform duration-300 group-hover:scale-105">
                  {Icon && (
                    <Icon
                      size={19}
                      strokeWidth={1.7}
                      className="text-gold"
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Title */}
                <h3 className="mb-3 font-clash text-xl font-medium tracking-wide text-ivory">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm leading-6 text-muted-custom">
                  {card.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
