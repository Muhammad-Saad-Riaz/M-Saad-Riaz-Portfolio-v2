"use client";

import { motion } from "framer-motion";
import { aboutContent, personalInfo } from "@/data/portfolio-data";
import { Code2, Zap, MessageCircle, MapPin, LucideIcon } from "lucide-react";
import Image from "next/image";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Zap,
  MessageCircle,
};

export default function About() {
  return (
    <section id="about" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-3 text-xs font-sans font-semibold tracking-widest uppercase text-gold">
            <span className="w-8 h-px bg-gold/50" />
            About
          </span>
        </motion.div>

        {/* Top Grid- Text + Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-start mb-16">
          {/* left - text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-2 lg:order-1"
          >
            <h2 className="font-clash font-semibold text-3xl md:text-4xl text-ivory leading-tight mb-6">
              {aboutContent.heading}
            </h2>

            <div className="flex flex-col gap-4 mb-8">
              {aboutContent.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="font-sans text-base text-muted-foreground leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Location + Availability */}
            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center gap-2 text-sm font-sans text-muted-foreground">
                <MapPin size={14} className="text-gold shrink-0" />
                {personalInfo.location}
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-sans text-muted-foreground">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold/90 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold"></span>
                </span>
                {personalInfo.availability}
              </span>
            </div>
          </motion.div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Gold Glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 bg-gold/10 blur-[40px] rounded-2xl pointer-events-none"
              />

              {/* Photo */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-border shadow-2xl">
                <Image
                  src={aboutContent.photo}
                  alt={`Photo of ${personalInfo.fullName}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 256px, 288px"
                />
              </div>

              {/* Decorative corner accent */}
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-gold/30 rounded-br-2xl pointer-events-none"
              />
            </div>
          </motion.div>
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-border mb-16" />

        {/* Value Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aboutContent.cards.map((card, i) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                // whileHover={{y:-4}}
                className="flex flex-col p-8 rounded-2xl border border-border bg-surface/50 hover:bg-surface hover:border-gold/30 group transition-colors duration-300"
              >
                <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-background border border-border group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-clash font-medium text-xl text-ivory mb-3 tracking-wide">
                  {card.title}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
