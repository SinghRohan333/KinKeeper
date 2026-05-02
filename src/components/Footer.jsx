import { FaYoutube, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Inter:wght@400;500;600&display=swap');

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          14%       { transform: scale(1.2); }
          28%       { transform: scale(1); }
          42%       { transform: scale(1.1); }
          56%       { transform: scale(1); }
        }
        @keyframes socialGlow {
          0%, 100% { box-shadow: 0 0 0px rgba(244,114,182,0); }
          50%       { box-shadow: 0 0 14px rgba(244,114,182,0.3); }
        }

        .footer-logo-keen {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.01em;
        }
        .footer-logo-keeper {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 700;
          letter-spacing: -0.01em;
          background: linear-gradient(135deg, #f472b6 0%, #be185d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .footer-body {
          font-family: 'Inter', sans-serif;
        }
        .social-icon {
          transition: transform 0.22s cubic-bezier(.22,1,.36,1), background 0.22s ease, box-shadow 0.22s ease;
        }
        .social-icon:hover {
          transform: translateY(-4px) scale(1.12);
          background: rgba(244,114,182,0.18) !important;
          box-shadow: 0 0 18px rgba(244,114,182,0.35);
        }
        .footer-link {
          font-family: 'Inter', sans-serif;
          transition: color 0.18s ease;
        }
        .footer-link:hover {
          color: #f9a8d4 !important;
        }
        .heart-beat {
          display: inline-block;
          animation: heartbeat 2.4s ease-in-out infinite;
          color: #f472b6;
        }
      `}</style>

      <footer
        className="w-full flex flex-col items-center px-6 pt-14 pb-8 gap-8 relative overflow-hidden"
        style={{
          backgroundColor: "#0d0618",
          borderTop: "1px solid rgba(244,114,182,0.08)",
        }}
      >
        {/* Top border glow line — mirrors navbar */}
        <div
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(168,85,247,0.35), rgba(244,114,182,0.35), transparent)",
          }}
        />

        {/* Subtle background orb */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-30%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 500,
            height: 300,
            background:
              "radial-gradient(ellipse, rgba(139,62,180,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Logo */}
        <div className="relative z-10 flex items-center select-none gap-0">
          <span className="footer-logo-keen text-3xl sm:text-4xl">Keen</span>
          <span className="footer-logo-keeper text-3xl sm:text-4xl">
            Keeper
          </span>
        </div>

        {/* Tagline */}
        <p
          className="footer-body relative z-10 text-center text-sm sm:text-base leading-relaxed max-w-md"
          style={{ color: "rgba(253,232,244,0.45)" }}
        >
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="relative z-10 flex flex-col items-center gap-4">
          <span
            className="footer-body text-xs font-medium uppercase tracking-[0.2em]"
            style={{ color: "rgba(244,114,182,0.45)" }}
          >
            Social Links
          </span>
          <div className="flex items-center gap-3">
            {[
              { icon: FaYoutube, label: "YouTube", href: "#" },
              { icon: FaFacebookF, label: "Facebook", href: "#" },
              { icon: FaXTwitter, label: "X / Twitter", href: "#" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="social-icon flex items-center justify-center w-11 h-11 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(244,114,182,0.15)",
                  color: "rgba(253,232,244,0.70)",
                }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="relative z-10 w-full max-w-2xl"
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(244,114,182,0.18), rgba(168,85,247,0.18), transparent)",
          }}
        />

        {/* Bottom row */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-2 sm:gap-8 text-center">
          <span
            className="footer-body text-xs"
            style={{ color: "rgba(253,232,244,0.28)" }}
          >
            © 2026 KeenKeeper. All rights reserved.
          </span>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="footer-link text-xs"
                style={{ color: "rgba(253,232,244,0.38)" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Made with love tag */}
        <p
          className="footer-body relative z-10 text-xs -mt-4"
          style={{ color: "rgba(253,232,244,0.22)" }}
        >
          Made with <span className="heart-beat">♥</span> for meaningful
          connections
        </p>
      </footer>
    </>
  );
};

export default Footer;
