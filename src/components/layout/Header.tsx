"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    label: "About",
    href: "/about-present-heart-living",
    children: [
      { label: "Meet Audrey Buchanan", href: "/about/audrey-buchanan" },
      { label: "Teaching Philosophy", href: "/about/teaching-philosophy" },
    ],
  },
  {
    label: "Classes",
    href: "/classes",
    children: [
      { label: "Seasonal Flow Yoga", href: "/classes/seasonal-flow-yoga" },
      { label: "Restorative Yoga", href: "/classes/restorative-yoga" },
      { label: "Yin Yoga", href: "/classes/yin-yoga" },
      { label: "Pilates", href: "/pilates-classes-highlands" },
      { label: "Breathwork", href: "/classes/breathwork" },
      { label: "Sound Baths", href: "/classes/sound-baths" },
    ],
  },
  {
    label: "Retreats",
    href: "/retreats",
    children: [
      { label: "UK Retreats", href: "/retreats/uk-retreats" },
      { label: "International Retreats", href: "/retreats/international-retreats" },
      { label: "Retreat Experience", href: "/retreats/retreat-experience" },
    ],
  },
  {
    label: "Local Classes",
    href: "/locations",
    children: [
      { label: "Yoga Classes Inverness", href: "/yoga-classes-inverness" },
      { label: "Yoga Classes Black Isle", href: "/yoga-classes-black-isle" },
      { label: "Pilates Classes Highlands", href: "/pilates-classes-highlands" },
      { label: "Beginner Yoga", href: "/beginner-yoga-classes-highlands" },
    ],
  },
  { label: "Corporate Wellbeing", href: "/corporate-wellbeing" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="no-underline hover:no-underline flex flex-col">
            <span className="font-heading text-xl lg:text-2xl text-forest font-medium">
              Present Heart Living
            </span>
            <span className="hidden sm:block text-xs text-peat/60 font-body tracking-wide">
              Yoga · Pilates · Breathwork · Retreats
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-peat hover:text-sage text-sm font-normal no-underline transition-colors py-2"
                >
                  {item.label}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[220px] border border-mist">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-peat hover:text-sage hover:bg-linen no-underline transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center px-5 py-2.5 bg-sage text-sm font-semibold rounded-lg hover:bg-forest no-underline transition-colors"
            style={{ color: '#FFFFFF' }}
          >
            Book a Class
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-peat"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-mist">
          <nav className="px-4 py-4 space-y-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-peat font-semibold no-underline text-base"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1.5 text-sm text-peat/70 no-underline hover:text-sage"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-4 text-center px-5 py-3 bg-sage font-semibold rounded-lg no-underline"
              style={{ color: '#FFFFFF' }}
            >
              Book a Class
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
