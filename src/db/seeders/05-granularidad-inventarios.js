'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SettingsGranularidads', [{
      id: '48d09a11-b184-4006-abf9-6717a9a8cfd3',
      name: 'Unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 'ab11d908-2f2d-422e-9658-3306d9ca8f4a',
      name: 'Botella 355ml',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 'b6b8740d-c140-4c21-b6b1-ea16c33d8138',
      name: 'Botella 750ml',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: '44993568-b79d-4d36-b7d8-39b72c3f7076',
      name: 'Kg',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SettingsGranularidads', null, {});
  }
};
