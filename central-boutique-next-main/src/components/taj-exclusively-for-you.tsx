"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import promoKey from "@/assets/promo-key.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";

const tajItems = [
  {
    id: 1,
    cardTitle: "DIRECT STAY PRIVILEGES",
    description: "Enjoy exclusive benefits such as a complimentary room upgrade and high-speed Wi-Fi when you reserve your stay directly with us.",
    linkText: "VIEW OFFERS",
    link: "/hotel/offers",
    image: promoKey,
  },
  {
    id: 2,
    cardTitle: "BOUTIQUE SUITES",
    description: "Fifteen thoughtfully designed rooms featuring plush velvet accents, glass screen marble baths, and quiet considered luxury.",
    linkText: "EXPLORE ROOMS",
    link: "/hotel/rooms-suites",
    image: roomDeluxe,
  },
  {
    id: 3,
    cardTitle: "CURATED DINING",
    description: "Indulge in a refined culinary experience featuring artisanal breakfasts, local delicacies, and attentive personal service.",
    linkText: "DISCOVER DINING",
    link: "/services",
    image: "/sliderSection/dining.webp",
  },
  {
    id: 4,
    cardTitle: "BESPOKE HOSPITALITY",
    description: "Located in Civil Lines, experience Moradabad's first boutique hotel with 24-hour reception and chauffeured transfers.",
    linkText: "OUR SERVICES",
    link: "/about",
    image: "/sliderSection/hospitality.webp",
  },
];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 100 : dir < 0 ? -100 : 0,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -100 : dir < 0 ? 100 : 0,
    opacity: 0,
  }),
};

export function TajExclusivelyForYouSection() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const prev = () =>
    setIndex(([i]) => [(i - 1 + tajItems.length) % tajItems.length, -1]);
  const next = () =>
    setIndex(([i]) => [(i + 1) % tajItems.length, 1]);

  const prevIndex = (index - 1 + tajItems.length) % tajItems.length;
  const nextIndex = (index + 1) % tajItems.length;

  const current = tajItems[index];
  const prevItem = tajItems[prevIndex];
  const nextItem = tajItems[nextIndex];

  return (
    <section className="relative bg-[#181818] text-[#EAE6DF] py-20 md:py-32 overflow-hidden min-h-[720px]">
      {/* Background Image Layer - Continuous Cross-Fade */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {tajItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={false}
            animate={{ opacity: idx === index ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={item.image}
              alt="Section background"
              fill
              priority={idx === 0}
              className="object-cover opacity-45 filter brightness-[0.75]"
            />
          </motion.div>
        ))}
        {/* Top & Bottom Subtle Vignette for Header Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#181818] via-transparent to-[#181818]" />
      </div>

      <div className="mx-auto max-w-[1440px] px-6 md:px-14 relative z-10">
        {/* Top Header Grid matching Taj Hotels layout */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-10 md:mb-14">
          <div>
            <div className="flex items-start gap-4">
              <span className="h-px w-14 bg-gold/80 mt-4 shrink-0" />
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#EAE6DF] tracking-[0.16em] uppercase font-normal leading-[1.1]">
                EXCLUSIVELY <br /> FOR YOU
              </h2>
            </div>
          </div>
          <div className="md:pt-2">
            <p className="text-[#B0ACA5] font-light text-sm md:text-base leading-relaxed max-w-md md:ml-auto">
              Refinement and creativity intertwine with dreamlike destinations and soulful moments on each sojourn with Central Boutique Hotel.
            </p>
          </div>
        </div>

        {/* Carousel Showcase Container */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Side Panel (Brighter white lines: Right line solid 1.5px, Top/Bottom lines fade to transparent on left) */}
            <div
              onClick={prev}
              className="hidden lg:flex lg:col-span-3 relative h-[480px] md:h-[520px] cursor-pointer items-center justify-center overflow-hidden group bg-transparent"
            >
              {/* Frame Lines: Brighter 1.5px white lines */}
              <div className="absolute inset-y-5 inset-x-2 pointer-events-none z-20">
                {/* Inner Right Vertical Border Line (Brighter) */}
                <div className="absolute right-0 top-0 bottom-0 w-[1.5px] bg-white/75" />
                {/* Top Border Line (Brighter, fades out to left) */}
                <div className="absolute top-0 right-0 left-0 h-[1.5px] bg-gradient-to-l from-white/75 via-white/40 to-transparent" />
                {/* Bottom Border Line (Brighter, fades out to left) */}
                <div className="absolute bottom-0 right-0 left-0 h-[1.5px] bg-gradient-to-l from-white/75 via-white/40 to-transparent" />
              </div>

              {/* Left Circular Navigation Arrow Button (Larger & Brighter) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous Slide"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full border-2 border-white/70 text-white hover:border-gold hover:text-gold transition-all flex items-center justify-center bg-black/30 backdrop-blur-xs shadow-lg"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Overlay Text (Larger font & well-spaced from arrow button) */}
              <div className="relative z-20 text-center pl-16 pr-6 drop-shadow-lg">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.h4
                    key={prevItem.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="font-serif text-lg md:text-xl text-[#EAE6DF] tracking-[0.20em] uppercase leading-snug max-w-[200px]"
                  >
                    {prevItem.cardTitle}
                  </motion.h4>
                </AnimatePresence>
              </div>
            </div>

            {/* Middle Active Card (Bigger dimensions & sleek rectangular proportions) */}
            <div className="lg:col-span-6 relative z-20">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="h-[480px] md:h-[520px] flex flex-col overflow-hidden shadow-2xl group relative"
                >
                  {/* Mobile Navigation Arrows (Visible only on mobile screens < 1024px) */}
                  <button
                    onClick={prev}
                    aria-label="Previous Slide"
                    className="lg:hidden absolute left-4 top-[32%] -translate-y-1/2 z-30 h-11 w-11 rounded-full border-2 border-white/70 text-white bg-black/40 backdrop-blur-xs flex items-center justify-center active:scale-95 transition-transform"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  <button
                    onClick={next}
                    aria-label="Next Slide"
                    className="lg:hidden absolute right-4 top-[32%] -translate-y-1/2 z-30 h-11 w-11 rounded-full border-2 border-white/70 text-white bg-black/40 backdrop-blur-xs flex items-center justify-center active:scale-95 transition-transform"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  {/* Top Photo Area (~64% height) - Larger & Vibrant */}
                  <div className="relative w-full h-[64%] overflow-hidden">
                    <Image
                      src={current.image}
                      alt={current.cardTitle}
                      fill
                      priority
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Bottom Pure White Box (~36% height) - Flush White Box with Larger Heading */}
                  <div className="relative w-full h-[36%] bg-white text-[#1A1A1A] px-6 py-5 md:px-10 md:py-6 text-center flex flex-col items-center justify-center">
                    <h3 className="font-serif text-lg md:text-2xl text-[#222222] tracking-[0.16em] uppercase mb-2">
                      {current.cardTitle}
                    </h3>
                    <p className="text-xs md:text-base text-[#555555] font-light leading-relaxed max-w-lg mb-3 line-clamp-2">
                      {current.description}
                    </p>
                    <Link
                      href={current.link}
                      className="inline-flex items-center gap-1.5 text-[#B68F42] hover:text-[#8D6B29] text-xs md:text-sm uppercase tracking-[0.22em] font-medium transition-colors"
                    >
                      {current.linkText} <span className="text-sm font-semibold">&rsaquo;</span>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side Panel (Brighter white lines: Left line solid 1.5px, Top/Bottom lines fade to transparent on right) */}
            <div
              onClick={next}
              className="hidden lg:flex lg:col-span-3 relative h-[480px] md:h-[520px] cursor-pointer items-center justify-center overflow-hidden group bg-transparent"
            >
              {/* Frame Lines: Brighter 1.5px white lines */}
              <div className="absolute inset-y-5 inset-x-2 pointer-events-none z-20">
                {/* Inner Left Vertical Border Line (Brighter) */}
                <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-white/75" />
                {/* Top Border Line (Brighter, fades out to right) */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-white/75 via-white/40 to-transparent" />
                {/* Bottom Border Line (Brighter, fades out to right) */}
                <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-white/75 via-white/40 to-transparent" />
              </div>

              {/* Overlay Text (Larger font & well-spaced from arrow button) */}
              <div className="relative z-20 text-center pr-16 pl-6 drop-shadow-lg">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.h4
                    key={nextItem.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="font-serif text-lg md:text-xl text-[#EAE6DF] tracking-[0.20em] uppercase leading-snug max-w-[200px]"
                  >
                    {nextItem.cardTitle}
                  </motion.h4>
                </AnimatePresence>
              </div>

              {/* Right Circular Navigation Arrow Button (Larger & Brighter) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next Slide"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full border-2 border-white/70 text-white hover:border-gold hover:text-gold transition-all flex items-center justify-center bg-black/30 backdrop-blur-xs shadow-lg"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

          </div>

          {/* Responsive Mobile Pagination Dots */}
          <div className="flex lg:hidden justify-center gap-2 mt-8">
            {tajItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() =>
                  setIndex(([oldIdx]) => [idx, idx > oldIdx ? 1 : -1])
                }
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === index ? "w-8 bg-gold" : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
