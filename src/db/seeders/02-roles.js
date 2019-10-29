'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [{
      id: '2b59dfc7-cfa7-4791-92bd-7f1bf3264e81',
      roleName: 'Admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: '12b0f054-1a4d-4c24-ac12-95fe695b2c96',
      roleName: 'Bar',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: '9f991291-617f-4108-982d-e628b81ed68d',
      roleName: 'Sales',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
