'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Inventarios', 'quantity');
  },

  down: (queryInterface, Sequelize) => {
  }
};
