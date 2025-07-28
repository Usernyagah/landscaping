# LandsaFix – Kenyan Landscaping Platform

LandsaFix is a full-stack web application that connects users with professional landscapers in Kenya. The platform allows users to explore landscaping services, book appointments, and transform their outdoor spaces with ease.

---

## ✨ Features

- **Modern React Frontend**: Built with Vite, React, and Tailwind CSS for a fast, responsive UI.
- **Service Exploration**: Browse a curated list of landscaping services tailored for Kenyan environments.
- **Booking System**: Book appointments with professional landscapers.
- **User Authentication**: Secure login and registration for clients and service providers.
- **Testimonials & Projects**: View real client testimonials and project showcases.
- **Admin & Provider Dashboards**: Manage bookings, services, and user profiles.

---

## 🧱 Project Structure

```
landsafix/
├── client/
│   └── landscaping/
│       ├── src/
│       │   ├── components/        # Reusable UI components
│       │   ├── pages/             # Main application pages (Home, Explore, etc.)
│       │   ├── lib/               # Utility functions
│       │   ├── App.jsx            # Main app component
│       │   └── index.css          # Global styles (Tailwind CSS)
│       ├── public/                # Static assets
│       ├── package.json           # Frontend dependencies
│       └── vite.config.js         # Vite configuration
│
├── server/
│   ├── server.js                  # Express server entry point
│   ├── config/                    # Database configuration
│   ├── controllers/               # Route controllers (auth, booking, service)
│   ├── middleware/                # Express middleware (auth, etc.)
│   ├── models/                    # Mongoose models (User, Booking, Service)
│   ├── routes/                    # API routes
│   ├── package.json               # Backend dependencies
│   └── .env                       # Environment variables
```

---

## 🚀 Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [pnpm](https://pnpm.io/) (or npm/yarn)
- [MongoDB](https://www.mongodb.com/) (local or cloud)

---

### ⚙️ Installation

#### 1. Clone the repository

```bash
git clone https://github.com/yourusername/landsafix.git
cd landsafix
```

#### 2. Install dependencies

**Frontend:**

```bash
cd client/landscaping
pnpm install
```

**Backend:**

```bash
cd server
pnpm install
```

#### 3. Configure environment variables

Create a `.env` file in the `server/` directory with your MongoDB URI and JWT secret:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

#### 4. Run the development servers

**Backend:**

```bash
cd server
pnpm start
```

**Frontend:**

```bash
cd client/landscaping
pnpm run dev
```

- Frontend available at: [http://localhost:5173](http://localhost:5173)
- Backend API runs at: [http://localhost:5000](http://localhost:5000) (or as configured)

---

## 🛠️ Technologies Used

**Frontend:**
- React
- Vite
- Tailwind CSS
- React Router

**Backend:**
- Node.js
- Express
- MongoDB
- Mongoose
- JWT

**Tooling:**
- ESLint
- pnpm

---

## 📜 Scripts

**Frontend (`client/landscaping/package.json`):**

```bash
pnpm run dev     # Start Vite dev server
pnpm run build   # Build for production
pnpm run lint    # Lint code
```

**Backend (`server/package.json`):**

```bash
pnpm start       # Start Express server
```

---

## 📄 License

This project is licensed under the **MIT License**.

---
**🌿 Professional landscape solutions for Kenya, made simple with LandsaFix.**

<img width="1354" height="598" alt="image" src="https://github.com/user-attachments/assets/419cef01-2d2d-4886-9e04-c6293e2b95aa" />




