"use client"

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio-data";
import { socialLinks } from "@/constants/social-links";
import { Mail, ExternalLink, } from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";
import { FaFacebook, FaGithub, FaWhatsapp } from "react-icons/fa";

const socialButtons = [
  { icon: FaGithub, label: "GitHub", href: socialLinks.github },
  { icon: LiaLinkedin, label: "LinkedIn", href: socialLinks.linkedin },
  { icon: FaFacebook, label: "Facebook", href: socialLinks.facebook },
];

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    description: "Best for project inquiries",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "Chat directly",
    href: socialLinks.whatsapp ,
    description: "Quick questions and updates",
  },
  {
    icon: LiaLinkedin,
    label: "LinkedIn",
    value: "Muhammad Saad Riaz",
    href: socialLinks.linkedin ,
    description: "Connect professionally",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "Muhammad-Saad-Riaz",
    href: socialLinks.github ,
    description: "Browse my code",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">

      {/* Outer Glow */}
      <div className="relative max-w-6xl mx-auto">
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <div className="h-[400px] w-[600px] rounded-full bg-gold/5 blur-[100px]" />
          </div>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative rounded-3xl border border-border bg-surface p-10 md:p-16 lg:p-20 text-center"
          >

            {/* Section Label */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-3 text-xs font-sans font-semibold tracking-widest uppercase text-gold">
                <span className="w-8 h-px bg-gold/50" />
                Contact
                <span className="w-8 h-px bg-gold/50" />
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-clash font-semibold text-4xl md:text-5xl text-ivory leading-tight mb-6">
              Ready to Build Something Great?
            </h2>

            {/* Description */}
            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
              Have a project in mind, need a landing page, or want a modern
              website for your business? Let's talk.
            </p>

            {/* Two column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-14">

              {/* Left - Primary CTA */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-col gap-6"
              >
                {/* Fiverr CTA card */}
                <div className="rounded-2xl border border-gold/20 bg-gold/5 p-8 hover:border-gold/40 hover:bg-gold/10 transition-colors duration-300 ">
                  <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-3">
                    Ready to hire?
                  </p>
                  <h3 className="font-clash font-semibold text-2xl text-ivory mb-3">
                    View my Fiverr profile
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground mb-6 leading-relaxed">
                    Browse my gigs, see pricing, and place an order directly.
                    5-star rated with fast delivery.
                  </p>
                  <a
                    href={socialLinks.fiverr}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gold text-background font-sans font-semibold text-sm hover:bg-gold-light transition-colors duration-200 shadow-lg shadow-gold/10 hover:shadow-gold/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    Open Fiverr Profile
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Availability indicator */}
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-background">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold/90 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold" />
                  </span>
                  <span className="font-sans text-sm text-muted-foreground">
                    {personalInfo.availability} — {personalInfo.location}
                  </span>
                </div>
              </motion.div>

              {/* Right — Contact methods */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-col gap-3"
              >
                {contactMethods.map((method, i) => {
                  const Icon = method.icon;
                  return (
                    <motion.a
                      key={method.label}
                      href={method.href}
                      target={method.href.startsWith("mailto") ? undefined : "_blank"}
                      rel={method.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-background/50 hover:bg-background hover:border-gold/40 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      {/* Icon */}
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-border group-hover:border-gold/30 transition-colors duration-300 shrink-0">
                        <Icon size={16} className="text-gold" />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <p className="font-sans text-xs text-muted-foreground mb-0.5">
                          {method.description}
                        </p>
                        <p className="font-sans text-sm font-medium text-foreground group-hover:text-gold transition-colors duration-300 truncate">
                          {method.value}
                        </p>
                      </div>

                      {/* Arrow */}
                      <ExternalLink
                        size={14}
                        className="text-muted-foreground group-hover:text-gold transition-colors duration-300 shrink-0"
                      />
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-border mb-8" />

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex items-center justify-center gap-4"
            >
              {socialButtons.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background text-muted-foreground hover:border-gold/40 hover:text-gold hover:scale-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>
      </div>
    </section>
  );
};