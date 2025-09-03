
import Pais from '../models/pais.model.js';

export const getAll = async (req, res) => {
  try {
    const paises = await Pais.findAll();
    res.json(paises);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener países' });
  }
};
