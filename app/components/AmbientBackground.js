"use client";

const PARTICLES = [
  { top: "12%", left: "8%", size: 6, color: "#4c7cf0", delay: "0s" },
  { top: "22%", left: "92%", size: 5, color: "#ffab40", delay: "1.2s" },
  { top: "48%", left: "12%", size: 5, color: "#ffab40", delay: "2.1s" },
  { top: "65%", left: "85%", size: 7, color: "#4c7cf0", delay: "0.6s" },
  { top: "38%", left: "48%", size: 5, color: "#4c7cf0", delay: "1.8s" },
  { top: "80%", left: "30%", size: 6, color: "#ffab40", delay: "2.6s" },
  { top: "15%", left: "60%", size: 4, color: "#4c7cf0", delay: "3.1s" },
  { top: "90%", left: "65%", size: 5, color: "#ffab40", delay: "1.5s" },
];

export default function AmbientBackground() {
  return (
    <>
      <div className="bg-grid" />
      <div className="glow-blue" />
      <div className="glow-spark" />
      <div className="scan-line" />
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 10px ${p.color}`,
            animation: `floatParticle ${5 + i}s ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}
    </>
  );
}
