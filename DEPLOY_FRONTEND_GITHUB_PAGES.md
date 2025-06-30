# GitHub Pages Deployment Instructions for Frontend Only

This project is a full-stack app, but GitHub Pages can only host static frontend files. To deploy the React frontend:

## 1. Build the Frontend

From the project root, run:
```bash
npm run build
```
This will output static files to `dist/public`.

## 2. Prepare for GitHub Pages

- Copy the contents of `dist/public` to a new branch called `gh-pages` (or use a tool like `gh-pages` npm package).
- Set the repository's GitHub Pages source to the `gh-pages` branch (or `/root` if using the main branch).

## 3. Update React Router (if needed)
If you use client-side routing, add this to `client/index.html` inside `<head>`:
```html
<base href="/YOUR-REPO-NAME/" />
```
Replace `YOUR-REPO-NAME` with your actual repo name.

## 4. API/Contact Form
- The contact form and API features will NOT work unless you deploy the backend separately and update the frontend to use the deployed API URL.

## 5. Commit and Push
- Commit the built static files to the `gh-pages` branch.
- Push to GitHub.

---

For a fully working app (frontend + backend), use Vercel, Render, or similar.
