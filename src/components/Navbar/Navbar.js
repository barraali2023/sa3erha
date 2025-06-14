import React, { useEffect, useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { FaShoppingCart, FaSun, FaMoon } from 'react-icons/fa'; // Import FaMoon
import './Navbar.css';
   





function Navbar() {

  const navigate = useNavigate(); // للتنقل
 // logout ==>delet from localstorage
  const handleLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
  localStorage.removeItem('username');
  navigate('/');
};
  // Initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme : 'dark';
  });

  useEffect(() => {
    // Apply the class to the <html> element
    if (theme === 'light') {
      document.documentElement.classList.add('light-theme');
      document.documentElement.classList.remove('dark-theme'); // If you use an explicit dark-theme class
    } else {
      document.documentElement.classList.remove('light-theme');
      document.documentElement.classList.add('dark-theme'); // Optional: if you use an explicit dark-theme class
    }
    // Store the preference
    localStorage.setItem('theme', theme);
  }, [theme]);

  // -----------login fake
  const isLoggedIn = !!localStorage.getItem('token');

if (isLoggedIn) {
  console.log('✅ المستخدم مسجّل دخول!');
} else {
  console.log('🚫 المستخدم غير مسجّل دخول!');
}

// const handleLogout = () => {
//   localStorage.removeItem('token');
//   localStorage.removeItem('role');
//   navigate('/login');
// };


  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          S3RHA
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-links">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/categories" className="nav-links">Categories</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart-simulator" className="nav-links">
              <FaShoppingCart className="nav-icon-cart" /> Cart Simulator
            </Link>
          </li>
        </ul>

        <div className="nav-right-side">
          <button
            className="nav-icon-button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {/* Toggle icon based on theme */}
            {theme === 'light' ? <FaMoon className="nav-icon-settings" /> : <FaSun className="nav-icon-settings" />}
          </button>
          <button className="nav-links language-button">العربية</button>
              

  {/* if login =>replace logout /// localstorage  مؤقتا */}
          {isLoggedIn ? (
  <>
    <span className="nav-links">مرحباً، {localStorage.getItem('username') || 'مستخدم'}</span>
    <button onClick={handleLogout} className="nav-button register-button">
      Logout
    </button>
  </>
) : (
  <>
    <Link to="/login" className="nav-links">Login</Link>
    <Link to="/Login_Register" className="nav-button register-button">Register</Link>
  </>
)}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;