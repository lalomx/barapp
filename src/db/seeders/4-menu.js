'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Menus', [{
      id: '2ebb1103-ef95-45c1-831c-59c1d75d8216',
      menuName: 'General',
      barId: '049b5227-cfeb-4315-b0f4-c86a4656cfcc',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Menus', null, {});
  }
};
