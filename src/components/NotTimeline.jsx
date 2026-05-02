import React from "react";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Inter:wght@400;500;600&display=swap');

  :root {
    --bg:        #0d0618;
    --card:      rgba(255,255,255,0.05);
    --accent1:   #e879a0;
    --accent2:   #be185d;
    --purple:    #8b3fb4;
    --text-hi:   #ffffff;
    --text-mid:  rgba(253,232,244,0.80);
    --text-lo:   rgba(253,232,244,0.45);
    --border:    rgba(244,114,182,0.13);
    --border-hi: rgba(244,114,182,0.28);
  }

  // * { box-sizing: border-box; margin: 0; padding: 0; }

  .nt-root {
    min-height: 100vh;
    background: var(--bg);
    font-family: 'Inter', sans-serif;
    color: var(--text-mid);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 48px 24px 80px;
    position: relative;
    overflow: hidden;
  }

  /* ── orbs ── */
  .nt-orb {
    position: fixed;
    border-radius: 50%;
    filter: blur(90px);
    pointer-events: none;
    z-index: 0;
    animation: ntDrift 14s ease-in-out infinite alternate;
  }
  .nt-orb-1 { width: 500px; height: 500px; background: rgba(139,63,180,0.20); top: -100px; left: -150px; animation-delay: 0s; }
  .nt-orb-2 { width: 350px; height: 350px; background: rgba(232,121,160,0.13); bottom: 0; right: -80px; animation-delay: -6s; }
  .nt-orb-3 { width: 220px; height: 220px; background: rgba(168,85,247,0.09); top: 40%; left: 60%; animation-delay: -11s; }

  @keyframes ntDrift {
    from { transform: translate(0, 0) scale(1); }
    to   { transform: translate(28px, 20px) scale(1.07); }
  }

  /* ── inner ── */
  .nt-inner {
    position: relative;
    z-index: 1;
    max-width: 860px;
    width: 100%;
  }

  /* ── page heading ── */
  .nt-heading {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 700;
    color: var(--text-hi);
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin-bottom: 4px;
  }
  .nt-heading span {
    background: linear-gradient(90deg, var(--accent1), var(--accent2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .nt-sub {
    font-size: 0.85rem;
    color: var(--text-lo);
    margin-bottom: 32px;
    letter-spacing: 0.02em;
  }
  .nt-rule {
    height: 1px;
    background: linear-gradient(90deg, var(--accent1), var(--purple), transparent);
    margin-bottom: 32px;
    opacity: 0.45;
  }

  /* ── disabled controls (greyed) ── */
  .nt-controls {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 32px;
    align-items: center;
    opacity: 0.30;
    pointer-events: none;
    user-select: none;
  }
  .nt-search-wrap { position: relative; flex: 1; min-width: 200px; }
  .nt-search-icon { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); font-size: 0.9rem; }
  .nt-search {
    width: 100%;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 10px 14px 10px 38px;
    color: var(--text-mid);
    font-family: 'Inter', sans-serif;
    font-size: 0.85rem;
    backdrop-filter: blur(20px);
  }
  .nt-search::placeholder { color: var(--text-lo); }
  .nt-filters { display: flex; gap: 8px; flex-wrap: wrap; }
  .nt-pill {
    padding: 7px 16px;
    border-radius: 999px;
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    border: 1px solid var(--border);
    background: var(--card);
    color: var(--text-lo);
    font-family: 'Inter', sans-serif;
  }
  .nt-sort {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 9px 32px 9px 14px;
    color: var(--text-mid);
    font-family: 'Inter', sans-serif;
    font-size: 0.82rem;
  }

  /* ── empty illustration area ── */
  .nt-empty-wrap {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 24px 16px 40px;
    animation: floatUp 0.6s ease both;
  }

  @keyframes floatUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* SVG illustration container */
  .nt-illustration {
    width: 220px;
    height: 220px;
    position: relative;
    margin-bottom: 36px;
  }

  /* outer glow ring */
  .nt-ring {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 1px solid rgba(232,121,160,0.20);
    position: absolute;
    top: 10px; left: 10px;
    animation: ringPulse 3.5s ease-in-out infinite;
  }
  .nt-ring-2 {
    width: 160px;
    height: 160px;
    top: 30px; left: 30px;
    border-color: rgba(139,63,180,0.25);
    animation-delay: -1.2s;
    animation-duration: 4s;
  }
  @keyframes ringPulse {
    0%, 100% { transform: scale(1); opacity: 0.6; }
    50%       { transform: scale(1.04); opacity: 1; }
  }

  /* icon in center */
  .nt-center-icon {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, rgba(232,121,160,0.14), rgba(139,63,180,0.18));
    border: 1px solid rgba(232,121,160,0.22);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    backdrop-filter: blur(20px);
    animation: heartbeat 2.8s ease-in-out infinite;
  }
  @keyframes heartbeat {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    15%       { transform: translate(-50%, -50%) scale(1.07); }
    30%       { transform: translate(-50%, -50%) scale(1); }
    45%       { transform: translate(-50%, -50%) scale(1.04); }
  }

  /* floating mini icons */
  .nt-float-icon {
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--card);
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.95rem;
    backdrop-filter: blur(16px);
    animation: iconFloat 4s ease-in-out infinite alternate;
  }
  .nt-fi-1 { top: 12px; left: 18px;  animation-delay: 0s; }
  .nt-fi-2 { top: 12px; right: 18px; animation-delay: -1.5s; }
  .nt-fi-3 { bottom: 18px; left: 30px; animation-delay: -2.8s; }
  .nt-fi-4 { bottom: 18px; right: 30px; animation-delay: -0.8s; }

  @keyframes iconFloat {
    from { transform: translateY(0px); }
    to   { transform: translateY(-8px); }
  }

  /* empty text */
  .nt-empty-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.5rem, 4vw, 2rem);
    font-weight: 700;
    color: var(--text-hi);
    margin-bottom: 12px;
    letter-spacing: -0.01em;
  }
  .nt-empty-body {
    font-size: 0.88rem;
    color: var(--text-lo);
    max-width: 380px;
    line-height: 1.7;
    margin-bottom: 32px;
  }
  .nt-empty-body strong {
    color: var(--accent1);
    font-weight: 600;
  }

  /* CTA button */
  .nt-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 28px;
    border-radius: 999px;
    background: linear-gradient(135deg, var(--accent1), var(--accent2));
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 0.88rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
    outline: none;
    letter-spacing: 0.03em;
    box-shadow: 0 0 28px rgba(232,121,160,0.30);
    animation: softPulse 3s ease-in-out infinite;
    transition: transform 0.2s, box-shadow 0.2s;
    margin-bottom: 48px;
  }
  .nt-cta:hover {
    transform: scale(1.04);
    box-shadow: 0 0 40px rgba(232,121,160,0.45);
  }
  @keyframes softPulse {
    0%, 100% { box-shadow: 0 0 28px rgba(232,121,160,0.30); }
    50%       { box-shadow: 0 0 44px rgba(232,121,160,0.50); }
  }

  /* ── tips row ── */
  .nt-tips {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 680px;
    width: 100%;
  }
  .nt-tip {
    flex: 1;
    min-width: 170px;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 18px 16px;
    backdrop-filter: blur(16px);
    text-align: left;
    transition: border-color 0.2s, transform 0.2s;
  }
  .nt-tip:hover { border-color: var(--border-hi); transform: translateY(-3px); }
  .nt-tip-icon { font-size: 1.3rem; margin-bottom: 10px; display: block; }
  .nt-tip-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-hi);
    margin-bottom: 5px;
  }
  .nt-tip-body {
    font-size: 0.78rem;
    color: var(--text-lo);
    line-height: 1.55;
  }

  /* ── responsive ── */
  @media (max-width: 600px) {
    .nt-root { padding: 32px 16px 60px; }
    .nt-tips { gap: 12px; }
    .nt-tip { min-width: 140px; }
    .nt-illustration { width: 180px; height: 180px; }
    .nt-ring { width: 160px; height: 160px; top: 10px; left: 10px; }
    .nt-ring-2 { width: 120px; height: 120px; top: 30px; left: 30px; }
  }
`;

const NotTimeline = () => {
  return (
    <>
      <style>{style}</style>
      <div className="nt-root">
        {/* orbs */}
        <div className="nt-orb nt-orb-1" />
        <div className="nt-orb nt-orb-2" />
        <div className="nt-orb nt-orb-3" />

        <div className="nt-inner">
          {/* heading */}
          <h1 className="nt-heading">
            Interaction <span>Timeline</span>
          </h1>
          <p className="nt-sub">
            Every conversation, every moment — beautifully remembered.
          </p>
          <div className="nt-rule" />

          {/* disabled controls (visual hint that the page has them) */}
          <div className="nt-controls">
            <div className="nt-search-wrap">
              <span className="nt-search-icon">🔍</span>
              <input
                className="nt-search"
                placeholder="Search by friend or type…"
                readOnly
              />
            </div>
            <div className="nt-filters">
              {["All", "📞 Call", "💬 Text", "🎥 Video"].map((l) => (
                <div key={l} className="nt-pill">
                  {l}
                </div>
              ))}
            </div>
            <div className="nt-sort">↓ Newest First</div>
          </div>

          {/* empty state */}
          <div className="nt-empty-wrap">
            {/* illustration */}
            <div className="nt-illustration">
              <div className="nt-ring" />
              <div className="nt-ring nt-ring-2" />
              <div className="nt-float-icon nt-fi-1">📞</div>
              <div className="nt-float-icon nt-fi-2">🎥</div>
              <div className="nt-float-icon nt-fi-3">💬</div>
              <div className="nt-float-icon nt-fi-4">❤️</div>
              <div className="nt-center-icon">✨</div>
            </div>

            <h2 className="nt-empty-title">No interactions yet</h2>
            <p className="nt-empty-body">
              Your timeline will bloom here once you log your first interaction.
              <br />
              Head to a <strong>friend's detail page</strong> and record a call,
              text, or video catch‑up — every connection counts.
            </p>

            <button className="nt-cta">♥ Log Your First Interaction</button>

            {/* tips */}
            <div className="nt-tips">
              <div className="nt-tip">
                <span className="nt-tip-icon">📞</span>
                <div className="nt-tip-title">Log a Call</div>
                <div className="nt-tip-body">
                  Visit any friend and tap "Call" in Quick Check-In to record
                  the conversation.
                </div>
              </div>
              <div className="nt-tip">
                <span className="nt-tip-icon">💬</span>
                <div className="nt-tip-title">Log a Text</div>
                <div className="nt-tip-body">
                  Sent a message? Mark it as a text interaction to keep the
                  streak alive.
                </div>
              </div>
              <div className="nt-tip">
                <span className="nt-tip-icon">🎥</span>
                <div className="nt-tip-title">Log a Video</div>
                <div className="nt-tip-body">
                  Face-to-face calls matter most — log them so you never lose
                  track.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotTimeline;
