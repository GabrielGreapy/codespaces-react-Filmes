import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import Home from './pages/Home';
import AdicionarFilme from './pages/AdicionarFilme';
import Login from './pages/Login';

function AppLayout() {
  // Layout com header/sidebar/footer
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <main style={{ padding: '1rem', flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adicionar-filme" element={<AdicionarFilme />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Todas as outras rotas dentro do layout */}
        <Route path="/*" element={<AppLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
