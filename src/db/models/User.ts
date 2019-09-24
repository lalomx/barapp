import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { BarServicesDB } from '../../interfaces/BarServicesDB';

export interface UserAttributes extends Model {
  id: string;
  username: string;
  nombre?: string;
  apellido?: string;
  email: string;
  roleId: string;
  createdAt?: Date;
  updatedAt?: Date;
};

type UserModel = typeof Model  &
(new (values?: object, options?: BuildOptions) => UserAttributes) & {
  associate: (model: BarServicesDB) => any;
};


const userFactory = (sequalize: Sequelize) => {
  const User = (<UserModel>sequalize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    nombre: {
      allowNull: true,
      type: DataTypes.TEXT
    },
    apellido: {
      allowNull: true,
      type: DataTypes.TEXT
    },
    email: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    roleId: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  })) as UserModel;


  User.associate = (db: BarServicesDB) => {
    User.belongsTo(db.Role);
  };

  return User;
};

export { userFactory, UserModel };