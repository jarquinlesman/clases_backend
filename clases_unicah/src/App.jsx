import React, { useState, useEffect } from 'react';

function App() {
  const [bloques, setBloques] = useState([]);

  useEffect(() => {
    fetch('/api/bloques')
      .then(response => response.json())
      .then(data => setBloques(data));
  }, []);

  return (
    <div>
      <h1>Datos de la Tabla Bloques</h1>
      <ul>
        {bloques.map((bloque, index) => (
          <li key={index}><b>Código del bloque:</b> {bloque.codigo_bloque}; <b>Nombre del bloque:</b> {bloque.nombre_bloque}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
