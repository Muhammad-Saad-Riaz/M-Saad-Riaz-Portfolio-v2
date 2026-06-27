"use client";

import { motion, Variants} from "framer-motion";
import { featuredProject } from "@/data/portfolio-data";
import { CheckCircle2, ExternalLink } from "lucide-react";
import { Badge } from "../ui/badge";
import Image from "next/image";

const containerVariants : Variants ={
  hidden:{},
  visible:{
    transition:{staggerChildren:0.12},
  },
};

const itemVariants : Variants = {
    hidden:{
      opacity:0,
      y:20,
    },
    visible:{
        opacity:1,
        y:0,
        transition:{duration:0.6,ease:[0.25, 0.1, 0.25, 1]},
    },
};

const imageVariants : Variants = {
    hidden:{
      opacity:0,
      y:20,
      scale:0.97
    },
    visible:{
        opacity:1,
        scale:1,
        y:0,
        transition:{duration:0.7,ease:[0.25, 0.1, 0.25, 1]},
    },
};

export default function FeaturedProject(){
    return(
      <section id="work" className="py-12 px-6">
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
              Featured Client Project
            </span>
          </motion.div>
          

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Text content */}
            <motion.div
              variants={containerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, margin: "-80px" }}
              className="order-2 lg:order-1 flex flex-col"
            >
              
              {/* Client Badge */}
              {/* <motion.div variants={itemVariants} className="mb-4">
                <span className="inline-flex items-center gap-2 text-xs font-sans font-medium tracking-widest uppercase text-muted-foreground">
                    <span className="w-4 h-px bg-border"/>
                    Build For a Real Client
                </span>
              </motion.div> */}

              {/* Project Title */}
              <motion.h2 
                variants={itemVariants} 
                className="font-clash font-semibold text-3xl md:text-4xl text-ivory leading-tight mb-4"
              >
                {featuredProject.title}
              </motion.h2>

              {/* Description */}
              <motion.p 
                variants={itemVariants}
                className="font-sans text-base text-muted-foreground leading-relaxed mb-8"
              >
                {featuredProject.description}
              </motion.p>

              {/* Features */}
              <motion.ul 
                variants={itemVariants}
                className="flex flex-col gap-3 mb-8"
              >
                {featuredProject.features.map((feature)=>(
                  <li key={feature} className="flex items-center gap-3 text-sm font-sans text-foreground">
                    <CheckCircle2 size={16} className="text-gold shrink-0"/>
                    {feature}
                  </li>
                ))}
              </motion.ul>

              {/* Technologies */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-10">
                {featuredProject.technologies.map((tech)=>(
                  <Badge key={tech} variant="outline" className="text-xs font-sans font-medium text-muted-foreground py-3 px-3 bg-surface">
                    {tech}
                  </Badge>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div variants={itemVariants}>
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gold text-background font-sans font-semibold text-sm hover:bg-gold-light transition-colors duration-200 shadow-lg shadow-gold/10 hover:shadow-gold/20"
                >
                  Visit Live Website
                  <ExternalLink size={14} />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Side - Screenshot */}
            <motion.div
              variants={imageVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{once:true,margin:'-80px'}}
              className="relative order-1 lg:order-2"
            >
              {/* Glow behind image */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 bg-gold/5 blur-[60px] rounded-2xl pointer-events-none"
              />

              {/* Image Wrapper */}
              <div className="relative rounded-xl overflow-hidden border border-border bg-surface shadow-2xl">
                {/* Browser Chrome Bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-border">
                  <span className="w-3 h-3 rounded-full bg-border"/>
                  <span className="w-3 h-3 rounded-full bg-border"/>
                  <span className="w-3 h-3 rounded-full bg-border"/>
                  <span className="ml-3 flex-1 h-5 rounded bg-background/60 text-xs font-sans text-muted-foreground flex items-center px-2 truncate">
                    {featuredProject.browserLabel}
                  </span>
                </div>

                {/* Screenshot */}
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={featuredProject.image}
                    alt={`Screenshot of ${featuredProject.title}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    )
}