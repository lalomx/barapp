'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comandas', [{
      id: 'a74be3c5-a6d5-4729-85f4-9dbefc90aa96',
      table: 'Barra',
      total: 40,
      status: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'f75f847c-5100-4130-b570-1ebb2b47292d',
      table: '1',
      total: 300,
      status: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'f6091fda-de32-438a-80d5-be096c1c32c7',
      table: '2',
      total: 500,
      status: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'ada641a5-595d-488e-8cd6-423e2da4ef6a',
      table: 'Barra',
      total: 100,
      status: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '9e0ffb37-dd02-4f2e-9ce3-081336662d4e',
      table: '2',
      total: 500,
      status: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comandas', null, {});
  }
};
