'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Productos', [{
      id: '8ba4d9f3-0d47-4d3a-8a7a-411eb0f7c235',
      name: 'Cerveza Victoria',
      type: 'Cerveza',
      precio: '20',
      menuId: '2ebb1103-ef95-45c1-831c-59c1d75d8216',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '1b11e17b-f61c-454c-aaed-935ac0bf8f69',
      name: 'Cerveza Corona',
      type: 'Cerveza',
      precio: '20',
      menuId: '2ebb1103-ef95-45c1-831c-59c1d75d8216',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Productos', null, {});
  }
};
