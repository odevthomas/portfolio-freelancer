import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import ThomasEduardo from './pages/ThomasEduardo';
import LandingPage from './pages/LandingPage'; // Corrigido para o nome correto
import Cilios from './pages/Cilios'; // Corrigido para o nome correto

import '../styles/index.css';

const App = () => {
  return (
    <Router> {/* O Router envolve toda a aplicação para definir as rotas */}
      <Routes>
        {/* Definindo as rotas e os componentes que devem ser renderizados */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/ThomasEduardo" element={<ThomasEduardo />} />
        <Route path="/cilios" element={<Cilios />} />
      </Routes>
    </Router>
  );
};

export default App;
