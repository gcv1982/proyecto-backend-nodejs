
import Provincia from '../models/provincia.model.js';

export const getAll = async (req, res) => {
  try {
    const provincias = await Provincia.findAll();
    res.json(provincias);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener provincias' });
  }
};