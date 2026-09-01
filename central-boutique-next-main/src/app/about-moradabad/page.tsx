import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Award } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { Eyebrow } from "@/components/eyebrow";
import { Hairline, Ornament } from "@/components/ornament";
import { ScrollReveal } from "@/components/scroll-reveal";
import brasswareImg from "@/assets/moradabad-brassware.jpg";
import biryaniImg from "@/assets/moradabad-biryani.png";
import dalJalebiImg from "@/assets/moradabad-dal-jalebi.png";
import diningHero from "@/assets/gallery-dining-1.jpg";

export const metadata: Metadata = {
  title: "About Moradabad — The Brass City & Authentic Culinary Heritage",
  description: "Explore Moradabad – the Brass City of India. Discover its artisan craftsmanship, authentic Moradabad Biryani, Dal-Jalebi, and regional delicacies at Central Boutique Hotel.",
};

export default function AboutMoradabadPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Discover the City"
          title="About Moradabad"
          image={diningHero}
          crumb="About Moradabad"
        />

        {/* Section 1: The Brass City of India */}
        <section className="py-24 md:py-32 relative overflow-hidden grain">
          <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden border border-gold/30 shadow-2xl rounded-sm">
                  <Image
                    src={brasswareImg}
                    alt="Moradabad - The Brass City of India"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wine-deep/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-6 bg-charcoal/85 backdrop-blur-md border border-gold/30 text-ivory">
                    <p className="eyebrow !text-gold-soft text-[0.65rem]">CENTURIES OF CRAFTSMANSHIP</p>
                    <h4 className="font-serif text-2xl text-ivory mt-1">Artisan Brassware</h4>
                    <p className="text-ivory/70 text-xs mt-1">Moradabad · Uttar Pradesh · India</p>
                  </div>
                </div>
                <div className="absolute -inset-4 border border-gold/20 -z-10 translate-x-6 translate-y-6 hidden sm:block" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <Eyebrow>City Heritage</Eyebrow>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-[1.08] text-wine">
                Moradabad &ndash; The Brass City of India
              </h2>
              <Hairline className="mt-6 !bg-gradient-to-r !from-gold/60 !to-transparent max-w-[100px] !bg-gold/60" />

              <p className="mt-6 text-foreground/80 leading-relaxed font-light text-base md:text-lg">
                Nestled in the heart of Uttar Pradesh, Moradabad is internationally renowned as the <strong className="font-medium text-wine">Brass City of India</strong>, celebrated for its centuries-old craftsmanship and rich cultural heritage.
              </p>
              <p className="mt-4 text-foreground/75 leading-relaxed font-light text-base">
                The city is home to master artisans whose handcrafted brassware and metal artistry are admired across the globe, making Moradabad a destination where tradition meets timeless elegance.
              </p>

              <div className="mt-10 p-6 bg-cream/70 border border-gold/30 rounded-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/15 text-wine flex items-center justify-center shrink-0 border border-gold/30 mt-1">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-wine font-medium">Global Artisan Distinction</h4>
                  <p className="text-xs text-foreground/70 mt-1 leading-relaxed">
                    Exporting handcrafted brass masterpieces worldwide, Moradabad stands as a proud symbol of India&apos;s royal metalwork tradition.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 2: A Taste of Moradabad - Culinary Showcase */}
        <section className="py-24 md:py-32 bg-cream/50 relative overflow-hidden grain border-t border-gold/20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <Ornament />
              <Eyebrow className="mt-6">Local Gastronomy</Eyebrow>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 text-wine leading-tight">
                A Taste of Moradabad
              </h2>
              <p className="mt-6 text-foreground/75 font-light leading-relaxed text-base md:text-lg">
                Beyond its remarkable heritage, Moradabad is equally celebrated for its distinctive culinary traditions. From aromatic local recipes to beloved street-side delicacies, the city&apos;s cuisine reflects generations of authentic flavours that offer visitors a truly memorable dining experience.
              </p>
            </div>

            {/* Culinary Items Showcase */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {/* Culinary Item 1: Moradabad Biryani */}
              <ScrollReveal>
                <div className="bg-ivory border border-gold/30 rounded-sm overflow-hidden shadow-xl h-full flex flex-col group">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={biryaniImg}
                      alt="Authentic Moradabad Biryani"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-wine-deep/70 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 bg-gold/90 text-charcoal text-[0.65rem] uppercase tracking-[0.22em] font-medium px-3 py-1 z-10 shadow-sm">
                      Culinary Favourite
                    </span>
                  </div>
                  <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                    <div>
                      <Eyebrow className="!text-gold">Iconic Dish</Eyebrow>
                      <h3 className="font-serif text-3xl text-wine mt-2">Moradabad Biryani</h3>
                      <div className="h-px w-12 bg-gold/50 my-4" />
                      <p className="text-foreground/75 leading-relaxed font-light text-base">
                        A local culinary favourite, Moradabad Biryani is renowned for its delicate aroma, fragrant long-grain rice, and perfectly balanced blend of traditional spices. Prepared using time-honoured recipes, it delivers a light yet flavourful taste that has become synonymous with the city&apos;s rich food culture.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Culinary Item 2: Moradabad Dal–Jalebi */}
              <ScrollReveal delay={0.1}>
                <div className="bg-ivory border border-gold/30 rounded-sm overflow-hidden shadow-xl h-full flex flex-col group">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={dalJalebiImg}
                      alt="Moradabad Dal Jalebi Speciality"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-wine-deep/70 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 bg-gold/90 text-charcoal text-[0.65rem] uppercase tracking-[0.22em] font-medium px-3 py-1 z-10 shadow-sm">
                      Regional Speciality
                    </span>
                  </div>
                  <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                    <div>
                      <Eyebrow className="!text-gold">Timeless Heritage</Eyebrow>
                      <h3 className="font-serif text-3xl text-wine mt-2">Moradabad Dal&ndash;Jalebi</h3>
                      <div className="h-px w-12 bg-gold/50 my-4" />
                      <p className="text-foreground/75 leading-relaxed font-light text-base">
                        An iconic speciality of the region, Dal&ndash;Jalebi is a unique combination of savoury lentils paired with freshly prepared, golden-crisp jalebis. This delightful contrast of flavours has made it one of Moradabad&apos;s most cherished culinary traditions and an essential experience for every visitor.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 3: Dining Banner CTA at Central Boutique Hotel */}
        <section className="py-24 md:py-32 bg-charcoal text-ivory relative overflow-hidden grain border-t border-gold/20">
          <div className="mx-auto max-w-5xl px-6 relative z-10 text-center">
            <Ornament />
            <Eyebrow className="mt-6 !text-gold-soft">Curated In-House Dining</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 text-ivory leading-tight">
              Experience the Authentic Flavours at Central Boutique Hotel
            </h2>
            <p className="mt-6 text-ivory/80 max-w-2xl mx-auto font-light leading-relaxed text-base md:text-lg">
              Discover the true essence of Moradabad through our specially curated local cuisine. At Central Boutique Hotel, our chefs bring the city&apos;s most celebrated dishes to your table using authentic recipes, premium ingredients, and exceptional culinary craftsmanship.
            </p>

            {/* Checklist */}
            <div className="mt-10 max-w-xl mx-auto bg-white/5 border border-gold/30 p-8 rounded-sm text-left backdrop-blur-md">
              <h4 className="font-serif text-2xl text-gold mb-6 text-center">
                Order Your Favourite Moradabad Specialities
              </h4>
              <ul className="space-y-4 text-sm md:text-base text-ivory/90 font-light">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                  <span>Authentic Moradabad Biryani</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                  <span>Traditional Dal&ndash;Jalebi</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                  <span>Freshly Prepared Regional Delicacies</span>
                </li>
              </ul>
            </div>

            <p className="mt-8 text-gold italic font-serif text-xl">
              Savour the authentic taste of Moradabad &mdash; exclusively at Central Boutique Hotel.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <a
                href="https://wa.me/917895591010?text=Hello%20Central%20Boutique%20Hotel,%20I%20would%20like%20to%20order%20Moradabad%20Specialities%20dining."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-discover px-10 py-4 uppercase text-xs tracking-[0.26em] font-medium shadow-xl"
              >
                Order via WhatsApp
              </a>
              <Link
                href="/contact"
                className="btn-wine-outline !border-ivory/40 !text-ivory hover:!bg-gold hover:!text-charcoal px-10 py-4 uppercase text-xs tracking-[0.26em] font-medium"
              >
                Reserve Dining Table
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
