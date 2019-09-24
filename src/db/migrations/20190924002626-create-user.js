'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      username: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      nombre: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      apellido: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      email: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      roleId: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      roleId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'Role'
          },
          key: 'id'
        },
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User');
  }
};