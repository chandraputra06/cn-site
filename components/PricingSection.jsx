"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaStar,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import { site } from "@/data/site";

const SERVICES_BG = "#090D14";
const PRICING_BG = "#0D1020";

const pricingData = {
  landing: {
    label: "Landing Page",
    title: "Pricelist Landing Page",
    subtitle: "Conversion-focused landing page packages for business growth.",
    plans: [
      {
        name: "Starter",
        price: "Rp1.500.000",
        featured: false,
        note: "Perfect for new businesses that want to go online quickly with an elegant landing page.",
        features: [
          "Free Domain (.com)",
          "Shared Hosting (6 months)",
          "Responsive Design (Mobile & Desktop)",
          "1 Landing Page (Long Scroll)",
          "1 GB Disk Storage",
          "1x Free Revision",
          "15-Day Maintenance Guarantee",
          "Free SSL",
          "1 Business Email",
        ],
      },
      {
        name: "Growth",
        price: "Rp2.550.000",
        featured: true,
        note: "For those who want a more professional presence and more control over features & branding.",
        features: [
          "Everything in Starter, plus:",
          "Hosting (1 Year)",
          "More Advanced Visual Design (CTA, Forms, Gallery)",
          "Direct WhatsApp Chat",
          "10 GB Disk Storage",
          "3x Free Revisions",
          "Basic On-Page SEO",
          "Free SSL",
          "2 Business Emails",
        ],
      },
      {
        name: "Ultimate",
        price: "Rp3.550.000",
        featured: false,
        note: "An all-in-one landing page solution for digital businesses that want higher conversions and a premium look.",
        features: [
          "Everything in Growth, plus:",
          "Up to 2 Additional Pages (About / FAQ / Blog Preview)",
          "Custom Feature Requests (Popup, Accordion, Pricing Table, etc.)",
          "Interactive Design (Animated Scroll, Parallax, etc.)",
          "Speed Optimization (Lazy Load + Caching Tools)",
          "5x Free Revisions",
          "1.5-Month Maintenance Guarantee",
        ],
      },
    ],
  },

  company: {
    label: "Web Company Profile",
    title: "Pricelist Web Company Profile",
    subtitle: "Professional website packages to build trust and credibility.",
    plans: [
      {
        name: "Starter",
        price: "Rp2.500.000",
        featured: false,
        note: "For businesses just going digital and needing a clean, professional online presence.",
        features: [
          "Free Domain (.com)",
          "Shared Hosting (6 months)",
          "Responsive Design (Mobile & Desktop)",
          "3 Main Pages (Home, About, Contact)",
          "2 GB Disk Storage",
          "2x Free Revisions",
          "15-Day Maintenance Guarantee",
          "Free SSL",
          "1 Business Email",
          "Direct WhatsApp Chat",
        ],
      },
      {
        name: "Growth",
        price: "Rp3.750.000",
        featured: true,
        note: "For businesses that want a more polished website and stronger trust from potential clients.",
        features: [
          "Everything in Starter, plus:",
          "Hosting (1 Year)",
          "5–6 Pages (Home, About, Services, Portfolio/Clients, Contact, FAQ)",
          "Direct WhatsApp Chat",
          "10 GB Disk Storage",
          "3x Free Revisions",
          "Basic On-Page SEO (Meta Tags, ALT Text, Heading Structure)",
          "Free SSL",
          "2 Business Emails",
          "1-Month Maintenance Guarantee",
        ],
      },
      {
        name: "Executive",
        price: "Rp6.000.000",
        featured: false,
        note: "For companies ready to scale with premium design and complete business features.",
        features: [
          "Everything in Growth, plus:",
          "8–10 Pages (Career, Blog, or Custom Requests)",
          "Additional Feature Requests (Pop-ups, Accordions, Pricing Tables, etc.)",
          "Instagram Feed Integration / YouTube Embed",
          "Speed Optimization (Lazy Loading + Caching)",
          "Interactive Design (Parallax, Scroll Animations)",
          "1.5-Month Maintenance Guarantee",
          "5x Free Revisions",
          "3 Business Emails",
        ],
      },
    ],
  },

  travel: {
    label: "Web Travel & Tour",
    title: "Pricelist Web Travel & Tour",
    subtitle: "Tour websites designed for package browsing and booking flow.",
    plans: [
      {
        name: "Starter",
        price: "Rp2.500.000",
        featured: false,
        note: "A simple but powerful landing page focused on showcasing tour packages and driving WhatsApp bookings.",
        features: [
          "Free Domain (.com)",
          "Shared Hosting (6 months)",
          "Responsive Design (Mobile & Desktop)",
          "1 Landing Page (Long Scroll)",
          "2 GB Disk Storage",
          "2x Free Revisions",
          "15-Day Maintenance Guarantee",
          "Free SSL",
          "1 Business Email",
          'CTA "Booking via WhatsApp" per package',
        ],
      },
      {
        name: "Growth",
        price: "Rp5.000.000",
        featured: true,
        note: "A complete travel website with separate pages for packages and a UX designed for exploration.",
        features: [
          "Everything in Starter, plus:",
          "Hosting (1 Year)",
          "5–7 Pages (Home, About, Tour Packages, Gallery, Blog, Contact, Testimonial)",
          "CTA WhatsApp on each package page",
          "10 GB Disk Storage",
          "3x Free Revisions",
          "Basic On-Page SEO (Meta Tags, ALT Text, Heading Structure)",
          "Free SSL",
          "2 Business Emails",
          "1-Month Maintenance Guarantee",
        ],
      },
    ],
  },

  social: {
    label: "Social Media Management",
    title: "Pricelist Social Media Management",
    subtitle: "Content packages to keep your brand active, consistent, and conversion-ready.",
    plans: [
      {
        name: "Feed Design",
        price: "Rp1.500.000",
        featured: false,
        note: "For brands that want an aesthetic, consistent Instagram feed without the hassle of designing everything.",
        features: [
          "15 Feed Posts / month (Static / Carousel)",
          "Consistent Branding (fonts, colors, tone)",
          "Captions Included (basic + light CTA)",
          "4 Revisions / batch",
          "1 Content Plan at the start of the month",
          "Upload-Ready Formats",
          "Canva Files / Editable Source Provided",
        ],
      },
      {
        name: "Reels Only",
        price: "Rp2.500.000",
        featured: true,
        note: "Perfect for brands looking to boost reach and engagement with relatable, high-performing Reels.",
        features: [
          "4 Reels Produced / month",
          "Content Ideas & Scripts Provided by Us",
          "Voice-over, Music, Auto Subtitles (if needed)",
          "Mobile-Friendly Editing",
          "Content Formats: Educational / Promotional / Testimonials / Tips",
          "Optimized Captions + Hashtags",
          "1 Revision per Video",
        ],
      },
      {
        name: "Full Content",
        price: "Rp5.000.000",
        featured: false,
        note: "All-in-one content support for brands that want a strong and active Instagram presence.",
        features: [
          "15 Feed Posts / month (Static / Carousel)",
          "4 Reels Produced",
          "Monthly Content Plan",
          "Caption Copywriting (CTA, Educational, Storytelling)",
          "2 Revisions / batch",
        ],
      },
    ],
  },
};

const pricingTheme = {
  landing: {
    accent: "#FACC15",
    accentSoft: "rgba(250,204,21,0.16)",
    accentBorder: "rgba(250,204,21,0.34)",
    featuredBg:
      "linear-gradient(180deg, rgba(28,59,98,0.96) 0%, rgba(33,74,122,0.95) 55%, rgba(19,43,71,0.98) 100%)",
    glow: "rgba(250,204,21,0.12)",
  },
  company: {
    accent: "#60A5FA",
    accentSoft: "rgba(96,165,250,0.16)",
    accentBorder: "rgba(96,165,250,0.34)",
    featuredBg:
      "linear-gradient(180deg, rgba(19,43,71,0.96) 0%, rgba(27,59,96,0.96) 55%, rgba(16,35,58,0.98) 100%)",
    glow: "rgba(96,165,250,0.12)",
  },
  travel: {
    accent: "#22D3EE",
    accentSoft: "rgba(34,211,238,0.14)",
    accentBorder: "rgba(34,211,238,0.30)",
    featuredBg:
      "linear-gradient(180deg, rgba(10,52,72,0.96) 0%, rgba(17,72,95,0.96) 55%, rgba(10,36,50,0.98) 100%)",
    glow: "rgba(34,211,238,0.11)",
  },
  social: {
    accent: "#C084FC",
    accentSoft: "rgba(192,132,252,0.16)",
    accentBorder: "rgba(192,132,252,0.34)",
    featuredBg:
      "linear-gradient(180deg, rgba(52,31,84,0.96) 0%, rgba(72,43,116,0.96) 55%, rgba(38,22,62,0.98) 100%)",
    glow: "rgba(192,132,252,0.12)",
  },
};

const categoryKeys = Object.keys(pricingData);

export default function PricingSection() {
  const [activeCategory, setActiveCategory] = useState("landing");
  const current = useMemo(() => pricingData[activeCategory], [activeCategory]);
  const theme = pricingTheme[activeCategory];

  return (
    <section
      id="pricing"
      className="relative overflow-hidden pt-20 pb-16 md:pt-24 md:pb-24"
      style={{ backgroundColor: PRICING_BG }}
    >
      {/* Smooth bridge from Services → Pricing */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0"
        style={{
          height: "220px",
          zIndex: 1,
          background: `
            linear-gradient(
              to bottom,
              ${SERVICES_BG} 0%,
              rgba(9,13,20,0.98) 10%,
              rgba(10,14,22,0.92) 24%,
              rgba(11,15,24,0.82) 40%,
              rgba(12,16,28,0.62) 60%,
              rgba(13,16,32,0.32) 82%,
              rgba(13,16,32,0) 100%
            )
          `,
        }}
      />

      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0" style={{ zIndex: 0 }}>
        <div className="absolute inset-0" style={{ background: PRICING_BG }} />

        <motion.div
          className="absolute -top-20 left-[-70px] h-[360px] w-[360px] rounded-full blur-3xl"
          style={{ background: "rgba(46,92,150,0.14)" }}
          animate={{ x: [0, 18, 0], y: [0, -10, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-8 right-[-50px] h-[320px] w-[320px] rounded-full blur-3xl"
          style={{ background: "rgba(84,68,170,0.14)" }}
          animate={{ x: [0, -14, 0], y: [0, 10, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="absolute bottom-[-100px] left-1/2 h-[300px] w-[560px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: theme.glow }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 15% 18%, rgba(49,96,158,0.10), transparent 42%),
              radial-gradient(circle at 84% 24%, rgba(88,72,176,0.10), transparent 48%),
              radial-gradient(circle at 50% 100%, rgba(74,58,140,0.08), transparent 58%)
            `,
          }}
        />

        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="absolute -inset-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div
          className="absolute inset-x-0 top-0 h-32"
          style={{
            background: `linear-gradient(to bottom, rgba(9,13,20,0.22), rgba(9,13,20,0))`,
          }}
        />

        <div className="absolute inset-0 [box-shadow:inset_0_0_180px_rgba(0,0,0,0.38)]" />
      </div>

      <div
        className="relative mx-auto w-full max-w-7xl px-4 md:px-8"
        style={{ zIndex: 2 }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/75 backdrop-blur">
            Pricing
          </div>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-4xl">
            {current.title}
          </h2>

          <p className="mt-3 text-sm leading-7 text-white/70 md:text-base">
            {current.subtitle}
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2"
        >
          {categoryKeys.map((key) => {
            const isActive = activeCategory === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveCategory(key)}
                className="group relative inline-flex items-center rounded-xl border px-3 py-2 text-xs md:text-sm backdrop-blur transition-all duration-300"
                style={{
                  borderColor: isActive
                    ? pricingTheme[key].accentBorder
                    : "rgba(255,255,255,0.12)",
                  background: isActive
                    ? `linear-gradient(135deg, ${pricingTheme[key].accentSoft}, rgba(255,255,255,0.04))`
                    : "rgba(255,255,255,0.04)",
                  color: isActive ? "#fff" : "rgba(255,255,255,0.75)",
                  boxShadow: isActive
                    ? `0 8px 24px ${pricingTheme[key].accentSoft}`
                    : "none",
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="pricing-tab-pill"
                    className="absolute inset-0 rounded-xl"
                    style={{ border: `1px solid ${pricingTheme[key].accentBorder}` }}
                    transition={{ type: "spring", stiffness: 300, damping: 26 }}
                  />
                )}
                <span className="relative z-10">{pricingData[key].label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className={`mt-8 grid gap-5 ${
              current.plans.length === 2
                ? "grid-cols-1 lg:grid-cols-2"
                : "grid-cols-1 xl:grid-cols-3"
            }`}
          >
            {current.plans.map((plan, i) => (
              <PricingCard key={plan.name} plan={plan} index={i} theme={theme} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 md:mt-10 md:flex-row"
        >
          <motion.a
            href={site.contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="group relative inline-flex items-center overflow-hidden rounded-full bg-[#214A7A] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#132B47]/30"
          >
            <motion.span
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 rotate-12 bg-white/20 blur-md"
              whileHover={{ x: ["0%", "420%"] }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            />
            <FaWhatsapp className="relative z-10 mr-2" size={15} />
            <span className="relative z-10">Order via WhatsApp</span>
          </motion.a>

          <motion.a
            href="#services"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur"
          >
            Back to Services <FaArrowRight className="ml-2" size={12} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function PricingCard({ plan, index, theme }) {
  const isFeatured = plan.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.99 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl border p-5 md:p-6"
      style={{
        background: isFeatured
          ? theme.featuredBg
          : "linear-gradient(180deg, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.02) 100%)",
        borderColor: isFeatured ? theme.accentBorder : "rgba(255,255,255,0.14)",
        boxShadow: isFeatured
          ? `0 18px 50px ${theme.glow}, 0 10px 30px rgba(0,0,0,0.22)`
          : "0 10px 35px rgba(0,0,0,0.18)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* top sheen */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-20"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(255,255,255,0))",
        }}
      />

      {/* ambient hover glow */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* featured badge */}
      {isFeatured && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.35 }}
          className="absolute right-4 top-4 z-20"
        >
          <div
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold"
            style={{
              color: "#fff",
              background: `linear-gradient(135deg, ${theme.accentSoft}, rgba(255,255,255,0.06))`,
              border: `1px solid ${theme.accentBorder}`,
              backdropFilter: "blur(8px)",
              boxShadow: `0 6px 18px ${theme.glow}`,
            }}
          >
            <FaStar size={10} style={{ color: theme.accent }} />
            <span className="tracking-wide">Best Value</span>
          </div>
        </motion.div>
      )}

      <div className="relative">
        <h3 className="text-center text-2xl font-semibold tracking-tight text-white md:text-3xl">
          {plan.name}
        </h3>

        <p className="mt-2 text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
          {plan.price}
        </p>

        <div className="mt-5 space-y-0.5">
          {plan.features.map((feature, idx) => (
            <div
              key={`${plan.name}-${idx}`}
              className="flex items-start gap-2 border-b border-white/12 py-2.5"
            >
              <FaCheckCircle
                className="mt-0.5 shrink-0"
                style={{
                  color: isFeatured ? theme.accent : "rgba(255,255,255,0.8)",
                }}
                size={13}
              />
              <span className="text-sm leading-5 text-white/90">{feature}</span>
            </div>
          ))}
        </div>

        <motion.a
          href={site.contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -2, scale: 1.01 }}
          whileTap={{ scale: 0.985 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="mt-5 inline-flex w-full items-center justify-center rounded-xl border px-4 py-3 text-sm font-semibold transition"
          style={{
            textDecoration: "none",
            background: isFeatured ? theme.accent : "rgba(255,255,255,0.06)",
            color: isFeatured ? "#0A0A0A" : "#fff",
            borderColor: isFeatured ? "transparent" : "rgba(255,255,255,0.15)",
          }}
        >
          Order Now
        </motion.a>

        <p className="mt-4 text-center text-xs italic leading-5 text-white/65">
          {plan.note}
        </p>
      </div>
    </motion.div>
  );
}