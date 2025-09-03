
import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const Localidad = sequelize.define('Localidad', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'localidades',
  timestamps: false
});

export default Localidad;