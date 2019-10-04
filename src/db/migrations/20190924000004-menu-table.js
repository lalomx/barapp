'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Menus', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      menuName: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Menus');
  }
};
