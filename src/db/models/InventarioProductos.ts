import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { BarServicesDB } from '../../interfaces/BarServicesDB';

export interface InventarioProductoAttributes extends Model {
  id: string;
  inventarioId: string;
  productoId: string;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
};

type InventarioProductosModel = typeof Model &
  (new (values?: object, options?: BuildOptions) => InventarioProductoAttributes) & {
  associate: (model: BarServicesDB) => any;
};

const inventarioProductosFactory = (sequalize: Sequelize) => {
  const InventarioProductos = (<InventarioProductosModel>sequalize.define('InventarioProductos', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    inventarioId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    productoId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    quantity: {
      allowNull: false,
      type: DataTypes.DOUBLE
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  })) as InventarioProductosModel;

  InventarioProductos.associate = (db: BarServicesDB) => {
    InventarioProductos.belongsTo(db.Producto, { foreignKey: 'productoId' })
    InventarioProductos.belongsTo(db.Inventario, { foreignKey: 'inventarioId' })
  };

  return InventarioProductos;
};

export { inventarioProductosFactory, InventarioProductosModel };