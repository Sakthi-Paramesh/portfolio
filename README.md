<div align="center">

# ✨ Sakthi Paramesh B — Premium AI Portfolio

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Live-00CFFF?style=for-the-badge&logo=vercel&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white)

A **dark futuristic, premium animated personal portfolio** website built for Sakthi Paramesh B — CSE student, AI Enthusiast, Full Stack Developer & Java Spring Boot Developer.

> Designed with Apple + Tesla + Framer-level aesthetics 🚀

</div>

---

## 🖥️ Live Preview

```
http://localhost:5173
```

> After deployment on Vercel, replace with your production URL.

---

## 🎨 Features

| Section | Highlights |
|---|---|
| 🎬 **Loading Screen** | SVG logo draw animation, 0→100% progress bar, blur fade exit |
| 🖱️ **Custom Cursor** | Magnetic hover, glow, scale-on-click, disabled on mobile |
| 🧭 **Navbar** | Glassmorphism blur, hides on scroll-down, shows on scroll-up, active link highlight |
| 🦸 **Hero** | Canvas particle system + mouse parallax, typing animation (6 roles), floating profile photo with rotating gradient ring, aurora blobs |
| 👤 **About** | Bio cards, education, career objective, animated vertical timeline |
| 🛠️ **Skills** | Category tabs (5), animated gradient progress bars, icons, in-viewport trigger |
| 💼 **Projects** | 3D mouse-tilt effect, glassmorphism cards, CSS shine, glow, lazy images |
| 🏢 **Experience** | Alternating left/right timeline, scroll-triggered entrance animations |
| 🏆 **Certifications** | Hover lift + rotate, CSS glare shine animation, badge chips |
| 📊 **Stats** | Smooth count-up animations on viewport entry |
| 📄 **Resume** | Floating icon, view & download buttons |
| 📬 **Contact** | Validated form, success toast, social icon grid with color hover glow |
| 🦶 **Footer** | Logo, social icons, gradient top-line, back-to-top button |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- **Node.js** >= 18 — [nodejs.org](https://nodejs.org)
- **npm** >= 9 (bundled with Node)

Verify your versions:

```bash
node -v    # should be >= 18
npm -v     # should be >= 9
```

---

### Run Locally (Development)

```bash
# 1. Navigate to the project folder
cd "portfolio sak"

# 2. Install dependencies (only needed once)
npm install

# 3. Start the dev server with hot-reload
npm run dev
```

Open your browser at -> **http://localhost:5173**

---

### Production Build

```bash
# Compile and optimise for production
npm run build

# Preview the production build locally
npm run preview
```

Output goes to the `dist/` folder.

---

### Lint

```bash
npm run lint
```

---

## 📁 Project Structure

```
portfolio sak/
│
├── public/
│   ├── profile.png              <- Profile photo (replace with your own)
│   ├── proj-humanease.png       <- Project preview images
│   ├── proj-medicine.png
│   ├── proj-travel.png
│   └── proj-portfolio.png
│
├── src/
│   ├── components/
│   │   ├── Cursor/              <- Custom magnetic cursor
│   │   ├── Loader/              <- Premium loading screen
│   │   ├── Navbar/              <- Sticky glass navbar
│   │   ├── Hero/                <- Full-screen hero + particles
│   │   ├── About/               <- Bio + animated timeline
│   │   ├── Skills/              <- Tabbed skill bars
│   │   ├── Projects/            <- 3D tilt project cards
│   │   ├── Experience/          <- Internship timeline
│   │   ├── Certifications/      <- Certificate cards
│   │   ├── Stats/               <- Count-up stat counters
│   │   ├── Resume/              <- Resume card
│   │   ├── Contact/             <- Form + social links
│   │   └── Footer/              <- Minimal footer
│   │
│   ├── hooks/
│   │   └── usePortfolio.js      <- All custom React hooks
│   │
│   ├── utils/
│   │   └── data.js              <- EDIT THIS for your personal info
│   │
│   ├── App.jsx                  <- Root component
│   ├── main.jsx                 <- Entry point
│   └── index.css                <- Global styles + animations
│
├── index.html                   <- SEO meta tags
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## ✏️ Personalising the Portfolio

All personal content lives in **one file**:

```
src/utils/data.js
```

### 1. Update Your Info

```js
export const PERSONAL = {
  name: 'Sakthi Paramesh B',
  title: 'AI & Full Stack Developer',
  email: 'your@email.com',                    // <- your email
  github: 'https://github.com/YOU',           // <- your GitHub URL
  linkedin: 'https://linkedin.com/in/YOU',    // <- your LinkedIn URL
  instagram: 'https://instagram.com/YOU',     // <- your Instagram
  resumeUrl: 'https://drive.google.com/...',  // <- Google Drive PDF link
};
```

### 2. Add Real Project Links

```js
export const PROJECTS = [
  {
    title: 'HumanEase AI',
    github: 'https://github.com/YOU/humanease-ai',
    live:   'https://humanease.vercel.app',
    // ... rest of fields
  },
];
```

### 3. Replace Your Profile Photo

Drop your photo at:

```
public/profile.png
```

Any square or portrait JPG/PNG works. It will fill the circular frame automatically.

---

## 🌐 Deploy to Vercel (Free)

```bash
# Option 1: Vercel CLI
npm install -g vercel
vercel --prod

# Option 2: Connect GitHub repo
# Go to https://vercel.com → New Project → Import your GitHub repo
# Vercel auto-detects Vite and deploys on every push
```

**Build settings for Vercel:**
| Setting | Value |
|---|---|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |

---

## 📬 Enable Real Contact Form (EmailJS)

The contact form currently uses a mock delay. To enable real email sending:

**Step 1** — Create a free account at [emailjs.com](https://www.emailjs.com)

**Step 2** — Create a Service + Template. Note your **Service ID**, **Template ID**, and **Public Key**.

**Step 3** — Open `src/components/Contact/Contact.jsx` and replace the mock block with:

```js
import emailjs from '@emailjs/browser';

// Inside handleSubmit, after validation passes:
setSending(true);
emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {
    from_name:  form.name,
    from_email: form.email,
    subject:    form.subject,
    message:    form.message,
  },
  'YOUR_PUBLIC_KEY'
).then(() => {
  setSending(false);
  setSent(true);
  setForm({ name: '', email: '', subject: '', message: '' });
}).catch(() => {
  setSending(false);
  alert('Failed to send. Please try again.');
});
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | 19 | UI framework |
| **Vite** | 8 | Build tool & dev server |
| **Tailwind CSS** | 3 | Utility-first styling |
| **Framer Motion** | 12 | Component animations |
| **GSAP** | 3 | Advanced scroll animations |
| **React Icons** | 5 | Icon library |
| **React Scroll** | 1.9 | Smooth scroll navigation |
| **React Type Animation** | 3.2 | Typing text effect |
| **@emailjs/browser** | 4 | Contact form emails |

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#0A0A0A` |
| Primary — Neon Blue | `#00CFFF` |
| Secondary — Purple | `#7C3AED` |
| Glass bg | `rgba(255,255,255,0.05)` |
| Glass border | `rgba(255,255,255,0.10)` |
| Primary Font | Inter (Google Fonts) |
| Mono Font | JetBrains Mono |

---

## 🐛 Troubleshooting

**Port already in use:**
```bash
npx vite --port 3000
```

**Cursor not visible:**
The cursor is hidden on touch/mobile devices by design. Use a desktop browser to see it.

**Build fails:**
```bash
rm -rf node_modules
npm install
npm run build
```

**Images not loading:**
Make sure all images are placed in the `public/` folder and referenced as `/filename.png` (absolute from public root).

---

## 📝 License

MIT License — free to use, customise, and deploy.

---

<div align="center">

Made with ❤️ by **Sakthi Paramesh B**

⭐ Star this repo if it helped you!

</div>
