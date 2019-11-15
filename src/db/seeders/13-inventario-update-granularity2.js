'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.bulkUpdate('Inventarios', {
      granularity: '48d09a11-b184-4006-abf9-6717a9a8cfd3'
    })])
  },
  down: (queryInterface, Sequelize) => {
    return Promise.resolve();
  }
};
