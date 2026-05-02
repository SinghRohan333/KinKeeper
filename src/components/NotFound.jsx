import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Home, ArrowLeft, Heart } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600&display=swap');

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0px) translateX(-50%); }
          50%       { transform: translateY(-20px) translateX(-50%); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(16px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes glitch1 {
          0%, 100% { clip-path: inset(0 0 95% 0); transform: translate(-4px, 0); }
          20%      { clip-path: inset(30% 0 50% 0); transform: translate(4px, 0); }
          40%      { clip-path: inset(60% 0 20% 0); transform: translate(-2px, 0); }
          60%      { clip-path: inset(80% 0 5%  0); transform: translate(3px, 0);  }
          80%      { clip-path: inset(10% 0 70% 0); transform: translate(-3px, 0); }
        }
        @keyframes glitch2 {
          0%, 100% { clip-path: inset(50% 0 30% 0); transform: translate(4px, 0);  }
          25%      { clip-path: inset(10% 0 80% 0); transform: translate(-4px, 0); }
          50%      { clip-path: inset(70% 0 10% 0); transform: translate(2px, 0);  }
          75%      { clip-path: inset(20% 0 60% 0); transform: translate(-2px, 0); }
        }
        @keyframes softPulse {
          0%, 100% { box-shadow: 0 0 14px 2px rgba(232,121,160,0.30), 0 4px 18px rgba(190,24,93,0.30); }
          50%       { box-shadow: 0 0 26px 6px rgba(232,121,160,0.50), 0 8px 28px rgba(190,24,93,0.48); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          14%      { transform: scale(1.2); }
          28%      { transform: scale(1); }
          42%      { transform: scale(1.15); }
          56%      { transform: scale(1); }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .nf-404-text {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 700;
          font-size: clamp(7rem, 22vw, 16rem);
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1px rgba(244,114,182,0.25);
          position: relative;
          letter-spacing: -0.04em;
          user-select: none;
        }
        .nf-404-text::before,
        .nf-404-text::after {
          content: '404';
          position: absolute;
          inset: 0;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 700;
          font-size: inherit;
          letter-spacing: inherit;
        }
        .nf-404-text::before {
          color: rgba(244,114,182,0.55);
          animation: glitch1 4.5s infinite linear;
        }
        .nf-404-text::after {
          color: rgba(139,62,180,0.45);
          animation: glitch2 4.5s infinite linear;
        }

        .nf-btn-primary {
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #e879a0 0%, #be185d 100%);
          border: none;
          border-radius: 999px;
          color: #fff;
          font-size: 0.88rem;
          font-weight: 600;
          padding: 12px 28px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          animation: softPulse 3s ease-in-out infinite;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }
        .nf-btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(100deg, transparent 25%, rgba(255,255,255,0.20) 50%, transparent 75%);
          background-size: 200% 100%;
          animation: shimmer 2.4s linear infinite;
          border-radius: inherit;
        }
        .nf-btn-primary:hover {
          transform: translateY(-2px);
          opacity: 0.92;
        }

        .nf-btn-secondary {
          font-family: 'Inter', sans-serif;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 999px;
          color: rgba(253,232,244,0.60);
          font-size: 0.88rem;
          font-weight: 500;
          padding: 12px 28px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.22s ease;
          backdrop-filter: blur(12px);
        }
        .nf-btn-secondary:hover {
          background: rgba(244,114,182,0.08);
          border-color: rgba(244,114,182,0.25);
          color: #f9a8d4;
          transform: translateY(-2px);
        }

        .nf-glass-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 4px 24px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.04);
        }

        .nf-orbit-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(244,114,182,0.10);
          animation: rotateSlow 18s linear infinite;
        }

        .nf-heart {
          animation: heartbeat 2.4s ease-in-out infinite;
          display: inline-block;
        }

        .nf-mounted {
          animation: fadeUp 0.7s both ease-out;
        }
        .nf-mounted-delay-1 { animation: fadeUp 0.7s 0.15s both ease-out; }
        .nf-mounted-delay-2 { animation: fadeUp 0.7s 0.30s both ease-out; }
        .nf-mounted-delay-3 { animation: fadeUp 0.7s 0.45s both ease-out; }
        .nf-mounted-delay-4 { animation: fadeUp 0.7s 0.60s both ease-out; }

        .nf-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(244,114,182,0.30), transparent);
        }

        .nf-logo-keen    { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 700; font-size: 1.3rem; color: #fff; }
        .nf-logo-keeper  {
          font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 700; font-size: 1.3rem;
          background: linear-gradient(135deg, #f472b6 0%, #be185d 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        .nf-tag {
          font-family: 'Inter', sans-serif;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(249,168,212,0.70);
          background: rgba(244,114,182,0.08);
          border: 1px solid rgba(244,114,182,0.18);
          border-radius: 999px;
          padding: 4px 14px;
        }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          backgroundColor: "#0d0618",
          fontFamily: "'Inter', sans-serif",
          display: "flex",
          flexDirection: "column",
          isolation: "isolate",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* ── Ambient orbs ── */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-8%",
              left: "50%",
              width: 700,
              height: 360,
              background:
                "radial-gradient(ellipse, rgba(139,62,180,0.18) 0%, transparent 70%)",
              filter: "blur(60px)",
              animation: "floatOrb 8s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "5%",
              right: "-8%",
              width: 400,
              height: 320,
              background:
                "radial-gradient(ellipse, rgba(244,114,182,0.12) 0%, transparent 70%)",
              filter: "blur(50px)",
              animation: "floatOrb2 10s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "20%",
              left: "-5%",
              width: 300,
              height: 260,
              background:
                "radial-gradient(ellipse, rgba(99,102,241,0.10) 0%, transparent 70%)",
              filter: "blur(40px)",
              animation: "floatOrb2 12s ease-in-out infinite reverse",
            }}
          />
        </div>

        {/* ── Navbar ── */}
        <nav
          style={{
            position: "relative",
            zIndex: 10,
            borderBottom: "1px solid rgba(244,114,182,0.08)",
            padding: "14px 32px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 1,
              background:
                "linear-gradient(90deg, transparent, rgba(244,114,182,0.35), rgba(168,85,247,0.35), transparent)",
            }}
          />
          <span className="nf-logo-keen">Keen</span>
          <span className="nf-logo-keeper">Keeper</span>
        </nav>

        {/* ── Main content ── */}
        <main
          style={{
            flex: 1,
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "48px 24px",
            isolation: "isolate",
          }}
        >
          {/* Orbit rings (decorative) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <div
              className="nf-orbit-ring"
              style={{
                width: "min(520px, 90vw)",
                height: "min(520px, 90vw)",
                opacity: 0.5,
              }}
            />
            <div
              className="nf-orbit-ring"
              style={{
                position: "absolute",
                width: "min(380px, 70vw)",
                height: "min(380px, 70vw)",
                animationDirection: "reverse",
                animationDuration: "12s",
                opacity: 0.35,
              }}
            />
          </div>

          {/* Card */}
          <div
            className={`nf-glass-card ${mounted ? "nf-mounted" : ""}`}
            style={{
              maxWidth: 560,
              width: "100%",
              padding: "clamp(32px, 6vw, 56px) clamp(24px, 6vw, 52px)",
              textAlign: "center",
              position: "relative",
            }}
          >
            {/* Top glow line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "20%",
                right: "20%",
                height: 1,
                background:
                  "linear-gradient(90deg, transparent, rgba(244,114,182,0.50), transparent)",
              }}
            />

            {/* Tag */}
            <div
              className={`nf-mounted-delay-1`}
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 20,
              }}
            >
              <span className="nf-tag">Page not found</span>
            </div>

            {/* 404 glitch number */}
            <div
              className={`nf-mounted-delay-1`}
              style={{
                position: "relative",
                display: "inline-block",
                marginBottom: 8,
              }}
            >
              <span className="nf-404-text">404</span>
            </div>

            {/* Divider */}
            <div
              className="nf-divider nf-mounted-delay-2"
              style={{ margin: "20px 0" }}
            />

            {/* Headline */}
            <h1
              className="nf-mounted-delay-2"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 5vw, 2.1rem)",
                color: "#fff",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                marginBottom: 14,
              }}
            >
              This connection got lost
            </h1>

            {/* Subtext */}
            <p
              className="nf-mounted-delay-2"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                color: "rgba(253,232,244,0.45)",
                lineHeight: 1.7,
                maxWidth: 360,
                margin: "0 auto 32px",
              }}
            >
              The page you're looking for doesn't exist or has been moved. Let's
              get you back to the people that matter.
            </p>

            {/* Buttons */}
            <div
              className="nf-mounted-delay-3"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                justifyContent: "center",
              }}
            >
              <button
                className="nf-btn-primary"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/");
                }}
              >
                <Home size={15} />
                Go Home
              </button>
              <button className="nf-btn-secondary" onClick={() => navigate(-1)}>
                <ArrowLeft size={15} />
                Go Back
              </button>
            </div>

            {/* Bottom glow line */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: "20%",
                right: "20%",
                height: 1,
                background:
                  "linear-gradient(90deg, transparent, rgba(139,62,180,0.30), transparent)",
              }}
            />
          </div>

          {/* Footer note */}
          <p
            className="nf-mounted-delay-4"
            style={{
              marginTop: 32,
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              color: "rgba(253,232,244,0.22)",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            Made with{" "}
            <span className="nf-heart">
              <Heart
                size={11}
                fill="rgba(244,114,182,0.7)"
                color="rgba(244,114,182,0.7)"
              />
            </span>{" "}
            for meaningful connections
          </p>
        </main>
      </div>
    </>
  );
};

export default NotFound;
