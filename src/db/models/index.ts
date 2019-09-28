// import { Logger } from 'winston';
import { BarServicesDB } from '../../interfaces/BarServicesDB';
import Sequelize from 'sequelize'
import { userFactory } from './User';
import { roleFactory } from './Role';
import config from '../../config';

export const createDb = (): BarServicesDB => {
  let sequelize: Sequelize.Sequelize;
  sequelize = new Sequelize.Sequelize(config.db.uri, 
  // {
  //   logging: (message: string) => {
  //     const healthCheckQuery = 'Executing (default): SELECT 1+1 AS result';
  //     if (message === healthCheckQuery) {
  //       logger.silly(message);
  //     } else {
  //       logger.debug(message);
  //     }
  //   }
  // }
);

  const db: BarServicesDB = {
    sequelize,
    User: userFactory(sequelize),
    Role: roleFactory(sequelize)
  }

  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  return db;
}