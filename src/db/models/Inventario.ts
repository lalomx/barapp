import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { BarServicesDB } from '../../interfaces/BarServicesDB';

export interface InventarioAttributes extends Model {
  id: string;
  quantity: number;
  unitPrice: number;
  unitLimit: number;
  createdAt?: Date;
  updatedAt?: Date;
};

type InventarioModel = typeof Model &
  (new (values?: object, options?: BuildOptions) => InventarioAttributes) & {
  associate: (model: BarServicesDB) => any;
};

const inventarioFactory = (sequalize: Sequelize) => {
  const Inventario = (<InventarioModel>sequalize.define('Inventarios', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    quantity: {
      allowNull: false,
      type: DataTypes.DOUBLE
    },
    unitPrice: {
      allowNull: false,
      type: DataTypes.DOUBLE
    },
    unitLimit: {
      allowNull: false,
      type: DataTypes.DOUBLE
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  })) as InventarioModel;

  Inventario.associate = (db: BarServicesDB) => {
    Inventario.belongsToMany(db.Producto, {through: 'InventarioProductos', foreignKey: 'inventarioId', as: 'productos'})
  };

  return Inventario;
};

export { inventarioFactory, InventarioModel };