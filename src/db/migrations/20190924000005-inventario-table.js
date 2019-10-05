'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Inventarios', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      quantity: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      unitPrice: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      unitLimit: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Inventarios');
  }
};
