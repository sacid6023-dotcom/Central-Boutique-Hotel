"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { galleryImages } from "@/lib/site-data";

const categories = ["All", "Rooms", "Lobby", "Dining", "Exterior"] as const;

export function GalleryView() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);
  
  const filtered = cat === "All" ? galleryImages : galleryImages.filter((g) => g.category === cat);

  return (
    <>
      <PageHero eyebrow="Visit in pictures" title="Gallery" image="/heroImages/390569.webp" crumb="Gallery" />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-5 py-2.5 uppercase text-xs tracking-[0.22em] border transition-colors ${
                  cat === c
                    ? "bg-wine text-ivory border-wine"
                    : "border-gold/40 text-charcoal hover:border-gold hover:text-wine"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <ScrollReveal key={`${img.src}-${cat}-${i}`} delay={(i % 6) * 0.05}>
                <button
                  onClick={() => setOpen(i)}
                  className="group block w-full break-inside-avoid relative overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={1200}
                    height={800}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-auto transition-transform duration-[900ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-wine-deep/0 group-hover:bg-wine-deep/30 transition-colors" />
                  <div className="absolute inset-3 border border-gold/0 group-hover:border-gold/50 transition-all" />
                  <span className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity eyebrow !text-gold-soft bg-charcoal/60 px-2 py-1 z-10">
                    {img.category}
                  </span>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        open={open !== null}
        close={() => setOpen(null)}
        index={open ?? 0}
        slides={filtered.map((g) => ({
          src: g.src,
          alt: g.alt,
        }))}
      />
    </>
  );
}
