import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactView } from "@/components/contact-view";

export const metadata: Metadata = {
  title: "Contact — Central Boutique Hotel Moradabad",
  description: "Speak with our team. Civil Lines, Moradabad. Reservations and enquiries at Central Boutique Hotel.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main>
        <ContactView />
      </main>
      <SiteFooter />
    </div>
  );
}
