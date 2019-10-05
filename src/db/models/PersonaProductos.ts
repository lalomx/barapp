import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { BarServicesDB } from '../../interfaces/BarServicesDB';

export interface PersonaProductoAttributes extends Model {
  id: string;
  personaId: string;
  productoId: string;
  createdAt?: Date;
  updatedAt?: Date;
};

type PersonaProductosModel = typeof Model &
  (new (values?: object, options?: BuildOptions) => PersonaProductoAttributes) & {
  associate: (model: BarServicesDB) => any;
};

const PersonaProductosFactory = (sequalize: Sequelize) => {
  const PersonaProductos = (<PersonaProductosModel>sequalize.define('PersonaProductos', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    personaId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    productoId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  })) as PersonaProductosModel;

  PersonaProductos.associate = (db: BarServicesDB) => {
    PersonaProductos.belongsTo(db.Producto, { foreignKey: 'productoId', as: 'producto' })
    PersonaProductos.belongsTo(db.Persona, { foreignKey: 'personaId', as: 'persona' })
  };

  return PersonaProductos;
};

export { PersonaProductosFactory, PersonaProductosModel };
