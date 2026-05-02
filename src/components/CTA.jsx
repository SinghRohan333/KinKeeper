import { Users, Activity, Heart, MessageSquare, Plus } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  {
    icon: Users,
    value: 12,
    label: "Total Friends",
    iconColor: "#f9a8d4",
    iconBg: "rgba(249,168,212,0.15)",
    glowColor: "rgba(249,168,212,0.4)",
  },
  {
    icon: Activity,
    value: 3,
    label: "On Track",
    iconColor: "#6ee7b7",
    iconBg: "rgba(110,231,183,0.15)",
    glowColor: "rgba(110,231,183,0.4)",
  },
  {
    icon: Heart,
    value: 9,
    label: "Need Attention",
    iconColor: "#fca5a5",
    iconBg: "rgba(252,165,165,0.15)",
    glowColor: "rgba(252,165,165,0.4)",
  },
  {
    icon: MessageSquare,
    value: 14,
    label: "Interactions This Month",
    iconColor: "#fde68a",
    iconBg: "rgba(253,230,138,0.15)",
    glowColor: "rgba(253,230,138,0.4)",
  },
];

// Constellation-like fixed star positions
const stars = [
  { top: "5%", left: "7%", size: 1.5, delay: 0, dur: 4 },
  { top: "9%", left: "23%", size: 1, delay: 1.2, dur: 3.2 },
  { top: "3%", left: "48%", size: 2, delay: 0.6, dur: 5 },
  { top: "7%", left: "67%", size: 1, delay: 2, dur: 3.8 },
  { top: "4%", left: "88%", size: 1.5, delay: 0.3, dur: 4.5 },
  { top: "15%", left: "14%", size: 1, delay: 1.8, dur: 3.5 },
  { top: "18%", left: "38%", size: 2.5, delay: 0.9, dur: 4.2 },
  { top: "13%", left: "58%", size: 1, delay: 1.5, dur: 3 },
  { top: "20%", left: "80%", size: 2, delay: 0.4, dur: 5.2 },
  { top: "25%", left: "95%", size: 1, delay: 2.2, dur: 3.6 },
  { top: "30%", left: "4%", size: 1.5, delay: 1.1, dur: 4.8 },
  { top: "28%", left: "72%", size: 1, delay: 0.7, dur: 3.3 },
  { top: "38%", left: "28%", size: 2, delay: 1.6, dur: 4 },
  { top: "35%", left: "52%", size: 1, delay: 2.5, dur: 3.7 },
  { top: "42%", left: "88%", size: 1.5, delay: 0.2, dur: 5 },
];

const CTA = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Inter:wght@400;500;600&display=swap');

        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.8); }
        }
        @keyframes floatUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          14%       { transform: scale(1.15); }
          28%       { transform: scale(1); }
          42%       { transform: scale(1.08); }
          56%       { transform: scale(1); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes softPulse {
          0%, 100% { box-shadow: 0 0 20px 4px rgba(244,114,182,0.3), 0 8px 32px rgba(190,60,120,0.35); }
          50%       { box-shadow: 0 0 36px 8px rgba(244,114,182,0.5), 0 12px 44px rgba(190,60,120,0.5); }
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes driftA {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(18px, -22px) scale(1.04); }
          66%       { transform: translate(-12px, 10px) scale(0.97); }
        }
        @keyframes driftB {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(-20px, 14px) scale(1.03); }
          66%       { transform: translate(16px, -18px) scale(0.98); }
        }
        @keyframes driftC {
          0%, 100% { transform: translate(0, 0); }
          50%       { transform: translate(10px, -12px); }
        }

        .cta-heading {
          font-family: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #ffe4e6 0%, #fecdd3 35%, #fbcfe8 65%, #f5d0fe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cta-body {
          font-family: 'Inter', sans-serif;
        }
        .btn-connect {
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
          animation: softPulse 3s ease-in-out infinite;
        }
        .btn-connect::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(100deg, transparent 25%, rgba(255,255,255,0.22) 50%, transparent 75%);
          background-size: 200% 100%;
          animation: shimmer 2.4s linear infinite;
          border-radius: inherit;
        }
        .stat-card {
          font-family: 'Inter', sans-serif;
          transition: transform 0.28s cubic-bezier(.22,1,.36,1),
                      box-shadow 0.28s ease,
                      background 0.28s ease,
                      border-color 0.28s ease;
        }
        .stat-card:hover {
          transform: translateY(-6px) scale(1.04);
        }
        .orb-a { animation: driftA 12s ease-in-out infinite; }
        .orb-b { animation: driftB 15s ease-in-out infinite; }
        .orb-c { animation: driftC 9s  ease-in-out infinite; }
        .heart-pulse { animation: heartbeat 2.4s ease-in-out infinite; }
      `}</style>

      <section
        className="relative w-full min-h-145 flex flex-col items-center justify-center overflow-hidden px-4 pb-0"
        style={{
          backgroundColor: "#0d0618",
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 50% -10%, rgba(139,62,180,0.55) 0%, transparent 65%),
            radial-gradient(ellipse 60% 50% at 10% 40%,  rgba(99,40,160,0.30)  0%, transparent 60%),
            radial-gradient(ellipse 70% 60% at 90% 80%,  rgba(180,50,100,0.25) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 50% 100%, rgba(120,30,80,0.40)  0%, transparent 70%)
          `,
        }}
      >
        {/* Deep indigo base layer */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,6,24,0) 0%, rgba(13,6,24,0.5) 60%, rgba(13,6,24,0.85) 100%)",
          }}
        />

        {/* Atmospheric orbs */}
        <div
          className="orb-a absolute rounded-full pointer-events-none"
          style={{
            top: "-20%",
            left: "35%",
            width: 560,
            height: 400,
            background:
              "radial-gradient(ellipse, rgba(168,85,247,0.30) 0%, rgba(126,34,206,0.12) 45%, transparent 70%)",
            filter: "blur(48px)",
          }}
        />
        <div
          className="orb-b absolute rounded-full pointer-events-none"
          style={{
            top: "5%",
            left: "-15%",
            width: 440,
            height: 360,
            background:
              "radial-gradient(ellipse, rgba(236,72,153,0.22) 0%, rgba(190,24,93,0.08) 50%, transparent 72%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="orb-c absolute rounded-full pointer-events-none"
          style={{
            bottom: "5%",
            right: "-5%",
            width: 340,
            height: 280,
            background:
              "radial-gradient(ellipse, rgba(251,113,133,0.20) 0%, transparent 65%)",
            filter: "blur(36px)",
          }}
        />
        {/* Warm heart-glow at centre */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 320,
            height: 180,
            background:
              "radial-gradient(ellipse, rgba(244,114,182,0.14) 0%, transparent 70%)",
            filter: "blur(28px)",
          }}
        />

        {/* Stars */}
        <div className="absolute inset-0 pointer-events-none">
          {stars.map((s, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: s.top,
                left: s.left,
                width: s.size,
                height: s.size,
                animation: `twinkle ${s.dur}s ${s.delay}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col items-center text-center gap-6 pt-14 pb-10 w-full max-w-3xl">
          {/* Badge */}
          <div
            className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-[0.18em]"
            style={{
              background: "rgba(244,114,182,0.10)",
              border: "1px solid rgba(244,114,182,0.28)",
              color: "rgba(251,207,232,0.90)",
              fontFamily: "'Inter', sans-serif",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              animation: visible ? "floatUp 0.6s 0s both" : "none",
            }}
          >
            <span
              className="heart-pulse inline-block"
              style={{ color: "#f472b6", fontSize: "10px" }}
            >
              ♥
            </span>
            Your relationship dashboard
          </div>

          {/* Heading */}
          <h1
            className="cta-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4rem]"
            style={{ animation: visible ? "floatUp 0.7s 0.1s both" : "none" }}
          >
            Friends to keep close
            <br />
            in your life
          </h1>

          {/* Subtext */}
          <p
            className="cta-body text-sm sm:text-base max-w-sm leading-relaxed"
            style={{
              color: "rgba(253,232,244,0.65)",
              animation: visible ? "floatUp 0.7s 0.2s both" : "none",
            }}
          >
            Your personal shelf of meaningful connections.
            <br />
            Browse, tend, and nurture the relationships
            <br />
            that matter most.
          </p>

          {/* Button */}
          <button
            className="btn-connect flex items-center gap-2.5 px-8 py-3.5 rounded-full text-white font-semibold text-sm sm:text-base cursor-pointer border-none outline-none mt-1"
            style={{
              background: "linear-gradient(135deg, #e879a0 0%, #be185d 100%)",
              letterSpacing: "0.025em",
              animation: visible
                ? "floatUp 0.7s 0.3s both, softPulse 3s 1.2s ease-in-out infinite"
                : "none",
            }}
          >
            <Plus size={16} strokeWidth={2.5} />
            Add a Friend
          </button>
        </div>

        {/* ── Stat Cards ── */}
        {/* ── Stat Cards ── */}
        <div className="relative z-10 w-full max-w-4xl px-3 pb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {stats.map(
              (
                { icon: Icon, value, label, iconColor, iconBg, glowColor },
                idx,
              ) => (
                <div
                  key={label}
                  className="stat-card flex items-center gap-2 sm:gap-3 rounded-2xl px-3 sm:px-4 py-3 sm:py-5 cursor-default"
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    background:
                      hovered === idx
                        ? "rgba(255,255,255,0.10)"
                        : "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border:
                      hovered === idx
                        ? `1px solid ${glowColor.replace("0.4", "0.5")}`
                        : "1px solid rgba(255,255,255,0.10)",
                    boxShadow:
                      hovered === idx
                        ? `0 8px 32px ${glowColor}, inset 0 1px 0 rgba(255,255,255,0.08)`
                        : "0 2px 16px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)",
                    animation: visible
                      ? `cardIn 0.65s ${0.44 + idx * 0.1}s both`
                      : "none",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="flex items-center justify-center rounded-xl shrink-0"
                    style={{
                      width: 36,
                      height: 36,
                      background: iconBg,
                      boxShadow:
                        hovered === idx ? `0 0 16px ${glowColor}` : "none",
                      transform: hovered === idx ? "scale(1.14)" : "scale(1)",
                      transition: "transform 0.28s ease, box-shadow 0.28s ease",
                    }}
                  >
                    <Icon size={15} color={iconColor} strokeWidth={2} />
                  </div>

                  <div className="flex flex-col">
                    <span
                      className="text-xl sm:text-3xl font-bold leading-tight tabular-nums"
                      style={{
                        color: "#fff",
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {value}
                    </span>
                    <span
                      className="text-[10px] sm:text-xs font-medium leading-snug mt-0.5"
                      style={{ color: "rgba(253,232,244,0.60)" }}
                    >
                      {label}
                    </span>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
