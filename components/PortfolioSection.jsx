"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

const bgSrc = "/images/bg.png"; // sama tone dengan pricing biar nyambung

const portfolioItems = [
  {
    title: "Samblung Mas House",
    category: "Homestay Website",
    description:
      "A clean and welcoming website for a homestay business, focused on trust, room highlights, and direct booking inquiries.",
    image: "/images/samblungmas.png", // placeholder image path
    link: "https://samblungmashouse.com/", // TODO: isi link nanti
    tag: "Live Project",
  },
  {
    title: "Orinimo Store",
    category: "Digital Store / Product Website",
    description:
      "A modern storefront experience designed to showcase digital products clearly and guide users toward fast conversion actions.",
    image: "/images/orinimo.png", // placeholder image path
    link: "https://orinimo.store/", // TODO: isi link nanti
    tag: "Live Project",
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
  hidden: { opacity: 0, y: 24, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function PortfolioCard({ item, index }) {
  return (
    <motion.a
      variants={itemVariants}
      href={item.link}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -6 }}
      className="group relative block overflow-hidden rounded-2xl border border-white/12 bg-white/[0.03] backdrop-blur-md"
      style={{ boxShadow: "0 12px 38px rgba(0,0,0,0.22)" }}
    >
      {/* image / placeholder visual */}
      <div className="relative h-52 overflow-hidden md:h-60">
        {/* If belum ada gambar, gradient ini tetap bagus */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(49,96,158,0.22),rgba(84,68,170,0.18),rgba(255,255,255,0.03))]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />

        {/* Uncomment kalau gambar placeholder sudah ada */}
        {<img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />}

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[11px] text-white/85 backdrop-blur">
            {item.tag}
          </span>
        </div>

        <div className="absolute bottom-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition-transform duration-300 group-hover:translate-x-1">
          <FaExternalLinkAlt size={12} />
        </div>

        {/* ghost index */}
        <div className="pointer-events-none absolute bottom-3 left-4 text-4xl font-semibold tracking-tight text-white/[0.08]">
          0{index + 1}
        </div>
      </div>

      {/* content */}
      <div className="relative p-5 md:p-6">
        {/* top sheen */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/[0.03] to-transparent" />

        <div className="relative flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-white/55">
              {item.category}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-white md:text-xl">
              {item.title}
            </h3>
          </div>
        </div>

        <p className="mt-3 text-sm leading-6 text-white/72">{item.description}</p>

        <div className="mt-4 inline-flex items-center text-sm font-medium text-white/90">
          View project
          <FaArrowRight
            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            size={12}
          />
        </div>
      </div>

      {/* hover glow */}
      <div className="pointer-events-none absolute -top-10 right-0 h-32 w-32 rounded-full bg-[#31609E]/15 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.a>
  );
}

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden py-16 md:py-24"
      style={{ backgroundImage: `url(${bgSrc})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* smooth bridge from pricing */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-28"
        style={{
          background:
            "linear-gradient(to bottom, rgba(13,16,32,0.95) 0%, rgba(13,16,32,0.55) 50%, rgba(13,16,32,0) 100%)",
        }}
      />

      {/* bg atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-20 left-[-70px] h-[330px] w-[330px] rounded-full blur-3xl"
          style={{ background: "rgba(49,96,158,0.12)" }}
          animate={{ x: [0, 16, 0], y: [0, -8, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-10 right-[-60px] h-[300px] w-[300px] rounded-full blur-3xl"
          style={{ background: "rgba(84,68,170,0.12)" }}
          animate={{ x: [0, -14, 0], y: [0, 10, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 18% 22%, rgba(49,96,158,0.10), transparent 44%),
              radial-gradient(circle at 82% 20%, rgba(84,68,170,0.10), transparent 50%),
              radial-gradient(circle at 50% 100%, rgba(255,255,255,0.03), transparent 60%)
            `,
          }}
        />

        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="absolute inset-0 [box-shadow:inset_0_0_180px_rgba(0,0,0,0.34)]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/75 backdrop-blur">
            Portfolio
          </div>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-4xl">
            Selected Projects & Client Work
          </h2>

          <p className="mt-3 text-sm leading-7 text-white/70 md:text-base">
            A few featured projects to showcase the design direction, structure,
            and conversion-focused approach behind our work.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-8 grid grid-cols-1 gap-5 md:mt-10 md:grid-cols-2"
        >
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={item.title} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}