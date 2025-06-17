import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside style={{ width: '200px', backgroundColor: '#eee', padding: '1rem' }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ marginBottom: '0.5rem' }}>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/adicionar-filme">Adicionar Filme</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
