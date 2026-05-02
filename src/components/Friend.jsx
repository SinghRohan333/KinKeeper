import React from "react";
import { useState } from "react";
import { Link } from "react-router";

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

const Friend = ({ friend }) => {
  const [hovered, setHovered] = useState(false);
  const status = statusConfig[friend.status];

  return (
    <Link to={`/details/${friend.id}`}>
      <div
        className="friend-card relative flex flex-col items-center text-center rounded-2xl px-5 pt-8 pb-6 cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered
            ? "rgba(255,255,255,0.08)"
            : "rgba(255,255,255,0.04)",
          border: hovered
            ? "1px solid rgba(244,114,182,0.22)"
            : "1px solid rgba(255,255,255,0.07)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: hovered
            ? "0 12px 40px rgba(139,62,180,0.20), inset 0 1px 0 rgba(255,255,255,0.06)"
            : "0 4px 20px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.03)",
          transition: "all 0.28s cubic-bezier(.22,1,.36,1)",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
        }}
      >
        {/* Hover glow */}
        {hovered && (
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(244,114,182,0.08) 0%, transparent 70%)",
            }}
          />
        )}

        {/* Avatar */}
        <div
          className="relative mb-4"
          style={{
            width: 80,
            height: 80,
          }}
        >
          {/* Glow ring */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(from 0deg, #f472b6, #8b3fb4, #f472b6)`,
              padding: "2px",
              borderRadius: "50%",
              opacity: hovered ? 1 : 0.5,
              transition: "opacity 0.28s ease",
            }}
          >
            <div
              className="w-full h-full rounded-full"
              style={{ background: "#0d0618" }}
            />
          </div>
          <img
            src={friend.picture}
            alt={friend.name}
            className="absolute inset-0.75 rounded-full object-cover"
            style={{ width: "calc(100% - 6px)", height: "calc(100% - 6px)" }}
          />
        </div>

        {/* Name */}
        <h3
          className="mb-1 leading-tight"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 700,
            fontSize: "1.15rem",
            color: "#fff",
            letterSpacing: "-0.01em",
          }}
        >
          {friend.name}
        </h3>

        {/* Days since contact */}
        <p
          className="mb-3 text-xs"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "rgba(253,232,244,0.40)",
          }}
        >
          {friend.days_since_contact}d ago
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-3">
          {friend.tags.map((tag) => {
            const tc = getTagColor(tag);
            return (
              <span
                key={tag}
                className="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full"
                style={{
                  fontFamily: "'Inter', sans-serif",
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

        {/* Status badge */}
        <div
          className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
          style={{
            fontFamily: "'Inter', sans-serif",
            background: status.bg,
            border: `1px solid ${status.border}`,
            color: status.color,
          }}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{
              background: status.dot,
              boxShadow: `0 0 5px ${status.dot}`,
            }}
          />
          {status.label}
        </div>
      </div>
    </Link>
  );
};

export default Friend;
