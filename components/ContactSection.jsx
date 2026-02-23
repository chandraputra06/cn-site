"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaArrowRight } from "react-icons/fa";
import { site } from "@/data/site";

const CONTACT_BG = "#0A101A"; // balik ke tone services biar closing section terasa clean

function buildWhatsAppLink(baseUrl) {
  const text =
    "Hi Chandra Nova, I'm interested in your services. Can we discuss my project?";
  const separator = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${separator}text=${encodeURIComponent(text)}`;
}

export default function ContactSection() {
  const waLink = buildWhatsAppLink(site.contact.whatsapp);
  const igLink =
    site?.socials?.instagram ||
    site?.contact?.instagram ||
    "https://instagram.com/cn.createsites";

  const igHandle = "@cn.createsites";

  return (
    <section
      id="contact"
      className="relative overflow-hidden -mt-10 pt-[calc(3rem+2.5rem)] pb-16 md:-mt-14 md:pt-[calc(4rem+3rem)] md:pb-24"
      style={{ background: CONTACT_BG }}
    >
      {/* Smooth blend from FAQ */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-0 right-0 top-0"
          style={{
            height: "180px",
            background: `linear-gradient(
              to bottom,
              rgba(11,17,27,0.65) 0%,
              rgba(10,15,24,0.28) 42%,
              rgba(10,16,26,0) 100%
            )`,
          }}
        />

        {/* ambient glows */}
        <motion.div
          className="absolute -top-16 left-[-4rem] h-72 w-72 rounded-full blur-3xl"
          style={{ background: "rgba(49,96,158,0.14)" }}
          animate={{ x: [0, 16, 0], y: [0, -10, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-10 right-[-3rem] h-80 w-80 rounded-full blur-3xl"
          style={{ background: "rgba(66,199,181,0.08)" }}
          animate={{ x: [0, -14, 0], y: [0, 12, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* radial depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(49,96,158,0.10),transparent_40%),radial-gradient(circle_at_85%_20%,rgba(66,199,181,0.06),transparent_42%),radial-gradient(circle_at_50%_100%,rgba(49,96,158,0.06),transparent_60%)]" />

        {/* grid */}
        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />

        {/* vignette */}
        <div className="absolute inset-0 [box-shadow:inset_0_0_180px_rgba(0,0,0,0.35)]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/75 backdrop-blur">
            Contact
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Let’s Build Something Great
          </h2>

          <p className="mt-3 text-sm leading-7 text-white/65 md:text-base">
            Ready to launch your website or grow your brand online? Reach out via
            WhatsApp or Instagram and let’s talk about your project.
          </p>
        </motion.div>

        {/* Main contact card */}
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.99 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="relative mx-auto mt-8 max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl md:mt-10 md:p-8"
          style={{ boxShadow: "0 18px 50px rgba(0,0,0,0.24)" }}
        >
          {/* decorative glow */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#31609E]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#2DD4BF]/10 blur-3xl" />

          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-[1.1fr_0.9fr] md:gap-8">
            {/* Left content */}
            <div>
              <h3 className="text-xl font-semibold text-white md:text-2xl">
                Contact Chandra Nova
              </h3>
              <p className="mt-2 text-sm leading-7 text-white/65">
                Fast response for consultation, pricing questions, and project discussion.
                You can start with WhatsApp for direct chat, or visit Instagram to see
                updates and portfolio content.
              </p>

              <div className="mt-5 space-y-3">
                {/* WhatsApp CTA */}
                <motion.a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className="group relative flex cursor-pointer items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-[#214A7A] to-[#2B5D96] px-4 py-3 text-white shadow-lg shadow-[#132B47]/25"
                >
                  <motion.span
                    className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 rotate-12 bg-white/20 blur-md"
                    whileHover={{ x: ["0%", "420%"] }}
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="relative z-10 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                      <FaWhatsapp size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold">WhatsApp</p>
                      <p className="text-xs text-white/75">Chat for consultation</p>
                    </div>
                  </div>
                  <FaArrowRight className="relative z-10 text-white/80 transition-transform duration-300 group-hover:translate-x-1" size={13} />
                </motion.a>

                {/* Instagram CTA */}
                <motion.a
                  href={igLink}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className="group flex cursor-pointer items-center justify-between rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-white backdrop-blur"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04]">
                      <FaInstagram size={17} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold">Instagram</p>
                      <p className="text-xs text-white/70">{igHandle}</p>
                    </div>
                  </div>
                  <FaArrowRight className="text-white/60 transition-transform duration-300 group-hover:translate-x-1" size={13} />
                </motion.a>
              </div>
            </div>

            {/* Right info panel */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 md:p-5">
              <p className="text-xs uppercase tracking-[0.14em] text-white/45">
                Best for
              </p>
              <div className="mt-3 space-y-2">
                {[
                  "Website project consultation",
                  "Package recommendation",
                  "Custom feature discussion",
                  "Content / social media support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#42C7B5]" />
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-white/10 bg-black/20 px-3 py-3">
                <p className="text-xs text-white/50">Instagram handle</p>
                <a
                  href={igLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block cursor-pointer text-sm font-medium text-white hover:text-white/85"
                >
                  {igHandle}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}