import React from "react";

import { useState, useMemo } from "react";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Inter:wght@400;500;600&display=swap');

  :root {
    --bg:          #0d0618;
    --card:        rgba(255,255,255,0.05);
    --card-hover:  rgba(255,255,255,0.09);
    --accent1:     #e879a0;
    --accent2:     #be185d;
    --purple:      #8b3fb4;
    --purple-lo:   rgba(168,85,247,0.18);
    --text-hi:     #ffffff;
    --text-mid:    rgba(253,232,244,0.80);
    --text-lo:     rgba(253,232,244,0.45);
    --border:      rgba(244,114,182,0.13);
    --border-hi:   rgba(244,114,182,0.28);
    --glow:        rgba(232,121,160,0.18);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .tl-root {
    min-height: 100vh;
    background: var(--bg);
    font-family: 'Inter', sans-serif;
    color: var(--text-mid);
    padding: 48px 24px 80px;
    position: relative;
    overflow-x: hidden;
  }

  /* ── orbs ── */
  .orb {
    position: fixed;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
    z-index: 0;
    animation: orbDrift 12s ease-in-out infinite alternate;
  }
  .orb-1 { width: 420px; height: 420px; background: rgba(139,63,180,0.22); top: -80px; left: -120px; animation-delay: 0s; }
  .orb-2 { width: 300px; height: 300px; background: rgba(232,121,160,0.14); bottom: 10%; right: -80px; animation-delay: -5s; }
  .orb-3 { width: 200px; height: 200px; background: rgba(168,85,247,0.10); top: 45%; left: 55%; animation-delay: -9s; }

  @keyframes orbDrift {
    from { transform: translate(0, 0) scale(1); }
    to   { transform: translate(30px, 25px) scale(1.08); }
  }

  /* ── content wrapper ── */
  .tl-inner {
    position: relative;
    z-index: 1;
    max-width: 860px;
    margin: 0 auto;
  }

  /* ── page heading ── */
  .tl-heading {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 700;
    color: var(--text-hi);
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin-bottom: 4px;
  }
  .tl-heading span {
    background: linear-gradient(90deg, var(--accent1), var(--accent2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .tl-sub {
    font-size: 0.85rem;
    color: var(--text-lo);
    margin-bottom: 32px;
    font-weight: 400;
    letter-spacing: 0.02em;
  }

  /* ── gradient rule ── */
  .tl-rule {
    height: 1px;
    background: linear-gradient(90deg, var(--accent1), var(--purple), transparent);
    margin-bottom: 32px;
    opacity: 0.45;
  }

  /* ── controls row ── */
  .tl-controls {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 32px;
    align-items: center;
  }

  /* search */
  .tl-search-wrap {
    position: relative;
    flex: 1;
    min-width: 200px;
  }
  .tl-search-icon {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-lo);
    font-size: 0.9rem;
    pointer-events: none;
  }
  .tl-search {
    width: 100%;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 10px 14px 10px 38px;
    color: var(--text-mid);
    font-family: 'Inter', sans-serif;
    font-size: 0.85rem;
    outline: none;
    backdrop-filter: blur(20px);
    transition: border-color 0.2s;
  }
  .tl-search::placeholder { color: var(--text-lo); }
  .tl-search:focus { border-color: var(--border-hi); }

  /* filter pills */
  .tl-filters {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
  .tl-pill {
    padding: 7px 16px;
    border-radius: 999px;
    font-size: 0.78rem;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    border: 1px solid var(--border);
    background: var(--card);
    color: var(--text-lo);
    transition: all 0.2s;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    backdrop-filter: blur(16px);
  }
  .tl-pill:hover { border-color: var(--border-hi); color: var(--text-mid); }
  .tl-pill.active {
    background: linear-gradient(135deg, rgba(232,121,160,0.22), rgba(139,63,180,0.22));
    border-color: var(--accent1);
    color: var(--accent1);
  }

  /* sort dropdown */
  .tl-sort {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 9px 14px;
    color: var(--text-mid);
    font-family: 'Inter', sans-serif;
    font-size: 0.82rem;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    backdrop-filter: blur(16px);
    transition: border-color 0.2s;
    appearance: none;
    -webkit-appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='rgba(253,232,244,0.4)' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    padding-right: 32px;
  }
  .tl-sort option { background: #1a0b2e; color: var(--text-mid); }
  .tl-sort:focus { border-color: var(--border-hi); }

  /* ── results count ── */
  .tl-count {
    font-size: 0.78rem;
    color: var(--text-lo);
    margin-bottom: 24px;
    letter-spacing: 0.04em;
  }
  .tl-count strong { color: var(--accent1); font-weight: 600; }

  /* ── timeline container ── */
  .tl-list {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  /* vertical line */
  .tl-list::before {
    content: '';
    position: absolute;
    left: 23px;
    top: 12px;
    bottom: 12px;
    width: 1px;
    background: linear-gradient(180deg, var(--accent1) 0%, var(--purple) 60%, transparent 100%);
    opacity: 0.35;
  }

  /* ── individual entry ── */
  .tl-entry {
    display: flex;
    gap: 20px;
    padding: 0 0 28px 0;
    animation: floatUp 0.45s ease both;
  }
  .tl-entry:last-child { padding-bottom: 0; }

  @keyframes floatUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* dot + icon column */
  .tl-icon-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    padding-top: 2px;
  }
  .tl-dot {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.15rem;
    flex-shrink: 0;
    border: 1px solid var(--border);
    backdrop-filter: blur(16px);
    transition: transform 0.2s, border-color 0.2s;
    position: relative;
    z-index: 1;
  }
  .tl-dot.call   { background: rgba(232,121,160,0.12); }
  .tl-dot.text   { background: rgba(139,63,180,0.15); }
  .tl-dot.video  { background: rgba(59,130,246,0.12); }

  /* card */
  .tl-card {
    flex: 1;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 16px 20px;
    backdrop-filter: blur(20px);
    transition: background 0.2s, border-color 0.2s, transform 0.2s;
    cursor: default;
  }
  .tl-card:hover {
    background: var(--card-hover);
    border-color: var(--border-hi);
    transform: translateX(3px);
  }
  .tl-card:hover ~ .tl-icon-col .tl-dot,
  .tl-entry:hover .tl-dot {
    transform: scale(1.1);
    border-color: var(--border-hi);
  }

  .tl-card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 6px;
  }
  .tl-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--text-hi);
    letter-spacing: -0.01em;
    line-height: 1.2;
  }
  .tl-badge {
    font-size: 0.68rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    padding: 3px 10px;
    border-radius: 999px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    flex-shrink: 0;
  }
  .tl-badge.call  { background: rgba(232,121,160,0.15); color: #e879a0; border: 1px solid rgba(232,121,160,0.25); }
  .tl-badge.text  { background: rgba(168,85,247,0.15); color: #c084fc; border: 1px solid rgba(168,85,247,0.25); }
  .tl-badge.video { background: rgba(59,130,246,0.15); color: #93c5fd; border: 1px solid rgba(59,130,246,0.25); }

  .tl-meta {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 0.78rem;
    color: var(--text-lo);
    margin-top: 2px;
  }
  .tl-meta-item {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .tl-note {
    font-size: 0.82rem;
    color: var(--text-lo);
    margin-top: 10px;
    line-height: 1.55;
    font-style: italic;
    border-top: 1px solid var(--border);
    padding-top: 10px;
  }

  /* ── date group separator ── */
  .tl-date-group {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-lo);
    padding: 6px 0 14px 66px;
    font-family: 'Inter', sans-serif;
  }

  /* ── no results state (inline) ── */
  .tl-no-results {
    text-align: center;
    padding: 64px 24px;
    color: var(--text-lo);
  }
  .tl-no-results .nr-icon { font-size: 2.4rem; margin-bottom: 12px; }
  .tl-no-results p { font-size: 0.88rem; line-height: 1.6; }
  .tl-no-results strong { color: var(--text-mid); font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; display: block; margin-bottom: 4px; }

  /* ── responsive ── */
  @media (max-width: 600px) {
    .tl-root { padding: 32px 16px 60px; }
    .tl-list::before { left: 19px; }
    .tl-dot { width: 38px; height: 38px; font-size: 0.95rem; }
    .tl-controls { gap: 10px; }
    .tl-card { padding: 13px 15px; }
  }
`;

// ── Data ──────────────────────────────────────────────────────────────────
const MOCK_ENTRIES = [
  {
    id: 1,
    type: "call",
    friend: "Aisha Rahman",
    title: "Call with Aisha",
    date: "2026-04-28",
    time: "3:15 PM",
    duration: "22 min",
    note: "Caught up about her new product launch. She's stressed but excited.",
  },
  {
    id: 2,
    type: "text",
    friend: "Marcus Webb",
    title: "Text with Marcus",
    date: "2026-04-27",
    time: "11:40 AM",
    note: "Shared the hiking trail photos. He wants to plan a trip next month.",
  },
  {
    id: 3,
    type: "video",
    friend: "Priya Nair",
    title: "Video with Priya",
    date: "2026-04-25",
    time: "7:00 PM",
    duration: "45 min",
    note: "Long overdue catch-up. She's moving to a new city — big changes!",
  },
  {
    id: 4,
    type: "call",
    friend: "Jordan Ellis",
    title: "Call with Jordan",
    date: "2026-04-25",
    time: "1:20 PM",
    duration: "8 min",
  },
  {
    id: 5,
    type: "text",
    friend: "Sofia Mendes",
    title: "Text with Sofia",
    date: "2026-04-22",
    time: "9:05 AM",
    note: "Birthday reminder sent. She replied with a sweet voice note.",
  },
  {
    id: 6,
    type: "video",
    friend: "Daniel Okafor",
    title: "Video with Daniel",
    date: "2026-04-19",
    time: "8:30 PM",
    duration: "1 hr 10 min",
    note: "Deep talk about where we want to be in five years. Really grounding.",
  },
  {
    id: 7,
    type: "call",
    friend: "Lily Chen",
    title: "Call with Lily",
    date: "2026-04-18",
    time: "2:45 PM",
    duration: "14 min",
  },
  {
    id: 8,
    type: "text",
    friend: "Tariq Hassan",
    title: "Text with Tariq",
    date: "2026-04-15",
    time: "6:00 PM",
    note: "Sent him the article about architecture in Lagos. He loved it.",
  },
  {
    id: 9,
    type: "call",
    friend: "Nina Kovacs",
    title: "Call with Nina",
    date: "2026-04-12",
    time: "10:15 AM",
    duration: "31 min",
    note: "She needed advice on a tricky work situation. Good to be there for her.",
  },
  {
    id: 10,
    type: "video",
    friend: "Ryan Gallagher",
    title: "Video with Ryan",
    date: "2026-04-10",
    time: "5:00 PM",
    duration: "28 min",
  },
  {
    id: 11,
    type: "text",
    friend: "Aisha Rahman",
    title: "Text with Aisha",
    date: "2026-04-08",
    time: "12:30 PM",
    note: "Quick check-in before her big presentation.",
  },
  {
    id: 12,
    type: "call",
    friend: "Marcus Webb",
    title: "Call with Marcus",
    date: "2026-04-03",
    time: "4:00 PM",
    duration: "19 min",
  },
];

const TYPE_ICON = { call: "📞", text: "💬", video: "🎥" };
const TYPE_LABEL = { call: "Call", text: "Text", video: "Video" };

function formatDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function groupByDate(entries) {
  const groups = {};
  entries.forEach((e) => {
    if (!groups[e.date]) groups[e.date] = [];
    groups[e.date].push(e);
  });
  return groups;
}
const TimelineHas = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("newest");

  const filtered = useMemo(() => {
    let list = [...MOCK_ENTRIES];

    // type filter
    if (filter !== "all") list = list.filter((e) => e.type === filter);

    // search
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (e) =>
          e.friend.toLowerCase().includes(q) ||
          e.type.toLowerCase().includes(q) ||
          e.title.toLowerCase().includes(q),
      );
    }

    // sort
    list.sort((a, b) => {
      const diff = new Date(b.date) - new Date(a.date);
      return sort === "newest" ? diff : -diff;
    });

    return list;
  }, [search, filter, sort]);

  const groups = groupByDate(filtered);
  const sortedDates = Object.keys(groups).sort((a, b) =>
    sort === "newest" ? new Date(b) - new Date(a) : new Date(a) - new Date(b),
  );

  return (
    <>
      <style>{style}</style>
      <div className="tl-root">
        {/* orbs */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="tl-inner">
          {/* heading */}
          <h1 className="tl-heading">
            Interaction <span>Timeline</span>
          </h1>
          <p className="tl-sub">
            Every conversation, every moment — beautifully remembered.
          </p>
          <div className="tl-rule" />

          {/* controls */}
          <div className="tl-controls">
            {/* search */}
            <div className="tl-search-wrap">
              <span className="tl-search-icon">🔍</span>
              <input
                className="tl-search"
                type="text"
                placeholder="Search by friend or type…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* filter pills */}
            <div className="tl-filters">
              {["all", "call", "text", "video"].map((f) => (
                <button
                  key={f}
                  className={`tl-pill${filter === f ? " active" : ""}`}
                  onClick={() => setFilter(f)}
                >
                  {f === "all" ? "All" : `${TYPE_ICON[f]} ${TYPE_LABEL[f]}`}
                </button>
              ))}
            </div>

            {/* sort */}
            <select
              className="tl-sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="newest">↓ Newest First</option>
              <option value="oldest">↑ Oldest First</option>
            </select>
          </div>

          {/* count */}
          <p className="tl-count">
            Showing <strong>{filtered.length}</strong> interaction
            {filtered.length !== 1 ? "s" : ""}
          </p>

          {/* timeline */}
          {filtered.length === 0 ? (
            <div className="tl-no-results">
              <div className="nr-icon">🔎</div>
              <strong>No results found</strong>
              <p>
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
            </div>
          ) : (
            <div className="tl-list">
              {sortedDates.map((date) => (
                <div key={date}>
                  <div className="tl-date-group">{formatDate(date)}</div>
                  {groups[date].map((entry, i) => (
                    <div
                      className="tl-entry"
                      key={entry.id}
                      style={{ animationDelay: `${i * 0.07}s` }}
                    >
                      <div className="tl-icon-col">
                        <div className={`tl-dot ${entry.type}`}>
                          {TYPE_ICON[entry.type]}
                        </div>
                      </div>
                      <div className="tl-card">
                        <div className="tl-card-top">
                          <div className="tl-title">{entry.title}</div>
                          <span className={`tl-badge ${entry.type}`}>
                            {TYPE_LABEL[entry.type]}
                          </span>
                        </div>
                        <div className="tl-meta">
                          <span className="tl-meta-item">🕐 {entry.time}</span>
                          {entry.duration && (
                            <span className="tl-meta-item">
                              ⏱ {entry.duration}
                            </span>
                          )}
                          <span className="tl-meta-item">
                            👤 {entry.friend}
                          </span>
                        </div>
                        {entry.note && (
                          <p className="tl-note">"{entry.note}"</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TimelineHas;
