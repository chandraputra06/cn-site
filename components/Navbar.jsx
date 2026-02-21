"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { site } from "@/data/site";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function Hamburger({ open }) {
  return (
    <div className="relative h-4 w-5">
      <span
        className={`absolute left-0 top-0 h-[2px] w-full rounded-full bg-white transition-all duration-300 ease-out ${
          open ? "translate-y-[7px] rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-[7px] h-[2px] w-full rounded-full bg-white transition-all duration-300 ease-out ${
          open ? "opacity-0 -translate-x-2" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 top-[14px] h-[2px] w-full rounded-full bg-white transition-all duration-300 ease-out ${
          open ? "-translate-y-[7px] -rotate-45" : ""
        }`}
      />
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);
  const toggle = () => setOpen((v) => !v);

  // lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // close menu if hash changes (when clicking nav anchors)
  useEffect(() => {
    const onHashChange = () => close();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[60] border-b border-white/10 bg-black/20 backdrop-blur-md">
        <Container className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-3">
          {/* Brand */}
          <Link href="#home" className="flex items-center gap-2 min-w-0">
            <Image
              src="/images/CN-LOGO.png"
              alt="CN Createsites Logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full border border-white/20 object-cover"
              priority
            />            
          </Link>

          {/* Desktop Nav (centered) */}
          <nav className="hidden md:flex items-center justify-center gap-7 text-sm text-white/80">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center justify-end gap-2">
            {/* Desktop social buttons */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href={site.contact.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition hover:bg-white/15"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href={site.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black transition hover:opacity-90"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 transition hover:bg-white/15"
              onClick={toggle}
            >
              <Hamburger open={open} />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile menu overlay (below header so X stays visible) */}
      <div
        className={`md:hidden fixed left-0 right-0 bottom-0 top-16 z-[50] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <button
          aria-label="Close menu"
          className="absolute inset-0 h-full w-full cursor-default bg-black/80"
          onClick={close}
        />

        {/* Panel */}
        <div
          id="mobile-menu"
          className={`absolute left-0 right-0 top-4 px-4 transition-all duration-300 ease-out ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mx-auto w-full max-w-sm rounded-3xl border border-white/15 bg-black/85 p-4 backdrop-blur-xl shadow-2xl shadow-black/40">
            <div className="grid gap-2">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-center text-white transition hover:bg-white/15"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-4 flex items-center justify-center gap-2">
              <a
                href={site.contact.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white transition hover:bg-white/15"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href={site.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black transition hover:opacity-90"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>

            <p className="mt-3 text-center text-xs text-white/45">
              Tap outside to close
            </p>
          </div>
        </div>
      </div>
    </>
  );
}