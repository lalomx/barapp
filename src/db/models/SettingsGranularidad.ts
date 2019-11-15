import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { BarServicesDB } from '../../interfaces/BarServicesDB';

export interface GranularidadAttributes extends Model {
  id: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
};

type GranularidadModel = typeof Model &
  (new (values?: object, options?: BuildOptions) => GranularidadAttributes) & {
  associate: (model: BarServicesDB) => any;
};

const granularidadFactory = (sequalize: Sequelize) => {
  const Granularidad = (<GranularidadModel>sequalize.define('SettingsGranularidads', {
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
  })) as GranularidadModel;

  return Granularidad;
};

export { granularidadFactory, GranularidadModel };