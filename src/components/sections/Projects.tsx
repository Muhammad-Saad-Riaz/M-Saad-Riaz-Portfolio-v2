// "use client";

// import { motion } from "framer-motion";
// import { projects } from "@/data/portfolio-data";
// import { Badge } from "../ui/badge";
// import Image from "next/image";
// import {
//   CheckCircle2,
//   ExternalLink,
// } from "lucide-react";
// import { Button } from "../ui/button";
// import { FiGithub } from "react-icons/fi";

// export default function Projects() {
//   return (
//     <section id="projects" className="py-12 px-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Section Label */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="mb-4"
//         >
//           <span className="inline-flex items-center gap-3 text-xs font-sans font-semibold tracking-widest uppercase text-gold">
//             <span className="w-8 h-px bg-gold/50" />
//             Selected Projects
//           </span>
//         </motion.div>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="font-sans text-base text-muted-foreground mb-16 max-w-xl"
//         >
//           A selection of client and personal projects showcasing business websites, SaaS applications, and modern frontend experiences.
//         </motion.p>

//         {/* Project List */}
//         <div className="flex flex-col gap-8">
//           {projects.map((project, i) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, y: 32 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-80px" }}
//               transition={{
//                 duration: 0.6,
//                 ease: [0.25, 0.1, 0.25, 1],
//                 delay: i * 0.05,
//               }}
//               className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-2xl border border-border bg-surface p-8 md:p-10 hover:border-gold/30 transition-colors duration-300"
//             >
//               {/* Left content - Change Sides for even and odd cards */}
//               <div
//                 className={`flex flex-col order-1 ${i % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
//               >
//                 {/* Type Badge */}
//                 <div className="mb-4">
//                   <Badge
//                     variant="outline"
//                     className="px-2.5 py-1 text-muted-foreground"
//                   >
//                     {project.type}
//                   </Badge>
//                 </div>

//                 {/* Title */}
//                 <h3 className="font-clash font-semibold text-2xl md:text-3xl text-ivory mb-3 group-hover:text-gold transition-colors duration-300">
//                   {project.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-muted-foreground text-sm font-sans mb-6 leading-relaxed">
//                   {project.description}
//                 </p>

//                 {/* Highlights */}
//                 <ul className="flex flex-col gap-2.5 mb-6">
//                   {project.highlights.map((highlight) => (
//                     <li
//                       key={highlight}
//                       className="flex items-center gap-3 text-sm font-sans text-foreground"
//                     >
//                       <CheckCircle2 size={14} className="text-gold shrink-0" />
//                       {highlight}
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Technologies */}
//                 <div className="flex flex-wrap gap-2 mb-8">
//                   {project.technologies.map((tech) => (
//                     <Badge
//                       variant="outline"
//                       key={tech}
//                       className="bg-background/70 text-muted-foreground py-3 px-2.5"
//                     >
//                       {tech}
//                     </Badge>
//                   ))}
//                 </div>

//                 {/* Links */}
//                 <div className="flex items-center gap-4">
//                   {project.liveUrl && (
//                     <Button
//                       className="rounded-md hover:bg-gold-light transition-colors duration-200 shadow-lg shadow-gold/10"
//                       asChild
//                     >
//                       <a
//                         href={project.liveUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Live Demo
//                         <ExternalLink size={12} />
//                       </a>
//                     </Button>
//                   )}
//                   {project.githubUrl && (
//                     <Button
//                       variant="outline"
//                       className="rounded-md hover:border-gold/50 hover:text-gold transition-colors duration-200"
//                       asChild
//                     >
//                       <a
//                         href={project.githubUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         GitHub
//                         <FiGithub size={12} />
//                       </a>
//                     </Button>
//                   )}
//                 </div>
//               </div>

//               {/* Right Screenshot */}
//               <div className={`${i % 2 === 1 ? "lg:order-1" : "lg:order-2"} `}>
//                 <div className="relative rounded-xl overflow-hidden border border-border bg-background shadow-xl">
//                   {/* Browser Chrome */}
//                   <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-border">
//                     <span className="w-2.5 h-2.5 rounded-full bg-border" />
//                     <span className="w-2.5 h-2.5 rounded-full bg-border" />
//                     <span className="w-2.5 h-2.5 rounded-full bg-border" />
//                     <span className="ml-3 flex-1  rounded bg-background/60 text-xs text-muted-foreground font-sans flex items-center px-2 truncate opacity-60 py-1">
//                       {project.liveUrl.replace("https://", "")}
//                     </span>
//                   </div>

//                   {/* Screenshot */}
//                   {project.image ? (
//                     <div className="relative aspect-[16/10] w-full">
//                       <Image
//                         src={project.image}
//                         alt={`Screenshot of ${project.title}`}
//                         fill
//                         className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
//                         sizes="(max-width: 1024px) 100vw, 50vw"
//                         loading="lazy"
//                       />
//                     </div>
//                   ) : (
//                     <div className="aspect-[16/10] w-full bg-background flex items-center justify-center">
//                       <span className="text-xs font-sans text-muted-foreground">
//                         Screenshot coming soon
//                       </span>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { projects, projectsContent } from "@/data/portfolio-data";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { CheckCircle2, ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-12">
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
            {projectsContent.label}
          </span>
        </motion.div>

        {/* Section Intro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="mb-4 font-clash text-3xl font-semibold leading-tight tracking-tight text-ivory md:text-4xl">
            {projectsContent.heading}
          </h2>

          <p className="max-w-xl font-sans text-base leading-7 text-muted-custom">
            {projectsContent.subheading}
          </p>
        </motion.div>

        {/* Project List */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => {

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: index * 0.05,
                }}
                className="group grid grid-cols-1 items-center gap-8 rounded-2xl border border-border bg-surface p-7 transition-colors duration-300 hover:border-gold/25 md:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10"
              >
                {/* Project Content */}
                <div
                  className={`flex flex-col order-1 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"} }`}
                >
                  {/* Project Type */}
                  <div className="mb-5">
                    <Badge
                      variant="outline"
                      className="border-border bg-background/40 py-3 px-2.5 font-sans text-[11px] font-medium tracking-wide text-muted-custom"
                    >
                      {project.type}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 max-w-xl font-clash text-2xl font-semibold leading-tight tracking-tight text-ivory transition-colors duration-300 group-hover:text-gold md:text-3xl">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-7 max-w-xl font-sans text-sm leading-6 text-muted-custom">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mb-7 flex flex-col gap-2.5">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 font-sans text-sm leading-6 text-text"
                      >
                        <CheckCircle2
                          size={14}
                          strokeWidth={1.75}
                          className="mt-1 shrink-0 text-gold"
                          aria-hidden="true"
                        />

                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <Badge
                        key={technology}
                        variant="outline"
                        className="bg-background/60 py-3 px-2.5 text-muted-custom"
                      >
                        {technology}
                      </Badge>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-wrap items-center gap-3">
                    <Button
                      size="default"
                      className="rounded-md bg-gold font-sans font-semibold text-background shadow-lg shadow-gold/10 transition-all duration-200 hover:bg-gold-light hover:shadow-gold/20"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                        <ExternalLink
                          size={13}
                          aria-hidden="true"
                        />
                      </a>
                    </Button>

                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="default"
                        className="rounded-md border-border font-sans font-medium transition-colors duration-200 hover:border-gold/50 hover:text-gold"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                          <FiGithub
                            size={13}
                            aria-hidden="true"
                          />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Project Preview */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : "lg:order-2"} `}>
                  <div className="relative overflow-hidden rounded-xl border border-border bg-background shadow-xl">
                    {/* Browser Chrome */}
                    <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
                      <span
                        aria-hidden="true"
                        className="h-2.5 w-2.5 rounded-full bg-border"
                      />

                      <span
                        aria-hidden="true"
                        className="h-2.5 w-2.5 rounded-full bg-border"
                      />

                      <span
                        aria-hidden="true"
                        className="h-2.5 w-2.5 rounded-full bg-border"
                      />

                      <div className="ml-3 flex min-w-0 flex-1 items-center rounded bg-background/60 px-2 py-1">
                        <span className="truncate font-sans text-xs text-muted-custom/80">
                          {project.liveUrl.replace("https://", "")}
                        </span>
                      </div>
                    </div>

                    {/* Screenshot */}
                    {project.image ? (
                      <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <Image
                          src={project.image}
                          alt={`${project.title} project screenshot`}
                          fill
                          loading="lazy"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    ) : (
                      <div className="flex aspect-[16/10] w-full items-center justify-center bg-background">
                        <span className="font-sans text-xs text-muted-custom">
                          Screenshot coming soon
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}