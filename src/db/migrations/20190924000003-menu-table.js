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
        type: Sequelize.STRING
      },
      barId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'Bares',
          key: 'id'
        },
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Menus');
  }
};
