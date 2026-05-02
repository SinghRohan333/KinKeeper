import { useContext, useState, useMemo } from "react";
import { Context } from "../context/context";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Phone, MessageSquare, Video, BarChart2 } from "lucide-react";

const TYPE_CONFIG = {
  call: {
    label: "Call",
    color: "#6ee7b7",
    glow: "rgba(110,231,183,0.35)",
    bg: "rgba(110,231,183,0.12)",
    border: "rgba(110,231,183,0.25)",
    icon: Phone,
  },
  text: {
    label: "Text",
    color: "#f472b6",
    glow: "rgba(244,114,182,0.35)",
    bg: "rgba(244,114,182,0.12)",
    border: "rgba(244,114,182,0.25)",
    icon: MessageSquare,
  },
  video: {
    label: "Video",
    color: "#93c5fd",
    glow: "rgba(147,197,253,0.35)",
    bg: "rgba(147,197,253,0.12)",
    border: "rgba(147,197,253,0.25)",
    icon: Video,
  },
};

const GlassCard = ({ children, className = "", style = {} }) => (
  <div
    className={className}
    style={{
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.08)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderRadius: 20,
      boxShadow:
        "0 4px 32px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.04)",
      ...style,
    }}
  >
    {children}
  </div>
);

// Custom tooltip
const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const { name, value } = payload[0];
  const cfg = TYPE_CONFIG[name.toLowerCase()];
  return (
    <div
      style={{
        background: "#130920",
        border: `1px solid ${cfg?.border || "rgba(244,114,182,0.20)"}`,
        borderRadius: 12,
        padding: "10px 16px",
        boxShadow: `0 8px 32px rgba(0,0,0,0.45), 0 0 16px ${cfg?.glow || "rgba(244,114,182,0.2)"}`,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <p
        style={{
          color: cfg?.color || "#fff",
          fontWeight: 600,
          fontSize: "0.85rem",
          marginBottom: 2,
        }}
      >
        {name}
      </p>
      <p style={{ color: "rgba(253,232,244,0.70)", fontSize: "0.78rem" }}>
        {value} interaction{value !== 1 ? "s" : ""}
      </p>
    </div>
  );
};

// Custom legend
const CustomLegend = ({ data }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: 20,
      flexWrap: "wrap",
      marginTop: 8,
    }}
  >
    {data.map(({ name, color }) => (
      <div key={name} style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: color,
            boxShadow: `0 0 6px ${color}`,
            display: "inline-block",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.78rem",
            color: "rgba(253,232,244,0.60)",
          }}
        >
          {name}
        </span>
      </div>
    ))}
  </div>
);

// Empty state donut
const EmptyDonut = () => (
  <div
    style={{ position: "relative", width: 200, height: 200, margin: "0 auto" }}
  >
    <svg width="200" height="200" viewBox="0 0 200 200">
      <defs>
        <linearGradient id="emptyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(244,114,182,0.12)" />
          <stop offset="100%" stopColor="rgba(139,62,180,0.08)" />
        </linearGradient>
      </defs>
      {/* Dashed empty ring */}
      <circle
        cx="100"
        cy="100"
        r="70"
        fill="none"
        stroke="url(#emptyGrad)"
        strokeWidth="28"
        strokeDasharray="8 6"
        style={{ animation: "emptyRotate 12s linear infinite" }}
      />
      {/* Inner glow */}
      <circle
        cx="100"
        cy="100"
        r="56"
        fill="none"
        stroke="rgba(244,114,182,0.06)"
        strokeWidth="1"
      />
    </svg>
    {/* Center icon */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
      }}
    >
      <BarChart2
        size={24}
        style={{ color: "rgba(244,114,182,0.35)" }}
        strokeWidth={1.5}
      />
    </div>
  </div>
);

// Stat summary card
const StatSummaryCard = ({ type, count, total }) => {
  const cfg = TYPE_CONFIG[type];
  const Icon = cfg.icon;
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;

  return (
    <div
      style={{
        background: cfg.bg,
        border: `1px solid ${cfg.border}`,
        borderRadius: 14,
        padding: "14px 16px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        transition: "all 0.22s cubic-bezier(.22,1,.36,1)",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = `0 8px 24px ${cfg.glow}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 10,
          background: `rgba(${cfg.color === "#6ee7b7" ? "110,231,183" : cfg.color === "#f472b6" ? "244,114,182" : "147,197,253"},0.15)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon size={16} color={cfg.color} strokeWidth={2} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              color: "rgba(253,232,244,0.55)",
              fontWeight: 500,
            }}
          >
            {cfg.label}
          </span>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 700,
              fontSize: "1.1rem",
              color: cfg.color,
            }}
          >
            {count}
          </span>
        </div>
        {/* Progress bar */}
        <div
          style={{
            height: 4,
            borderRadius: 999,
            background: "rgba(255,255,255,0.06)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${pct}%`,
              background: cfg.color,
              borderRadius: 999,
              boxShadow: `0 0 6px ${cfg.color}`,
              transition: "width 0.8s cubic-bezier(.22,1,.36,1)",
            }}
          />
        </div>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.68rem",
            color: "rgba(253,232,244,0.30)",
            marginTop: 2,
            display: "block",
          }}
        >
          {pct}% of total
        </span>
      </div>
    </div>
  );
};

const Stats = () => {
  const { interactionData } = useContext(Context);
  const [activeIndex, setActiveIndex] = useState(null);

  const { chartData, counts, total } = useMemo(() => {
    const counts = { call: 0, text: 0, video: 0 };
    interactionData.forEach((e) => {
      if (counts[e.type] !== undefined) counts[e.type]++;
    });
    const total = counts.call + counts.text + counts.video;
    const chartData = Object.entries(counts)
      .filter(([, v]) => v > 0)
      .map(([key, value]) => ({
        name: TYPE_CONFIG[key].label,
        value,
        color: TYPE_CONFIG[key].color,
        glow: TYPE_CONFIG[key].glow,
        key,
      }));
    return { chartData, counts, total };
  }, [interactionData]);

  const hasData = total > 0;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Inter:wght@400;500;600&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50%       { transform: translateY(-14px) scale(1.04); }
        }
        @keyframes emptyRotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
          transform-origin: center;
        }
        @keyframes emptyPulse {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }

        .stats-section { animation: fadeUp 0.55s both; }
        .stats-section:nth-child(1) { animation-delay: 0.05s; }
        .stats-section:nth-child(2) { animation-delay: 0.14s; }
        .stats-section:nth-child(3) { animation-delay: 0.23s; }

        .orb-a { animation: orbFloat 10s ease-in-out infinite; }
        .orb-b { animation: orbFloat 13s ease-in-out infinite reverse; }

        /* recharts overrides */
        .recharts-sector { filter: drop-shadow(0 0 0px transparent); transition: filter 0.2s; }
        .recharts-active-shape .recharts-sector { filter: drop-shadow(0 0 10px currentColor); }

        @media (max-width: 480px) {
  .        stats-section > div {
            grid-template-columns: 1fr !important;
            }
        }
      `}</style>

      <div
        className="min-h-screen w-full px-4 sm:px-8 py-10 relative"
        style={{
          backgroundColor: "#0d0618",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Orbs */}
        <div
          className="fixed inset-0 pointer-events-none overflow-hidden"
          style={{ zIndex: 0 }}
        >
          <div
            className="orb-a absolute"
            style={{
              top: "-10%",
              left: "55%",
              width: 520,
              height: 340,
              background:
                "radial-gradient(ellipse, rgba(139,62,180,0.16) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />
          <div
            className="orb-b absolute"
            style={{
              bottom: "5%",
              left: "-8%",
              width: 380,
              height: 300,
              background:
                "radial-gradient(ellipse, rgba(244,114,182,0.10) 0%, transparent 70%)",
              filter: "blur(42px)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Heading */}
          <div className="stats-section mb-8">
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: "#fff",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                marginBottom: 8,
              }}
            >
              Friendship Analytics
            </h1>
            <div
              style={{
                width: 48,
                height: 2,
                background: "linear-gradient(90deg, #f472b6, #8b3fb4)",
                borderRadius: 2,
              }}
            />
            <p
              style={{
                marginTop: 10,
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                color: "rgba(253,232,244,0.42)",
              }}
            >
              {hasData
                ? `${total} interaction${total !== 1 ? "s" : ""} logged across your connections`
                : "Start logging interactions to see your analytics"}
            </p>
          </div>

          {/* Main chart card */}
          <GlassCard
            className="stats-section"
            style={{ padding: "28px 24px 24px" }}
          >
            {/* Card header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 12,
                marginBottom: 24,
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: "#fff",
                    letterSpacing: "-0.01em",
                  }}
                >
                  By Interaction Type
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.72rem",
                    color: "rgba(253,232,244,0.35)",
                    marginTop: 2,
                  }}
                >
                  Distribution of how you connect
                </p>
              </div>
              {/* Total badge */}
              <div
                style={{
                  background: "rgba(244,114,182,0.10)",
                  border: "1px solid rgba(244,114,182,0.20)",
                  borderRadius: 10,
                  padding: "6px 14px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 700,
                    fontSize: "1.4rem",
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  {total}
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.65rem",
                    color: "rgba(253,232,244,0.40)",
                    marginTop: 2,
                  }}
                >
                  total
                </span>
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                height: 1,
                marginBottom: 24,
                background:
                  "linear-gradient(90deg, rgba(244,114,182,0.14), rgba(139,62,180,0.14), transparent)",
              }}
            />

            {/* Chart area */}
            {!hasData ? (
              /* ── Empty state ── */
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "20px 0 28px",
                }}
              >
                <EmptyDonut />
                <div style={{ marginTop: 20, textAlign: "center" }}>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 700,
                      fontSize: "1.15rem",
                      color: "rgba(253,232,244,0.45)",
                      marginBottom: 6,
                    }}
                  >
                    No interactions yet
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8rem",
                      color: "rgba(253,232,244,0.25)",
                      maxWidth: 260,
                      lineHeight: 1.6,
                      margin: "0 auto",
                    }}
                  >
                    Log a Call, Text, or Video from a friend's detail page to
                    see your analytics here.
                  </p>
                  {/* Ghost legend */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 16,
                      marginTop: 20,
                      flexWrap: "wrap",
                    }}
                  >
                    {Object.entries(TYPE_CONFIG).map(([key, cfg]) => (
                      <div
                        key={key}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          opacity: 0.25,
                        }}
                      >
                        <span
                          style={{
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            background: cfg.color,
                            display: "inline-block",
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.75rem",
                            color: "rgba(253,232,244,0.60)",
                          }}
                        >
                          {cfg.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* ── Donut chart ── */
              <div style={{ width: "100%", height: 280 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={72}
                      outerRadius={110}
                      paddingAngle={4}
                      dataKey="value"
                      stroke="none"
                      activeIndex={activeIndex}
                      onMouseEnter={(_, index) => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(null)}
                      animationBegin={0}
                      animationDuration={900}
                    >
                      {chartData.map((entry, index) => (
                        <Cell
                          key={entry.key}
                          fill={entry.color}
                          opacity={
                            activeIndex === null || activeIndex === index
                              ? 1
                              : 0.45
                          }
                          style={{
                            filter:
                              activeIndex === index
                                ? `drop-shadow(0 0 10px ${entry.color})`
                                : "none",
                            cursor: "pointer",
                          }}
                        />
                      ))}
                      {/* Center label */}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
                <CustomLegend data={chartData} />
              </div>
            )}
          </GlassCard>

          {/* Stat summary cards */}
          <div
            className="stats-section"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 14,
              marginTop: 16,
            }}
          >
            {Object.keys(TYPE_CONFIG).map((type) => (
              <StatSummaryCard
                key={type}
                type={type}
                count={counts[type]}
                total={total}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
