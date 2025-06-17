import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Ao montar, verifica localStorage para manter login persistente
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Função para login fake (validação simples)
  function login(email, password) {
    // Aqui você pode validar com backend ou lista fixa
    if (email === "gabriel@example.com" && password === "123456") {
      const userData = { email };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return true; // login ok
    }
    return false; // login falhou
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook para facilitar o uso do contexto
export function useAuth() {
  return useContext(AuthContext);
}
