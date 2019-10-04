import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { BarServicesDB } from '../../interfaces/BarServicesDB';

export interface BarAttributes extends Model {
  id: string;
  barName: string;
  address?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

type BarModel = typeof Model  &
(new (values?: object, options?: BuildOptions) => BarAttributes) & {
  associate: (model: BarServicesDB) => any;
};

const barFactory = (sequalize: Sequelize) => {
    const Role = (<BarModel>sequalize.define('Bares', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
      },
      barName: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      address: {
        allowNull: true,
        type: DataTypes.TEXT
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    })) as BarModel;
  
    return Role;
  };
  
  export { barFactory, BarModel };