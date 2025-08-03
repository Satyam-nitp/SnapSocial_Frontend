```markdown
# 🚀 SnapSocial – Full-Stack Social Media App

EchoSphere is a modern, responsive full-stack social media platform built with the MERN stack. It allows users to share posts, create stories, chat in real-time, and manage their profiles — designed with a clean UI and smooth user experience.

![SnapSocial Screenshot](./screenshot.png) <!-- Replace with your screenshot path -->

<!-- ## 🌐 Live Demo
🔗 [Visit Live App](https://echosphere.vercel.app)  
📦 [Frontend GitHub Repo](https://github.com/Satyam-nitp/EchoSphere_frontend)  
🛠️ [Backend GitHub Repo](https://github.com/Satyam-nitp/EchoSphere_backend) -->

---

## 🛠 Tech Stack

- **Frontend:** React.js, Tailwind CSS, Redux Toolkit, React Hot Toast
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Real-Time:** Socket.io for instant messaging
- **Storage:** Cloudinary for image uploads
- **Auth:** JWT (JSON Web Tokens), bcrypt
- **Deployment:** Vercel (Frontend), Render/Railway (Backend), MongoDB Atlas

---

## ✨ Features

- 🔐 Secure JWT-based Authentication & Authorization
- 📝 Post Creation & Feed with Hashtags
- 📸 Story Sharing (Instagram-style)
- 💬 Real-time Messaging using Socket.io
- 🧑‍🤝‍🧑 User Connections (Follow/Unfollow)
- 🧾 Responsive Design (Mobile-First)
- ☁️ Cloudinary Integration for Media Uploads
- ⚡ Toast Notifications via `react-hot-toast`

---

## 📁 Folder Structure

```

/client         ← React frontend
/server         ← Express backend
.env.example    ← Sample environment variables

````

---

## 🧪 Getting Started (Local Setup)

### 1. Clone the Repos

```bash
git clone https://github.com/Satyam-nitp/EchoSphere_frontend.git
git clone https://github.com/Satyam-nitp/EchoSphere_backend.git
````

### 2. Set Up Environment Variables

Create `.env` files in both `/client` and `/server` folders using `.env.example` as reference.

### 3. Install Dependencies

```bash
cd client
npm install
cd ../server
npm install
```

### 4. Run the App

```bash
# In /server
npm run dev

# In /client
npm run dev
```

---

<!-- ## 🔒 Environment Variables

### `/client/.env.example`

```env
REACT_APP_API_URL=http://localhost:5000/api
``` -->

<!-- ### `/server/.env.example`

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

--- -->

<!-- ## 📸 Screenshots

<!-- Add your own screenshots here -->

| Feed Page                       | Messages                                | Profile                               |
| ------------------------------- | --------------------------------------- | ------------------------------------- |
| ![Feed](./screenshots/feed.png) | ![Messages](./screenshots/messages.png) | ![Profile](./screenshots/profile.png) |

--- -->


## 📄 License

This project is licensed under the MIT License.

---

## 💬 Contact

Made with 💙 by [Satyam Singh](https://github.com/Satyam-nitp)
Feel free to open issues or contribute to the project!


