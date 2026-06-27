"use client";

import {motion, Variants} from "framer-motion"
import { heroContent,trustStats } from "@/data/portfolio-data";
import { Badge } from "../ui/badge";
import { ArrowRight, CheckCircle2Icon, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero(){

  const containerVariant:Variants = {
    hidden:{opacity:0},
    show:{
      opacity:1,
      transition:{
        staggerChildren:0.15,
        delayChildren:0.2,
      },
    },
  };

  const itemVariants:Variants = {
    hidden:{
      opacity:0,
      y:20,
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:0.5,
        ease:"easeOut",
      },
    },
  };

  return(
    <section className="relative min-h-[calc(100vh-80px)] mt-20 pb-8 flex items-center justify-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gold/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={containerVariant}
          initial='hidden'
          animate='show'
          className="flex flex-col items-center"
        >

            {/* Availability Badge */}
            <motion.div variants={itemVariants} className="mb-8 mt-8">
              <Badge variant="default" className="text-gold bg-gold/5 rounded-full text-sm px-4 py-4 border-gold/30 "> 
                <Sparkles className="w-5 h-5 animate-pulse"/>
                <span>{heroContent.badge}</span>
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-clash font-semibold tracking-tight leading-[1.1] mb-4"
            >
              {heroContent.headingLine1} <br/> 
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold to-gold-light">{heroContent.headingHighlight}</span>
            </motion.h1>

            {/* Sub-Heading */}
            <motion.p
              variants={itemVariants}
              className="max-w-2xl mx-auto text-lg md:text-xl text-muted-custom font-sans mb-8 leading-relaxed "
            >
              {heroContent.description}
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto sm:min-w-45">
              {/* Primary CTA */}
              <Button
                size='lg'
                className="text-base font-semibold px-6 py-6 bg-gold hover:bg-gold-light text-background rounded-sm shadow-lg shadow-gold/10 hover:shadow-gold/20 transition-all duration-300 group tracking-normal sm:min-w-45"
                asChild
              >
                <Link href={heroContent.primaryCTA.href}>
                  {heroContent.primaryCTA.label}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              {/* Secondary CTA */}
              <Button
                size='lg'
                variant='outline'
                className="text-base font-medium px-6 py-6 border-border hover:bg-card hover:text-foreground rounded-sm transition-all duration-300 group sm:min-w-45"
                asChild
              >
                <a
                  href={heroContent.secondaryCTA.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {heroContent.secondaryCTA.label}
                  <ExternalLink size={14} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-14"
            >
              { trustStats.map((stat)=>(
                <div key={stat.label} className="flex items-center gap-2 text-sm font-medium text-muted-custom group">
                  <CheckCircle2Icon className="h-4 w-4 text-gold group-hover:scale-110 transition-all duration-300"/>
                  <span className="group-hover:text-muted-custom/70 transition-all duration-300 ">{stat.label}</span>
                </div>
              ))}    
            </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}