import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { Ornament, Hairline } from "@/components/ornament";
import { ScrollReveal } from "@/components/scroll-reveal";
import hero3 from "@/assets/hero-3.jpg";

export const metadata: Metadata = {
  title: "Terms & Conditions — Central Boutique Hotel",
  description: "Terms and conditions of booking and stay at Central Boutique Hotel.",
};

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main>
        <PageHero eyebrow="Policies" title="Terms & Conditions" image={hero3} crumb="Terms & Conditions" />

        <section className="py-24 md:py-32 grain">
          <div className="mx-auto max-w-3xl px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Ornament />
                <h2 className="font-serif text-3xl md:text-4xl mt-6 text-wine">Booking & Stay Policies</h2>
                <Hairline className="mt-6 max-w-[80px] mx-auto" />
              </div>
              
              <div className="space-y-8 text-foreground/80 leading-relaxed text-sm">
                <div>
                  <h3 className="font-serif text-xl text-wine mb-3">1. Rates and Taxes</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>All room rates are subject to government taxes as applicable at the time of check-out.</li>
                    <li>Rates are listed in Indian Rupees (INR) and are subject to change without prior notice.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-xl text-wine mb-3">2. Inclusions</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Complimentary breakfast is included in the daily room rate, served at the designated timings.</li>
                    <li>Complimentary high-speed Wi-Fi access is provided in all guest rooms and public areas of the hotel.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-xl text-wine mb-3">3. Check-In and Check-Out</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Our standard check-out time is **12:00 noon**.</li>
                    <li>Please contact the front desk in advance if you require a late check-out. Late check-out is subject to room availability and additional charges.</li>
                    <li>Guests must present valid government-issued photo identification (such as Aadhaar, passport, or driving license) upon check-in.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-xl text-wine mb-3">4. Facilities</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>For convenience and accessibility, elevator/lift access is available to all floors.</li>
                    <li>Valuables should be stored in the in-room safe deposit locker provided. The hotel is not responsible for the loss of valuables left unsecured.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-xl text-wine mb-3">5. Payment and Cancellation</h3>
                  <p>
                    All bookings require a valid guarantee. Payment terms and cancellation policies depend on the rate plan chosen during booking. We accept cash and all major credit cards.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
