import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { BarServicesDB } from '../../interfaces/BarServicesDB';

export interface InventarioAttributes extends Model {
  id: string;
  name: string;
  tipoId: string;
  granularity?: string;
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
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    unitPrice: {
      allowNull: false,
      type: DataTypes.DOUBLE
    },
    unitLimit: {
      allowNull: false,
      type: DataTypes.DOUBLE
    },
    granularity: {
      allowNull: true,
      type: DataTypes.STRING
    },
    tipoId: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: 'TipoInventarios',
        key: 'id'
      },
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  })) as InventarioModel;

  Inventario.associate = (db: BarServicesDB) => {
    Inventario.belongsToMany(db.Producto, {through: 'InventarioProductos', foreignKey: 'inventarioId', as: 'productos'});
    Inventario.hasMany(db.Transaccion, { sourceKey: 'id', foreignKey: 'inventarioId',  as: 'transacciones' })
    Inventario.belongsTo(db.TipoInventario, {foreignKey: { name: 'tipoId' }, as: 'tipo' })
  };

  return Inventario;
};

export { inventarioFactory, InventarioModel };