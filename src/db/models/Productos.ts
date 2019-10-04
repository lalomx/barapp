import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { BarServicesDB } from '../../interfaces/BarServicesDB';

export interface ProductoAttributes extends Model {
  id: string;
  name: string;
  type: string;
  precio: number;
  createdAt?: Date;
  updatedAt?: Date;
};

type ProductoModel = typeof Model  &
(new (values?: object, options?: BuildOptions) => ProductoAttributes) & {
  associate: (model: BarServicesDB) => any;
};

const productoFactory = (sequalize: Sequelize) => {
    const Producto = (<ProductoModel>sequalize.define('Productos', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
      },
      name: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      type: {
        allowNull: false,
        type: DataTypes.STRING
      },
      precio: {
        allowNull: false,
        type: DataTypes.DOUBLE
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    })) as ProductoModel;
  
    return Producto;
  };
  
  export { productoFactory, ProductoModel };