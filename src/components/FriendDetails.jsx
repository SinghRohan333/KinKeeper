import React, { useContext, useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
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

import "../style/FriendDetails.css";
import ScrollToTop from "./ScrollToTop";
import HydrateFallbackElement from "./HydrateFallbackElement";
import { Context } from "../context/context";
import { toast } from "react-toastify";

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

const FriendDetails = () => {
  const friendsData = useLoaderData();
  const { id } = useParams();
  const friend = friendsData[id - 1];
  // console.log(friend);

  const [goalEdit, setGoalEdit] = useState(false);
  const status = statusConfig[friend.status];

  const [ready, setReady] = useState(false);
  const { interactionData, setInteractionData, setInteractionCnt } =
    useContext(Context);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1500);
    return () => clearTimeout(t);
  }, []);

  // Add this in your component, outside handleInteraction
  useEffect(() => {
    console.log(interactionData);
  }, [interactionData]); // ← runs AFTER state actually updates & re-renders

  if (!ready)
    return (
      <>
        <ScrollToTop />
        <HydrateFallbackElement />
      </>
    );

  const handleInteraction = (label) => {
    try {
      const today = new Date();
      const currentDate = today.toISOString().split("T")[0];
      const currentTime = today.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: false,
      });
      const randomDuration = `${Math.floor(Math.random() * 56) + 5} min`;

      const data = {
        id: `${friend.id}-${Date.now()}`,
        type: label,
        friend: friend.name,
        title: `${label} with ${friend.name}`,
        date: currentDate,
        time: currentTime,
        timestamp: Date.now(),
        duration: randomDuration,
      };
      setInteractionData((prev) => [...prev, data]);
      setInteractionCnt((prev) => prev + 1);

      toast.success(`${label} with ${friend.name} logged!`, {
        style: {
          background: "#130920",
          border: "1px solid rgba(110,231,183,0.30)",
          color: "rgba(253,232,244,0.90)",
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.85rem",
          borderRadius: "14px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.40)",
        },
        progressStyle: {
          background: "linear-gradient(90deg, #6ee7b7, #34d399)",
        },
        icon: "✅",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        style: {
          background: "#130920",
          border: "1px solid rgba(251,113,133,0.30)",
          color: "rgba(253,232,244,0.90)",
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.85rem",
          borderRadius: "14px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.40)",
        },
        progressStyle: {
          background: "linear-gradient(90deg, #fca5a5, #f87171)",
        },
        icon: "❌",
      });
    }
  };

  return (
    <>
      <ScrollToTop />
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
                <button className="action-btn">
                  <Trash2 size={16} style={{ color: "#fd9393" }} />
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
                    <button
                      key={label}
                      className="checkin-btn"
                      onClick={() =>
                        handleInteraction(`${label.toLowerCase()}`)
                      }
                      onMouseDown={(e) =>
                        (e.currentTarget.style.transform = "scale(0.93)")
                      }
                      onMouseUp={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    >
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

export default FriendDetails;
