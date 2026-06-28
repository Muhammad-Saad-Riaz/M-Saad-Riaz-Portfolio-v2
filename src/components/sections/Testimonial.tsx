"use client";

import { motion } from "framer-motion";
import { testimonial } from "@/data/portfolio-data";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { Badge } from "../ui/badge";

export default function Testimonial() {
  return (
    <section className="py-12 px-6 ">
      <div className="max-w-6xl mx-auto">
        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl mx-auto rounded-2xl border border-border bg-surface p-8 md:p-12 text-center shadow-2xl shadow-black/10 "
        >
          {/* Quotation Mark */}
          <div className="flex justify-center mb-8">
            <Quote className="w-10 h-10 text-gold/40" strokeWidth={1.5} />
          </div>

          {/* Review Text */}
          <p className="max-w-xl mx-auto font-sans text-lg md:text-xl text-foreground leading-relaxed mb-8">
            {testimonial.content}
          </p>

          {/* Star rating */}
          <div className="flex items-center justify-center gap-1.5 mb-8">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} size={18} className="text-gold fill-gold" />
            ))}
          </div>

          {/* Divider Line */}
          <div className="w-16 h-px bg-border mx-auto mb-6" />

          {/* Client Info */}
          <div className="flex flex-col items-center ">
            <p className="font-clash font-semibold tracking-wider text-lg text-ivory mb-1 ">
              {testimonial.name}
            </p>
            <p className="font-sans text-sm text-muted-foreground mb-4">
              {testimonial.role}
            </p>
          </div>

          {/* Verified Badge */}
          <Badge
            variant="outline"
            className="inline-flex gap-1.5 px-2 py-3 bg-gold/5 border border-gold/10"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
            <span className="font-sans text-xs font-medium text-gold/80 tracking-wide">
              Verified Client
            </span>
          </Badge>
        </motion.div>
      </div>
    </section>
  );
}
