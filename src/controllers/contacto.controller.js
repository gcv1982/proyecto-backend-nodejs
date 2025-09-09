import Contacto from '../models/contacto.model.js';

export const obtenerContactos = async (req, res) => {
  try {
    const contactos = await Contacto.findAll();
    res.json(contactos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener contactos' });
  }

};

export const getOne = async (req, res) => {
  try {
    const contacto = await Contacto.findByPk(req.params.id);
    if (!contacto) return res.status(404).json({ error: 'Contacto no encontrado' });
    res.json(contacto);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar contacto' });
  }
};

export const crearContacto = async (req, res) => {
  try {
    const { nombre, telefono, email } = req.body;
    const nuevo = await Contacto.create({ nombre, telefono, email });
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear contacto' });
  }

};

export const actualizarContacto = async (req, res) => {
  try {
    const contacto = await Contacto.findByPk(req.params.id);
    if (!contacto) return res.status(404).json({ error: 'Contacto no encontrado' });

    const { nombre, telefono, email } = req.body;
    await contacto.update({ nombre, telefono, email });
    res.json(contacto);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar contacto' });
  }

};

export const eliminarContacto = async (req, res) => {
  try {
    const contacto = await Contacto.findByPk(req.params.id);
    if (!contacto) return res.status(404).json({ error: 'Contacto no encontrado' });

    await contacto.destroy();
    res.json({ mensaje: 'Contacto eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar contacto' });
  }

};
