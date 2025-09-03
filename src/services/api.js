// src/services/api.js
const API_BASE_URL = 'http://localhost:4000/api'; // o el puerto de tu backend

export async function fetchContactos() {
  try {
    const res = await fetch(`${API_BASE_URL}/contactos`);
    if (!res.ok) throw new Error('Error al obtener contactos');
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
