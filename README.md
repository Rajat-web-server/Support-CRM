# 🚀 Support CRM

A full-stack Customer Support CRM application built using **React, Tailwind CSS, Express.js, and SQLite**. The application allows customer support teams to create, manage, search, and update support tickets through a clean and responsive interface.

## 🌐 Live Demo

**Frontend:** https://your-vercel-url.vercel.app

**Backend API:** https://support-crm-qzpq.onrender.com

---

# 📖 Overview

Support CRM is a ticket management system designed to streamline customer support operations. Users can create support tickets, track their status, search through existing tickets, update ticket information, and manage customer issues efficiently.

The application follows the **MVC (Model-View-Controller)** architecture on the backend and a **component-based architecture** on the frontend, making the project scalable and maintainable.

---

# ✨ Features

## Ticket Management

- Create new support tickets
- View all tickets
- View individual ticket details
- Update ticket status
- Delete tickets

## Search & Filtering

- Search tickets by customer name
- Search tickets by subject
- Filter tickets by status

## Responsive UI

- Mobile-friendly design
- Responsive layouts using Tailwind CSS
- Modern user interface

## Backend

- RESTful API
- MVC architecture
- Input validation middleware
- Global error handling
- SQLite database integration

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- React Router DOM
- Tailwind CSS
- Fetch API

## Backend

- Node.js
- Express.js
- better-sqlite3

## Database

- SQLite

## Deployment

- Vercel (Frontend)
- Render (Backend)

## Version Control

- Git
- GitHub

---

# 📂 Project Structure

```
support-crm/

├── client/                 # React Frontend
│
│   ├── src/
│   │
│   ├── components/
│   ├── pages/
│   ├── router/
│   ├── services/
│   └── assets/
│
└── server/
    │
    ├── src/
    │
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    └── utils/
```

---

# 🏗 Architecture

The backend follows the **MVC Architecture**.

```
Client

↓

Routes

↓

Controller

↓

Model

↓

SQLite Database

↓

Controller

↓

Response
```

### Responsibilities

### Routes

Maps incoming HTTP requests to the appropriate controller.

### Controllers

Contain business logic and handle requests/responses.

### Models

Communicate directly with the SQLite database.

### Middleware

Handles validation, logging, and global error handling.

### Utils

Contains helper functions like ticket ID generation.

---

# 📡 API Endpoints

## Tickets

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/tickets` | Get all tickets |
| GET | `/api/tickets/:id` | Get ticket by Ticket ID |
| POST | `/api/tickets` | Create ticket |
| PUT | `/api/tickets/:id` | Update ticket |
| DELETE | `/api/tickets/:id` | Delete ticket |

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/support-crm.git
```

Move inside the project

```bash
cd support-crm
```

---

## Backend Setup

```bash
cd server

npm install

npm run dev
```

---

## Frontend Setup

```bash
cd client

npm install

npm run dev
```

---

# 🔑 Environment Variables

Backend

Create a `.env` file inside the **server** folder.

```env
PORT=3000
```

Frontend

Create a `.env` file inside the **client** folder.

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

---

# 📸 Screenshots

## Home Page

(Add Screenshot)

---

## Create Ticket

(Add Screenshot)

---

## Ticket Details

(Add Screenshot)

---

# 🚀 Deployment

## Frontend

Hosted on **Vercel**

## Backend

Hosted on **Render**

---

# 📌 Future Improvements

- JWT Authentication
- User Login System
- Role-based Access Control
- Pagination
- File Attachments
- Email Notifications
- Dashboard Analytics
- PostgreSQL Migration
- Docker Support
- Unit & Integration Testing

---

# 💡 Challenges Faced

- Designing a clean MVC architecture
- Managing communication between React and Express
- Configuring CORS for cross-origin requests
- Deploying React and Express separately
- Configuring environment variables for production
- Handling SQLite deployment on Render

---

# 📚 What I Learned

- Building scalable REST APIs
- Structuring applications using MVC
- React component architecture
- Express middleware
- SQLite database operations
- Environment variable management
- Deploying full-stack applications

---

# 👨‍💻 Author

**Your Name**

LinkedIn:
https://linkedin.com/in/your-profile

GitHub:
https://github.com/yourusername

---
