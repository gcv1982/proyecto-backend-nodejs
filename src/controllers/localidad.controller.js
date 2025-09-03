
import Localidad from '../models/localidad.model.js';

export const getAll = async (req, res) => {
  try {
    const localidades = await Localidad.findAll();
    res.json(localidades);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener localidades' });
  }
};
