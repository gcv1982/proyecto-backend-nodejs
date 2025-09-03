
import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const Contacto = sequelize.define('Contacto', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nombre: { type: DataTypes.STRING(100), allowNull: false },
  telefono: { type: DataTypes.STRING(20) },
  email: { type: DataTypes.STRING(100) },
}, {
  tableName: 'contactos',
  timestamps: false,
});

export default Contacto;
