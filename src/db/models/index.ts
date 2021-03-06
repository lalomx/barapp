// import { Logger } from 'winston';
import { BarServicesDB } from '../../interfaces/BarServicesDB';
import Sequelize from 'sequelize'
import { userFactory } from './User';
import { roleFactory } from './Role';
import config from '../../config';
import { barFactory } from './Bares';
import { inventarioFactory } from './Inventario';
import { menuFactory } from './Menus';
import { personaFactory } from './Persona';
import { productoFactory } from './Productos';
import { inventarioProductosFactory } from './InventarioProductos';
import { inventarioTransaccionsFactory } from './InventarioTransaccion';
import { PersonaProductosFactory } from './PersonaProductos';
import { comandaFactory } from './Comandas';
import { tipoInventarioFactory } from './TipoInventario';
import { granularidadFactory } from './SettingsGranularidad';

export const createDb = (): BarServicesDB => {
  let sequelize: Sequelize.Sequelize;
  sequelize = new Sequelize.Sequelize(process.env.NODE_ENV === 'production' ? config.prod.uri : config.db.uri, 
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
    Role: roleFactory(sequelize),
    Bar: barFactory(sequelize),
    Inventario: inventarioFactory(sequelize),
    Menu: menuFactory(sequelize),
    Persona: personaFactory(sequelize),
    Producto: productoFactory(sequelize),
    InventarioProducto: inventarioProductosFactory(sequelize),
    PersonaProducto: PersonaProductosFactory(sequelize),
    Comanda: comandaFactory(sequelize),
    TipoInventario: tipoInventarioFactory(sequelize),
    Granularidad: granularidadFactory(sequelize),
    Transaccion: inventarioTransaccionsFactory(sequelize),
  }

  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  return db;
}