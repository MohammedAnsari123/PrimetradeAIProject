# Scalable Web App with Authentication & Dashboard

This is a full-stack web application built as part of a Frontend Developer Task. It features a complete authentication system and a dashboard for managing tasks, built with a focus on scalability, security, and clean code.

## 🚀 Tech Stack

### Frontend
- **React.js** (Vite): Fast and modern UI library.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **Context API**: For global state management (Authentication).
- **Fetch API**: Native browser API for HTTP requests (Zero dependencies).
- **Lucide React**: Beautiful and consistent icons.

### Backend
- **Node.js & Express.js**: Robust backend runtime and framework.
- **MongoDB & Mongoose**: NoSQL database for flexible data storage.
- **JWT (JSON Web Tokens)**: Secure stateless authentication.
- **Bcrypt.js**: Password hashing for security.

## ✨ Features

### Authentication
- **User Registration**: Create a new account with name, email, and password.
- **User Login**: Secure login with JWT issuance.
- **Protected Routes**: Dashboard is accessible only to authenticated users.
- **Logout**: Securely clear session and redirect to login.

### Dashboard & Task Management
- **Create Task**: Add new tasks with title, description, and status.
- **View Tasks**: Display tasks in a responsive grid layout.
- **Update Task**: Edit task details and change status (Pending, In Progress, Completed).
- **Delete Task**: Remove tasks with confirmation.
- **Search**: Real-time filtering of tasks by title.
- **Filter**: Filter tasks by status (All, Pending, In Progress, Completed).

### Code Quality
- **Async/Await**: Clean and readable asynchronous code on both frontend and backend.
- **Component-Based**: Modular React components (Navbar, Dashboard, Auth Forms).
- **Responsive Design**: Fully responsive UI that works on mobile and desktop.

## 📂 Project Structure

```
Project/
├── backend/                # Node.js/Express Backend
│   ├── models/             # Mongoose Models (User, Task)
│   ├── routes/             # API Routes (Auth, Tasks)
│   ├── middleware/         # Auth Middleware
│   └── server.js           # Entry point
│
├── frontend/               # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── context/        # Auth Context
│   │   ├── pages/          # Page views (Login, Register, Dashboard)
│   │   └── App.jsx         # Main App component with Routing
│   └── tailwind.config.js  # Tailwind configuration
│
├── API_DOCUMENTATION.docx  # Detailed API Documentation (Word)
├── postman_collection.json # Postman Collection for testing
└── README.md               # Project Documentation
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js installed
- MongoDB installed and running locally

### 1. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000`.

### 2. Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

## 📚 API Documentation
Detailed API documentation is available in the project root:
- **`API_DOCUMENTATION.docx`**: A Word document describing all endpoints.
- **`postman_collection.json`**: A ready-to-use Postman collection for testing.

## 🔒 Security
- Passwords are hashed using `bcryptjs` before storage.
- API endpoints are protected using JWT middleware.
- CORS enabled for secure frontend-backend communication.
