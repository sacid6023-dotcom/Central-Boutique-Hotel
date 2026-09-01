"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hotelInfo } from "@/lib/site-data";

export function WhatsAppWidget() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cleanPhone = hotelInfo.whatsapp.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=Hello%20Central%20Boutique%20Hotel,%20I'd%20like%20to%20enquire%20about%20room%20availability.`;

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.3, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.3, y: 30 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-7 right-7 z-40 flex items-center justify-center focus:outline-none drop-shadow-xl"
          aria-label="Chat on WhatsApp"
        >
          {/* WhatsApp PNG Image - Native graphic without extra background container */}
          <Image
            src="/whatsapp.png"
            alt="WhatsApp"
            width={60}
            height={60}
            className="h-15 w-15 object-contain"
          />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
