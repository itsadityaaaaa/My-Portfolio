# Portfolio

This is a full-stack portfolio web application built with React, Express, TypeScript, Vite, and Tailwind CSS. It features a modern UI, contact form, and server-side API.

## Features
- Modern React frontend (Vite, TypeScript, Tailwind CSS)
- Express.js backend API
- Contact form with validation
- Project, skills, and experience sections
- Fully responsive design

## Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:5000](http://localhost:5000).

## Project Structure

- `client/` - React frontend (entry: `client/src/main.tsx`)
- `server/` - Express backend (entry: `server/index.ts`)
- `shared/` - Shared code (schemas, types)
- `attached_assets/` - Static assets (PDFs, images)


## Deploying Only the Frontend to GitHub Pages

GitHub Pages can only host static frontend files. To deploy:

1. **Build the frontend:**
   ```bash
   npm run build
   ```
   The static files will be in `dist/public`.

2. **Copy the contents of `dist/public` to a branch named `gh-pages`** (or use a tool like the `gh-pages` npm package).

3. **Set the GitHub Pages source** to the `gh-pages` branch in your repository settings.

4. **If you use client-side routing,** add this to `client/index.html` inside `<head>`:
   ```html
   <base href="/YOUR-REPO-NAME/" />
   ```
   Replace `YOUR-REPO-NAME` with your actual repo name.

**Note:** The contact form and API features will NOT work unless you deploy the backend separately and update the frontend to use the deployed API URL.

For full instructions, see `DEPLOY_FRONTEND_GITHUB_PAGES.md`.

## License
MIT