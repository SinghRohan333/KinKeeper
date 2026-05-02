/* KeenKeeper Design System — Hydrate Fallback for FriendDetails */

const Sk = ({ w = "100%", h = 14, r = 10, className = "" }) => (
  <div
    className={className}
    style={{
      width: w,
      height: h,
      borderRadius: r,
      background:
        "linear-gradient(90deg, rgba(255,255,255,0.04) 25%, rgba(244,114,182,0.09) 50%, rgba(255,255,255,0.04) 75%)",
      backgroundSize: "400px 100%",
      animation: "kkShimmer 1.8s ease-in-out infinite",
      flexShrink: 0,
    }}
  />
);

const GlassCard = ({ children, className = "", style = {} }) => (
  <div
    className={className}
    style={{
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.07)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      boxShadow:
        "0 4px 24px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.03)",
      borderRadius: 16,
      ...style,
    }}
  >
    {children}
  </div>
);

const HydrateFallbackElement = () => {
  return (
    <>
      <style>{`
        @keyframes kkShimmer {
          0%   { background-position: -400px 0; }
          100% { background-position:  400px 0; }
        }
        @keyframes kkDot {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.3; }
          40%            { transform: scale(1);   opacity: 1;   }
        }
        @keyframes kkPulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hf-col-left  { animation: fadeUp 0.5s 0.05s both; }
        .hf-col-right { animation: fadeUp 0.5s 0.15s both; }

        .kk-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: linear-gradient(135deg, #f472b6, #8b3fb4);
          animation: kkDot 1.4s ease-in-out infinite;
        }
        .kk-dot:nth-child(2) { animation-delay: 0.16s; }
        .kk-dot:nth-child(3) { animation-delay: 0.32s; }
      `}</style>

      <div
        className="min-h-screen w-full px-4 sm:px-8 py-10"
        style={{
          backgroundColor: "#0d0618",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Ambient orbs — identical to FriendDetails */}
        <div
          className="fixed inset-0 pointer-events-none overflow-hidden"
          style={{ zIndex: 0 }}
        >
          <div
            style={{
              position: "absolute",
              top: "-10%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 600,
              height: 320,
              background:
                "radial-gradient(ellipse, rgba(139,62,180,0.12) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              right: "-5%",
              width: 340,
              height: 280,
              background:
                "radial-gradient(ellipse, rgba(244,114,182,0.08) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Dot loader + label */}
          <div className="flex flex-col items-center gap-3 mb-8">
            <div className="flex items-center gap-2">
              <div className="kk-dot" />
              <div className="kk-dot" />
              <div className="kk-dot" />
            </div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "0.04em",
                background: "linear-gradient(135deg, #f472b6 0%, #8b3fb4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "kkPulse 2s ease-in-out infinite",
              }}
            >
              Loading connection...
            </p>
          </div>

          {/* Two-column grid — mirrors FriendDetails exactly */}
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-5">
            {/* ═══════════ LEFT COLUMN ═══════════ */}
            <div className="hf-col-left flex flex-col gap-4">
              {/* Friend Info Card skeleton */}
              <GlassCard className="flex flex-col items-center text-center px-6 pt-8 pb-6">
                {/* Avatar circle */}
                <div
                  className="relative mb-5"
                  style={{ width: 96, height: 96 }}
                >
                  {/* Gradient ring */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "50%",
                      background:
                        "conic-gradient(from 0deg, rgba(244,114,182,0.25), rgba(139,62,180,0.20), rgba(244,114,182,0.25))",
                      padding: 2,
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        background: "#0d0618",
                      }}
                    />
                  </div>
                  <Sk
                    w="calc(100% - 6px)"
                    h="auto"
                    r={999}
                    className=""
                    style={{
                      position: "absolute",
                      inset: 3,
                      width: "calc(100% - 6px)",
                      height: "calc(100% - 6px)",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(244,114,182,0.10) 50%, rgba(255,255,255,0.05) 75%)",
                      backgroundSize: "400px 100%",
                      animation: "kkShimmer 1.8s ease-in-out infinite",
                    }}
                  />
                </div>

                {/* Name */}
                <Sk w={140} h={20} r={8} className="mb-3" />

                {/* Status badge */}
                <Sk w={80} h={22} r={999} className="mb-3" />

                {/* Tags */}
                <div className="flex gap-2 mb-4">
                  <Sk w={54} h={18} r={999} />
                  <Sk w={70} h={18} r={999} />
                </div>

                {/* Bio lines */}
                <Sk w="88%" h={10} r={6} className="mb-2" />
                <Sk w="72%" h={10} r={6} className="mb-2" />
                <Sk w="60%" h={10} r={6} className="mb-4" />

                {/* Email */}
                <div className="flex items-center gap-2">
                  <Sk w={14} h={14} r={4} />
                  <Sk w={140} h={10} r={6} />
                </div>

                {/* Divider */}
                <div
                  className="w-full mt-6"
                  style={{
                    height: 1,
                    background:
                      "linear-gradient(90deg, transparent, rgba(244,114,182,0.10), transparent)",
                  }}
                />
              </GlassCard>

              {/* Action Buttons skeleton */}
              <div className="flex flex-col gap-2">
                {[{ w: 130 }, { w: 96 }, { w: 76 }].map((btn, i) => (
                  <GlassCard key={i} style={{ padding: "12px 18px" }}>
                    <div className="flex items-center gap-3">
                      <Sk w={16} h={16} r={4} />
                      <Sk w={btn.w} h={12} r={6} />
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>

            {/* ═══════════ RIGHT COLUMN ═══════════ */}
            <div className="hf-col-right flex flex-col gap-4">
              {/* ① Stat Cards — 3 across */}
              <div className="grid grid-cols-3 gap-3">
                {[{ val: 56 }, { val: 80 }, { val: 120 }].map((card, i) => (
                  <GlassCard
                    key={i}
                    className="flex flex-col items-center justify-center text-center px-3 py-5"
                  >
                    <Sk w={16} h={16} r={4} className="mb-3" />
                    <Sk w={card.val} h={28} r={8} className="mb-2" />
                    <Sk w={80} h={9} r={6} />
                  </GlassCard>
                ))}
              </div>

              {/* ② Relationship Goal Card */}
              <GlassCard className="px-6 py-5">
                {/* Header row */}
                <div className="flex items-center justify-between mb-3">
                  <Sk w={160} h={18} r={8} />
                  <Sk w={52} h={26} r={10} />
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: 1,
                    marginBottom: 14,
                    background:
                      "linear-gradient(90deg, rgba(244,114,182,0.12), transparent)",
                  }}
                />

                {/* Goal text */}
                <div className="flex items-center gap-2">
                  <Sk w={90} h={11} r={6} />
                  <Sk w={60} h={16} r={6} />
                </div>

                {/* Progress bar */}
                <div
                  className="mt-4"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: 999,
                    height: 6,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "65%",
                      background:
                        "linear-gradient(90deg, rgba(244,114,182,0.25), rgba(190,24,93,0.20))",
                      borderRadius: 999,
                      animation: "kkShimmer 1.8s ease-in-out infinite",
                      backgroundSize: "400px 100%",
                    }}
                  />
                </div>
                <div className="flex justify-between mt-1.5">
                  <Sk w={36} h={8} r={4} />
                  <Sk w={52} h={8} r={4} />
                </div>
              </GlassCard>

              {/* ③ Quick Check-In Card */}
              <GlassCard className="px-6 py-5">
                {/* Title */}
                <Sk w={140} h={18} r={8} className="mb-3" />

                {/* Divider */}
                <div
                  style={{
                    height: 1,
                    marginBottom: 14,
                    background:
                      "linear-gradient(90deg, rgba(244,114,182,0.12), transparent)",
                  }}
                />

                {/* 3 check-in button skeletons */}
                <div className="flex gap-3">
                  {[0, 1, 2].map((i) => (
                    <GlassCard
                      key={i}
                      className="flex flex-col items-center gap-2 py-4 px-3"
                      style={{ flex: 1 }}
                    >
                      <Sk w={24} h={24} r={6} />
                      <Sk w={36} h={10} r={6} />
                    </GlassCard>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HydrateFallbackElement;
