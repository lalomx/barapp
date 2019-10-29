'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('InventarioProductos', [{
      id: '85849fcb-9f77-4d08-a27b-2f6ccefe754b',
      inventarioId: 'c4d85884-41b8-4b5f-8ad3-1d35abb5274a',
      productoId: '8ba4d9f3-0d47-4d3a-8a7a-411eb0f7c235',
      quantity: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'fe95edde-85fb-403f-ac88-609d31c3a32b',
      inventarioId: 'ec869dc8-6efe-4629-bb2d-d20748e8866b',
      productoId: '1b11e17b-f61c-454c-aaed-935ac0bf8f69',
      quantity: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('InventarioProductos', null, {});
  }
};
