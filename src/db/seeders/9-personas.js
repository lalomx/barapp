'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comandas', [{
      id: '3ea56b03-6271-4716-8b22-7369ab6da5bd',
      name: 'Lalo',
      comandaId: 'a74be3c5-a6d5-4729-85f4-9dbefc90aa96',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: '13d4bfe4-33cd-434d-b9b1-6d3745f416e2',
      name: 'Dante',
      comandaId: 'f75f847c-5100-4130-b570-1ebb2b47292d',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'fefb8f47-ec06-4bed-af81-cce0e18b4631',
      name: 'Alberto',
      comandaId: 'f75f847c-5100-4130-b570-1ebb2b47292d',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '43eacc0c-393f-4980-9df7-a4df563a2bd5',
      name: 'Jose Alfredo',
      comandaId: 'f75f847c-5100-4130-b570-1ebb2b47292d',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '39d5cc07-dbd5-4878-8a9a-3378a1b21309',
      name: 'Carlos',
      comandaId: 'f6091fda-de32-438a-80d5-be096c1c32c7',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'b84c2e2c-7827-46e0-9b4d-6998c6ded07c',
      name: 'Sr Velazquez',
      comandaId: 'f6091fda-de32-438a-80d5-be096c1c32c7',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '7c9ce25c-5f97-4604-897e-b06cc2e594aa',
      name: 'Sr Spindola',
      comandaId: 'f6091fda-de32-438a-80d5-be096c1c32c7',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '7719373f-511d-4b71-b16e-f189d4c535ee',
      name: 'Sr Nieto',
      comandaId: 'f6091fda-de32-438a-80d5-be096c1c32c7',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '7719373f-511d-4b71-b16e-f189d4c535ee',
      name: 'Sra Alicia',
      comandaId: 'f6091fda-de32-438a-80d5-be096c1c32c7',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'aff4fe18-0fff-483d-b813-34489634dd6f',
      name: 'Sr Lamadrid',
      comandaId: 'ada641a5-595d-488e-8cd6-423e2da4ef6a',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '4e86790c-816f-4b67-918e-7cccfa11f2c9',
      name: 'Hector',
      comandaId: '9e0ffb37-dd02-4f2e-9ce3-081336662d4e',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '6d5bf8e0-13e2-41dc-be9b-a9c14493468a',
      name: 'Mariana',
      comandaId: '9e0ffb37-dd02-4f2e-9ce3-081336662d4e',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comandas', null, {});
  }
};
