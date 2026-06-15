import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MoodContext } from '../../context/MoodContextOnly';

function Navbar() {
  const { toggleTheme } = useContext(MoodContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Mood Tracker</h2>
      </div>

      <div className="nav-links">
        <Link to="/dashboard">Home</Link>
        <Link to="/dashboard/analytics">Analytics</Link>
        <Link to="/profile">Profile</Link>
      </div>

      <div className="nav-buttons">
        <button className="theme-btn" onClick={toggleTheme}>
          Theme
        </button>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
