import React from "react";

const Fallback = () => {
  return (
    <>
      <style>{`
        @keyframes kkPulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 1; }
        }
        @keyframes kkDot {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.3; }
          40%            { transform: scale(1);   opacity: 1;   }
        }
        @keyframes kkShimmer {
          0%   { background-position: -400px 0; }
          100% { background-position:  400px 0; }
        }

        .kk-skeleton {
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.04) 25%,
            rgba(244,114,182,0.10) 50%,
            rgba(255,255,255,0.04) 75%
          );
          background-size: 400px 100%;
          animation: kkShimmer 1.8s ease-in-out infinite;
          border-radius: 10px;
        }

        .kk-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f472b6, #8b3fb4);
          animation: kkDot 1.4s ease-in-out infinite;
        }
        .kk-dot:nth-child(2) { animation-delay: 0.16s; }
        .kk-dot:nth-child(3) { animation-delay: 0.32s; }
      `}</style>

      <div
        className="flex flex-col items-center justify-center gap-10 w-full py-16 px-4"
        style={{ backgroundColor: "#0d0618", minHeight: "100vh" }}
      >
        {/* Ambient orb */}
        <div
          className="fixed top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: 500,
            height: 260,
            background:
              "radial-gradient(ellipse, rgba(139,62,180,0.13) 0%, transparent 70%)",
            filter: "blur(48px)",
            zIndex: 0,
          }}
        />

        {/* Dot loader */}
        <div className="relative z-10 flex flex-col items-center gap-5">
          <div className="flex items-center gap-2">
            <div className="kk-dot" />
            <div className="kk-dot" />
            <div className="kk-dot" />
          </div>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 700,
              fontSize: "1.1rem",
              letterSpacing: "0.04em",
              background: "linear-gradient(135deg, #f472b6 0%, #8b3fb4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "kkPulse 2s ease-in-out infinite",
            }}
          >
            Loading your connections...
          </p>
        </div>

        {/* Skeleton cards — mirrors Friends grid layout */}
        <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center px-5 pt-8 pb-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                animationDelay: `${i * 0.08}s`,
              }}
            >
              {/* Avatar circle */}
              <div
                className="kk-skeleton rounded-full mb-4"
                style={{ width: 80, height: 80, flexShrink: 0 }}
              />

              {/* Name */}
              <div
                className="kk-skeleton mb-2"
                style={{ width: "70%", height: 14 }}
              />

              {/* Days ago */}
              <div
                className="kk-skeleton mb-4"
                style={{ width: "40%", height: 10 }}
              />

              {/* Tags */}
              <div className="flex gap-2 mb-3">
                <div
                  className="kk-skeleton"
                  style={{ width: 48, height: 18, borderRadius: 999 }}
                />
                <div
                  className="kk-skeleton"
                  style={{ width: 36, height: 18, borderRadius: 999 }}
                />
              </div>

              {/* Status badge */}
              <div
                className="kk-skeleton"
                style={{ width: 80, height: 22, borderRadius: 999 }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Fallback;
