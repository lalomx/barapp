import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { BarServicesDB } from '../../interfaces/BarServicesDB';

export interface MenuAttributes extends Model {
  id: string;
  menuName: string;
  createdAt?: Date;
  updatedAt?: Date;
};

type MenuModel = typeof Model  &
(new (values?: object, options?: BuildOptions) => MenuAttributes) & {
  associate: (model: BarServicesDB) => any;
};

const menuFactory = (sequalize: Sequelize) => {
    const Menu = (<MenuModel>sequalize.define('Menus', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
      },
      menuName: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    })) as MenuModel;
  
    return Menu;
  };
  
  export { menuFactory, MenuModel };