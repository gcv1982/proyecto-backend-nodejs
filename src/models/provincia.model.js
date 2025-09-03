
// src/models/provincia.model.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js'; // Ajustá si tenés otro archivo de conexión

const Provincia = sequelize.define('Provincia', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'provincias',
  timestamps: false
});

export default Provincia;
