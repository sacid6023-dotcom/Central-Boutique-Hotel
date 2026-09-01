"use client";

import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Ornament, Hairline } from "@/components/ornament";
import { Eyebrow } from "@/components/eyebrow";
import { ScrollReveal } from "@/components/scroll-reveal";
import hero1 from "@/assets/hero-1.jpg";
import { hotelInfo } from "@/lib/site-data";

export function ContactView() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <>
      <PageHero eyebrow="Every stay begins here" title="Contact Us" image={hero1} crumb="Contact" />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Ornament />
            <p className="eyebrow mt-6">Get in touch</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 text-wine leading-[1.1]">
              A conversation, an invitation.
            </h2>
            <p className="mt-5 text-foreground/70">
              Reach us for reservations, private stays or the smallest question.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12 md:gap-16">
            <ScrollReveal className="md:col-span-2">
              <Eyebrow>Visit</Eyebrow>
              <ul className="mt-6 space-y-6">
                <li className="flex gap-4">
                  <MapPin className="h-5 w-5 text-gold shrink-0 mt-1" />
                  <div>
                    <p className="font-serif text-lg text-wine">Address</p>
                    <p className="text-foreground/75 text-sm mt-1">{hotelInfo.address}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="h-5 w-5 text-gold shrink-0 mt-1" />
                  <div>
                    <p className="font-serif text-lg text-wine">Landline</p>
                    <a href="tel:05912313333" className="text-foreground/75 text-sm mt-1 block hover:text-gold">{hotelInfo.landline}</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="h-5 w-5 text-gold shrink-0 mt-1" />
                  <div>
                    <p className="font-serif text-lg text-wine">Phone</p>
                    <div className="text-foreground/75 text-sm mt-1 space-y-1">
                      <a href="tel:+919971097110" className="block hover:text-gold">+91 99710 97110</a>
                      <a href="tel:+917895591010" className="block hover:text-gold">+91 78955 91010</a>
                    </div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="h-5 w-5 text-gold shrink-0 mt-1" />
                  <div>
                    <p className="font-serif text-lg text-wine">Email</p>
                    <a href={`mailto:${hotelInfo.email}`} className="text-foreground/75 text-sm mt-1 block hover:text-gold">
                      {hotelInfo.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="h-5 w-5 text-gold shrink-0 mt-1" />
                  <div>
                    <p className="font-serif text-lg text-wine">Reception</p>
                    <p className="text-foreground/75 text-sm mt-1">Open 24 hours</p>
                  </div>
                </li>
              </ul>

              <Hairline className="mt-10 max-w-[100px]" />
              <Eyebrow className="mt-10">Follow</Eyebrow>
              <div className="flex gap-4 mt-4 text-wine">
                <a href={hotelInfo.instagram} aria-label="Instagram" className="hover:text-gold"><Instagram className="h-5 w-5" /></a>
                <a href={hotelInfo.facebook} aria-label="Facebook" className="hover:text-gold"><Facebook className="h-5 w-5" /></a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="md:col-span-3">
              <form onSubmit={onSubmit} className="bg-cream/60 border border-gold/25 p-8 md:p-10">
                <Eyebrow>Enquiry</Eyebrow>
                <h3 className="font-serif text-2xl md:text-3xl mt-3 text-wine">Leave us a note</h3>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Name" value={form.name} onChange={(v) => setForm((f) => ({ ...f, name: v }))} required />
                  <Field label="Email" type="email" value={form.email} onChange={(v) => setForm((f) => ({ ...f, email: v }))} required />
                </div>
                <div className="mt-6">
                  <label className="eyebrow block mb-2">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    required
                    rows={5}
                    className="w-full bg-ivory border border-gold/30 px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-8 btn-wine-fill px-8 py-3.5 uppercase text-xs tracking-[0.28em]"
                >
                  Send Enquiry
                </button>
                {sent && (
                  <p className="mt-4 text-sm text-wine">
                    Thank you &mdash; a member of our team will be in touch shortly.
                  </p>
                )}
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="border border-gold/25 overflow-hidden aspect-[16/7] relative w-full h-full">
            <iframe
              title="Central Boutique Hotel location"
              src="https://www.google.com/maps?q=Level+2,+Cross+Road+Mall,+Civil+Lines,+Moradabad&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "sepia(0.15) contrast(0.95)" }}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label, value, onChange, type = "text", required,
}: {
  label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="eyebrow block mb-2">{label}</label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-ivory border border-gold/30 px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
      />
    </div>
  );
}
