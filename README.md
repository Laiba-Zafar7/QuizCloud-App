# ⚡ QuizCloud — Online Quiz System

A full-stack cloud-based quiz platform where teachers create quizzes and students attempt them online with real-time results.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Firebase](https://img.shields.io/badge/Firebase-Cloud-orange?logo=firebase)
![Status](https://img.shields.io/badge/Status-Live-brightgreen)

---

## 🚀 Live Demo
> Coming soon — deploying to Vercel

---

## 📸 Features

### 👨‍🏫 Teacher Side
- 🔐 Secure signup & login
- 📊 Dashboard with real-time stats
- 📝 Quiz Builder (MCQ, True/False, Short Answer)
- 🗂️ Question Bank — save & reuse questions
- 📋 My Quizzes — manage all quizzes
- 📈 Results & Analytics with CSV export
- 👨‍🎓 Students management
- 🔔 Send notifications to students
- ⚙️ Profile settings

### 📚 Student Side
- 🔐 Secure signup & login
- 📚 Dashboard with available quizzes
- ⏱️ Live Quiz Engine with countdown timer
- 🚫 Anti-cheat tab switch detection
- 📊 My Results with score history
- 🏆 Leaderboard with podium
- 🔔 Notifications from teacher
- ⚙️ Profile settings

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React.js | Frontend UI |
| Firebase Auth | Authentication |
| Firestore | Cloud Database |
| React Router | Navigation |
| React Hot Toast | Notifications |
| CSS3 | Styling |

---

## 📁 Project Structure
src/
├── firebase/          # Firebase config
├── context/           # Auth context
├── components/
│   ├── auth/          # Login & Signup
│   ├── teacher/       # Teacher components
│   └── student/       # Student components
├── pages/
│   ├── teacher/       # Teacher pages
│   └── student/       # Student pages
└── styles/            # CSS files
## ⚙️ Setup & Installation

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/quizcloud-app.git

# Go into folder
cd quizcloud-app

# Install dependencies
npm install

# Create .env file and add your Firebase keys
REACT_APP_FIREBASE_API_KEY=your_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

# Start the app
npm start
```

---

## 👨‍💻 Developer

**Contact Details**
- 📧 zaafarlaiba@gmail.com
- 🔗 LinkedIn: https://www.linkedin.com/in/laiba-zafar-3b890b362/
- 💻 GitHub: https://github.com/Laiba-Zafar7
---

## 📄 License
MIT License — feel free to use and modify!