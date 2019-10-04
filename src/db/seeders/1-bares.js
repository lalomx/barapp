'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bares', [{
      id: '049b5227-cfeb-4315-b0f4-c86a4656cfcc',
      barName: 'Restaurant Bar Campo Amor',
      address: 'Constituyentes. Col Arquitos',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bares', null, {});
  }
};
