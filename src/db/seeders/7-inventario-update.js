'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.bulkUpdate('Inventarios', {
      name: 'Cerveza Victoria'
    },{
      id: 'c4d85884-41b8-4b5f-8ad3-1d35abb5274a',
    }),
    queryInterface.bulkUpdate('Inventarios', {
      name: 'Cerveza Corona'
    },{
      id: 'ec869dc8-6efe-4629-bb2d-d20748e8866b',
    })])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Inventarios', null, {});
  }
};
