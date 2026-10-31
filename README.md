# 📝 YouTube-Blog-App

YouTube Blog App is a full-stack blogging platform built with the **MERN stack**. Users can explore blog content, while administrators can create, update, and delete blog posts. The app includes secure JWT-based authentication and role-based access control to manage user permissions.

🚀 **Live Demo:** [https://youtube-blog-app.vercel.app/](https://youtube-blog-app.vercel.app/)

---

## 🔧 Features

### 🔐 User Authentication
- Secure authentication using JWT
- Login and registration functionality
- Cookie-based token handling for protected access

### 🛡️ Role-Based Access Control
- Separate **Admin** and **User** roles
- Only authorized administrators can manage blog content
- Protected routes to prevent unauthorized actions

### 📰 Blog Management
- Admin can create, update, and delete blog posts
- Users can browse and explore published content
- Organized blog content management

### ☁️ Cloud Integration
- Cloudinary for image storage and management
- MongoDB Atlas for cloud database storage

---

## 🛠️ Tech Stack

| Category        | Technology                 |
| --------------- | -------------------------- |
| Language        | JavaScript                 |
| Frontend        | React.js                   |
| Backend         | Node.js, Express.js        |
| Database        | MongoDB, Mongoose          |
| Authentication  | JWT, Cookies               |
| Cloud Storage   | Cloudinary                 |
| API             | REST APIs                  |
| Deployment      | Vercel, Render             |

---

## 📁 Project Structure

```
YouTube-Blog-App/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
└── README.md
```

> Adjust folder names above to match your actual structure.

---

## ⚙️ Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Riteshkumar2204/YouTube-Blog-App.git
cd YouTube-Blog-App
```

### 2. Environment Variables

Create a `.env` file in the **backend** directory and add the following:

```env
PORT=your_port
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 3. Install Dependencies

Install dependencies for both the backend and frontend:

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 4. Run the Application

Start the backend and frontend in separate terminals:

```bash
# Backend
cd backend
npm start

# Frontend
cd frontend
npm start
```

The frontend usually runs on `http://localhost:3000` and the backend on the port you set in `.env`.

---

## 🔌 API Overview

> Update these routes to match your actual endpoints.

| Method | Endpoint              | Description                | Access |
| ------ | --------------------- | -------------------------- | ------ |
| POST   | `/api/auth/register`  | Register a new user        | Public |
| POST   | `/api/auth/login`     | Login and receive a token  | Public |
| GET    | `/api/blogs`          | Get all blog posts         | Public |
| GET    | `/api/blogs/:id`      | Get a single blog post     | Public |
| POST   | `/api/blogs`          | Create a blog post         | Admin  |
| PUT    | `/api/blogs/:id`      | Update a blog post         | Admin  |
| DELETE | `/api/blogs/:id`      | Delete a blog post         | Admin  |

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 🔗 Links

- **Live Demo:** [https://youtube-blog-app.vercel.app/](https://youtube-blog-app.vercel.app/)
- **GitHub Repo:** [https://github.com/Riteshkumar2204/YouTube-Blog-App](https://github.com/Riteshkumar2204/YouTube-Blog-App)

---

## 👨‍💻 Author

**Ritesh Kumar**
GitHub: [@Riteshkumar2204](https://github.com/Riteshkumar2204)

---

⭐ If you found this project helpful, consider giving it a star!
