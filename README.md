# Meetly

Meetly is a full-stack video conferencing web application for creating, joining, and tracking online meetings.

## Features

- User registration and login
- Join a meeting with a custom meeting code
- Real-time video, audio, chat, and screen sharing
- Meeting history for signed-in users
- Guest meeting access
- Responsive Meetly landing page

## Tech stack

- Frontend: React, Material UI, React Router, Socket.IO Client
- Backend: Node.js, Express, Socket.IO, Mongoose
- Database: MongoDB Atlas

## Project structure

```text
Meetly/
├── frontend/     # React application
├── backend/      # Express and Socket.IO server
└── README.md
```

## Run locally

### Prerequisites

- Node.js 20 or newer
- A MongoDB Atlas database

### 1. Configure the backend

Create `backend/.env` from `backend/.env.example`:

```env
MONGODB_URI=your-mongodb-atlas-connection-string
PORT=8000
```

Install and start the backend:

```bash
cd backend
npm ci
npm start
```

The API and Socket.IO server run at `http://localhost:8000`.

### 2. Configure the frontend

Create `frontend/.env` from `frontend/.env.example`:

```env
REACT_APP_API_URL=http://localhost:8000
```

Install and start the frontend in a second terminal:

```bash
cd frontend
npm ci
npm start
```

Open the URL shown in the terminal. Create React App commonly uses `http://localhost:3000`; if that port is busy, it will offer another port such as `3001`.

## Deployment

Deploy the services separately:

| Service | Platform | Root directory | Build command | Start / output |
| --- | --- | --- | --- | --- |
| Backend | Render | `backend` | `npm ci` | `npm start` |
| Frontend | Vercel | `frontend` | `npm run build` | `build` |

Add these environment variables in the respective hosting dashboards:

- Render backend: `MONGODB_URI`
- Vercel frontend: `REACT_APP_API_URL` set to the deployed Render backend URL

Never commit `.env` files or database credentials. The included `.gitignore` excludes them from Git.

## Available scripts

| Folder | Command | Purpose |
| --- | --- | --- |
| `backend` | `npm start` | Start the API and Socket.IO server |
| `backend` | `npm run dev` | Start the backend with Nodemon |
| `frontend` | `npm start` | Start the React development server |
| `frontend` | `npm run build` | Create an optimized production build |
