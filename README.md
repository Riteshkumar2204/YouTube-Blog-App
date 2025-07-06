
# 🧾 YouTube Blog App

This Blog App is a role-based content management platform that provides a secure, scalable, and organized space for managing and sharing blog content. The system is built around two distinct user roles: Users and Creators each with clearly defined permissions and access levels, all protected by an authentication mechanism.
# 🔧 Features

- User Features
   - Can register and log in securely.
   - Have access to view and read blogs published by creators.
   - Cannot create, edit, or delete content.
   - Provides a clean and distraction-free interface focused on content consumption.
- Creator Features 
   - Have a dedicated dashboard after login. 
   - Can create new blog posts, including formatting text, uploading images, and categorizing content. 
   - Can edit and manage only their own blog posts. 
   - Do not have access to manage users or other creators’ blogs. 
- Authentication
   - Role-based login system using technologies like JWT, OAuth, or session-based auth.
   - Each role is redirected to its appropriate dashboard or access view after login. 
   - Protected routes ensure users cannot access pages outside their permissions. 



# ⚙️ Local Setup
## 1. Clone the Repo
git clone https://github.com/Riteshkumar2204/YouTube-Blog-App.git

## 2. Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI=your_mongodb_connection_string`

`port=4001`

`FRONTEND_URL=http://localhost:5173`


`CLOUD_NAME=YOUR_CLOUD_NAME`

`CLOUD_API_KEY=YOUR_CLOUD_API_KEY_STRING`

`CLOUD_API_SECRET=YOUR_CLOUD_API_SECRET_STRING`

`JWT_SECRET_KEY=YOUR_JWT_SECRET_KEY`



## 3. Deployment

Run Backend


```bash
  cd backend
  npm install
  npm start
```
Run Frontend


```bash
  cd frontend
  npm install
  npm run dev
```






# 🚀Live Demo


http://youtube-blog-app.vercel.app


## 🛠️ Tech Stack

React JS,
API,
Node.js,
Tailwind CSS,
JavaScript,
Express,
MongoDB.
## Feedback

If you have any feedback, please reach out to us at rk8958496098@gmail.com.com


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://portfolio-delta-flax-59.vercel.app/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ritesh-kumar-6666b22b1)

