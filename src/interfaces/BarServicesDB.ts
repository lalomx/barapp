import Sequelize from 'sequelize';
import { UserModel } from '../db/models/User';
import { RoleModel } from '../db/models/Role';

export interface BarServicesDB {
    [key: string]: any;
    sequelize: Sequelize.Sequelize;
    User: UserModel;
    Role: RoleModel;
}