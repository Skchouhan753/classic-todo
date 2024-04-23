// App.js
import './App.css'; 
import Navbar from './components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.isDarkMode);
 
  return (
    <div className={`app ${isDarkMode ? 'dark' : ''}`}>
      <Navbar />
      {/* Other components */}
    </div>
  );
}

export default App;
