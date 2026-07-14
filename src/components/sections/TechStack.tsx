'use client';

import { motion, Variants } from "framer-motion";
import { techStackContent } from "@/data/portfolio-data";
import { LucideIcon, Monitor, Code2, Wrench, CheckIcon, CheckCircle2 } from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};

// Icon mapping for the categories
const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Code2,
  Wrench,
};

export default function Techstack(){
    return(
        <section className="py-12 px-6">
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
                    <span className="h-px w-8 bg-gold/50"/>
                    {techStackContent.label}
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.div
                  initial={{opacity:0,y:16}}
                  whileInView={{opacity:1,y:0}}
                  viewport={{once:true}}
                  transition={{duration:0.5, delay:0.05}}
                  className="mb-4 text-3xl lg:text-4xl font-clash font-semibold tracking-wider leading-tight text-ivory max-w-xl"
                >
                  {techStackContent.heading}
                </motion.div>

                {/* Subtitle */}
                <motion.div
                  initial={{opacity:0,y:16}}
                  whileInView={{opacity:1,y:0}}
                  viewport={{once:true}}
                  transition={{duration:0.5,delay:0.1}}
                  className="font-sans text-base text-muted-foreground max-w-xl leading-relaxed mb-12"
                >
                  {techStackContent.subheading}
                </motion.div>

                {/* Categories Grid */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once:true,margin:"-80px"}}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {techStackContent.categories.map((category)=>{
                    const Icon= iconMap[category.icon]
                    return(
                      <motion.div
                        key={category.title}
                        variants={itemVariants}
                        className="flex flex-col p-6 bg-surface/50 border border-border rounded-lg group hover:border-gold/40 hover:bg-surface/80 transition-colors duration-300"
                      >
                        {/* Category Title + Icon */}
                        <div className="flex items-center gap-4 mb-8 pb-4 border-b border-border/50">
                          {/* Icon */}
                          <div className="flex items-center justify-center h-10 w-10 bg-background border border-border rounded-sm group-hover:border-gold/40 transition-colors duration-300">
                            <Icon size={18} className="text-gold"/>
                          </div>
                          <h3 className="font-clash text-ivory font-semibold text-xl tracking-wider group-hover:text-gold transition-colors duration-300">
                            {category.title}
                          </h3>
                        </div>

                        {/* Skills Badges */}
                        <div className="flex flex-wrap gap-2.5">
                          {category.skills.map((skill)=>(
                            <div
                              key={skill}
                              className="inline-flex gap-2 items-center font-sans text-sm text-foreground bg-background border border-border px-3 py-1.5 rounded-md hover:border-gold/40 hover:text-gold hover:bg-background/60 transition-colors duration-200 select-none"
                            >
                              <CheckCircle2 size={14} className="text-gold shrink-0"/>
                              {skill}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )    
                  })}
                </motion.div>
            </div>
        </section>
    );
}
