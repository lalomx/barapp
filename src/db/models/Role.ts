import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { BarServicesDB } from '../../interfaces/BarServicesDB';

export interface RoleAttributes extends Model {
  id: string;
  roleName: string;
  createdAt?: Date;
  updatedAt?: Date;
};

type RoleModel = typeof Model  &
(new (values?: object, options?: BuildOptions) => RoleAttributes) & {
  associate: (model: BarServicesDB) => any;
};

const roleFactory = (sequalize: Sequelize) => {
    const Role = (<RoleModel>sequalize.define('Roles', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
      },
      roleName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    })) as RoleModel;
  
    return Role;
  };
  
  export { roleFactory, RoleModel };