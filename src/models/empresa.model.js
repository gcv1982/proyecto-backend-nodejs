
import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const Empresa = sequelize.define('Empresa', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'empresas',
  timestamps: false
});

export default Empresa;