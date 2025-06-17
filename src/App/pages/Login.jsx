import React from 'react';

export default function Login() {
  return (
    <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:'100vh' }}>
      <form style={{ border: '1px solid #ccc', padding: '2rem', borderRadius: '8px' }}>
        <h2>Login</h2>
        <div>
          <label>Email:</label><br />
          <input type="email" name="email" required />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <label>Senha:</label><br />
          <input type="password" name="password" required />
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>Entrar</button>
      </form>
    </div>
  );
}
