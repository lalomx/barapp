// import { Logger } from 'winston';
import { BarServicesDB } from '../../interfaces/BarServicesDB';
import Sequelize from 'sequelize'
import { userFactory } from './User';
import { roleFactory } from './Role';

export const createDb = (): BarServicesDB => {
  let sequelize: Sequelize.Sequelize;
  sequelize = new Sequelize.Sequelize('postgres://bardb:bardb_pass@127.0.0.1:5432/bardb', 
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