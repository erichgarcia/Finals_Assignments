import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { themes } from '../context/ThemeContext'
import '../styles/Navbar.css'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-name">My Portfolio</span>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Contact Me
          </NavLink>
        </li>
        <li>
          <button
            onClick={toggleTheme}
            className="theme-switcher-btn"
            title="Switch theme"
            style={{
              backgroundColor: '#f5f5f5',
              color: '#444',
              border: '1px solid #ddd',
              borderRadius: '6px',
              padding: '6px 12px',
              fontSize: '0.875rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'background-color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#ebebeb'
              e.currentTarget.style.borderColor = '#bbb'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#f5f5f5'
              e.currentTarget.style.borderColor = '#ddd'
            }}
          >
            🎨 {themes[theme].name}
          </button>
        </li>
      </ul>
    </nav>
  )
}