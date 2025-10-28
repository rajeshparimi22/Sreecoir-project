
# SreeCoir-style Website — Full Project Scaffold
This repository is a ready-to-run web project scaffold inspired by https://sreecoir.com/.
It includes:
- `frontend-static/` — Static HTML/CSS/JS version (good for GitHub Pages).
- `react-app/` — Simple React app (Vite style structure) to run locally or deploy.
- `backend/` — Node + Express server with a simple SQLite database for contact form.
- `database/` — SQL initialization script.
- `README.md`, `.gitignore`, and `LICENSE`.

**Important:** This project uses placeholder text and images. Replace content, images, and branding with your own assets before publishing.


---
## Quick local run (one-time prerequisites)
- Node.js (v16+ recommended)
- npm

## Run the static frontend
```bash
cd frontend-static
# open index.html in browser, or serve with a static server:
npx http-server -c-1 -p 8080
# then open http://localhost:8080
```

## Run the React app (development)
```bash
cd react-app
npm install
npm run dev
# open http://localhost:5173 (or printed URL)
```

## Run the backend (API)
```bash
cd backend
npm install
# initialize DB (creates `data/contacts.db`):
node init_db.js
# start server
node server.js
# API will run at http://localhost:4000
```

## Deploying / Making it live
- Static frontend: deploy `frontend-static/` to GitHub Pages (branch `gh-pages`) or Netlify/Vercel.
- React app: build (`npm run build`) and deploy to Vercel/Netlify/GitHub Pages (with appropriate adapter).
- Backend: deploy to Render / Railway / Heroku (follow their docs). Create an environment variable `PORT` if needed.
- To connect frontend contact form to backend, change the `API_BASE` in frontend JS to your deployed backend URL.

## Files included
See the repository structure in the project zip. Replace placeholders (company logo, product images, content) as needed.
