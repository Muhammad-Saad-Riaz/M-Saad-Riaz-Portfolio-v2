'use client';

import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolio-data";
import { socialLinks } from "@/constants/social-links";
import { navLinks } from "@/constants/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // managing user scroll around 20 pixel or above for Navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll',handleScroll)
    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  }, []);

  // When screen resizes to desktop, close mobile menu
  useEffect(() => {
    const handleResize = ()=>{
      if(window.innerWidth >= 768){
        setIsOpen(false);
      };
    };
    window.addEventListener('resize',handleResize);
  
    return () => {
      window.removeEventListener('resize',handleResize);
    }
  }, []);

  // Close Mobile Menu when user press Escape key
  useEffect(() => {
    const handleEscape = (e:KeyboardEvent) => {
      if (e.key==="Escape"){
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown",handleEscape);
  
    return () => {
      window.removeEventListener("keydown",handleEscape)
    }
  }, []);
  
  
  // disabling background scroll when navbar is open on mobile
  useEffect(() => {
    if (isOpen){
      document.body.style.overflow = 'hidden';
    }
    else{
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return(
    <header className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 ${
      scrolled
        ? 'bg-background/80 backdrop-blur-xl border-b border-border h-20'
        : 'bg-transparent h-20'
    }`}>
      <div className="max-w-6xl w-full mx-auto px-6 flex items-center justify-between">

        {/* Name / Logo */}
        <Link
          href='/'
          className="relative group z-50"
          onClick={()=>setIsOpen(false)}
        >
          <span className="text-lg md:text-xl font-clash tracking-wide font-semibold text-text group-hover:text-gold transition-colors duration-200">
            {personalInfo.fullName}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link)=>(
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-muted-custom font-sans font-medium text-sm hover:text-text transition-colors duration-200 relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Primary CTA */}
          <Button size='default' className="bg-gold hover:bg-gold-light font-bold font-sans text-background rounded shadow-lg shadow-gold/10 hover:shadow-gold/20" asChild>
            <a 
              href={socialLinks.fiverr}
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire Me
            </a>
          </Button>
        </nav>

        {/* Mobile Toggle Menu */}
        <button 
          onClick={()=>setIsOpen(prev=>!prev)}
          className="md:hidden z-50 p-2 -mr-2 text-text hover:text-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6"/> : <Menu className="h-6 w-6"/>}
        </button>
      </div>

      {/* Full-Screen Mobile Drawer via Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-surface border-b border-border px-6 py-6 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            <ul className="flex flex-col gap-4 text-base font-sans font-medium text-muted-custom">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-ivory block py-1 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="h-px bg-border w-full"></div>
            <a
              href={socialLinks.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center text-sm font-sans font-semibold bg-gold text-background py-3 rounded transition-all duration-200"
            >
              Hire Me
            </a>
            
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}