'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Inventarios', 'tipoId', {
      type: Sequelize.UUID,
      references: {
        model: 'TipoInventarios',
        key: 'id'
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Inventarios', 'tipoId');
  }
};
