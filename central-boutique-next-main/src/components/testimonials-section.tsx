"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/site-data";

export function TestimonialsSection() {
  const [i, setI] = useState(0);

  // Auto transition every 7 seconds, but reset interval when user interacts manually
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 7000);
    return () => clearInterval(t);
  }, [i]);

  const handlePrev = () => {
    setI((v) => (v - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setI((v) => (v + 1) % testimonials.length);
  };

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      // Swiped left -> Next
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      // Swiped right -> Prev
      handlePrev();
    }
  };

  const t = testimonials[i];

  return (
    <section className="bg-wine text-ivory py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-6 border border-gold/25 pointer-events-none" />
      <div className="mx-auto max-w-4xl px-14 text-center relative">
        <Quote className="h-10 w-10 text-gold mx-auto mb-8" />
        
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full border border-gold/30 text-gold/80 hover:border-gold hover:text-gold flex items-center justify-center transition-all bg-wine-deep/40 backdrop-blur-sm z-20 cursor-pointer"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="relative overflow-hidden min-h-[220px] md:min-h-[160px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="cursor-grab active:cursor-grabbing select-none w-full"
            >
              <p className="font-serif text-2xl md:text-3xl italic leading-[1.35] max-w-2xl mx-auto">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-8">
                <p className="eyebrow !text-gold-soft">{t.name}</p>
                <p className="text-ivory/60 text-sm mt-2">{t.origin}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full border border-gold/30 text-gold/80 hover:border-gold hover:text-gold flex items-center justify-center transition-all bg-wine-deep/40 backdrop-blur-sm z-20 cursor-pointer"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots Navigation */}
        <div className="mt-12 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1.5 w-1.5 rounded-full transition-all ${idx === i ? "bg-gold w-8" : "bg-ivory/30"}`}
              aria-label={`Testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
