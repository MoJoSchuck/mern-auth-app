# AUTH - Fullstack Authentication App

A fullstack authentication system built with React (Vite) frontend and Node.js/Express/MongoDB backend.

## ✨ Features

- ✅ User registration and login
- 📧 Email verification (Mailtrap integration)
- 🔑 Password reset via email
- 🛡️ JWT-based protected routes
- 🧩 Password strength validation
- 📊 Dashboard with user info and logout
- ⚡ Error and loading states for better UX

## 📂 Project Structure

```
AUTH/
├── backend/         # Express backend (API, controllers, models, mail logic)
├── frontend/        # React frontend (Vite, pages, components, styles)
│   └── dist/        # Production build output
├── .env             # Environment variables
├── package.json     # Project scripts and dependencies
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
npm install --prefix frontend
```

### 2. Build frontend

```bash
npm run build
```

### 3. Start backend (production)

```bash
npm run start
```

### 4. Start frontend (development)

```bash
cd frontend
npm run dev
```

## ⚙️ Configuration

- Set up your `.env` file with MongoDB URI, JWT secret, Mailtrap credentials, and client URL.
- For email features, use Mailtrap for testing. **Note:** Demo domain is limited and only allows sending to your own email address (max. 20 emails per account).

## 🖥️ Usage

- Register a new user and verify via email.
- Login to access protected dashboard.
- Use "Forgot Password" to reset your password via email.

## 🔀 Routing

- Protected routes for authenticated and verified users (see `frontend/src/App.jsx`)
- Redirects for authenticated users to dashboard
- Wildcard route redirects to `/` (dashboard)

## ℹ️ Notes

- The backend serves the frontend build in production.
- For development, run frontend and backend separately.
- Mailtrap demo domain has strict limits (see Mailtrap docs).

## 📸 Preview
<img width="1281" height="721" src="https://github.com/user-attachments/assets/dfa8e114-ec46-47e1-9329-cbf29d96d7d8" />


## 📄 License

MIT
