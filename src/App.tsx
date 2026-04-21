import { Routes, Route } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import { themes } from "./context/ThemeContext";
import "./App.css";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app" data-theme={theme}>
      <header className="app-header">
        <h1>Finals Assignment</h1>
        <div className="theme-switcher">
          <button onClick={toggleTheme} className="theme-btn">
            🎨 {themes[theme].name}
          </button>
        </div>
      </header>
      
      <main className="app-main">
        <Routes>
          <Route path="/" element={
            <div className="page">
              <h2>Home</h2>
              <p>Todo functionality will be continued...</p>
              <div className="theme-demo">
                <h3>Current Theme: {themes[theme].name}</h3>
                <div className="color-palette">
                  <div className="color-box" style={{ backgroundColor: 'var(--color-background)' }}>
                    <small>Background</small>
                  </div>
                  <div className="color-box" style={{ backgroundColor: 'var(--color-surface)' }}>
                    <small>Surface</small>
                  </div>
                  <div className="color-box" style={{ backgroundColor: 'var(--color-primary)' }}>
                    <small>Primary</small>
                  </div>
                  <div className="color-box" style={{ backgroundColor: 'var(--color-secondary)' }}>
                    <small>Secondary</small>
                  </div>
                  <div className="color-box" style={{ backgroundColor: 'var(--color-accent)' }}>
                    <small>Accent</small>
                  </div>
                </div>
              </div>
            </div>
          } />
          <Route path="/about" element={
            <div className="page">
              <h2>About</h2>
              <p>About functionality will be continued...</p>
            </div>
          } />
        </Routes>
      </main>
    </div>
  );
}
