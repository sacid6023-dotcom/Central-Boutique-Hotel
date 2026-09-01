"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Wifi, Coffee, Shirt, Bell, ConciergeBell, Briefcase, Car, Sparkles, Users, CreditCard, ShieldCheck, ArrowUpCircle, PhoneCall, CheckCircle2, Plane,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Ornament } from "@/components/ornament";
import hero2 from "@/assets/hero-2.jpg";

const services = [
  {
    icon: Sparkles,
    tag: "COMFORT",
    title: "Modern AC Rooms",
    body: "Equipped with ultra-modern chic décor, premium linens, and 32\" LCD smart entertainment panels.",
  },
  {
    icon: Coffee,
    tag: "WELCOME",
    title: "Traditional Welcome",
    body: "Begin your stay with a refreshing complimentary welcome drink, crafted to offer a warm reception and an unforgettable first impression.",
  },
  {
    icon: Users,
    tag: "HOSPITALITY",
    title: "Guest Relations",
    body: "Personal Guest Relation Officer dedicated at the reception to assist your every need.",
  },
  {
    icon: Plane,
    tag: "TRANSFERS",
    title: "Airport Transfer Facility",
    body: "Seamless, hassle-free airport pickup and drop services in private chauffeured vehicles upon request.",
  },
  {
    icon: Wifi,
    tag: "CONNECTIVITY",
    title: "Wi-Fi & PC Facility",
    body: "Complimentary high-speed wireless internet access with full combination printer/copier/fax services.",
  },
  {
    icon: Briefcase,
    tag: "BUSINESS",
    title: "Corporate Assemblage",
    body: "Specialized provisions and confidential meeting arrangements for business travellers.",
  },
  {
    icon: Bell,
    tag: "CONCIERGE",
    title: "Round-the-Clock Service",
    body: "Unparalleled 24-hour room service, in-room dining, and dedicated customer care.",
  },
  {
    icon: Car,
    tag: "TRAVEL",
    title: "Travel & Conveyance",
    body: "Confirmed travel ticket bookings, local drops, and private chauffeured transfers on demand.",
  },
  {
    icon: ShieldCheck,
    tag: "SAFETY",
    title: "In-Room Safety",
    body: "Digital safe deposit lockers provided inside every room for your complete peace of mind.",
  },
  {
    icon: ArrowUpCircle,
    tag: "ACCESSIBILITY",
    title: "Lift to All Floors",
    body: "Seamless elevator access across all levels of the hotel for effortless mobility.",
  },
  {
    icon: CreditCard,
    tag: "PAYMENTS",
    title: "Card & Digital Payments",
    body: "All major credit cards, debit cards, and contactless UPI payments accepted gladly.",
  },
  {
    icon: ConciergeBell,
    tag: "ASSISTANCE",
    title: "Personal Concierge",
    body: "Attentive help for local Moradabad brassware shopping, dining reservations, and city guidance.",
  },
  {
    icon: Shirt,
    tag: "LAUNDRY",
    title: "Same-Day Laundry",
    body: "Quick, efficient laundry and dry cleaning services to keep your attire immaculate.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main>
        <PageHero eyebrow="At the hotel" title="Services & Amenities" image={hero2} crumb="Services" />

        <section className="py-24 md:py-32 relative overflow-hidden grain">
          {/* Decorative background glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

          <div className="mx-auto max-w-7xl px-6 relative z-10">
            {/* Header */}
            <div className="text-center mb-20">
              <Ornament />
              <p className="eyebrow mt-6 !text-gold">Considered Hospitality</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 text-wine leading-tight">
                The Quiet Essentials
              </h2>
              <p className="mt-6 text-foreground/75 max-w-xl mx-auto font-light leading-relaxed text-base md:text-lg">
                A boutique hotel gives less, but better. Every service at Central Boutique Hotel is delivered with quiet attention and unhurried grace.
              </p>
            </div>

            {/* Glassmorphic Animated Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s, i) => {
                const IconComponent = s.icon;
                return (
                  <ScrollReveal key={s.title} delay={(i % 3) * 0.08}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.015 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="relative h-full p-8 md:p-9 rounded-2xl bg-white/70 backdrop-blur-xl border border-gold/30 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(182,143,66,0.18)] hover:border-gold transition-all duration-500 group overflow-hidden flex flex-col justify-between"
                    >
                      {/* Glass Glare Reflection Effect on Hover */}
                      <div className="absolute -inset-x-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 group-hover:translate-x-[350%] transition-transform duration-1000 ease-out pointer-events-none" />

                      <div>
                        {/* Icon Badge */}
                        <div className="w-14 h-14 rounded-xl bg-gold/15 text-wine flex items-center justify-center mb-6 group-hover:bg-wine group-hover:text-ivory group-hover:scale-110 group-hover:rotate-3 transition-all duration-400 shadow-sm border border-gold/30">
                          <IconComponent className="h-7 w-7 stroke-[1.6]" />
                        </div>

                        {/* Tag */}
                        <span className="eyebrow text-[0.65rem] !text-gold mb-2 block tracking-[0.26em]">
                          {s.tag}
                        </span>

                        {/* Title */}
                        <h3 className="font-serif text-2xl text-wine group-hover:text-gold transition-colors duration-300">
                          {s.title}
                        </h3>

                        {/* Hairline Divider */}
                        <div className="h-px w-10 bg-gold/40 my-4 group-hover:w-20 transition-all duration-500" />

                        {/* Description */}
                        <p className="text-sm text-foreground/75 font-light leading-relaxed">
                          {s.body}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-gold/10 flex items-center gap-2 text-xs text-gold uppercase tracking-[0.18em] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>Included in Stay</span>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Special Concierge CTA Banner */}
            <div className="mt-20 p-8 md:p-12 rounded-2xl bg-charcoal text-ivory relative overflow-hidden border border-gold/30 shadow-2xl grain">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div>
                  <span className="eyebrow !text-gold mb-2 block">Personal Concierge</span>
                  <h3 className="font-serif text-3xl md:text-4xl text-ivory">Need something tailored for your visit?</h3>
                  <p className="text-ivory/70 text-sm md:text-base font-light mt-3 max-w-xl">
                    Our 24-hour reception desk is ready to arrange custom transfers, special dietary requirements, or private business assemblage.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="btn-discover px-8 py-4 uppercase text-xs tracking-[0.24em] font-medium shrink-0 shadow-lg"
                >
                  Contact Reception
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
