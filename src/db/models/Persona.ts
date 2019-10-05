import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { BarServicesDB } from '../../interfaces/BarServicesDB';

export interface PersonaAttributes extends Model {
  id: string;
  name: string;
  comandaId: string;
  createdAt?: Date;
  updatedAt?: Date;
};

type PersonaModel = typeof Model &
  (new (values?: object, options?: BuildOptions) => PersonaAttributes) & {
  associate: (model: BarServicesDB) => any;
};

const personaFactory = (sequalize: Sequelize) => {
  const Persona = (<PersonaModel>sequalize.define('Personas', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    comandaId: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: 'Comandas',
        key: 'id'
      },
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  })) as PersonaModel;

  Persona.associate = (db: BarServicesDB) => {
    Persona.belongsTo(db.Comanda, { foreignKey: { name: 'comandaId' }, as: 'comanda' });
    Persona.belongsToMany(db.Producto, {through: 'PersonaProductos', foreignKey: 'personaId', as: 'productos'})
  };

  return Persona;
};

export { personaFactory, PersonaModel };