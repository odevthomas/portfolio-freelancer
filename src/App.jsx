import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import Odevthomas from './pages/odevthomas';
import Error404 from './pages/Error404';
import Notification from './components/UI/Notification';

import '../styles/index.css';

function App() {
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
  };

  const closeNotification = () => {
    setNotification(null);
  };

  return (
    <ThemeProvider>
      <Router>
        {/* Exibe a notificação se existir */}
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={closeNotification}
          />
        )}
        
        <Routes>
          <Route path="/" element={<Home showNotification={showNotification} />} />
          <Route path="/odevthomas" element={<Odevthomas showNotification={showNotification} />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
