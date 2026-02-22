"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { site } from "@/data/site";

const FAQ_BG = "#0B111B"; // darker blue-black, closer to services/pricing blend
const TEAL = "#42C7B5";
const TEAL_DIM = "rgba(66,199,181,0.12)";

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
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background: isOpen
            ? `linear-gradient(to right, ${TEAL}55, ${TEAL}16, transparent)`
            : "linear-gradient(to right, rgba(255,255,255,0.08), transparent)",
          transition: "background 0.4s",
        }}
      />

      <button
        type="button"
        onClick={onToggle}
        className="group relative w-full cursor-pointer text-left"
        style={{
          padding: "1.35rem 0",
          display: "grid",
          gridTemplateColumns: "3rem 1fr 2rem",
          gap: "0 1rem",
          alignItems: "start",
        }}
      >
        <span
          style={{
            fontSize: "1.05rem",
            fontWeight: 700,
            lineHeight: 1,
            color: isOpen ? TEAL : "rgba(255,255,255,0.22)",
            transition: "color 0.3s",
            userSelect: "none",
            letterSpacing: "0.04em",
            marginTop: "0.18rem",
          }}
        >
          {numLabel}
        </span>

        <span
          style={{
            fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)",
            fontWeight: 600,
            lineHeight: 1.45,
            color: isOpen ? "#fff" : "rgba(255,255,255,0.82)",
            transition: "color 0.25s",
            paddingTop: "0.05rem",
          }}
        >
          {item.question}
        </span>

        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "1.65rem",
            height: "1.65rem",
            borderRadius: "999px",
            border: isOpen ? `1px solid ${TEAL}55` : "1px solid rgba(255,255,255,0.14)",
            background: isOpen ? TEAL_DIM : "rgba(255,255,255,0.02)",
            color: isOpen ? TEAL : "rgba(255,255,255,0.45)",
            fontSize: "0.9rem",
            lineHeight: 1,
            transition: "all 0.25s",
            marginTop: "0.05rem",
          }}
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.22 }}
            style={{ display: "block", lineHeight: 1 }}
          >
            +
          </motion.span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <motion.p
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -4, opacity: 0 }}
              transition={{ duration: 0.22 }}
              style={{
                paddingLeft: "calc(3rem + 1rem)",
                paddingBottom: "1.25rem",
                paddingTop: "0.05rem",
                fontSize: "0.92rem",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.62)",
                maxWidth: "62ch",
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl border p-5 md:p-6"
      style={{
        position: "sticky",
        top: "6rem",
        borderColor: "rgba(255,255,255,0.10)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 100%)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 16px 42px rgba(0,0,0,0.22)",
      }}
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full blur-3xl"
        style={{ background: "rgba(66,199,181,0.14)" }}
      />
      <div
        className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full blur-3xl"
        style={{ background: "rgba(49,96,158,0.12)" }}
      />

      <div
        className="relative inline-flex items-center gap-2 rounded-full border px-3 py-1"
        style={{
          borderColor: "rgba(66,199,181,0.24)",
          background: "rgba(66,199,181,0.08)",
          marginBottom: "0.9rem",
        }}
      >
        <span
          className="inline-block h-1.5 w-1.5 rounded-full"
          style={{ background: TEAL }}
        />
        <span
          style={{
            fontSize: "0.68rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(66,199,181,0.9)",
            fontWeight: 600,
          }}
        >
          Need help?
        </span>
      </div>

      <h3
        className="relative text-white"
        style={{
          fontSize: "clamp(1.45rem, 2vw, 1.9rem)",
          lineHeight: 1.15,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          marginBottom: "0.65rem",
        }}
      >
        Let’s discuss your project
      </h3>

      <p
        className="relative"
        style={{
          fontSize: "0.9rem",
          lineHeight: 1.7,
          color: "rgba(255,255,255,0.62)",
          marginBottom: "1.15rem",
        }}
      >
        Tell us your goals and we’ll help you choose the right package for your business.
      </p>

      <div className="relative grid grid-cols-2 gap-2 mb-4">
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
            <p className="text-[12px] font-medium text-white/85 leading-tight">{name}</p>
            <p className="mt-1 text-[11px] text-white/45 leading-tight">{tag}</p>
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
        className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl px-4 py-3 text-sm font-semibold"
        style={{
          background: "linear-gradient(135deg, #2B5D96 0%, #3B82F6 100%)",
          color: "#fff",
          textDecoration: "none",
          boxShadow: "0 10px 28px rgba(43,93,150,0.32)",
          cursor: "pointer",
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
      className="relative overflow-hidden -mt-12 pt-[calc(4rem+3rem)] pb-16 md:-mt-16 md:pt-[calc(6rem+4rem)] md:pb-24"
      style={{ background: FAQ_BG, fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Smooth blend with previous section (no visible strip) */}
      <div className="pointer-events-none absolute inset-0" style={{ zIndex: 0 }}>
        {/* soft top blend */}
        <div
          className="absolute left-0 right-0 top-0"
          style={{
            height: "180px",
            background: `linear-gradient(
              to bottom,
              rgba(21,16,40,0.60) 0%,
              rgba(14,16,28,0.30) 34%,
              rgba(11,17,27,0.00) 100%
            )`,
          }}
        />

        {/* top center blend glow */}
        <motion.div
          className="absolute -top-20 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "rgba(96,76,180,0.14)" }}
          animate={{ opacity: [0.1, 0.18, 0.1], scale: [1, 1.03, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* right teal glow */}
        <motion.div
          className="absolute top-24 right-[-3rem] h-80 w-80 rounded-full blur-3xl"
          style={{ background: "rgba(66,199,181,0.08)" }}
          animate={{ x: [0, -12, 0], y: [0, 10, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* left blue glow */}
        <motion.div
          className="absolute bottom-[-5rem] left-[-4rem] h-96 w-96 rounded-full blur-3xl"
          style={{ background: "rgba(49,96,158,0.11)" }}
          animate={{ x: [0, 14, 0], y: [0, -10, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* subtle radial depth */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 88% 16%, rgba(66,199,181,0.07), transparent 42%),
              radial-gradient(circle at 14% 82%, rgba(49,96,158,0.08), transparent 46%),
              radial-gradient(circle at 50% -10%, rgba(108,91,195,0.09), transparent 45%)
            `,
          }}
        />

        {/* grid */}
        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:52px_52px]" />

        {/* vignette */}
        <div className="absolute inset-0 [box-shadow:inset_0_0_180px_rgba(0,0,0,0.38)]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 md:px-8" style={{ zIndex: 2 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1"
            style={{
              borderColor: "rgba(66,199,181,0.20)",
              background: "rgba(66,199,181,0.06)",
            }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: TEAL }} />
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/80">
              FAQ
            </span>
          </div>

          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Frequently asked questions
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
            Everything you need to know before starting your website or content project
            with Chandra Nova.
          </p>

          <div
            className="mt-5 h-px w-24"
            style={{
              background: "linear-gradient(to right, rgba(66,199,181,0.65), transparent)",
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
                onToggle={() => setOpenIndex((prev) => (prev === index ? -1 : index))}
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