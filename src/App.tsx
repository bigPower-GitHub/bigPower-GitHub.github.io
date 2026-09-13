import { Routes, Route, Link } from "react-router-dom";
import { useTheme } from "./theme/ThemeContext";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import "./App.css";

function MoonIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app">
      {/* 顶部导航栏 */}
      <nav className="navbar">
        {/* 左侧：链接 */}
        <div className="navbar-links">
          <Link to="/">首页</Link>
          <Link to="/todo">Todo</Link>
        </div>

        {/* 右侧：主题切换按钮 */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="切换主题"
          title={`切换到 ${theme === "light" ? "暗色" : "亮色"}`}
        >
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
      </nav>

      {/* 路由配置 */}
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </main>
    </div>
  );
}
