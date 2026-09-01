"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import promoKey from "@/assets/promo-key.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";

const items = [
  {
    id: 1,
    tag: "EPICURE & DINING",
    title: "Curated Culinary Delights",
    subtitle: "A refined dining experience featuring local specialties and artisanal beverages crafted for discerning palates.",
    image: "/sliderSection/dining.webp",
    link: "/services",
    linkText: "EXPLORE DINING",
  },
  {
    id: 2,
    tag: "DIRECT BOOKING ADVANTAGE",
    title: "Exclusive Direct Privileges",
    subtitle: "Enjoy a complimentary room upgrade and high-speed internet when you reserve your stay directly with us.",
    image: promoKey,
    link: "/hotel/offers",
    linkText: "VIEW OFFERS",
  },
  {
    id: 3,
    tag: "BOUTIQUE SUITES",
    title: "The Intimate Stay",
    subtitle: "Fourteen ultra-modern rooms with wine velvets, marble baths, and unhurried personal service.",
    image: roomDeluxe,
    link: "/hotel/rooms-suites",
    linkText: "DISCOVER ROOMS",
  },
  {
    id: 4,
    tag: "BESPOKE SERVICES",
    title: "Tailored Hospitality",
    subtitle: "From 24-hour reception assistance to private chauffeured transfers, every request is attentively fulfilled.",
    image: "/sliderSection/hospitality.webp",
    link: "/services",
    linkText: "VIEW SERVICES",
  },
];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 90 : dir < 0 ? -90 : 0,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -90 : dir < 0 ? 90 : 0,
    opacity: 0,
    scale: 0.98,
  }),
};

export function ExclusivelyForYouSection() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const prev = () =>
    setIndex(([i]) => [(i - 1 + items.length) % items.length, -1]);
  const next = () =>
    setIndex(([i]) => [(i + 1) % items.length, 1]);

  const current = items[index];
  const prevItem = items[(index - 1 + items.length) % items.length];
  const nextItem = items[(index + 1) % items.length];

  return (
    <section className="bg-charcoal text-ivory py-24 md:py-32 relative overflow-hidden grain">
      {/* Subtle gold border frames */}
      <div className="pointer-events-none absolute inset-6 md:inset-10 border border-gold/15" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-8 items-end mb-16 border-b border-gold/20 pb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow !text-gold-soft">Curated For You</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-ivory tracking-wide leading-[1.05] uppercase">
              Exclusively <br /> For You
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-ivory/75 font-light text-base md:text-lg leading-relaxed max-w-md md:ml-auto">
              Refinement and creativity intertwine with dreamlike staycations and soulful moments at Central Boutique Hotel.
            </p>
          </div>
        </div>

        {/* Desktop & Mobile Carousel Showcase */}
        <div className="relative flex items-center justify-center gap-6 md:gap-8">
          {/* Navigation Prev Button */}
          <button
            onClick={prev}
            aria-label="Previous Slide"
            className="absolute left-0 md:left-4 z-30 h-12 w-12 rounded-full border border-gold/40 text-gold bg-charcoal/80 hover:bg-gold hover:text-charcoal transition-all flex items-center justify-center backdrop-blur-md shadow-lg"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Navigation Next Button */}
          <button
            onClick={next}
            aria-label="Next Slide"
            className="absolute right-0 md:right-4 z-30 h-12 w-12 rounded-full border border-gold/40 text-gold bg-charcoal/80 hover:bg-gold hover:text-charcoal transition-all flex items-center justify-center backdrop-blur-md shadow-lg"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Left Peek Card (Desktop Only) */}
          <div
            onClick={prev}
            className="hidden lg:block w-1/4 opacity-40 hover:opacity-75 transition-opacity cursor-pointer transform scale-90 relative overflow-hidden aspect-[4/5] border border-gold/30 rounded-sm"
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={prevItem.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={prevItem.image}
                  alt={prevItem.title}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="eyebrow !text-gold-soft text-[0.65rem]">{prevItem.tag}</p>
                  <h4 className="font-serif text-xl text-ivory mt-1 truncate">{prevItem.title}</h4>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Center Main Card */}
          <div className="w-full lg:w-2/4 relative z-20">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="bg-ivory text-charcoal border border-gold/30 shadow-2xl overflow-hidden group"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                </div>

                {/* White / Ivory Info Box */}
                <div className="p-8 md:p-10 text-center bg-ivory">
                  <p className="eyebrow text-gold mb-2">{current.tag}</p>
                  <h3 className="font-serif text-3xl md:text-4xl text-wine mb-4">{current.title}</h3>
                  <p className="text-foreground/80 text-sm md:text-base font-light leading-relaxed mb-6 max-w-lg mx-auto">
                    {current.subtitle}
                  </p>
                  <Link
                    href={current.link}
                    className="inline-flex items-center gap-2 text-gold hover:text-wine uppercase text-xs tracking-[0.24em] font-medium link-underline"
                  >
                    {current.linkText} <span className="text-sm">&rsaquo;</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Peek Card (Desktop Only) */}
          <div
            onClick={next}
            className="hidden lg:block w-1/4 opacity-40 hover:opacity-75 transition-opacity cursor-pointer transform scale-90 relative overflow-hidden aspect-[4/5] border border-gold/30 rounded-sm"
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={nextItem.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={nextItem.image}
                  alt={nextItem.title}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="eyebrow !text-gold-soft text-[0.65rem]">{nextItem.tag}</p>
                  <h4 className="font-serif text-xl text-ivory mt-1 truncate">{nextItem.title}</h4>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="mt-12 flex justify-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() =>
                setIndex(([oldIdx]) => [idx, idx > oldIdx ? 1 : -1])
              }
              className={`h-1.5 transition-all duration-300 rounded-full ${
                idx === index ? "bg-gold w-8" : "bg-ivory/30 w-2 hover:bg-ivory/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
