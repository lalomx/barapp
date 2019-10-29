'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TipoInventarios', [{
      id: '48fbfbc0-ceed-4016-90ed-dc129ae00f75',
      name: 'Cerveza',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: '0c10ce56-d9b0-4622-9506-f500fac1ed90',
      name: 'Vegetales/Frutas',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 'e60ad931-c972-4557-9fcd-ce06fc5fe2c7',
      name: 'Whisky',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: '21b3b9a8-53a0-4cec-9dc6-c224c9dbc318',
      name: 'Embutidos',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TipoInventarios', null, {});
  }
};
