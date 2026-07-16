# Project Guide

This document contains everything you need to know about the technology stack, how to run the project locally, and how to deploy it to the internet.

## 🛠️ Technology Stack
This portfolio website is built using the following modern web technologies:
* **React.js** - The core JavaScript library used for building the user interface.
* **Vite** - The blazing fast frontend build tool and local server.
* **Tailwind CSS** - The utility-first CSS framework used for styling and responsive design.
* **Framer Motion** - The animation library used for the smooth scrolling effects, typing animations, and page transitions.
* **JavaScript (ES6+)** - The primary programming language used for all logic.

---

## 💻 How to Run Locally

To run this project on your own computer, follow these simple steps:

1. **Open your terminal** and navigate to the project folder.
2. **Install Dependencies:** Run the following command to download all required packages:
   ```bash
   npm install
   ```
3. **Start the Development Server:** Run the following command to start the website locally:
   ```bash
   npm run dev
   ```
4. **Open in Browser:** Open your web browser and go to the link provided in your terminal (usually `http://localhost:5173/` or `http://localhost:5175/`).

---

## 🚀 How to Deploy Step-by-Step

You can easily deploy this website for free so anyone on the internet can see it. We recommend using **Vercel** or **Netlify**.

### Option A: Deploying on Vercel (Recommended)
1. **Push to GitHub:** Make sure your project code is uploaded to a GitHub repository.
2. **Sign up / Log in:** Go to [Vercel.com](https://vercel.com/) and log in using your GitHub account.
3. **Import Project:** From your Vercel dashboard, click the **"Add New"** button and select **"Project"**.
4. **Select Repository:** Find your portfolio repository in the list and click **"Import"**.
5. **Configure Build:**
   * **Framework Preset:** Vercel should automatically detect **Vite**.
   * **Build Command:** `npm run build`
   * **Output Directory:** `dist`
6. **Deploy:** Click the **"Deploy"** button. Vercel will build your site and give you a live URL in about a minute!

### Option B: Deploying on Netlify
1. **Push to GitHub:** Make sure your project code is uploaded to a GitHub repository.
2. **Sign up / Log in:** Go to [Netlify.com](https://www.netlify.com/) and log in using your GitHub account.
3. **Add New Site:** From your dashboard, click **"Add new site"** and choose **"Import an existing project"**.
4. **Connect to GitHub:** Click the GitHub icon and authorize Netlify. Select your portfolio repository.
5. **Configure Build:**
   * **Build command:** `npm run build`
   * **Publish directory:** `dist`
6. **Deploy:** Click the **"Deploy site"** button. Netlify will build your project and provide you with a live, shareable URL!
