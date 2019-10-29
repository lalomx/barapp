import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { BarServicesDB } from '../../interfaces/BarServicesDB';

export interface TipoInventarioAttributes extends Model {
  id: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
};

type TipoInventarioModel = typeof Model &
  (new (values?: object, options?: BuildOptions) => TipoInventarioAttributes) & {
  associate: (model: BarServicesDB) => any;
};

const tipoInventarioFactory = (sequalize: Sequelize) => {
  const TipoInventario = (<TipoInventarioModel>sequalize.define('TipoInventarios', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  })) as TipoInventarioModel;

  return TipoInventario;
};

export { tipoInventarioFactory, TipoInventarioModel };