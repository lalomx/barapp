import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { BarServicesDB } from '../../interfaces/BarServicesDB';
import * as bcrypt from 'bcrypt';

export interface UserAttributes extends Model {
  id: string;
  username: string;
  password: string;
  nombre?: string;
  apellido?: string;
  email: string;
  roleId: string;
  createdAt?: Date;
  updatedAt?: Date;
};

type UserModel = typeof Model & (new (values?: object, options?: BuildOptions) => UserAttributes) & {
  associate: (model: BarServicesDB) => any;
  validPassword: (password: any) => boolean;
};


const userFactory = (sequalize: Sequelize) => {
  const User = (<UserModel>sequalize.define('Users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    username: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    password: DataTypes.STRING,
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
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  })) as UserModel;

  User.associate = (db: BarServicesDB) => {
    User.belongsTo(db.Role, {
      foreignKey: {
        name: 'roleId',
      }
    });
  };
  User.beforeCreate = (user: any) => user.password = bcrypt.hash(user.password, bcrypt.genSaltSync(8));
  User.prototype.validPassword = function (password: any): boolean {
    return bcrypt.compareSync(password, this.password)
  };

  return User;
};

export { userFactory, UserModel };