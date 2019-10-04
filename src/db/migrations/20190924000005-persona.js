'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Personas', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      table: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      comandaId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'Comandas',
          key: 'id'
        },
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Personas');
  }
};
