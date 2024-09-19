# TikTok Clone

## Project Structure

```plaintext
tiktok-clone/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── postController.js
│   │   └── userController.js
│   ├── models/
│   │   ├── Post.js
│   │   ├── User.js
│   │   └── Comment.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── postRoutes.js
│   │   └── userRoutes.js
│   ├── utils/
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── config/
│   │   └── db.js
│   ├── server.js
│   └── .env
├── frontend/
│   ├── public/
│   │   ├── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Post.js
│   │   │   ├── Feed.js
│   │   │   ├── Profile.js
│   │   │   └── Upload.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── UserProfile.js
│   │   ├── services/
│   │   │   ├── authService.js
│   │   │   ├── postService.js
│   │   │   └── userService.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles/
│   │       ├── App.css
│   │       └── index.css
├── README.md
├── package.json
└── .gitignore
