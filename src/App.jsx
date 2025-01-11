import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import ThomasEduardo from './pages/ThomasEduardo';
import LandingPage from './pages/LandingPage'; // Corrigido para o nome correto
import Login from './pages/Login'; // Corrigido para o nome correto (com a primeira letra maiúscula)
import Dashboard from './Login/Dashboard'; // Corrigido para o nome correto (com a primeira letra maiúscula)
import PrivacyPolicyAndTerms from './components/Ferramentas/PrivacyPolicyAndTerms'; // Corrigido para o nome correto (com a primeira letra maiúscula)


import '../styles/index.css';

const App = () => {
  return (
    <Router> {/* O Router envolve toda a aplicação para definir as rotas */}
      <Routes>
        {/* Definindo as rotas e os componentes que devem ser renderizados */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/ThomasEduardo" element={<ThomasEduardo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/privacypolicy" element={<PrivacyPolicyAndTerms />} />

        {/* A rota para /firebase não é necessária, pois o Firebase está sendo usado internamente nos componentes */}
      </Routes>
    </Router>
  );
};

export default App;
