import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { Ornament, Hairline } from "@/components/ornament";
import { ScrollReveal } from "@/components/scroll-reveal";
import hero1 from "@/assets/hero-1.jpg";

export const metadata: Metadata = {
  title: "About Us — Central Boutique Hotel Moradabad",
  description: "The story of Moradabad's first boutique hotel — an intimate address in Civil Lines composed for character.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main>
        <PageHero eyebrow="The Hotel" title="About Us" image={hero1} crumb="About Us" />

        <section className="py-24 md:py-32 grain">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <ScrollReveal>
              <Ornament />
              <p className="eyebrow mt-6">Moradabad's First Boutique Hotel</p>
              <h2 className="font-serif text-4xl md:text-5xl mt-6 text-wine leading-[1.1]">
                A story of scale giving way to character.
              </h2>
              <Hairline className="mt-10 max-w-[120px] mx-auto" />
              <div className="mt-10 space-y-8 text-foreground/80 text-lg leading-relaxed font-light text-left max-w-3xl mx-auto">
                <p>
                  Established at Level 2, Cross Road Mall, Civil Lines, Central Boutique Hotel is the very first of its kind in Moradabad. Comprising fifteen rooms quietly composed for travelers who appreciate intimacy and character over standard commercial scale.
                </p>
                <p>
                  Our philosophy is simple: we believe a hotel should feel less like a public lobby and more like a private residence. By limiting our size, our small, dedicated team can anticipate your needs and offer personal care that is impossible in larger establishments.
                </p>
                <p>
                  Every element of our hotel, from the warm wine velvets and antique golds of the decor to the modern amenities such as high-speed Wi-Fi and safe deposit lockers, is curated to provide a quiet, comfortable environment. Whether you are traveling for business, leisure, or both, we offer a cozy sanctuary in the graceful heart of Civil Lines.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
