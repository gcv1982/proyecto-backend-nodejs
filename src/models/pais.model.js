
import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const Pais = sequelize.define('Pais', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'paises',
  timestamps: false
});

export default Pais;