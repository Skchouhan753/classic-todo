import './navbar.css'

import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'; // Importing icons

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <nav className={isDarkMode ? 'navbar dark' : 'navbar'}>
      <div className="logo">Todo</div>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
      </button>
    </nav>
  );
}

export default Navbar;
