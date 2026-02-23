"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import { site } from "@/data/site";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Hero() {
  const bgSrc = "/images/CN-BG.png"; // Replace with your actual image path

  // Mouse parallax (subtle)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 18, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 18, mass: 0.5 });

  const bgTranslateX = useTransform(springX, [-1, 1], [-12, 12]);
  const bgTranslateY = useTransform(springY, [-1, 1], [-10, 10]);

  const glowTranslateX = useTransform(springX, [-1, 1], [-20, 20]);
  const glowTranslateY = useTransform(springY, [-1, 1], [-16, 16]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1; // -1 to 1
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.12 + i * 0.08,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        @keyframes zoomSlow {
          0% { transform: scale(1.02); }
          100% { transform: scale(1.08); }
        }

        @keyframes floatBlob {
          0%,100% { transform: translate3d(0,0,0) scale(1); opacity:.7; }
          50% { transform: translate3d(12px,-10px,0) scale(1.08); opacity:1; }
        }

        @keyframes pulseDot {
          0%,100% { opacity: .85; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }

        @keyframes shimmerText {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes scrollNudge {
          0%,100% { transform: translateY(0); opacity: .85; }
          50% { transform: translateY(5px); opacity: 1; }
        }
      `}</style>

      <section
        id="home"
        className="relative w-full overflow-hidden"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div
          className="relative h-[78vh] min-h-[560px] md:h-[86vh] md:min-h-[680px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Background layers */}
          <div className="absolute inset-0 pointer-events-none">
            {/* image with parallax */}
            <motion.div
              className="absolute inset-0"
              style={{
                x: mounted ? bgTranslateX : 0,
                y: mounted ? bgTranslateY : 0,
                backgroundImage: `url(${bgSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "saturate(0.95) contrast(1.03)",
                animation: "zoomSlow 16s ease-in-out infinite alternate",
                scale: 1.04,
              }}
            />

            {/* dark overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(8,10,15,0.28) 0%, rgba(8,10,15,0.56) 45%, rgba(8,10,15,0.76) 100%)",
              }}
            />

            {/* CN accent glow with parallax */}
            <motion.div
              className="absolute inset-0"
              style={{
                x: mounted ? glowTranslateX : 0,
                y: mounted ? glowTranslateY : 0,
                background:
                  "radial-gradient(900px 500px at 20% 15%, rgba(33,74,122,0.22), transparent 60%), radial-gradient(700px 400px at 85% 30%, rgba(19,43,71,0.25), transparent 55%)",
              }}
            />

            {/* floating blobs */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute -top-24 -left-12 h-64 w-64 rounded-full blur-3xl"
                style={{
                  background: "rgba(33,74,122,0.18)",
                  animation: "floatBlob 10s ease-in-out infinite",
                }}
              />
              <div
                className="absolute top-20 right-10 h-56 w-56 rounded-full blur-3xl"
                style={{
                  background: "rgba(19,43,71,0.22)",
                  animation: "floatBlob 13s ease-in-out infinite reverse",
                }}
              />
            </div>

            {/* subtle vignette */}
            <div
              className="absolute inset-0"
              style={{
                boxShadow: "inset 0 0 140px rgba(0,0,0,0.28)",
              }}
            />

            {/* subtle grid (animated opacity) */}
            <motion.div
              className="absolute inset-0 opacity-[0.8]"
              animate={{ opacity: [0.72, 0.88, 0.72] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
                backgroundSize: "52px 52px",
              }}
            />
          </div>

          {/* Center content */}
          <div className="relative z-10 h-full flex items-center justify-center px-4">
            <div className="w-full max-w-5xl text-center text-white">
              {/* badge */}
              <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs md:text-sm"
                style={{
                  background: "rgba(19,43,71,0.35)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  backdropFilter: "blur(10px)",
                  letterSpacing: "0.04em",
                }}
              >
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{
                    background: "#ffffff",
                    animation: "pulseDot 2s ease-in-out infinite",
                  }}
                />
                {site.handle}
              </motion.div>

              {/* headline */}
              <motion.h1
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="mx-auto mt-5 md:mt-6 text-white max-w-5xl"
                style={{
                  fontSize: "clamp(1.4rem, 4.8vw, 3.9rem)",
                  fontWeight: 700,
                  lineHeight: 1.12,
                  letterSpacing: "-0.04em",
                }}
              >
                Build a Website{" "}
                <span
                  className="text-white/90"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0.95), rgba(255,255,255,0.65), rgba(255,255,255,0.95))",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "shimmerText 5s linear infinite",
                  }}
                >
                  That Looks Premium and Converts Better
                </span>
              </motion.h1>

              {/* subcopy */}
              <motion.p
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="mx-auto mt-4 md:mt-5 text-white/85 max-w-4xl"
                style={{
                  fontSize: "clamp(0.92rem, 1.15vw, 1.06rem)",
                  lineHeight: 1.75,
                  fontWeight: 400,
                }}
              >
                Chandra Nova builds premium websites and social media systems for businesses
                <br className="hidden md:block" />
                crafted to strengthen your brand and improve conversions.
              </motion.p>

              {/* CTA row */}
              <motion.div
                custom={3}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-3"
              >
                <motion.a
                  href={site.contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base font-medium"
                  style={{
                    background: "#214A7A",
                    color: "#fff",
                    boxShadow: "0 10px 32px rgba(19,43,71,0.35)",
                    textDecoration: "none",
                  }}
                >
                  <FaWhatsapp size={17} />
                  Chat WhatsApp
                </motion.a>

                <motion.a
                  href="#pricing"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center rounded-full px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base font-medium"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#fff",
                    textDecoration: "none",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  See Package →
                </motion.a>
              </motion.div>

              {/* social proof */}
              <motion.div
                custom={4}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="mt-5 md:mt-6 flex items-center justify-center gap-1 text-white/90"
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 0.9, y: 0 }}
                      transition={{ delay: 0.55 + i * 0.05, duration: 0.25 }}
                    >
                      <FaStar size={12} className="opacity-90" />
                    </motion.span>
                  ))}
                </div>
                <span className="ml-2 text-xs md:text-sm text-white/80">
                  Trusted for clean, conversion focused websites
                </span>
              </motion.div>
            </div>
          </div>

          {/* Scroll cue */}
          <motion.a
            href="#pricing"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1 text-white/70 hover:text-white transition"
            style={{ textDecoration: "none" }}
          >
            <span className="text-xs tracking-[0.14em] uppercase">Scroll</span>
            <span
              className="inline-block h-5 w-[1px] bg-white/60"
              style={{ animation: "scrollNudge 1.6s ease-in-out infinite" }}
            />
          </motion.a>

          {/* bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24"
            style={{
              background:
                "linear-gradient(to bottom, rgba(8,10,15,0) 0%, rgba(8,10,15,0.95) 100%)",
            }}
          />
        </div>
      </section>
    </>
  );
}