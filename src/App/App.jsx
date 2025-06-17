import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <main style={{ padding: '1rem', flex: 1 }}>
          <h2>Bem-vindo à Página Principal</h2>
          <p>Conteúdo vai aqui.</p>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
