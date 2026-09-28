"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Architecture", href: "#architecture" },
  { label: "Interior", href: "#interior" },
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-700 ${
        scrolled ? "pt-3" : "pt-5"
      }`}
    >
      <div
        className={`mx-auto flex w-[calc(100%-32px)] max-w-[1540px] items-center justify-between rounded-full border transition-all duration-700 md:w-[calc(100%-64px)] ${
          scrolled
            ? "h-[62px] border-black/[0.08] bg-white/80 px-6 shadow-[0_12px_50px_rgba(0,0,0,0.07)] backdrop-blur-2xl md:px-8"
            : "h-[70px] border-black/[0.09] bg-white/50 px-6 backdrop-blur-xl md:px-8"
        }`}
      >
        {/* Brand */}
        <Link
          href="/"
          aria-label="Envato home"
          className="relative z-20 text-[14px] font-semibold uppercase tracking-[0.32em] text-[#151513] transition-opacity duration-300 hover:opacity-60 md:text-[15px]"
        >
          ENVATO
        </Link>

        {/* Desktop navigation */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-black/55 transition-colors duration-500 hover:text-black"
            >
              {item.label}

              <span className="absolute bottom-[6px] left-1/2 h-px w-0 -translate-x-1/2 bg-black/70 transition-all duration-500 group-hover:w-5" />
            </Link>
          ))}
        </nav>

        {/* Explore */}
        <Link
          href="#architecture"
          className="group relative hidden min-w-[112px] overflow-hidden rounded-full border border-black/15 bg-white/30 px-6 py-[12px] text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[#151513] transition-all duration-500 hover:border-black lg:block"
        >
          <span className="absolute inset-0 translate-y-full bg-[#151513] transition-transform duration-500 ease-out group-hover:translate-y-0" />

          <span className="relative transition-colors duration-500 group-hover:text-white">
            Explore
          </span>
        </Link>

        {/* Mobile menu */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative z-20 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/40 lg:hidden"
        >
          <span className="relative h-4 w-4">
            <span
              className={`absolute left-0 top-[4px] h-px w-4 bg-black transition-all duration-300 ${
                menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />

            <span
              className={`absolute bottom-[4px] left-0 h-px w-4 bg-black transition-all duration-300 ${
                menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        className={`mx-auto mt-2 w-[calc(100%-32px)] overflow-hidden rounded-[26px] border bg-white/95 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          menuOpen
            ? "max-h-[430px] border-black/[0.07] opacity-100"
            : "pointer-events-none max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav className="flex flex-col p-5">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-black/[0.06] py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-black/60"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#architecture"
            onClick={() => setMenuOpen(false)}
            className="mt-5 rounded-full bg-[#151513] px-5 py-4 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-white"
          >
            Explore
          </Link>
        </nav>
      </div>
    </header>
  );
}
