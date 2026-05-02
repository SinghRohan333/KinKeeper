import { Home, Clock, Activity, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "timeline", label: "Timeline", icon: Clock },
    { id: "stats", label: "Stats", icon: Activity },
  ];

  const handleNavClick = (id) => {
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Inter:wght@400;500;600&display=swap');

        @keyframes navShimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes softPulseNav {
          0%, 100% { box-shadow: 0 0 14px 2px rgba(232,121,160,0.30), 0 4px 18px rgba(190,24,93,0.30); }
          50%       { box-shadow: 0 0 24px 5px rgba(232,121,160,0.50), 0 6px 24px rgba(190,24,93,0.48); }
        }

        .nav-logo-keen {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 700;
          font-size: 1.35rem;
          color: #fff;
          letter-spacing: -0.01em;
        }
        .nav-logo-keeper {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 700;
          font-size: 1.35rem;
          letter-spacing: -0.01em;
          background: linear-gradient(135deg, #f472b6 0%, #be185d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .nav-btn-active {
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #e879a0 0%, #be185d 100%);
          animation: softPulseNav 3s ease-in-out infinite;
        }
        .nav-btn-active::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(100deg, transparent 25%, rgba(255,255,255,0.18) 50%, transparent 75%);
          background-size: 200% 100%;
          animation: navShimmer 2.4s linear infinite;
          border-radius: inherit;
        }
        .nav-btn-inactive {
          font-family: 'Inter', sans-serif;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .nav-btn-inactive:hover {
          color: #fce7f3 !important;
          background: rgba(244,114,182,0.08) !important;
        }
        .mobile-item {
          font-family: 'Inter', sans-serif;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .mobile-item:hover {
          background: rgba(244,114,182,0.08) !important;
          color: #fce7f3 !important;
        }
      `}</style>

      <nav
        className="w-full relative"
        style={{
          backgroundColor: "#0d0618",
          borderBottom: "1px solid rgba(244,114,182,0.08)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        {/* Subtle top glow matching CTA orbs */}
        <div
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(244,114,182,0.35), rgba(168,85,247,0.35), transparent)",
          }}
        />

        {/* Main bar */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-3">
          {/* Logo */}
          <div className="flex items-center select-none gap-0">
            <span className="nav-logo-keen">Keen</span>
            <span className="nav-logo-keeper">Keeper</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ id, label, icon: Icon }) => {
              const isActive = active === id;
              return (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium cursor-pointer border-none outline-none ${
                    isActive ? "nav-btn-active text-white" : "nav-btn-inactive"
                  }`}
                  style={
                    !isActive
                      ? {
                          color: "rgba(253,232,244,0.50)",
                          background: "transparent",
                        }
                      : {}
                  }
                >
                  <Icon size={15} strokeWidth={2} />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg cursor-pointer border-none outline-none transition-all duration-200"
            style={{
              color: "rgba(253,232,244,0.55)",
              background: "transparent",
            }}
            onClick={() => setMenuOpen((p) => !p)}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(244,114,182,0.08)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={20} strokeWidth={2} />
            ) : (
              <Menu size={20} strokeWidth={2} />
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: menuOpen ? "200px" : "0px",
            opacity: menuOpen ? 1 : 0,
            backgroundColor: "#0d0618",
          }}
        >
          <div className="flex flex-col gap-1 px-5 pb-4 pt-1">
            {navItems.map(({ id, label, icon: Icon }) => {
              const isActive = active === id;
              return (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className={`mobile-item flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-sm font-medium cursor-pointer border-none outline-none ${
                    isActive ? "nav-btn-active text-white" : ""
                  }`}
                  style={
                    !isActive
                      ? {
                          color: "rgba(253,232,244,0.50)",
                          background: "transparent",
                        }
                      : {}
                  }
                >
                  <Icon size={16} strokeWidth={2} />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
