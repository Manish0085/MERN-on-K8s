# MERN Note-Taking App

A modern full-stack note-taking application built using the **MERN Stack** — MongoDB, Express.js, React.js, and Node.js.
This project demonstrates complete CRUD operations, REST API development, responsive frontend design, and backend security practices such as rate limiting.

Designed as a beginner-to-intermediate full-stack project focused on clean architecture, scalability, and practical MERN workflow implementation.

---

## Features

### ✨ Core Functionality

* Create new notes
* View all saved notes
* Edit existing notes
* Delete notes instantly

### ⚡ Full-Stack Architecture

* RESTful API built with Express.js and Node.js
* React frontend connected to MongoDB backend
* Organized client-server folder structure

### 📱 Responsive UI

* Mobile-friendly layout: Optimized for desktop, tablet, and smaller devices

### 🔒 Security & Backend Enhancements

* API Rate Limiting to prevent spam and abuse
* Environment variable protection using `.env`
* Error handling and async request management

### 🗄️ Database Integration

* MongoDB database using Mongoose ODM
* Persistent note management system

---

## 🛠️ Tech Stack

### Frontend: _React.js, Vite, Tailwind CSS_ 

### Backend: _Node.js, Express.js_

### Database: _MongoDB, Mongoose_

### Additional Tools & Packages: _axios, dotenv, cors, express-rate-limit, nodemon_

---

## 📂 Project Structure

```bash id="lh30uo"
MERN_notesApp/
│
├── BE/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│
├── FE/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│
└── README.md
```

---

## Prerequisites

Before running the project locally, ensure you have installed:

* Node.js (LTS Version)
* npm
* MongoDB Atlas account or local MongoDB setup
* Git

---

## Installation & Setup

### 1. Clone the Repository

```bash id="u8n4hf"
git clone https://github.com/Minerva-san/MERN_notesApp.git
cd MERN_notesApp
```

---

### 2. Backend Setup

Navigate into the backend folder:

```bash id="kr37fw"
cd BE
npm install
```

Create a `.env` file inside the backend directory:

```env id="9wbjlwm"
MONGODB_URI=your_mongodb_connection_string
PORT=5001
NODE_ENV=development
```
### How to Get MONGODB_URI
* Create a free account on MongoDB Atlas
* Create a cluster
* Click Connect
* Choose Drivers
* Copy the connection string
  
Start the backend server:

```bash id="f3cdmv"
npm run dev
```

Server should now run on:

```bash id="31jlwm"
http://localhost:5001
```

---

### 3. Frontend Setup

Open another terminal:

```bash id="4lgm3n"
cd FE
npm install
npm run dev
```

Frontend should now run on:

```bash id="zh7d1x"
http://localhost:5173
```

---

## API Endpoints

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | `/api/notes`     | Fetch all notes         |
| POST   | `/api/notes`     | Create a new note       |
| PUT    | `/api/notes/:id` | Update an existing note |
| DELETE | `/api/notes/:id` | Delete a note           |

---

## 🌐 Deployment

This application is deployed using **Render**. Live Demo: 
```bash id="8j73zv"
https://mern-notesapp-ahmq.onrender.com/
```
---

## What I Learned

This project helped me strengthen my understanding of:

* MERN stack architecture
* REST API development
* MongoDB CRUD operations
* React state management
* Backend routing and middleware
* API security practices
* Full-stack deployment workflow
* Git & GitHub collaboration workflow

---

## 💡 Credits

This project was built by following and learning from the excellent MERN Stack tutorial by: https://github.com/burakorkmez

* freeCodeCamp.org
* codesistency

Tutorial: https://www.youtube.com/watch?v=F9gB5b4jgOI

---

## Author

**Saniya Subair**
GitHub: https://github.com/Minerva-san
