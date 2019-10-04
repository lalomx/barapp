import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { BarServicesDB } from '../../interfaces/BarServicesDB';
import { BarAttributes } from './Bares';

export interface MenuAttributes extends Model {
  id: string;
  menuName: string;
  bar: BarAttributes;
  createdAt?: Date;
  updatedAt?: Date;
};

type MenuModel = typeof Model &
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
    barId: {
      allowNull: false,
      type: DataTypes.UUID
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  })) as MenuModel;

  Menu.associate = (db: BarServicesDB) => {
    Menu.belongsTo(db.Bar, { foreignKey: { name: 'barId' }, as: 'bar' });
  };

  return Menu;
};

export { menuFactory, MenuModel };