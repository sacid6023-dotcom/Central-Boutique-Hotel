"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { hotelInfo } from "@/lib/site-data";
import { Ornament } from "./ornament";

export function BookingPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed the popup in the current session
    const isDismissed = sessionStorage.getItem("direct-booking-popup-dismissed");
    if (isDismissed === "true") return;

    // Set a timer to show the popup after 10 seconds (10000ms)
    const timer = setTimeout(() => {
      setShow(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem("direct-booking-popup-dismissed", "true");
  };

  const cleanPhone = hotelInfo.whatsapp.replace(/[^0-9]/g, "");
  const message = encodeURIComponent(
    "Hello Central Boutique Hotel, I would like to book a stay directly and claim the 15% Off on Food & Beverage offer."
  );
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${message}`;

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-charcoal/60 backdrop-blur-md"
          />

          {/* Popup Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.15 }}
            className="relative w-full max-w-md bg-ivory border-2 border-gold/30 p-8 md:p-10 text-center shadow-2xl z-10"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-charcoal/60 hover:text-wine hover:rotate-90 transition-all duration-300 focus:outline-none"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Content */}
            <Ornament className="mb-6" />
            
            <p className="eyebrow !text-gold mb-3">Exclusive Offer</p>
            <h3 className="font-serif text-3xl md:text-4xl text-wine mb-5 leading-tight">
              Direct Booking Benefit
            </h3>
            
            <p className="text-foreground/80 leading-relaxed text-sm md:text-base font-light mb-8">
              Enjoy <strong className="font-medium text-wine">15% Off on Food & Beverage</strong> with Direct Website Bookings.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="btn-discover-white-fill block text-center px-8 py-4 uppercase text-xs tracking-[0.24em] font-medium shadow-md w-full"
            >
              Book via WhatsApp
            </a>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
