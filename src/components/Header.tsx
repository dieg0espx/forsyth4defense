"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import clsx from "clsx";

const navigation = {
  practice: [
    { name: "Meet John D. Forsyth", href: "/attorney" },
    { name: "Professional Philosophy", href: "/philosophy" },
    { name: "Resources", href: "/resources" },
    { name: "Up Close and Personal", href: "/personal" },
    { name: "Contact", href: "/contact" },
  ],
  results: [
    { name: "Recent Client Cases", href: "/cases/recent" },
    { name: "Past Client Cases", href: "/cases/past" },
    { name: "Client Testimonials", href: "/testimonials" },
  ],
  practiceAreas: [
    { name: "Sex Crimes Defense", href: "/practice-areas/sex-crimes" },
    { name: "DUI/Vehicular Homicide", href: "/practice-areas/dui" },
    { name: "Three Strikes", href: "/practice-areas/three-strikes" },
    { name: "Domestic Violence", href: "/practice-areas/domestic-violence" },
    { name: "Cannabis", href: "/practice-areas/cannabis" },
    { name: "Federal Weapons Charges", href: "/practice-areas/federal-weapons" },
    { name: "Homicide/Kidnapping", href: "/practice-areas/homicide-kidnapping" },
  ],
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#0a0a0a]/98 backdrop-blur-md shadow-2xl"
          : "bg-[#0a0a0a] lg:bg-transparent"
      )}
    >
      {/* Top Bar */}
      <div
        className={clsx(
          "border-b border-white/5 transition-all duration-500",
          scrolled ? "py-1" : "py-2"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-center md:justify-start items-center">
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-light">
            San Francisco Criminal Defense
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-6">
        <div
          className={clsx(
            "flex items-center justify-between transition-all duration-500",
            scrolled ? "py-3" : "py-5"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex flex-col group">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-light mb-0.5">
              Law Office of
            </span>
            <span className="font-display text-white text-xl md:text-2xl tracking-wide group-hover:text-[#b8860b] transition-colors duration-300">
              John D. Forsyth
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-[13px] uppercase tracking-[0.1em] text-white/80 hover:text-white transition-colors duration-300 font-medium"
            >
              Home
            </Link>

            {/* The Practice Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("practice")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 text-[13px] uppercase tracking-[0.1em] text-white/80 hover:text-white transition-colors duration-300 font-medium">
                The Practice
                <ChevronDown
                  className={clsx(
                    "h-3.5 w-3.5 transition-transform duration-300",
                    activeDropdown === "practice" && "rotate-180"
                  )}
                />
              </button>
              <div
                className={clsx(
                  "absolute top-full left-0 pt-3 transition-all duration-300",
                  activeDropdown === "practice"
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                )}
              >
                <div className="w-64 bg-[#0a0a0a] border border-white/10 shadow-2xl">
                  <div className="py-2">
                    {navigation.practice.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-between px-5 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 group"
                      >
                        <span className="text-sm">{item.name}</span>
                        <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#b8860b]" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Process and Results Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("results")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 text-[13px] uppercase tracking-[0.1em] text-white/80 hover:text-white transition-colors duration-300 font-medium">
                Results
                <ChevronDown
                  className={clsx(
                    "h-3.5 w-3.5 transition-transform duration-300",
                    activeDropdown === "results" && "rotate-180"
                  )}
                />
              </button>
              <div
                className={clsx(
                  "absolute top-full left-0 pt-3 transition-all duration-300",
                  activeDropdown === "results"
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                )}
              >
                <div className="w-64 bg-[#0a0a0a] border border-white/10 shadow-2xl">
                  <div className="py-2">
                    {navigation.results.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-between px-5 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 group"
                      >
                        <span className="text-sm">{item.name}</span>
                        <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#b8860b]" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Practice Areas Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("practiceAreas")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 text-[13px] uppercase tracking-[0.1em] text-white/80 hover:text-white transition-colors duration-300 font-medium">
                Practice Areas
                <ChevronDown
                  className={clsx(
                    "h-3.5 w-3.5 transition-transform duration-300",
                    activeDropdown === "practiceAreas" && "rotate-180"
                  )}
                />
              </button>
              <div
                className={clsx(
                  "absolute top-full right-0 pt-3 transition-all duration-300",
                  activeDropdown === "practiceAreas"
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                )}
              >
                <div className="w-72 bg-[#0a0a0a] border border-white/10 shadow-2xl">
                  <div className="py-2">
                    {navigation.practiceAreas.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-between px-5 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 group"
                      >
                        <span className="text-sm">{item.name}</span>
                        <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#b8860b]" />
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-white/10 p-4">
                    <Link
                      href="/cases/past"
                      className="text-[11px] uppercase tracking-[0.15em] text-[#b8860b] hover:text-[#d4a017] transition-colors flex items-center gap-2"
                    >
                      View All Case Results
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/news"
              className="px-4 py-2 text-[13px] uppercase tracking-[0.1em] text-white/80 hover:text-white transition-colors duration-300 font-medium"
            >
              News
            </Link>

            <div className="ml-4 pl-4 border-l border-white/10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-[12px] uppercase tracking-[0.15em] font-semibold bg-transparent border border-[#b8860b] text-[#b8860b] hover:bg-[#b8860b] hover:text-[#0a0a0a] transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:text-[#b8860b] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={clsx(
            "lg:hidden overflow-hidden transition-all duration-500",
            mobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-6 border-t border-white/10">
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                className="px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-all text-sm uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile: The Practice */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-all text-sm uppercase tracking-wider"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "mobile-practice" ? null : "mobile-practice"
                    )
                  }
                >
                  The Practice
                  <ChevronDown
                    className={clsx(
                      "h-4 w-4 transition-transform duration-300",
                      activeDropdown === "mobile-practice" && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={clsx(
                    "overflow-hidden transition-all duration-300",
                    activeDropdown === "mobile-practice"
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  <div className="pl-6 py-2 space-y-1 border-l border-[#b8860b]/30 ml-4">
                    {navigation.practice.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block py-2 px-3 text-white/60 hover:text-white transition-colors text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile: Results */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-all text-sm uppercase tracking-wider"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "mobile-results" ? null : "mobile-results"
                    )
                  }
                >
                  Results
                  <ChevronDown
                    className={clsx(
                      "h-4 w-4 transition-transform duration-300",
                      activeDropdown === "mobile-results" && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={clsx(
                    "overflow-hidden transition-all duration-300",
                    activeDropdown === "mobile-results"
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  <div className="pl-6 py-2 space-y-1 border-l border-[#b8860b]/30 ml-4">
                    {navigation.results.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block py-2 px-3 text-white/60 hover:text-white transition-colors text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile: Practice Areas */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-all text-sm uppercase tracking-wider"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "mobile-practiceAreas"
                        ? null
                        : "mobile-practiceAreas"
                    )
                  }
                >
                  Practice Areas
                  <ChevronDown
                    className={clsx(
                      "h-4 w-4 transition-transform duration-300",
                      activeDropdown === "mobile-practiceAreas" && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={clsx(
                    "overflow-hidden transition-all duration-300",
                    activeDropdown === "mobile-practiceAreas"
                      ? "max-h-[400px] opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  <div className="pl-6 py-2 space-y-1 border-l border-[#b8860b]/30 ml-4 max-h-60 overflow-y-auto">
                    {navigation.practiceAreas.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block py-2 px-3 text-white/60 hover:text-white transition-colors text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/news"
                className="px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-all text-sm uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                News
              </Link>

              <div className="px-4 pt-4 mt-2 border-t border-white/10">
                <Link
                  href="/contact"
                  className="block w-full py-3 text-center text-sm uppercase tracking-wider font-semibold bg-[#b8860b] text-[#0a0a0a] hover:bg-[#d4a017] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
