// src/App.jsx
import React, { useEffect, useState } from 'react';
import { fetchContactos } from './services/api';

function App() {
  const [contactos, setContactos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContactos()
      .then(data => {
        setContactos(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando contactos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Lista de Contactos</h1>
      <ul>
        {contactos.map(contacto => (
          <li key={contacto.id}>
            {contacto.nombre} - {contacto.telefono} - {contacto.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
