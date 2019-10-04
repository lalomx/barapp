'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Comandas', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      table: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      total: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      personasNum: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Comandas');
  }
};
