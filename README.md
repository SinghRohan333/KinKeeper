<p align="center">
  <img src="https://github.com/SinghRohan333/KinKeeper/blob/main/public/keenkeeper_readme_preview.svg" alt="Preview Image" width="500">
</p>

<div align="center">

# KeenKeeper 💜

### _Your personal shelf of meaningful connections._

_Browse, tend, and nurture the relationships that matter most._

<br/>

[![React](https://img.shields.io/badge/React-v19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-v5-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)
[![Recharts](https://img.shields.io/badge/Recharts-v3-22b5bf?style=for-the-badge)](https://recharts.org/)
[![Vite](https://img.shields.io/badge/Vite-v8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

<br/>

🚀 **[Live Demo](#)** &nbsp;·&nbsp; 📂 **[GitHub Repository](https://github.com/SinghRohan333/KinKeeper)**

> ⚠️ _Live demo link will be updated after deployment._

</div>

---

## 📸 Preview

|         Home Dashboard          |            Friend Detail            |          Interaction Timeline           |       Friendship Analytics        |
| :-----------------------------: | :---------------------------------: | :-------------------------------------: | :-------------------------------: |
| ![Home](./screenshots/home.png) | ![Detail](./screenshots/detail.png) | ![Timeline](./screenshots/timeline.png) | ![Stats](./screenshots/stats.png) |

> Add your own screenshots to a `/screenshots` folder in the root after deployment.

---

## 🌟 About the Project

**KeenKeeper** is a personal relationship management dashboard that helps you stay intentional about the friendships that matter most. Life gets busy — people drift. KeenKeeper makes sure that doesn't happen quietly.

Add friends, set contact goals, track every call, text, and video catch-up, and see at a glance who needs your attention. Think of it as a **personal CRM for real life** — warm, purposeful, and beautifully designed.

---

## ✨ Key Features

### 👥 Smart Friend Dashboard

Manage all your friends in one place. Each friend card shows their photo, name, tags (e.g. _College_, _Work_, _Mentor_), days since last contact, and a color-coded status — **Overdue**, **Almost Due**, or **On-Track**. Summary stat cards at the top give you an instant snapshot of your relationship health.

### 📞 Quick Check-In & Interaction Logging

From any friend's detail page, log a **Call**, **Text**, or **Video** catch-up in one tap. The interaction is instantly timestamped and added to your global timeline, with a toast notification confirming the entry. Every connection counts.

### 📊 Friendship Analytics

A dedicated **Stats** page powered by **Recharts** visualizes how you connect. A donut chart breaks down all your interactions by type (Call / Text / Video), with individual count cards showing each as a percentage of your total activity.

---

## 🗂️ Pages Overview

| Page                 | Route          | Description                                                                 |
| -------------------- | -------------- | --------------------------------------------------------------------------- |
| 🏠 **Home**          | `/`            | Dashboard with friend cards, summary stats, and an "Add a Friend" CTA       |
| 👤 **Friend Detail** | `/friends/:id` | Profile with contact stats, relationship goal, and Quick Check-In buttons   |
| 📜 **Timeline**      | `/timeline`    | Chronological log of all interactions with search, filter, and sort options |
| 📊 **Stats**         | `/stats`       | Friendship Analytics with a Recharts donut chart by interaction type        |
| 🔍 **404**           | `*`            | Custom not-found page for any unknown route                                 |

---

## 🛠️ Tech Stack

| Technology            | Version | Purpose                                   |
| --------------------- | ------- | ----------------------------------------- |
| ⚛️ **React**          | v19     | Core UI library                           |
| 🔀 **React Router**   | v7      | Client-side routing & navigation          |
| 🎨 **Tailwind CSS**   | v4      | Utility-first styling & responsive layout |
| 🌼 **DaisyUI**        | v5      | Pre-built, themeable component library    |
| 📈 **Recharts**       | v3      | Donut/pie chart for the Analytics page    |
| 🔔 **React Toastify** | v11     | Toast notifications for user feedback     |
| 🖼️ **Lucide React**   | v1.12   | Clean, consistent icon set                |
| 🎭 **React Icons**    | v5      | Extended icon library                     |
| ⚡ **Vite**           | v8      | Lightning-fast build tool and dev server  |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm or yarn

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/SinghRohan333/KinKeeper.git
   cd KinKeeper
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```
KinKeeper/
├── public/
├── src/
│   ├── assets/             # Images, icons, and static files
│   ├── components/         # Shared/reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── FriendCard.jsx
│   │   └── ...
│   ├── data/
│   │   └── friends.json    # Static friend profile data
│   ├── pages/              # Top-level route pages
│   │   ├── Home.jsx
│   │   ├── FriendDetail.jsx
│   │   ├── Timeline.jsx
│   │   ├── Stats.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx             # Root component with route definitions
│   └── main.jsx            # Application entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 📋 Feature Checklist

- [x] Responsive Navbar with active link highlighting and icons
- [x] Hero/Banner section with summary stat cards (Total, On-Track, Need Attention, Interactions)
- [x] Friend cards with color-coded status (Overdue / Almost Due / On-Track)
- [x] 4-column responsive grid layout for friend cards
- [x] Friend Detail page with two-column layout
- [x] Stats cards (Days Since Contact, Goal, Next Due Date)
- [x] Relationship Goal card with edit button
- [x] Quick Check-In buttons (Call / Text / Video) that log to timeline
- [x] Toast notification on every interaction log
- [x] Global Interaction Timeline page
- [x] Timeline search by friend name or interaction type
- [x] Timeline filter by interaction type (All / Call / Text / Video)
- [x] Timeline sort by date (Newest First / Oldest First)
- [x] Friendship Analytics page with Recharts donut chart
- [x] Loading animation on Home page data fetch
- [x] Custom 404 Not Found page
- [x] Fully responsive design (mobile, tablet, desktop)
- [x] Footer with social links matching design

---

## 🌐 Deployment

This project is not yet deployed. It will be hosted on **Vercel / Netlify** soon.

🔗 Live URL: _Coming soon._

To ensure page reloads work correctly after deployment, add a `vercel.json` file at the root:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

For **Netlify**, add a `_redirects` file inside the `/public` folder:

```
/* /index.html 200
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](./LICENSE).

---

<div align="center">

Made with 💜 for meaningful connections.

**KeenKeeper** — _Friends to keep close in your life._

⭐ If you found this useful, give it a star on [GitHub](https://github.com/SinghRohan333/KinKeeper)!

</div>
