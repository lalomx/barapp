'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('InventarioTransaccions', [{
      id: '608d1f31-4f20-4826-a2b8-fb3464828021',
      inventarioId: 'c4d85884-41b8-4b5f-8ad3-1d35abb5274a',
      tipo: 'Ingreso',
      quantity: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '616065c9-0a24-4a36-8e5c-4e8da4300832',
      inventarioId: 'ec869dc8-6efe-4629-bb2d-d20748e8866b',
      tipo: 'Ingreso',
      quantity: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('InventarioTransaccions', null, {});
  }
};
