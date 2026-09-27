// "use client";

// import { motion } from "framer-motion";
// import { testimonial } from "@/data/portfolio-data";
// import { Star, Quote, CheckCircle2 } from "lucide-react";
// import { Badge } from "../ui/badge";

// export default function Testimonial() {
//   return (
//     <section className="py-12 px-6 ">
//       <div className="max-w-6xl mx-auto">
//         {/* Testimonial Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 24, scale: 0.98 }}
//           whileInView={{ opacity: 1, y: 0, scale: 1 }}
//           viewport={{ once: true, margin: "-80px" }}
//           transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
//           className="max-w-2xl mx-auto rounded-2xl border border-border bg-surface p-8 md:p-12 text-center shadow-2xl shadow-black/10 "
//         >
//           {/* Quotation Mark */}
//           <div className="flex justify-center mb-8">
//             <Quote className="w-10 h-10 text-gold/40" strokeWidth={1.5} />
//           </div>

//           {/* Review Text */}
//           <p className="max-w-xl mx-auto font-sans text-lg md:text-xl text-foreground leading-relaxed mb-8">
//             {testimonial.content}
//           </p>

//           {/* Star rating */}
//           <div className="flex items-center justify-center gap-1.5 mb-8">
//             {Array.from({ length: testimonial.rating }).map((_, i) => (
//               <Star key={i} size={18} className="text-gold fill-gold" />
//             ))}
//           </div>

//           {/* Divider Line */}
//           <div className="w-16 h-px bg-border mx-auto mb-6" />

//           {/* Client Info */}
//           <div className="flex flex-col items-center ">
//             <p className="font-clash font-semibold tracking-wider text-lg text-ivory mb-1 ">
//               {testimonial.name}
//             </p>
//             <p className="font-sans text-sm text-muted-foreground mb-4">
//               {testimonial.role}
//             </p>
//           </div>

//           {/* Verified Badge */}
//           <Badge
//             variant="outline"
//             className="inline-flex gap-1.5 px-2 py-3 bg-gold/5 border border-gold/10"
//           >
//             <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
//             <span className="font-sans text-xs font-medium text-gold/80 tracking-wide">
//               Verified Client
//             </span>
//           </Badge>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { testimonial } from "@/data/portfolio-data";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { Badge } from "../ui/badge";

export default function Testimonial() {
  return (
    <section className="px-6 py-12">
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
            Client Feedback
          </span>
        </motion.div>

        {/* Testimonial */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-surface/80 px-7 py-10 text-center md:px-10 md:py-12 lg:px-14"
        >
          {/* Subtle Gold Accent */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
          />

          {/* Quotation Mark */}
          <div className="mb-7 flex justify-center">
            <Quote
              className="h-9 w-9 text-gold/35"
              strokeWidth={1.4}
              aria-hidden="true"
            />
          </div>

          {/* Review */}
          <blockquote className="mx-auto max-w-2xl">
            <p className="font-sans text-base leading-7 text-foreground md:text-lg md:leading-8">
              “{testimonial.content}”
            </p>
          </blockquote>

          {/* Star Rating */}
          <div
            className="mt-8 flex items-center justify-center gap-1.5"
            role="img"
            aria-label={`${testimonial.rating} out of 5 stars`}
          >
            {Array.from({ length: testimonial.rating }).map((_, index) => (
              <Star
                key={index}
                size={17}
                strokeWidth={1.5}
                className="fill-gold text-gold"
                aria-hidden="true"
              />
            ))}
          </div>

          {/* Divider */}
          <div className="mx-auto my-7 h-px w-12 bg-border" />

          {/* Client Information */}
          <div className="flex flex-col items-center">
            <p className="mb-1 font-clash text-lg font-semibold tracking-wide text-ivory">
              {testimonial.name}
            </p>

            <p className="mb-4 font-sans text-sm text-muted-custom">
              {testimonial.role}
            </p>

            {/* Verified Client */}
            <Badge
              variant="outline"
              className="inline-flex gap-1.5 border-gold/15 bg-gold/5 px-2.5 py-1.5"
            >
              <CheckCircle2
                className="h-3.5 w-3.5 text-gold"
                aria-hidden="true"
              />

              <span className="font-sans text-xs font-medium tracking-wide text-gold/80">
                Verified Client
              </span>
            </Badge>
          </div>
        </motion.article>
      </div>
    </section>
  );
}