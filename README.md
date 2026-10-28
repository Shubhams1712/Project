# ThinkBeforeYouShare

> A clean, modern, fully responsive public-awareness website to help ordinary people recognise fake news, verify online claims, and stop the spread of misinformation on social media and chat apps.

## Features
- **3 Simple Warning Signs:** Key red flags with contextual examples and guidance.
- **5-Step Verification Checklist:** Interactive step-by-step verification protocol with real-time progress tracking.
- **Interactive 5-Question Quiz:** Fast, accessible multiple-choice quiz with immediate feedback and scoring.
- **Clean Responsive Design:** Built mobile-first with Tailwind CSS, accessible typography, and smooth scrolling.
- **Zero API Keys / No Backend Required:** Pure static React + Vite app ready to deploy anywhere.

---

## Getting Started Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
```
The optimized static build will be generated in the `dist/` directory.

---

## Deploy to Vercel

### Method A: Deploy via GitHub
1. Create a new repository on GitHub and push these files.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Select your repository and click **Deploy**. Vercel will automatically detect Vite and configure the build settings.

### Method B: Deploy using Vercel CLI
```bash
npm i -g vercel
vercel
```
Follow the prompts in your terminal to deploy immediately.
