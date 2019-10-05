import { Sequelize, Model, DataTypes, BuildOptions, where } from 'sequelize';
import { BarServicesDB } from '../../interfaces/BarServicesDB';
import * as bcrypt from 'bcrypt';
import { RoleModel } from './Role';

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

interface UserInfo {
  id: string;
  username: string;
  nombre?: string;
  apellido?: string;
  email: string;
  role: string;
}

type UserModel = typeof Model & (new (values?: object, options?: BuildOptions) => UserAttributes) & {
  associate: (model: BarServicesDB) => any;
  validPassword: (password: any) => boolean;
  getUserInfo: (username: string) => Promise<UserInfo | null>;
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
      type: DataTypes.STRING
    },
    password: DataTypes.STRING,
    nombre: {
      allowNull: true,
      type: DataTypes.STRING
    },
    apellido: {
      allowNull: true,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    roleId: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  })) as UserModel;

  User.associate = (db: BarServicesDB) => {
    User.belongsTo(db.Role, { foreignKey: { name: 'roleId' }, as: 'role' });
  };
  User.beforeCreate = (user: any) => user.password = bcrypt.hash(user.password, bcrypt.genSaltSync(8));
  User.prototype.validPassword = function (password: any): boolean {
    return bcrypt.compareSync(password, this.password)
  };
  User.getUserInfo = async (user: string) => {
    const userFound = await User.findOne({
      where: { username: user }, include: ['role'], rejectOnEmpty: false
    }) as any
    if (!userFound) return null;
    return {
      id: userFound.id,
      username: userFound.username,
      nombre: userFound.nombre,
      apellido: userFound.apellido,
      email: userFound.email,
      role: userFound.role.roleName
    }
  }

  return User;
};

export { userFactory, UserModel };