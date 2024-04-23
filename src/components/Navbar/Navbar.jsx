// Navbar.js


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../redux/actions';

function Navbar() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.isDarkMode);

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <nav className="navbar">
      <div className="logo">Todo</div>
      <button className="dark-mode-toggle" onClick={handleDarkModeToggle}>
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
      </button>
    </nav>
  );
}

export default Navbar;
