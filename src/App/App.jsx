import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AdicionarFilme from "./pages/AdicionarFilme";
import Login from "./pages/Login";

import { useAuth } from "../contexts/AuthContext";

function Layout({ children }) {
  // Layout com Header, Sidebar e Footer para páginas protegidas
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <main style={{ padding: "1rem", flex: 1 }}>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  const { user } = useAuth();

  return (
    <Router>
      {user ? (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adicionar-filme" element={<AdicionarFilme />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Se não estiver logado, qualquer rota redireciona para login */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
