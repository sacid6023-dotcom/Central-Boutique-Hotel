import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { rooms } from "@/lib/site-data";
import { Eyebrow } from "@/components/eyebrow";

export const metadata: Metadata = {
  title: "Rooms — Central Boutique Hotel",
  description: "Fourteen quietly composed rooms — Deluxe, Superior, and Superior Twin.",
};

export default function Rooms() {
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main>
        <PageHero eyebrow="Our House" title="The Rooms" image="/central/Delux/390601.webp" crumb="Rooms" />

        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl mb-16">
              <Eyebrow>Browse the house</Eyebrow>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 text-wine leading-[1.1]">
                Fourteen rooms, two primary categories, one considered feeling.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 max-w-6xl mx-auto gap-6 md:gap-8">
              {rooms.map((r, i) => (
                <ScrollReveal key={r.name} delay={i * 0.1}>
                  <Link
                    href="/hotel/rooms-suites"
                    className="group block relative overflow-hidden"
                  >
                    <div className="relative overflow-hidden aspect-[4/5]">
                      <Image
                        src={r.image}
                        alt={r.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-wine-deep/85 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4 bg-gold/90 text-charcoal text-[0.65rem] uppercase tracking-[0.2em] font-medium px-3 py-1 z-10 shadow-sm">
                        {r.count}
                      </div>
                      <div className="absolute inset-6 border border-gold/0 group-hover:border-gold/60 transition-all duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-ivory z-10">
                        <p className="eyebrow !text-gold-soft">{r.subtitle}</p>
                        <h3 className="font-serif text-3xl mt-2">{r.name}</h3>
                        <p className="mt-2 text-ivory/70 text-sm">{r.amenities.slice(0, 3).join(" · ")}</p>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-20 text-center">
              <Link
                href="/hotel/rooms-suites"
                className="btn-wine-outline px-8 py-3 uppercase text-xs tracking-[0.24em]"
              >
                Full Room Details
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
