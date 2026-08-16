"use client";
import { personalInfo } from "@/data/portfolio-data";
import { socialLinks } from "@/constants/social-links";
import { navLinks } from "@/constants/navigation";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";

const socialIcons = [
  { icon: FaGithub, label: "GitHub", href: socialLinks.github },
  { icon: FaLinkedin, label: "LinkedIn", href: socialLinks.linkedin },
  { icon: FaFacebook, label: "Facebook", href: socialLinks.facebook },
  { icon: TbBrandFiverr, label: "Fiverr", href: socialLinks.fiverr },
];

export default function Footer(){
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return(
    <footer className="border-t border-border px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
          
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <span className="font-clash font-semibold text-xl text-ivory tracking-tight">
              {personalInfo.fullName}
            </span>
            <p className="font-sans text-xs text-muted-foreground max-w-55 leading-relaxed">
              Frontend developer crafting modern, responsive web experiences.
            </p>
          </div>

          {/* Nav links */}
          <nav>
            <ul className="flex items-center gap-6 flex-wrap">
              {navLinks.map((link)=>(
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs font-sans text-muted-foreground hover:text-gold transition-colors duration-200 tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialIcons.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-8 h-8 rounded-full border border-border text-muted-foreground hover:border-gold/40 hover:text-gold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 font-sans text-sm font-medium text-muted-custom hover:text-gold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp
              size={12}
              className="group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </button>
        </div>
      </div>
    </footer>
  )
}