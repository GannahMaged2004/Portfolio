# Gannah Eltonsy — One-Page Portfolio (React + Vite + Tailwind)

A clean, responsive one-page portfolio (my portifolio) built with **Vite + React + TailwindCSS**.  
Includes a sticky navbar with smooth scrolling and mobile dropdown, About, Skills (with icons), Projects (live + repo links), and a Contact form with client-side validation — all themed black + yellow.

## ✨ Features

- **React + Vite** (fast dev server & optimized build)
- **TailwindCSS** styling (black background + yellow accents)
- **Sticky Navbar** with section highlighting + **mobile dropdown**
- **Smooth scroll** to sections
- **About** (name, role, short bio)
- **Skills** as styled badges with **icons**
- **Projects** grid with **clickable cards**, **Live** and **GitHub** buttons
- **Contact form** with JS validation (name/email/message)
- **Responsive** on mobile, tablet, desktop

---

## 🗂 Project Structure
<img width="727" height="1020" alt="image" src="https://github.com/user-attachments/assets/8b7e19a5-64f1-4514-ba22-4186c57911c9" />

## 🗂Installments
creating the app: create vite@latest
projectname: bonus  (React JavaScript) => cd bonus
install: npm install 
npm install react-icons
installing tailwind: npm install tailwindcss @tailwindcss/vite
Vite Config:
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [ react (),
    tailwindcss(),
  ],
})
index.css: @import "tailwindcss";
running the dev: npm run dev

## Deployment

Github: create this repo
git init
git config-global user.name "my username"
git config-global user.email "my email"
git remote add origin "this repo's http"
git add . 
git commit -m "__"
git push origin

Vercel: Deploying this project 

