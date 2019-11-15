'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.bulkUpdate('Inventarios', {
      granularity: 'Unidades'
    })])
  },
  down: (queryInterface, Sequelize) => {
    return Promise.resolve();
  }
};
