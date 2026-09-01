import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { Eyebrow } from "@/components/eyebrow";
import { Hairline } from "@/components/ornament";
import { ScrollReveal } from "@/components/scroll-reveal";
import { promotions, hotelInfo } from "@/lib/site-data";
import hero1 from "@/assets/hero-1.jpg";

export const metadata: Metadata = {
  title: "Special Offers — Central Boutique Hotel",
  description: "Best available flexible rates, advance-purchase offers and business essentials at Central Boutique Hotel.",
};

export default function Offers() {
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main>
        <PageHero eyebrow="The Hotel" title="Special Offers" image={hero1} crumb="Special Offers" />

        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 space-y-20 md:space-y-28">
            {promotions.map((p, i) => (
              <ScrollReveal key={p.title}>
                <article className={`grid md:grid-cols-5 gap-12 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className="md:col-span-3 relative">
                    <Image
                      src={p.image}
                      alt={p.title}
                      className="w-full aspect-[4/3] object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <span className="absolute top-5 left-5 bg-gold text-charcoal px-3 py-1 text-[0.65rem] tracking-[0.22em] uppercase z-10">
                      Offer {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:col-span-2">
                    <Eyebrow>{p.tag}</Eyebrow>
                    <h2 className="font-serif text-3xl md:text-4xl mt-4 text-wine leading-[1.1]">{p.title}</h2>
                    <Hairline className="mt-6 max-w-[80px]" />
                    <p className="mt-6 text-foreground/75 leading-relaxed">{p.body}</p>
                    <p className="mt-6 text-sm text-foreground/60 italic">
                      Terms apply. Speak with our team for the current arrangement.
                    </p>
                    <a
                      href={`mailto:${hotelInfo.email}?subject=Special Offer Enquiry`}
                      className="inline-block mt-8 btn-wine-outline px-6 py-3 uppercase text-xs tracking-[0.24em]"
                    >
                      Enquire
                    </a>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
