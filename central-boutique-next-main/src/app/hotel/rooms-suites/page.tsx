import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { rooms } from "@/lib/site-data";
import { RoomCard } from "./room-card";

export const metadata: Metadata = {
  title: "Rooms & Suites — Central Boutique Hotel",
  description: "Deluxe rooms and Superior rooms. Wine velvets, modern amenities and considered service.",
};

export default function RoomsSuites() {
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="The Hotel"
          title="Rooms & Suites"
          image="/central/Delux/390601.webp"
          crumb="Rooms & Suites"
        />

        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 space-y-24 md:space-y-32">
            {rooms.map((r, i) => (
              <ScrollReveal key={r.name}>
                <RoomCard room={r} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
