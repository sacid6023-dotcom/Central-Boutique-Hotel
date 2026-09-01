"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logoAsset from "@/assets/logo2.jpeg";
import { hotelInfo } from "@/lib/site-data";

const nav = [
  { label: "Home", to: "/" },
  {
    label: "The Hotel",
    to: "/hotel/overview",
    children: [
      { label: "Overview", to: "/hotel/overview" },
      { label: "About Us", to: "/about" },
      { label: "Rooms & Suites", to: "/hotel/rooms-suites" },
      { label: "Special Offers", to: "/hotel/offers" },
    ],
  },
  { label: "Rooms", to: "/rooms" },
  { label: "Services", to: "/services" },
  { label: "About Moradabad", to: "/about-moradabad" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader({ transparentOnHero = false }: { transparentOnHero?: boolean }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const solid = !transparentOnHero || scrolled;
  const buttonClass = solid ? "btn-discover-wine-fill" : "btn-discover-white-fill";
  const cleanPhone = hotelInfo.whatsapp.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=Hello%20Central%20Boutique%20Hotel,%20I'd%20like%20to%20book%20a%20stay.`;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <header
          className={`transition-all duration-300 ${scrolled
            ? "bg-ivory/95 backdrop-blur-md shadow-sm border-b border-gold/20 py-2 md:py-2.5"
            : solid
              ? "bg-ivory/95 backdrop-blur-md shadow-sm border-b border-gold/20 py-3 md:py-4"
              : "bg-gradient-to-b from-charcoal/80 via-charcoal/30 to-transparent py-4 md:py-6 text-ivory"
            }`}
        >
          <div className="mx-auto max-w-7xl px-4 md:px-8 flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <Image
                src={logoAsset}
                alt="Central Boutique Hotel"
                className={`w-auto object-contain rounded-lg transition-all duration-300 group-hover:scale-105 ${scrolled ? "h-10 md:h-12" : "h-16 md:h-24"
                  }`}
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-3 xl:gap-6 text-[0.68rem] xl:text-xs tracking-[0.16em] xl:tracking-[0.22em] uppercase font-medium whitespace-nowrap">
              {nav.map((item) =>
                "children" in item && item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    <button
                      className={`inline-flex items-center gap-1 py-2 whitespace-nowrap hover:text-gold transition-colors ${isActive(item.to)
                        ? "text-gold font-bold"
                        : solid
                          ? "text-charcoal"
                          : "text-ivory"
                        }`}
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 text-gold" />
                    </button>
                    <AnimatePresence>
                      {dropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 w-48 bg-ivory border border-gold/30 shadow-xl py-2 z-50"
                        >
                          {item.children.map((c) => (
                            <Link
                              key={c.to}
                              href={c.to}
                              className={`block px-4 py-2 text-xs tracking-widest hover:bg-gold/10 hover:text-wine whitespace-nowrap ${isActive(c.to) ? "text-wine font-semibold" : "text-charcoal"
                                }`}
                            >
                              {c.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.to}
                    className={`py-2 whitespace-nowrap hover:text-gold transition-colors ${isActive(item.to)
                      ? "text-gold font-bold"
                      : solid
                        ? "text-charcoal"
                        : "text-ivory"
                      }`}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            <div className="hidden lg:flex items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonClass} px-7 py-3 uppercase text-md tracking-[0.05em] font-bold shadow-sm`}
              >
                Book A Stay
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden ${solid ? "text-charcoal" : "text-ivory"}`}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </header>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-charcoal/60 z-[60] backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
              className="fixed top-0 right-0 h-full w-[86%] max-w-sm bg-ivory z-[70] flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-gold/20">
                <span className="eyebrow">Menu</span>
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <X className="h-5 w-5 text-charcoal" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto px-6 py-6">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.15 }}
                    className="border-b border-gold/15 py-4"
                  >
                    <Link
                      href={item.to}
                      onClick={() => setMobileOpen(false)}
                      className={`font-serif text-2xl hover:text-wine ${isActive(item.to) ? "text-wine font-medium" : "text-charcoal"
                        }`}
                    >
                      {item.label}
                    </Link>
                    {"children" in item && item.children && (
                      <div className="mt-2 pl-4 flex flex-col gap-1.5">
                        {item.children.map((c) => (
                          <Link
                            key={c.to}
                            href={c.to}
                            onClick={() => setMobileOpen(false)}
                            className={`text-sm tracking-wider uppercase hover:text-gold ${isActive(c.to) ? "text-gold font-medium" : "text-muted-foreground"
                              }`}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>
              <div className="p-6 border-t border-gold/20 bg-cream/50">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className={`${buttonClass} block text-center px-7 py-3.5 uppercase text-xs tracking-[0.24em] font-medium shadow-sm w-full`}
                >
                  Book A Stay
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
