'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Inventarios', [{
      id: 'c4d85884-41b8-4b5f-8ad3-1d35abb5274a',
      unitPrice: 5,
      unitLimit: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 'ec869dc8-6efe-4629-bb2d-d20748e8866b',
      unitPrice: 5,
      unitLimit: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Inventarios', null, {});
  }
};
