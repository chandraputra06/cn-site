"use client";

export default function SectionTopBlend({
  from = "rgba(8,10,15,0.95)",
  mid = "rgba(8,10,15,0.35)",
  to = "rgba(8,10,15,0)",
  height = 180,
}) {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-[1]"
      style={{
        height,
        background: `linear-gradient(to bottom, ${from} 0%, ${mid} 52%, ${to} 100%)`,
      }}
    />
  );
}