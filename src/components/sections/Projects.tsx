"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio-data";
import { Badge } from "../ui/badge";
import Image from "next/image";
import {
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { Button } from "../ui/button";
import { FiGithub } from "react-icons/fi";

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-3 text-xs font-sans font-semibold tracking-widest uppercase text-gold">
            <span className="w-8 h-px bg-gold/50" />
            Personal Projects
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-sans text-base text-muted-foreground mb-16 max-w-xl"
        >
          A selection of personal projects built to explore modern frontend
          architecture, user experience, and scalable interfaces.
        </motion.p>

        {/* Project List */}
        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay: i * 0.05,
              }}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-2xl border border-border bg-surface p-8 md:p-10 hover:border-gold/30 transition-colors duration-300"
            >
              {/* Left content - Change Sides for even and odd cards */}
              <div
                className={`flex flex-col order-1 ${i % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
              >
                {/* Type Badge */}
                <div className="mb-4">
                  <Badge
                    variant="outline"
                    className="px-2.5 py-1 text-muted-foreground"
                  >
                    {project.type}
                  </Badge>
                </div>

                {/* Title */}
                <h3 className="font-clash font-semibold text-2xl md:text-3xl text-ivory mb-3 group-hover:text-gold transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm font-sans mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="flex flex-col gap-2.5 mb-6">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-3 text-sm font-sans text-foreground"
                    >
                      <CheckCircle2 size={14} className="text-gold shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <Badge
                      variant="outline"
                      key={tech}
                      className="bg-background/70 text-muted-foreground py-3 px-2.5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.liveUrl && (
                    <Button
                      className="rounded-md hover:bg-gold-light transition-colors duration-200 shadow-lg shadow-gold/10"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                        <ExternalLink size={12} />
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      className="rounded-md hover:border-gold/50 hover:text-gold transition-colors duration-200"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                        <FiGithub size={12} />
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Right Screenshot */}
              <div className={`${i % 2 === 1 ? "lg:order-1" : "lg:order-2"} `}>
                <div className="relative rounded-xl overflow-hidden border border-border bg-background shadow-xl">
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-border">
                    <span className="w-2.5 h-2.5 rounded-full bg-border" />
                    <span className="w-2.5 h-2.5 rounded-full bg-border" />
                    <span className="w-2.5 h-2.5 rounded-full bg-border" />
                    <span className="ml-3 flex-1  rounded bg-background/60 text-xs text-muted-foreground font-sans flex items-center px-2 truncate opacity-60 py-1">
                      {project.liveUrl.replace("https://", "")}
                    </span>
                  </div>

                  {/* Screenshot */}
                  {project.image ? (
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={project.image}
                        alt={`Screenshot of ${project.title}`}
                        fill
                        className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[16/10] w-full bg-background flex items-center justify-center">
                      <span className="text-xs font-sans text-muted-foreground">
                        Screenshot coming soon
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
