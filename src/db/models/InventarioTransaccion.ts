import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { BarServicesDB } from '../../interfaces/BarServicesDB';

export interface InventarioProductoAttributes extends Model {
  id: string;
  inventarioId: string;
  tipo: string;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
};

type InventarioTransaccionsModel = typeof Model &
  (new (values?: object, options?: BuildOptions) => InventarioProductoAttributes) & {
  associate: (model: BarServicesDB) => any;
};

const inventarioTransaccionsFactory = (sequalize: Sequelize) => {
  const InventarioTransaccions = (<InventarioTransaccionsModel>sequalize.define('InventarioTransaccions', {
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
    tipo: {
      allowNull: false,
      type: DataTypes.STRING
    },
    quantity: {
      allowNull: false,
      type: DataTypes.DOUBLE
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  })) as InventarioTransaccionsModel;

  InventarioTransaccions.associate = (db: BarServicesDB) => {
    InventarioTransaccions.belongsTo(db.Inventario, { foreignKey: 'inventarioId' })
  };

  return InventarioTransaccions;
};

export { inventarioTransaccionsFactory, InventarioTransaccionsModel };