'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: '7f0b850a-2978-4e0d-8b82-d988c74c9a3d',
      username: 'lalo',
      password: bcrypt.hashSync('lalo', bcrypt.genSaltSync(8)),
      nombre: 'Eduardo',
      apellido: 'Velazquez',
      roleId: '2b59dfc7-cfa7-4791-92bd-7f1bf3264e81',
      email: 'lalo0892@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
