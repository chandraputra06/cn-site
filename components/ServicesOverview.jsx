"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FaBolt,
  FaBuilding,
  FaPlaneDeparture,
  FaInstagram,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";
import { site } from "@/data/site";

const SERVICES_BG = "#090D14";

const services = [
  {
    title: "Landing Page",
    description:
      "High-converting one-page websites designed to showcase your offer clearly and drive more leads.",
    icon: FaBolt,
    tag: "Fast launch",
  },
  {
    title: "Company Profile",
    description:
      "Professional multi-section websites that build trust, present your business, and strengthen credibility.",
    icon: FaBuilding,
    tag: "Professional presence",
  },
  {
    title: "Travel & Tour Website",
    description:
      "Beautiful travel websites with package-focused layouts, strong CTAs, and an experience built for bookings.",
    icon: FaPlaneDeparture,
    tag: "Booking-focused",
  },
  {
    title: "Social Media Management",
    description:
      "Content support for feeds and reels to keep your brand active, consistent, and ready to convert attention.",
    icon: FaInstagram,
    tag: "Brand consistency",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function buildWhatsAppLink(baseUrl, serviceTitle) {
  const text = `Hi Chandra Nova, I'm interested in your ${serviceTitle} service. Can I get more details?`;
  const separator = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${separator}text=${encodeURIComponent(text)}`;
}

function ServiceCard({ service, index }) {
  const Icon = service.icon;

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.3 });
  const sy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.3 });

  const glowX = useTransform(sx, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(sy, [0, 1], ["0%", "100%"]);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mx.set(x);
    my.set(y);
  };

  const waLink = buildWhatsAppLink(site.contact.whatsapp, service.title);

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22 }}
      onMouseMove={handleMove}
      className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.045] p-5 backdrop-blur-md md:p-6"
      style={{
        boxShadow: "0 12px 40px rgba(0,0,0,0.24)",
      }}
    >
      {/* top sheen */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/[0.05] to-transparent" />

      {/* animated border glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(49,96,158,0.38), rgba(255,255,255,0.10), rgba(27,58,98,0.34))",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />

      {/* spotlight hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([x, y]) =>
              `radial-gradient(240px circle at ${x} ${y}, rgba(49,96,158,0.18), rgba(49,96,158,0.10) 25%, transparent 70%)`
          ),
        }}
      />

      {/* top ambient blob */}
      <div className="pointer-events-none absolute -top-16 right-0 h-40 w-40 rounded-full bg-[#31609E]/20 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-4">
        <motion.div
          whileHover={{ rotate: -4, scale: 1.04 }}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/[0.06] text-white"
        >
          <Icon size={18} />
        </motion.div>

        <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[11px] text-white/80">
          {service.tag}
        </span>
      </div>

      <h3 className="relative mt-4 text-lg font-semibold text-white md:text-xl">
        {service.title}
      </h3>

      <p className="relative mt-2 text-sm leading-6 text-white/75">
        {service.description}
      </p>

      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className="relative mt-4 inline-flex items-center text-sm font-medium text-white/90"
      >
        <span>Learn more</span>
        <FaArrowRight
          className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
          size={12}
        />
      </a>

      {/* index ghost number */}
      <div className="pointer-events-none absolute bottom-3 right-4 text-4xl font-semibold tracking-tight text-white/[0.05]">
        0{index + 1}
      </div>
    </motion.div>
  );
}

export default function ServicesOverview() {
  return (
    <section
  id="services"
  className="relative overflow-hidden py-20 md:py-24"
  style={{ backgroundColor: SERVICES_BG }}
>
      <style>{`
        @keyframes gridDrift {
          0% { transform: translate3d(0,0,0); }
          100% { transform: translate3d(18px, 12px, 0); }
        }
      `}</style>

      {/* bridge from hero */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#080A0F] via-[#090C13] to-[#090D14]" />

      {/* background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#090D14]" />

        <motion.div
          className="absolute -top-24 -left-16 h-80 w-80 rounded-full blur-3xl"
          style={{ background: "rgba(39,86,145,0.14)" }}
          animate={{ x: [0, 16, 0], y: [0, -10, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-10 right-0 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "rgba(27,58,98,0.14)" }}
          animate={{ x: [0, -14, 0], y: [0, 10, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* bottom glow for blending to pricing */}
        <div
          className="absolute -bottom-20 left-1/2 h-64 w-[620px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "rgba(74,58,140,0.10)" }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 18% 18%, rgba(49,96,158,0.12), transparent 42%),
              radial-gradient(circle at 82% 30%, rgba(27,58,98,0.14), transparent 48%),
              radial-gradient(circle at 50% 100%, rgba(74,58,140,0.10), transparent 55%)
            `,
          }}
        />

        <div className="absolute inset-0 overflow-hidden opacity-[0.055]">
          <div
            className="absolute -inset-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
              animation: "gridDrift 14s linear infinite alternate",
            }}
          />
        </div>

        <div className="absolute inset-0 [box-shadow:inset_0_0_140px_rgba(0,0,0,0.28)]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 md:px-8">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/75 backdrop-blur"
            animate={{
              boxShadow: [
                "0 0 0 rgba(49,96,158,0)",
                "0 0 22px rgba(49,96,158,0.14)",
                "0 0 0 rgba(49,96,158,0)",
              ],
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Services Overview
          </motion.div>

          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
            Digital Services Built for <br />Visibility and Growth
          </h1>

          <p className="mt-3 text-sm leading-7 text-white/75 md:text-base">
            We help brands launch premium websites and build a stronger online
            presence through clear design, conversion-focused structure, and
            consistent content support.
          </p>
        </motion.div>

        {/* cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-8 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-2"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </motion.div>

        {/* bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 md:mt-10 md:flex-row"
        >
          <motion.a
            href="#pricing"
            className="group relative inline-flex items-center overflow-hidden rounded-full border border-white/20 bg-white/[0.06] px-6 py-3 text-sm font-medium text-white backdrop-blur"
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.985, y: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
          >
            <motion.span
              className="pointer-events-none absolute inset-0 opacity-0"
              initial={false}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.22 }}
              style={{
                background:
                  "radial-gradient(120px circle at 20% 50%, rgba(255,255,255,0.10), transparent 70%)",
              }}
            />

            <motion.span
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 rotate-12 bg-white/10 blur-md"
              whileHover={{ x: ["0%", "380%"] }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />

            <span className="relative z-10">View Pricing</span>
            <motion.span
              className="relative z-10 ml-1"
              initial={false}
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              →
            </motion.span>
          </motion.a>

          <motion.a
            href={site.contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center overflow-hidden rounded-full bg-[#2B5D96] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#173252]/35"
            whileHover={{ y: -3, scale: 1.015 }}
            whileTap={{ scale: 0.985, y: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
          >
            <motion.span
              className="pointer-events-none absolute inset-0"
              initial={false}
              whileHover={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.00), rgba(255,255,255,0.12), rgba(255,255,255,0.00))",
              }}
              transition={{ duration: 0.2 }}
            />

            <motion.span
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 rotate-12 bg-white/20 blur-md"
              whileHover={{ x: ["0%", "420%"] }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.span
              className="relative z-10 mr-2"
              whileHover={{ rotate: -8, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 260, damping: 14 }}
            >
              <FaWhatsapp size={15} />
            </motion.span>

            <span className="relative z-10">WhatsApp Consultation</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}