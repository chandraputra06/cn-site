"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaArrowUp } from "react-icons/fa";
import { site } from "@/data/site";

const FOOTER_BG = "#020304";      // lebih kontras (hampir hitam)
const CONTACT_BG = "#0B1418";     // samakan dengan contact section

function scrollToTopSmooth(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden" style={{ background: FOOTER_BG }}>
      {/* Bridge dari Contact -> Footer */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0"
        style={{
          height: "140px",
          background: `linear-gradient(
            to bottom,
            ${CONTACT_BG} 0%,
            #070A0D 38%,
            #030405 72%,
            ${FOOTER_BG} 100%
          )`,
          zIndex: 0,
        }}
      />

      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* glow kiri (lebih subtle) */}
        <motion.div
          className="absolute -left-20 top-10 h-64 w-64 rounded-full blur-3xl"
          style={{ background: "rgba(43,93,150,0.08)" }}
          animate={{ x: [0, 12, 0], y: [0, -8, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* glow kanan (lebih subtle) */}
        <motion.div
          className="absolute right-[-60px] bottom-[-50px] h-72 w-72 rounded-full blur-3xl"
          style={{ background: "rgba(49,96,158,0.06)" }}
          animate={{ x: [0, -10, 0], y: [0, 10, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* grid halus */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* vignette lebih tegas */}
        <div className="absolute inset-0 [box-shadow:inset_0_0_220px_rgba(0,0,0,0.65)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-8 pt-20 pb-8">
        {/* top row */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.2fr_1fr_auto] md:items-end">
          {/* Brand / text */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70 backdrop-blur">
              Chandra Nova
            </div>

            <h3 className="mt-3 text-xl font-semibold tracking-tight text-white md:text-2xl">
              Build a stronger digital presence.
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-7 text-white/55">
              Premium websites and content support for brands that want to look
              professional and convert better.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-2"
          >
            {[
              { label: "Home", href: "#home" },
              { label: "Services", href: "#services" },
              { label: "Pricing", href: "#pricing" },
              { label: "Portfolio", href: "#portfolio" },
              { label: "FAQ", href: "#faq" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="cursor-pointer rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-white/75 transition hover:bg-white/[0.05] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </motion.div>

          {/* CTA buttons: WA atas, IG bawah */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-2"
          >
            <motion.a
              href={site.contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
              className="group relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#2B5D96] px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-[#173252]/25"
            >
              <motion.span
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 rotate-12 bg-white/20 blur-md"
                whileHover={{ x: ["0%", "420%"] }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
              <FaWhatsapp className="relative z-10" size={15} />
              <span className="relative z-10">WhatsApp</span>
            </motion.a>

            <motion.a
              href={site.contact.instagram}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
              className="group relative inline-flex cursor-pointer items-center justify-between gap-3 overflow-hidden rounded-xl border border-white/12 bg-white/[0.03] px-3 py-2.5 text-white"
              aria-label="Instagram"
              title="Instagram"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/[0.04]">
                  <FaInstagram size={15} />
                </span>
                <div className="leading-tight">
                  <p className="text-[11px] text-white/55">Instagram</p>
                  <p className="text-sm font-medium text-white">@cn.createsites</p>
                </div>
              </div>
              <span className="text-white/60 transition group-hover:translate-x-0.5">→</span>
            </motion.a>
          </motion.div>
        </div>

        {/* divider */}
        <div className="mt-7 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* bottom row (mobile/tablet sejajar) */}
        <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="shrink-0 text-xs text-white/45"
          >
            © {new Date().getFullYear()} | CN Createsites
          </motion.p>

          <motion.a
            href="#home"
            onClick={scrollToTopSmooth}
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="group inline-flex w-fit cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs font-medium text-white/80 backdrop-blur hover:text-white"
            aria-label="Back to top"
          >
            <motion.span
              whileHover={{ y: -1 }}
              transition={{ type: "spring", stiffness: 300, damping: 14 }}
              className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]"
            >
              <FaArrowUp size={10} />
            </motion.span>
            Back to top
          </motion.a>
        </div>
      </div>
    </footer>
  );
}