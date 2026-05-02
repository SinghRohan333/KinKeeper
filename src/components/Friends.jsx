import React, { use } from "react";
import Friend from "./Friend";

const Friends = ({ fetchFriendsData }) => {
  const friends = use(fetchFriendsData);
  console.log(friends);
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Inter:wght@400;500;600&display=swap');

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .friends-grid > * {
          animation: fadeSlideUp 0.5s both;
        }
        .friends-grid > *:nth-child(1)  { animation-delay: 0.05s; }
        .friends-grid > *:nth-child(2)  { animation-delay: 0.10s; }
        .friends-grid > *:nth-child(3)  { animation-delay: 0.15s; }
        .friends-grid > *:nth-child(4)  { animation-delay: 0.20s; }
        .friends-grid > *:nth-child(5)  { animation-delay: 0.25s; }
        .friends-grid > *:nth-child(6)  { animation-delay: 0.30s; }
        .friends-grid > *:nth-child(7)  { animation-delay: 0.35s; }
        .friends-grid > *:nth-child(8)  { animation-delay: 0.40s; }
        .friends-grid > *:nth-child(9)  { animation-delay: 0.45s; }
        .friends-grid > *:nth-child(10) { animation-delay: 0.50s; }
      `}</style>

      <section
        className="w-full min-h-screen px-5 sm:px-8 py-10"
        style={{ backgroundColor: "#0d0618" }}
      >
        {/* Subtle ambient orb */}
        <div
          className="fixed top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: 600,
            height: 300,
            background:
              "radial-gradient(ellipse, rgba(139,62,180,0.12) 0%, transparent 70%)",
            filter: "blur(48px)",
            zIndex: 0,
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Section heading */}
          <div className="mb-8">
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                color: "#fff",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Your Friends
            </h2>
            <div
              className="mt-2"
              style={{
                width: 48,
                height: 2,
                background: "linear-gradient(90deg, #f472b6, #8b3fb4)",
                borderRadius: 2,
              }}
            />
          </div>

          {/* Cards grid */}
          <div className="friends-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {friends.map((friend) => (
              <Friend key={friend.id} friend={friend}></Friend>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Friends;
