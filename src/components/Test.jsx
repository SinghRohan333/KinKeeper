import { useState } from "react";
import {
  BellOff,
  Archive,
  Trash2,
  Phone,
  MessageSquare,
  Video,
  Pencil,
  Mail,
  Calendar,
  Target,
  Clock,
} from "lucide-react";

// Sample friend data — swap with props/API as needed
const friend = {
  id: 2,
  name: "Marcus Webb",
  picture: "https://randomuser.me/api/portraits/men/32.jpg",
  email: "marcus.webb@outlook.com",
  days_since_contact: 62,
  status: "overdue",
  tags: ["work", "gym buddy"],
  bio: "Former colleague turned close friend. We used to grab lunch every Friday. Now we catch up over weekly runs.",
  goal: 30,
  next_due_date: "Feb 27, 2026",
};

const statusConfig = {
  overdue: {
    label: "Overdue",
    bg: "rgba(251,113,133,0.15)",
    border: "rgba(251,113,133,0.35)",
    color: "#fca5a5",
    dot: "#f87171",
  },
  "almost due": {
    label: "Almost Due",
    bg: "rgba(251,191,36,0.12)",
    border: "rgba(251,191,36,0.32)",
    color: "#fde68a",
    dot: "#fbbf24",
  },
  "on-track": {
    label: "On-Track",
    bg: "rgba(110,231,183,0.12)",
    border: "rgba(110,231,183,0.32)",
    color: "#6ee7b7",
    dot: "#34d399",
  },
};

const tagColors = [
  {
    bg: "rgba(168,85,247,0.14)",
    border: "rgba(168,85,247,0.28)",
    color: "rgba(216,180,254,0.90)",
  },
  {
    bg: "rgba(244,114,182,0.12)",
    border: "rgba(244,114,182,0.26)",
    color: "rgba(249,168,212,0.90)",
  },
  {
    bg: "rgba(99,102,241,0.14)",
    border: "rgba(99,102,241,0.28)",
    color: "rgba(165,180,252,0.90)",
  },
  {
    bg: "rgba(20,184,166,0.12)",
    border: "rgba(20,184,166,0.28)",
    color: "rgba(94,234,212,0.90)",
  },
];
const getTagColor = (tag) => tagColors[tag.length % tagColors.length];

// Reusable glass card
const GlassCard = ({ children, className = "", style = {} }) => (
  <div
    className={`rounded-2xl ${className}`}
    style={{
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.08)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      boxShadow:
        "0 4px 24px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.04)",
      ...style,
    }}
  >
    {children}
  </div>
);

const Test = () => {
  const [goalEdit, setGoalEdit] = useState(false);
  const status = statusConfig[friend.status];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Inter:wght@400;500;600&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          14%  { transform: scale(1.18); }
          28%  { transform: scale(1); }
          42%  { transform: scale(1.09); }
          56%  { transform: scale(1); }
        }
        @keyframes softPulse {
          0%, 100% { box-shadow: 0 0 14px 2px rgba(232,121,160,0.28), 0 4px 18px rgba(190,24,93,0.28); }
          50%  { box-shadow: 0 0 26px 6px rgba(232,121,160,0.48), 0 8px 28px rgba(190,24,93,0.46); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        .fd-section { animation: fadeUp 0.55s both; }
        .fd-section:nth-child(1) { animation-delay: 0.05s; }
        .fd-section:nth-child(2) { animation-delay: 0.12s; }
        .fd-section:nth-child(3) { animation-delay: 0.19s; }
        .fd-section:nth-child(4) { animation-delay: 0.26s; }

        .action-btn {
          font-family: 'Inter', sans-serif;
          display: flex; align-items: center; gap: 10px;
          width: 100%; padding: 12px 18px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          color: rgba(253,232,244,0.70);
          font-size: 0.875rem; font-weight: 500;
          cursor: pointer;
          transition: all 0.22s cubic-bezier(.22,1,.36,1);
          backdrop-filter: blur(12px);
        }
        .action-btn:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(244,114,182,0.20);
          color: rgba(253,232,244,0.95);
          transform: translateX(3px);
        }
        .action-btn.delete {
          color: rgba(252,165,165,0.75);
          border-color: rgba(251,113,133,0.12);
        }
        .action-btn.delete:hover {
          background: rgba(252,165,165,0.07);
          border-color: rgba(251,113,133,0.30);
          color: #fca5a5;
        }

        .checkin-btn {
          font-family: 'Inter', sans-serif;
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          flex: 1; padding: 16px 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          color: rgba(253,232,244,0.70);
          font-size: 0.8rem; font-weight: 500;
          cursor: pointer;
          transition: all 0.22s cubic-bezier(.22,1,.36,1);
        }
        .checkin-btn:hover {
          background: rgba(244,114,182,0.08);
          border-color: rgba(244,114,182,0.25);
          color: #f9a8d4;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(139,62,180,0.18);
        }

        .edit-btn {
          font-family: 'Inter', sans-serif;
          display: flex; align-items: center; gap: 6px;
          padding: 6px 14px;
          background: rgba(244,114,182,0.10);
          border: 1px solid rgba(244,114,182,0.22);
          border-radius: 10px;
          color: rgba(249,168,212,0.90);
          font-size: 0.78rem; font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .edit-btn:hover {
          background: rgba(244,114,182,0.18);
          border-color: rgba(244,114,182,0.40);
          color: #f9a8d4;
        }

        .stat-card-inner {
          transition: all 0.24s cubic-bezier(.22,1,.36,1);
        }
        .stat-card-inner:hover {
          background: rgba(255,255,255,0.08) !important;
          border-color: rgba(244,114,182,0.22) !important;
          transform: translateY(-3px);
        }
      `}</style>

      <div
        className="min-h-screen w-full px-4 sm:px-8 py-10"
        style={{
          backgroundColor: "#0d0618",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Ambient orbs */}
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
                "radial-gradient(ellipse, rgba(139,62,180,0.14) 0%, transparent 70%)",
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
                "radial-gradient(ellipse, rgba(244,114,182,0.10) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-5">
            {/* ═══════════════════════════════
                LEFT COLUMN
            ═══════════════════════════════ */}
            <div className="flex flex-col gap-4">
              {/* Friend Info Card */}
              <GlassCard className="fd-section flex flex-col items-center text-center px-6 pt-8 pb-6">
                {/* Avatar */}
                <div
                  className="relative mb-5"
                  style={{ width: 96, height: 96 }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "50%",
                      background:
                        "conic-gradient(from 0deg, #f472b6, #8b3fb4, #f472b6)",
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
                  <img
                    src={friend.picture}
                    alt={friend.name}
                    style={{
                      position: "absolute",
                      inset: 3,
                      width: "calc(100% - 6px)",
                      height: "calc(100% - 6px)",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Name */}
                <h1
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 700,
                    fontSize: "1.6rem",
                    color: "#fff",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.15,
                    marginBottom: 10,
                  }}
                >
                  {friend.name}
                </h1>

                {/* Status */}
                <div
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3"
                  style={{
                    background: status.bg,
                    border: `1px solid ${status.border}`,
                    color: status.color,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: status.dot,
                      boxShadow: `0 0 5px ${status.dot}`,
                      display: "inline-block",
                    }}
                  />
                  {status.label}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                  {friend.tags.map((tag) => {
                    const tc = getTagColor(tag);
                    return (
                      <span
                        key={tag}
                        className="text-[10px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                        style={{
                          background: tc.bg,
                          border: `1px solid ${tc.border}`,
                          color: tc.color,
                        }}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>

                {/* Bio */}
                <p
                  className="text-xs leading-relaxed mb-3 italic"
                  style={{ color: "rgba(253,232,244,0.48)", maxWidth: 240 }}
                >
                  "{friend.bio}"
                </p>

                {/* Email */}
                <div
                  className="flex items-center gap-2 text-xs"
                  style={{ color: "rgba(253,232,244,0.40)" }}
                >
                  <Mail size={13} />
                  <span>{friend.email}</span>
                </div>

                {/* Divider */}
                <div
                  className="w-full mt-6 mb-1"
                  style={{
                    height: 1,
                    background:
                      "linear-gradient(90deg, transparent, rgba(244,114,182,0.14), transparent)",
                  }}
                />
              </GlassCard>

              {/* Action Buttons */}
              <div className="fd-section flex flex-col gap-2">
                <button className="action-btn">
                  <BellOff size={16} style={{ color: "#fde68a" }} />
                  Snooze 2 Weeks
                </button>
                <button className="action-btn">
                  <Archive size={16} style={{ color: "#93c5fd" }} />
                  Archive
                </button>
                <button className="action-btn delete">
                  <Trash2 size={16} />
                  Delete
                </button>
              </div>
            </div>

            {/* ═══════════════════════════════
                RIGHT COLUMN
            ═══════════════════════════════ */}
            <div className="flex flex-col gap-4">
              {/* ① Stats Cards */}
              <div className="fd-section grid grid-cols-3 gap-3">
                {[
                  {
                    icon: Clock,
                    label: "Days Since Contact",
                    value: friend.days_since_contact,
                    color: "#fca5a5",
                  },
                  {
                    icon: Target,
                    label: "Goal (Days)",
                    value: friend.goal,
                    color: "#6ee7b7",
                  },
                  {
                    icon: Calendar,
                    label: "Next Due",
                    value: friend.next_due_date,
                    color: "#f9a8d4",
                    small: true,
                  },
                ].map(({ icon: Icon, label, value, color, small }) => (
                  <GlassCard
                    key={label}
                    className="stat-card-inner flex flex-col items-center justify-center text-center px-3 py-5"
                  >
                    <Icon
                      size={16}
                      style={{ color, marginBottom: 8, opacity: 0.8 }}
                    />
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontWeight: 700,
                        fontSize: small ? "1.2rem" : "2rem",
                        color: "#fff",
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        marginBottom: 4,
                      }}
                    >
                      {value}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.7rem",
                        color: "rgba(253,232,244,0.42)",
                        fontWeight: 500,
                      }}
                    >
                      {label}
                    </span>
                  </GlassCard>
                ))}
              </div>

              {/* ② Relationship Goal */}
              <GlassCard className="fd-section px-6 py-5">
                <div className="flex items-center justify-between mb-3">
                  <h2
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 700,
                      fontSize: "1.15rem",
                      color: "#fff",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Relationship Goal
                  </h2>
                  <button
                    className="edit-btn"
                    onClick={() => setGoalEdit(!goalEdit)}
                  >
                    <Pencil size={12} />
                    Edit
                  </button>
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: 1,
                    marginBottom: 14,
                    background:
                      "linear-gradient(90deg, rgba(244,114,182,0.14), transparent)",
                  }}
                />

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    color: "rgba(253,232,244,0.60)",
                  }}
                >
                  Connect every{" "}
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "#f9a8d4",
                    }}
                  >
                    {friend.goal} days
                  </span>
                </p>

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
                      width: `${Math.min((friend.days_since_contact / friend.goal) * 100, 100)}%`,
                      background: "linear-gradient(90deg, #f472b6, #be185d)",
                      borderRadius: 999,
                      boxShadow: "0 0 8px rgba(244,114,182,0.5)",
                      transition: "width 0.6s ease",
                    }}
                  />
                </div>
                <div className="flex justify-between mt-1.5">
                  <span
                    style={{
                      fontSize: "0.68rem",
                      color: "rgba(253,232,244,0.30)",
                    }}
                  >
                    0 days
                  </span>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      color: "rgba(253,232,244,0.30)",
                    }}
                  >
                    Goal: {friend.goal}d
                  </span>
                </div>
              </GlassCard>

              {/* ③ Quick Check-In */}
              <GlassCard className="fd-section px-6 py-5">
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    color: "#fff",
                    letterSpacing: "-0.01em",
                    marginBottom: 4,
                  }}
                >
                  Quick Check-In
                </h2>

                {/* Divider */}
                <div
                  style={{
                    height: 1,
                    marginBottom: 14,
                    background:
                      "linear-gradient(90deg, rgba(244,114,182,0.14), transparent)",
                  }}
                />

                <div className="flex gap-3">
                  {[
                    { icon: Phone, label: "Call", color: "#6ee7b7" },
                    { icon: MessageSquare, label: "Text", color: "#f9a8d4" },
                    { icon: Video, label: "Video", color: "#93c5fd" },
                  ].map(({ icon: Icon, label, color }) => (
                    <button key={label} className="checkin-btn">
                      <Icon size={22} style={{ color }} strokeWidth={1.8} />
                      <span>{label}</span>
                    </button>
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

export default Test;
