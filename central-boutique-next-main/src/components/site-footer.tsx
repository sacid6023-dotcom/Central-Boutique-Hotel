"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Facebook, MapPin, Phone, Mail, Plus, Minus } from "lucide-react";
import logoAsset from "@/assets/logo (2).png";
import { Ornament } from "./ornament";
import { hotelInfo } from "@/lib/site-data";

export function SiteFooter() {
  const [destinationsOpen, setDestinationsOpen] = useState(false);

  return (
    <footer className="bg-charcoal text-ivory relative grain mt-auto">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="text-center mb-14">
          <Ornament />
          <p className="eyebrow mt-6 !text-gold-soft">A stay to remember</p>
          <h3 className="font-serif text-4xl md:text-5xl mt-4 max-w-2xl mx-auto leading-[1.15]">
            Fifteen rooms, one address, an unhurried welcome.
          </h3>
          <Link
            href="/contact"
            className="inline-block mt-8 text-gold uppercase tracking-[0.28em] text-xs link-underline"
          >
            Plan Your Stay
          </Link>
        </div>

        <div className="hairline mb-12" />

        {/* Main Footer Links */}
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <Image src={logoAsset} alt="Central Boutique Hotel" className="h-12 w-auto mb-5" />
            <p className="text-sm text-ivory/70 leading-relaxed max-w-xs">
              Moradabad's first boutique hotel — an intimate address in the heart of Civil Lines.
            </p>
          </div>

          <div>
            <p className="eyebrow !text-gold-soft mb-4">Visit & Contact</p>
            <ul className="space-y-3 text-sm text-ivory/80">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <span>Level 2, Cross Road Mall,<br />Civil Lines, Moradabad - 244001</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div>
                    <span className="text-xs text-gold-soft uppercase tracking-wider block">Landline</span>
                    <a href="tel:05912313333" className="hover:text-gold">{hotelInfo.landline}</a>
                  </div>
                  <div className="pt-1">
                    <span className="text-xs text-gold-soft uppercase tracking-wider block">Phone</span>
                    <a href="tel:+919971097110" className="hover:text-gold block">+91 99710 97110</a>
                    <a href="tel:+917895591010" className="hover:text-gold block">+91 78955 91010</a>
                  </div>
                </div>
              </li>
              <li className="flex gap-3 pt-1">
                <Mail className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <a href={`mailto:${hotelInfo.email}`} className="hover:text-gold break-all">{hotelInfo.email}</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow !text-gold-soft mb-4">Explore</p>
            <ul className="space-y-2.5 text-sm text-ivory/80">
              <li><Link href="/hotel/overview" className="link-underline">Overview</Link></li>
              <li><Link href="/about-moradabad" className="link-underline">About Moradabad</Link></li>
              <li><Link href="/hotel/rooms-suites" className="link-underline">Rooms & Suites</Link></li>
              <li><Link href="/hotel/offers" className="link-underline">Special Offers</Link></li>
              <li><Link href="/services" className="link-underline">Services</Link></li>
              <li><Link href="/gallery" className="link-underline">Gallery</Link></li>
              <li><Link href="/about" className="link-underline">About Us</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow !text-gold-soft mb-4">Follow</p>
            <div className="flex gap-4 text-gold mb-6">
              <a href={hotelInfo.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram className="h-5 w-5" /></a>
              <a href={hotelInfo.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer"><Facebook className="h-5 w-5" /></a>
            </div>
            <p className="eyebrow !text-gold-soft mb-3">Reviews & Portals</p>
            <div className="flex flex-col gap-2 text-sm text-ivory/80">
              <a href={hotelInfo.tripadvisor} className="link-underline" target="_blank" rel="noopener noreferrer">Tripadvisor</a>
              <a href={hotelInfo.booking} className="link-underline" target="_blank" rel="noopener noreferrer">Booking.com</a>
              <a href={hotelInfo.makemytrip} className="link-underline" target="_blank" rel="noopener noreferrer">MakeMyTrip</a>
              <a href={hotelInfo.goibibo} className="link-underline" target="_blank" rel="noopener noreferrer">Goibibo</a>
              <a href={hotelInfo.agoda} className="link-underline" target="_blank" rel="noopener noreferrer">Agoda</a>
              <a href={hotelInfo.yatra} className="link-underline" target="_blank" rel="noopener noreferrer">Yatra.com</a>
              <a href={hotelInfo.cleartrip} className="link-underline" target="_blank" rel="noopener noreferrer">Cleartrip</a>
            </div>
          </div>
        </div>

        {/* Taj Hotels Replica Footer Row 1: Collapsible DESTINATIONS Row */}
        <div className="mt-14 border-t border-gold/20">
          <button
            onClick={() => setDestinationsOpen(!destinationsOpen)}
            className="w-full py-5 flex items-center justify-between text-left group focus:outline-none"
          >
            <span className="font-serif text-sm md:text-base tracking-[0.2em] uppercase text-ivory/90 group-hover:text-gold transition-colors">
              DESTINATIONS & PRIVILEGES
            </span>
            <motion.span
              animate={{ rotate: destinationsOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-gold text-lg font-light flex items-center justify-center"
            >
              {destinationsOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            </motion.span>
          </button>

          <AnimatePresence>
            {destinationsOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="py-6 border-t border-gold/15 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-xs tracking-wider uppercase text-ivory/70">
                  <Link href="/hotel/overview" className="hover:text-gold transition-colors">Moradabad · Civil Lines</Link>
                  <Link href="/rooms" className="hover:text-gold transition-colors">Deluxe King Suites</Link>
                  <Link href="/rooms" className="hover:text-gold transition-colors">Superior Twin Rooms</Link>
                  <Link href="/hotel/offers" className="hover:text-gold transition-colors">Direct Stay Offers</Link>
                  <Link href="/services" className="hover:text-gold transition-colors">Artisanal Dining</Link>
                  <Link href="/services" className="hover:text-gold transition-colors">Chauffeured Transfers</Link>
                  <Link href="/contact" className="hover:text-gold transition-colors">Private Events</Link>
                  <Link href="/about" className="hover:text-gold transition-colors">24-Hour Concierge</Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Row 2: OUR BRANDS Row */}
        <div className="border-t border-b border-gold/20 py-6 flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8 justify-between">
          <span className="font-serif text-sm md:text-base tracking-[0.2em] uppercase text-ivory font-normal shrink-0">
            OUR BRANDS
          </span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2.5 text-xs md:text-sm tracking-[0.20em] uppercase font-serif text-ivory/80">
            <span className="text-gold font-medium">CENTRAL BOUTIQUE HOTEL</span>
            <span className="text-gold/40">|</span>
            <span className="hover:text-gold transition-colors">GULMOHAR BANQUETS</span>
            <span className="text-gold/40">|</span>
            <span className="hover:text-gold transition-colors">CROSSROAD MALL</span>
            <span className="text-gold/40">|</span>
            <span className="hover:text-gold transition-colors">RELIANCE GAS SERVICES</span>
          </div>
        </div>

        {/* Bottom Legal Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.7rem] tracking-[0.22em] uppercase text-ivory/50">
          <span>© {new Date().getFullYear()} Central Boutique Hotel</span>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms-conditions" className="hover:text-gold transition-colors">Terms & Conditions</Link>
          </div>
          <span>Est. Moradabad · Civil Lines</span>
        </div>
      </div>
    </footer>
  );
}
