import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { BarServicesDB } from '../../interfaces/BarServicesDB';
import { ComandaStatus } from '../../interfaces/ComandaStatus';

export interface ComandaAttributes extends Model {
  id: string;
  table: string;
  total: number;
  status: ComandaStatus;
  createdAt?: Date;
  updatedAt?: Date;
};

type ComandaModel = typeof Model &
  (new (values?: object, options?: BuildOptions) => ComandaAttributes) & {
  associate: (model: BarServicesDB) => any;
  createAccountingPeriod: Sequelize;
};

const comandaFactory = (sequalize: Sequelize) => {
  const Comanda = (<ComandaModel>sequalize.define('Comandas', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    table: {
      allowNull: false,
      type: DataTypes.STRING
    },
    total: {
      allowNull: false,
      type: DataTypes.DOUBLE
    },
    status: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  })) as ComandaModel;

  return Comanda;
};

export { comandaFactory, ComandaModel };