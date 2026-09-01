"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { heroSlides } from "@/lib/site-data";

export function HeroCarousel() {
  const [i, setI] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragCurrentX, setDragCurrentX] = useState<number | null>(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % heroSlides.length), 7000);
    return () => clearInterval(t);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragCurrentX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || dragStartX === null) return;
    setDragCurrentX(e.clientX);
  };

  const handlePointerUp = () => {
    if (!isDragging || dragStartX === null || dragCurrentX === null) {
      setIsDragging(false);
      return;
    }

    const distance = dragStartX - dragCurrentX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setI((v) => (v + 1) % heroSlides.length);
    } else if (isRightSwipe) {
      setI((v) => (v - 1 + heroSlides.length) % heroSlides.length);
    }

    setIsDragging(false);
    setDragStartX(null);
    setDragCurrentX(null);
  };

  const slide = heroSlides[i];

  return (
    <section
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-charcoal touch-pan-y select-none "
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onDragStart={(e) => e.preventDefault()}
    >
      {/* 3D Visual Depth Animated Background Showcase */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.15, rotateX: 3, rotateY: -2 }}
          animate={{ opacity: 1, scale: 1.02, rotateX: 0, rotateY: 0 }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: 1200 }}
          className="absolute inset-0 w-full h-full transform-gpu"
        >
          <Image
            src={slide.src}
            alt={slide.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Atmospheric 3D Lighting & Vignette Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-wine-deep/60 via-charcoal/30 to-charcoal/90 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-charcoal to-transparent pointer-events-none" />

      {/* Ambient 3D Gold Glow Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 md:px-14 w-full text-ivory">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <p className="eyebrow !text-gold-soft mb-6">{slide.eyebrow}</p>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight">
                {slide.title}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-ivory/85 max-w-xl font-light leading-relaxed">
                {slide.subtitle}
              </p>
              <div className="mt-10 flex items-center gap-6">
                <Link
                  href="/hotel/overview"
                  className="btn-discover px-8 py-3.5 uppercase text-xs tracking-[0.24em] font-medium"
                >
                  Discover the Hotel
                </Link>
                <Link href="/rooms" className="text-gold link-underline uppercase text-xs tracking-[0.24em]">
                  Our Rooms
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Indicator Lines */}
      <div className="absolute bottom-10 left-0 right-0 z-20 pointer-events-none">
        <div className="mx-auto max-w-7xl px-6 md:px-14 flex items-center justify-start">
          <div className="flex items-center gap-1.5 pointer-events-auto">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setI(idx);
                }}
                aria-label={`Slide ${idx + 1}`}
                className="group relative py-4 px-2.5 focus:outline-none cursor-pointer"
              >
                <span
                  className={`block transition-all duration-300 ease-out ${
                    idx === i
                      ? "w-16 h-1 bg-gold"
                      : "w-8 h-0.5 bg-ivory/40 group-hover:w-14 group-hover:h-1 group-hover:bg-ivory/80"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
