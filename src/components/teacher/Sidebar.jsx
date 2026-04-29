import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";
import "../../styles/teacher/dashboard.css";

const navItems = [
  { icon: "📊", label: "Dashboard", path: "/teacher/dashboard" },
  { icon: "📝", label: "My Quizzes", path: "/teacher/quizzes" },
  { icon: "🗂️", label: "Question Bank", path: "/teacher/questions" },
  { icon: "👨‍🎓", label: "Students", path: "/teacher/students" },
  { icon: "📈", label: "Results", path: "/teacher/results" },
  { icon: "🔔", label: "Notifications", path: "/teacher/notifications" },
  { icon: "⚙️", label: "Settings", path: "/teacher/settings" },
];

export default function Sidebar() {
  const { userProfile, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  async function handleLogout() {
    try {
      await logout();
      toast.success("Logged out successfully!");
      navigate("/");
    } catch (err) {
      toast.error("Logout failed. Try again.");
    }
  }

  return (
    <div className="sidebar">

      {/* Logo */}
      <div className="sidebar-logo">
        <span className="sidebar-logo-icon">⚡</span>
        <span className="sidebar-logo-text">QuizCloud</span>
      </div>

      {/* User Info */}
      <div className="sidebar-user">
        <div className="sidebar-user-name">
          {userProfile?.name || "Teacher"}
        </div>
        <div className="sidebar-user-role">
          {userProfile?.subject} · {userProfile?.school}
        </div>
      </div>

      {/* Nav Items */}
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <button
            key={item.path}
            className={`sidebar-nav-item ${
              location.pathname === item.path ? "active" : ""
            }`}
            onClick={() => navigate(item.path)}
          >
            <span className="sidebar-nav-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      {/* Logout */}
      <div className="sidebar-bottom">
        <button className="btn-logout" onClick={handleLogout}>
          🚪 Logout
        </button>
      </div>

    </div>
  );
}