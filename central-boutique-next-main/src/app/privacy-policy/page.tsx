import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { Ornament, Hairline } from "@/components/ornament";
import { ScrollReveal } from "@/components/scroll-reveal";
import hero2 from "@/assets/hero-2.jpg";

export const metadata: Metadata = {
  title: "Privacy Policy — Central Boutique Hotel",
  description: "Privacy policy and guest data handling at Central Boutique Hotel.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main>
        <PageHero eyebrow="Policies" title="Privacy Policy" image={hero2} crumb="Privacy Policy" />

        <section className="py-24 md:py-32 grain">
          <div className="mx-auto max-w-3xl px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Ornament />
                <h2 className="font-serif text-3xl md:text-4xl mt-6 text-wine">Guest Privacy</h2>
                <Hairline className="mt-6 max-w-[80px] mx-auto" />
              </div>
              
              <div className="space-y-8 text-foreground/80 leading-relaxed text-sm">
                <div>
                  <h3 className="font-serif text-xl text-wine mb-3">1. Information Collection</h3>
                  <p>
                    We collect personal information necessary for guest registration, bookings, and providing hotel services. This includes name, contact details, identification documents (such as Aadhaar or passport), payment details, and guest preferences.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl text-wine mb-3">2. Use of Information</h3>
                  <p>
                    Your data is used solely to facilitate reservations, check-in registration as required by local authorities, process payments, and improve your guest experience. We do not sell or lease your personal information to third parties.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl text-wine mb-3">3. Data Security</h3>
                  <p>
                    We implement physical, electronic, and administrative safeguards to protect your personal data against unauthorized access, loss, or modification. Payment processing is conducted securely in compliance with standard bank practices.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl text-wine mb-3">4. Cookies and Web Site Traffic</h3>
                  <p>
                    Our website may use cookies to improve user experience and analyze traffic. These cookies do not store personally identifiable information and can be disabled through your browser settings.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl text-wine mb-3">5. Contact Information</h3>
                  <p>
                    If you have questions regarding this Privacy Policy or how your personal information is handled, please contact our Front Desk or email us at info@hotelcentral.co.in.
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
