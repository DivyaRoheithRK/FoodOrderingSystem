Food Ordering System (MERN)

Overview
Minimal food ordering app using React (Vite) frontend and Express + MongoDB backend.

How to run

Backend
1. cd backend
2. copy `.env.example` to `.env` and set `MONGO_URI`
3. npm install
4. npm run seed   # optional - seeds sample items
5. npm start

Frontend
1. cd frontend
2. npm install
3. npm run dev
4. Open the URL shown (usually http://localhost:5173)

API endpoints
- GET /api/items
- POST /api/items
- POST /api/users
- POST /api/orders
- GET /api/orders

## Notes
- Do not push `.env` or credentials to GitHub.
- This project is beginner-friendly; extend with auth, admin features, styling.
