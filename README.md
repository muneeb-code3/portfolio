<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=MUNEEB%20GULISTAN&fontSize=50&fontAlignY=35&desc=Web%20Developer%20%7C%20AI%20Enthusiast%20%7C%20Tech%20Innovator&descAlignY=60&descSize=18&fontColor=fff&animation=fadeIn" width="100%"/>

<br/>

<a href="https://github.com/Muneebgulistan/portfolio">
  <img src="https://img.shields.io/badge/Portfolio-Live-c88a2a?style=for-the-badge&logo=vercel&logoColor=white" />
</a>
&nbsp;
<a href="https://www.linkedin.com/in/muneeb-gulistan/">
  <img src="https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>
&nbsp;
<a href="https://www.instagram.com/muneebgulistan/">
  <img src="https://img.shields.io/badge/Instagram-Follow-E1306C?style=for-the-badge&logo=instagram&logoColor=white" />
</a>
&nbsp;
<a href="https://github.com/muneeb-code3">
  <img src="https://img.shields.io/badge/GitHub-muneeb--code3-181717?style=for-the-badge&logo=github&logoColor=white" />
</a>

<br/><br/>

<img src="https://readme-typing-svg.demolab.com?font=Syne&weight=700&size=22&pause=1000&color=C88A2A&center=true&vCenter=true&width=600&lines=Building+the+Future+with+Code+%F0%9F%9A%80;AI+%2B+Web+Development+Enthusiast+%F0%9F%A4%96;Founder+%40+ARMAAS+Solutions+%26+Feedify;Always+Learning%2C+Always+Building+%E2%9C%A8" alt="Typing SVG" />

</div>

---

## 🌌 About This Portfolio

This is my **personal developer portfolio** — a modern, premium-grade website built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. The design features a stunning **glassmorphism** aesthetic with animated glow blobs, particle effects, and smooth micro-animations throughout.

> 🎨 **Theme:** Dark Glassmorphism · Gold & Violet accents · Cinematic animations

---

## ✨ Features

<table>
  <tr>
    <td>🎆 <b>Glassmorphism UI</b></td>
    <td>Frosted-glass panels, dynamic backdrop blur, gold shimmer borders</td>
  </tr>
  <tr>
    <td>🌊 <b>Particle System</b></td>
    <td>150 animated particles in gold/violet/white across the canvas</td>
  </tr>
  <tr>
    <td>🔮 <b>Glow Blobs</b></td>
    <td>5 slow-drifting radial glow blobs for a living background</td>
  </tr>
  <tr>
    <td>⚡ <b>Framer Motion</b></td>
    <td>Every section animates on scroll with staggered entrance effects</td>
  </tr>
  <tr>
    <td>📱 <b>Fully Responsive</b></td>
    <td>Mobile-first design, works on all screen sizes</td>
  </tr>
  <tr>
    <td>🧭 <b>Smooth Navigation</b></td>
    <td>Scroll-spy navbar with MG monogram logo and "Hire Me" CTA</td>
  </tr>
  <tr>
    <td>🎨 <b>Premium Typography</b></td>
    <td>Syne (headings) + DM Sans (body) from Google Fonts</td>
  </tr>
</table>

---

## 🖥️ Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | 🦸 **Hero** | Cinematic intro with photo frame, floating badge, stats & scroll indicator |
| 2 | 👤 **About** | Personal bio with animated info grid cards |
| 3 | 🛠️ **Skills** | Gradient icon cards for Development, AI Tools & Productivity |
| 4 | 💼 **Projects** | Frosted project cards with category pills and tech tags |
| 5 | 🚀 **Services** | Icon-forward service cards with color-coded accents |
| 6 | 🎓 **Education** | Animated timeline with pulse dots and gradient year badges |
| 7 | 🌐 **Experience** | Role cards with gradient icon bubbles and org details |
| 8 | 📬 **Contact** | Glass form, social links, and gradient CTA button |

---

## 🛠️ Tech Stack

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)

</div>

**Libraries used:**
- `framer-motion` — page & scroll animations
- `lucide-react` — icon library
- `react-icons` — extended icon pack (GitHub, LinkedIn, Instagram)
- `react-scroll` — smooth scroll-spy navigation
- `typewriter-effect` — animated typewriter text

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>= 18`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Muneebgulistan/portfolio.git

# Navigate to the project folder
cd portfolio

# Install dependencies
npm install

# Run the development server
npm run dev
```

Visit **[http://localhost:3000](http://localhost:3000)** in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css        # Design system, glassmorphism, animations
│   ├── layout.tsx         # Root layout with Google Fonts
│   └── page.tsx           # Main page assembly
│
├── components/
│   ├── Navbar.tsx          # Fixed glassmorphism navbar with MG logo
│   ├── ParticleBackground.tsx  # Canvas particle animation
│   └── sections/
│       ├── Hero.tsx        # Cinematic hero section
│       ├── About.tsx       # About + info grid
│       ├── Skills.tsx      # Skill category cards
│       ├── Projects.tsx    # Featured project cards
│       ├── Services.tsx    # Service offering cards
│       ├── Education.tsx   # Academic timeline
│       ├── Experience.tsx  # Experience role cards
│       └── Contact.tsx     # Contact form + social links
│
├── public/
│   └── muneeb-profile.jpg  # Profile photo
│
└── package.json
```

---

## 🎨 Design System

The entire portfolio is built on a consistent design token system:

| Token | Value | Usage |
|-------|-------|-------|
| `--accent-primary` | `#c88a2a` | Gold — primary CTA, borders |
| `--accent-hover` | `#e5a830` | Lighter gold on hover |
| `--accent-glow` | `#f5c96a` | Bright gold glow highlights |
| `--background` | `#04030a` | Deep space near-black |
| `--foreground` | `#eee8d8` | Warm off-white text |
| `--text-muted` | `#b0a07a` | Secondary text |
| `--glass-bg` | `rgba(14,12,28,0.55)` | Frosted panel backgrounds |

---

## 📬 Contact

<div align="center">

| Platform | Link |
|----------|------|
| 📧 Email | muneegulistan@gmail.com |
| 💼 LinkedIn | [linkedin.com/in/muneeb-gulistan](https://www.linkedin.com/in/muneeb-gulistan/) |
| 📸 Instagram | [@muneebgulistan](https://www.instagram.com/muneebgulistan/) |
| 💻 GitHub | [github.com/muneeb-code3](https://github.com/muneeb-code3) |

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=120&section=footer&animation=fadeIn" width="100%"/>

<p>
  <img src="https://img.shields.io/badge/Made%20with-%E2%9D%A4%EF%B8%8F-c88a2a?style=flat-square" />
  &nbsp;
  <img src="https://img.shields.io/badge/Built%20with-Next.js-000?style=flat-square&logo=nextdotjs" />
  &nbsp;
  <img src="https://img.shields.io/github/last-commit/Muneebgulistan/portfolio?style=flat-square&color=c88a2a" />
</p>

**⭐ If you find this portfolio inspiring, give it a star!**

</div>