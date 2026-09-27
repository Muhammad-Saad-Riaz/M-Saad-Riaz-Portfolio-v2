// "use client";

// import { motion, Variants} from "framer-motion";
// import { featuredProject } from "@/data/portfolio-data";
// import { CheckCircle2, ExternalLink } from "lucide-react";
// import { Badge } from "../ui/badge";
// import Image from "next/image";

// const containerVariants : Variants ={
//   hidden:{},
//   visible:{
//     transition:{staggerChildren:0.12},
//   },
// };

// const itemVariants : Variants = {
//     hidden:{
//       opacity:0,
//       y:20,
//     },
//     visible:{
//         opacity:1,
//         y:0,
//         transition:{duration:0.6,ease:[0.25, 0.1, 0.25, 1]},
//     },
// };

// const imageVariants : Variants = {
//     hidden:{
//       opacity:0,
//       y:20,
//       scale:0.97
//     },
//     visible:{
//         opacity:1,
//         scale:1,
//         y:0,
//         transition:{duration:0.7,ease:[0.25, 0.1, 0.25, 1]},
//     },
// };

// export default function FeaturedProject(){
//     return(
//       <section id="work" className="py-12 px-6">
//         <div className="max-w-6xl mx-auto">

//           {/* Section Label */}
          
//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="mb-16"
//           >
//             <span className="inline-flex items-center gap-3 text-xs font-sans font-semibold tracking-widest uppercase text-gold">
//               <span className="w-8 h-px bg-gold/50" />
//               Featured Client Project
//             </span>
//           </motion.div>
          

//           {/* Main Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
//             {/* Left Text content */}
//             <motion.div
//               variants={containerVariants}
//               initial='hidden'
//               whileInView='visible'
//               viewport={{ once: true, margin: "-80px" }}
//               className="order-2 lg:order-1 flex flex-col"
//             >
              
//               {/* Client Badge */}
//               {/* <motion.div variants={itemVariants} className="mb-4">
//                 <span className="inline-flex items-center gap-2 text-xs font-sans font-medium tracking-widest uppercase text-muted-foreground">
//                     <span className="w-4 h-px bg-border"/>
//                     Build For a Real Client
//                 </span>
//               </motion.div> */}

//               {/* Project Title */}
//               <motion.h2 
//                 variants={itemVariants} 
//                 className="font-clash font-semibold text-3xl md:text-4xl text-ivory leading-tight mb-4"
//               >
//                 {featuredProject.title}
//               </motion.h2>

//               {/* Description */}
//               <motion.p 
//                 variants={itemVariants}
//                 className="font-sans text-base text-muted-foreground leading-relaxed mb-8"
//               >
//                 {featuredProject.description}
//               </motion.p>

//               {/* Features */}
//               <motion.ul 
//                 variants={itemVariants}
//                 className="flex flex-col gap-3 mb-8"
//               >
//                 {featuredProject.features.map((feature)=>(
//                   <li key={feature} className="flex items-center gap-3 text-sm font-sans text-foreground">
//                     <CheckCircle2 size={16} className="text-gold shrink-0"/>
//                     {feature}
//                   </li>
//                 ))}
//               </motion.ul>

//               {/* Technologies */}
//               <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-10">
//                 {featuredProject.technologies.map((tech)=>(
//                   <Badge key={tech} variant="outline" className="text-xs font-sans font-medium text-muted-foreground py-3 px-3 bg-surface">
//                     {tech}
//                   </Badge>
//                 ))}
//               </motion.div>

//               {/* CTA */}
//               <motion.div variants={itemVariants}>
//                 <a
//                   href={featuredProject.liveUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gold text-background font-sans font-semibold text-sm hover:bg-gold-light transition-colors duration-200 shadow-lg shadow-gold/10 hover:shadow-gold/20"
//                 >
//                   Visit Live Website
//                   <ExternalLink size={14} />
//                 </a>
//               </motion.div>
//             </motion.div>

//             {/* Right Side - Screenshot */}
//             <motion.div
//               variants={imageVariants}
//               initial='hidden'
//               whileInView='visible'
//               viewport={{once:true,margin:'-80px'}}
//               className="relative order-1 lg:order-2"
//             >
//               {/* Glow behind image */}
//               <div
//                 aria-hidden="true"
//                 className="absolute -inset-4 bg-gold/5 blur-[60px] rounded-2xl pointer-events-none"
//               />

//               {/* Image Wrapper */}
//               <div className="relative rounded-xl overflow-hidden border border-border bg-surface shadow-2xl">
//                 {/* Browser Chrome Bar */}
//                 <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-border">
//                   <span className="w-3 h-3 rounded-full bg-border"/>
//                   <span className="w-3 h-3 rounded-full bg-border"/>
//                   <span className="w-3 h-3 rounded-full bg-border"/>
//                   <span className="ml-3 flex-1 h-5 rounded bg-background/60 text-xs font-sans text-muted-foreground flex items-center px-2 truncate">
//                     {featuredProject.browserLabel}
//                   </span>
//                 </div>

//                 {/* Screenshot */}
//                 <div className="relative aspect-[16/10] w-full">
//                   <Image
//                     src={featuredProject.image}
//                     alt={`Screenshot of ${featuredProject.title}`}
//                     fill
//                     className="object-cover object-top"
//                     sizes="(max-width: 1024px) 100vw, 50vw"
//                     priority
//                   />
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//         </div>
//       </section>
//     )
// }

"use client";

import { motion, Variants } from "framer-motion";
import { featuredProject } from "@/data/portfolio-data";
import { Badge } from "../ui/badge";
import {
  CheckCircle2,
  ExternalLink,
  Building2,
  UserRound,
  Layers3,
  Building,
} from "lucide-react";
import Image from "next/image";

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

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function FeaturedProject() {
  return (
    <section id="work" className="px-6 py-12">
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
            {featuredProject.label}
          </span>
        </motion.div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left — Project Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="order-2 flex flex-col lg:order-1"
          >
            {/* Category */}
            <motion.p
              variants={itemVariants}
              className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.18em] text-muted-custom"
            >
              {featuredProject.category}
            </motion.p>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="mb-5 max-w-xl font-clash text-3xl font-semibold leading-[1.08] tracking-tight text-ivory md:text-4xl lg:text-[2.7rem]"
            >
              {featuredProject.title}
            </motion.h2>

            {/* Intro Description */}
            <motion.p
              variants={itemVariants}
              className="mb-10 max-w-xl font-sans text-base leading-7 text-muted-custom"
            >
              {featuredProject.description}
            </motion.p>

            {/* Project Details */}
            <motion.div
              variants={itemVariants}
              className="mb-10 border-y border-border"
            >
              <dl className="grid grid-cols-1 sm:grid-cols-2">

                {/* Client */}
                <div className="flex gap-4 border-b border-border py-5 sm:border-r sm:pr-6 items-center">
                  <Building2
                    size={40}
                    className="mt-0.5 shrink-0 text-gold bg-surface p-2.5 rounded-full border border-border"
                    aria-hidden="true"
                  />
                  <div className="flex flex-col">
                    <dt className="mb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-custom">
                      Client
                    </dt>

                    <dd className="font-sans text-sm font-medium text-text">
                      {featuredProject.company}
                    </dd>
                  </div>
                </div>

                {/* Brand */}
                <div className="flex gap-4 border-b border-border py-5 sm:pl-6 items-center">
                  <Building
                    size={40}
                    className="mt-0.5 shrink-0 text-gold bg-surface p-2.5 rounded-full border border-border"
                    aria-hidden="true"
                  />
                  <div className="flex flex-col">
                    <dt className="mb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-custom">
                      Brand
                    </dt>

                    <dd className="font-sans text-sm font-medium text-text">
                      {featuredProject.brand}
                    </dd>
                  </div>
                </div>

                {/* Role */}
                <div className="flex gap-4 border-b border-border py-5 sm:border-b-0 sm:border-r sm:pr-6 items-center">
                  <UserRound
                    size={40}
                    className="mt-0.5 shrink-0 text-gold bg-surface p-2.5 rounded-full border border-border"
                    aria-hidden="true"
                  />
                  <div className="flex flex-col">
                    <dt className="mb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-custom">
                      Role
                    </dt>

                    <dd className="font-sans text-sm font-medium text-text">
                      {featuredProject.role}
                    </dd>
                  </div>
                </div>

                {/* Architecture */}
                <div className="flex gap-4 border-b border-border py-5 sm:pl-6 items-center">
                  <Layers3
                    size={40}
                    className="mt-0.5 shrink-0 text-gold bg-surface p-2.5 rounded-full border border-border"
                    aria-hidden="true"
                  />
                  <div className="flex flex-col">
                    <dt className="mb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-custom">
                      Architecture
                    </dt>

                    <dd className="font-sans text-sm font-medium text-text">
                      {featuredProject.architecture}
                    </dd>
                  </div>
                </div>
              </dl>
            </motion.div>

            {/* Key Capabilities */}
            <motion.div variants={itemVariants} className="mb-9">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-6 bg-gold/50" />

                <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-text">
                  Key Capabilities
                </h3>
              </div>

              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {featuredProject.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 font-sans text-sm leading-6 text-muted-custom"
                  >
                    <CheckCircle2
                      size={15}
                      strokeWidth={1.75}
                      className="mt-1 shrink-0 text-gold"
                      aria-hidden="true"
                    />

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Technologies */}
            <motion.div variants={itemVariants} className="mb-10">
              <h3 className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-custom">
                Technologies
              </h3>

              <div className="flex flex-wrap gap-2">
                {featuredProject.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs font-sans font-medium text-muted-foreground py-3 px-3 bg-surface"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <a
                href={featuredProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 font-sans text-sm font-semibold text-background shadow-lg shadow-gold/10 transition-all duration-200 hover:bg-gold-light hover:shadow-gold/20"
              >
                Visit Live Website

                <ExternalLink
                  size={14}
                  aria-hidden="true"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Website Preview */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative order-1 lg:order-2"
          >
            {/* Subtle Gold Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-5 rounded-2xl bg-gold/5 blur-[70px]"
            />

            {/* Browser Frame */}
            <div className="relative overflow-hidden rounded-xl border border-border bg-surface shadow-2xl">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
                <span
                  aria-hidden="true"
                  className="h-3 w-3 rounded-full bg-border"
                />

                <span
                  aria-hidden="true"
                  className="h-3 w-3 rounded-full bg-border"
                />

                <span
                  aria-hidden="true"
                  className="h-3 w-3 rounded-full bg-border"
                />

                <div className="ml-3 flex h-5 min-w-0 flex-1 items-center rounded bg-background/60 px-2">
                  <span className="truncate font-sans text-xs text-muted-custom">
                    {featuredProject.browserLabel}
                  </span>
                </div>
              </div>

              {/* Website Screenshot */}
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={featuredProject.image}
                  alt={`${featuredProject.brand} e-commerce website homepage`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}