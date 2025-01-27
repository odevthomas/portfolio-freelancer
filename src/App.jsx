import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import LandingPage from './pages/LandingPage';
import ThomasEduardo from './pages/ThomasEduardo';
import Login from './pages/Login';
import Error404 from './pages/Error404';
import Notification from './components/UI/Notification';
import Dashboard from './Login/Dashboard';
import PrivacyPolicyAndTerms from './components/Ferramentas/PrivacyPolicyAndTerms';

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
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={closeNotification}
          />
        )}
        <Routes>
          <Route path="/" element={<LandingPage showNotification={showNotification} />} />
          <Route path="/thomas-eduardo" element={<ThomasEduardo showNotification={showNotification} />} />
          <Route path="/login" element={<Login showNotification={showNotification} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/privacypolicy" element={<PrivacyPolicyAndTerms />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
