"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { site } from "@/data/site";

const FAQ_BG = "#0A101A"; // samakan keluarga warna dengan section lain
const ACCENT = "#2B5D96"; // accent utama biru
const ACCENT_SOFT = "rgba(43,93,150,0.14)";
const ACCENT_BORDER = "rgba(43,93,150,0.28)";

const faqItems = [
  {
    question: "How long does it take to finish a website?",
    answer:
      "It depends on the package and content readiness. Landing pages are usually faster, while company profile and travel websites need more time because they include more pages and content structure. Once all materials are ready, the process becomes much quicker.",
  },
  {
    question: "Can I request revisions during the project?",
    answer:
      "Yes. Every package already includes revisions based on the selected plan. We'll revise the design and content direction so the final result stays aligned with your brand and business goals.",
  },
  {
    question: "Do you help with domain and hosting setup?",
    answer:
      "Yes, domain and hosting support is included in the website packages based on the package details. We can help set everything up so your website is ready to go live properly.",
  },
  {
    question: "Can the website be updated later?",
    answer:
      "Absolutely. Your website can be updated later for content, images, pricing, or adding sections/pages. If you need ongoing help, we can also handle maintenance and updates for you.",
  },
  {
    question: "Do you only build websites, or also social media content?",
    answer:
      "We also provide social media management services, including feed design, reels editing, content planning, and caption support — so your brand stays consistent across website and social media.",
  },
  {
    question: "How do I start an order?",
    answer:
      "Just click the WhatsApp button and send a quick message about what you need. We'll discuss your goals, recommend the best package, and start from there.",
  },
];

function buildFaqWhatsAppLink(baseUrl) {
  const text =
    "Hi Chandra Nova, I checked the FAQ section and I want to ask about your services.";
  const separator = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${separator}text=${encodeURIComponent(text)}`;
}

function FAQRow({ item, index, isOpen, onToggle }) {
  const numLabel = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative"
    >
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background: isOpen
            ? `linear-gradient(to right, ${ACCENT_BORDER}, rgba(255,255,255,0.05), transparent)`
            : "linear-gradient(to right, rgba(255,255,255,0.08), transparent)",
          transition: "background 0.35s ease",
        }}
      />

      <button
        type="button"
        onClick={onToggle}
        className="group relative grid w-full cursor-pointer grid-cols-[2.5rem_1fr_2rem] items-start gap-x-4 py-5 text-left"
      >
        {/* Number */}
        <span
          className="select-none text-sm font-semibold tracking-[0.14em]"
          style={{
            color: isOpen ? "#8fc5ff" : "rgba(255,255,255,0.22)",
            transition: "color 0.25s ease",
            marginTop: "0.2rem",
          }}
        >
          {numLabel}
        </span>

        {/* Question */}
        <span
          className="text-[0.95rem] font-medium leading-6 md:text-[1.02rem]"
          style={{
            color: isOpen ? "#ffffff" : "rgba(255,255,255,0.82)",
            transition: "color 0.25s ease",
          }}
        >
          {item.question}
        </span>

        {/* Toggle */}
        <span
          className="inline-flex h-7 w-7 items-center justify-center rounded-full border text-sm"
          style={{
            borderColor: isOpen
              ? "rgba(43,93,150,0.45)"
              : "rgba(255,255,255,0.14)",
            background: isOpen ? ACCENT_SOFT : "rgba(255,255,255,0.02)",
            color: isOpen ? "#8fc5ff" : "rgba(255,255,255,0.45)",
            transition: "all 0.25s ease",
            marginTop: "0.05rem",
          }}
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            +
          </motion.span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <motion.p
              initial={{ y: -6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -4, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="pb-5 text-sm leading-7 md:text-[0.92rem]"
              style={{
                paddingLeft: "calc(2.5rem + 1rem)",
                color: "rgba(255,255,255,0.62)",
                maxWidth: "64ch",
              }}
            >
              {item.answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ContactCard({ waLink }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl border p-5 md:p-6"
      style={{
        position: "sticky",
        top: "6rem",
        borderColor: "rgba(255,255,255,0.10)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 100%)",
        backdropFilter: "blur(14px)",
        boxShadow: "0 16px 42px rgba(0,0,0,0.22)",
      }}
    >
      {/* ambient glows */}
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full blur-3xl"
        style={{ background: "rgba(43,93,150,0.18)" }}
      />
      <div
        className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full blur-3xl"
        style={{ background: "rgba(59,130,246,0.10)" }}
      />

      {/* badge style disamain dengan section lain */}
      <div
        className="relative inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs backdrop-blur"
        style={{
          borderColor: "rgba(255,255,255,0.14)",
          background: "rgba(255,255,255,0.04)",
          color: "rgba(255,255,255,0.78)",
          marginBottom: "0.9rem",
        }}
      >
        <span
          className="inline-block h-1.5 w-1.5 rounded-full"
          style={{ background: "#60A5FA" }}
        />
        Need help?
      </div>

      <h3 className="relative mb-2 text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl">
        Let’s discuss your project
      </h3>

      <p className="relative mb-4 text-sm leading-7 text-white/65">
        Tell us your goals and we’ll help you choose the right package for your
        business.
      </p>

      <div className="relative mb-4 grid grid-cols-2 gap-2">
        {[
          ["Landing Page", "Fast launch"],
          ["Company Profile", "Trust-first"],
          ["Travel & Tour", "Booking flow"],
          ["Social Media", "Consistent content"],
        ].map(([name, tag]) => (
          <div
            key={name}
            className="rounded-lg border px-3 py-2"
            style={{
              borderColor: "rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <p className="text-[12px] font-medium leading-tight text-white/85">
              {name}
            </p>
            <p className="mt-1 text-[11px] leading-tight text-white/45">{tag}</p>
          </div>
        ))}
      </div>

      <motion.a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -2, scale: 1.01 }}
        whileTap={{ scale: 0.985 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative inline-flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl px-4 py-3 text-sm font-semibold"
        style={{
          background: "linear-gradient(135deg, #2B5D96 0%, #3B82F6 100%)",
          color: "#fff",
          textDecoration: "none",
          boxShadow: "0 10px 28px rgba(43,93,150,0.32)",
        }}
      >
        <motion.span
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 rotate-12 bg-white/20 blur-md"
          whileHover={{ x: ["0%", "420%"] }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        />
        <FaWhatsapp className="relative z-10 mr-2" size={14} />
        <span className="relative z-10">Ask via WhatsApp</span>
      </motion.a>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const waLink = buildFaqWhatsAppLink(site.contact.whatsapp);

  return (
    <section
      id="faq"
      className="relative overflow-hidden -mt-12 pb-16 pt-[calc(4rem+3rem)] md:-mt-16 md:pb-24 md:pt-[calc(6rem+4rem)]"
      style={{ background: FAQ_BG, fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Smooth blend dari section sebelumnya (pricing/portfolio/contact theme) */}
      <div className="pointer-events-none absolute inset-0" style={{ zIndex: 0 }}>
        {/* top blend supaya ga ada potongan */}
        <div
          className="absolute left-0 right-0 top-0"
          style={{
            height: "180px",
            background: `linear-gradient(
              to bottom,
              rgba(21,16,40,0.52) 0%,
              rgba(10,16,26,0.18) 40%,
              rgba(10,16,26,0.00) 100%
            )`,
          }}
        />

        {/* left blue glow */}
        <motion.div
          className="absolute -left-16 top-10 h-80 w-80 rounded-full blur-3xl"
          style={{ background: "rgba(43,93,150,0.16)" }}
          animate={{ x: [0, 12, 0], y: [0, -8, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* right blue glow */}
        <motion.div
          className="absolute right-[-3rem] top-24 h-80 w-80 rounded-full blur-3xl"
          style={{ background: "rgba(59,130,246,0.10)" }}
          animate={{ x: [0, -10, 0], y: [0, 10, 0], scale: [1, 1.03, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* subtle center glow */}
        <motion.div
          className="absolute left-1/2 top-[-4rem] h-64 w-[38rem] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "rgba(43,93,150,0.10)" }}
          animate={{ opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* radial layer */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 14% 20%, rgba(43,93,150,0.10), transparent 42%),
              radial-gradient(circle at 85% 24%, rgba(59,130,246,0.08), transparent 44%),
              radial-gradient(circle at 50% 100%, rgba(33,74,122,0.08), transparent 58%)
            `,
          }}
        />

        {/* grid */}
        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:52px_52px]" />

        {/* vignette */}
        <div className="absolute inset-0 [box-shadow:inset_0_0_180px_rgba(0,0,0,0.38)]" />
      </div>

      <div
        className="relative mx-auto w-full max-w-6xl px-4 md:px-8"
        style={{ zIndex: 2 }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14"
        >
          {/* badge style sama seperti section lain */}
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/75 backdrop-blur">
            FAQ
          </div>

          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
            Everything you need to know before starting your website or content
            project with Chandra Nova.
          </p>

          <div
            className="mt-5 h-px w-24"
            style={{
              background:
                "linear-gradient(to right, rgba(96,165,250,0.55), transparent)",
            }}
          />
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px] lg:gap-10">
          <div>
            {faqItems.map((item, index) => (
              <FAQRow
                key={item.question}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex((prev) => (prev === index ? -1 : index))
                }
              />
            ))}

            <div className="h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <div>
            <ContactCard waLink={waLink} />
          </div>
        </div>
      </div>
    </section>
  );
}