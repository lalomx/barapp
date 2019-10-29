'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: '7f0b850a-2978-4e0d-8b82-d988c74c9a3d',
      username: 'barservices',
      password: bcrypt.hashSync('b@rS3rv1s3s', bcrypt.genSaltSync(8)),
      nombre: 'Bar',
      apellido: 'Services',
      roleId: '2b59dfc7-cfa7-4791-92bd-7f1bf3264e81',
      email: 'lalo0892@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 'aecd68f8-acf5-4c00-8d8c-bd881966bd4f',
      username: 'campoamor',
      password: bcrypt.hashSync('b@rS3rv1s3s', bcrypt.genSaltSync(8)),
      nombre: 'Campo',
      apellido: 'Amor',
      roleId: '12b0f054-1a4d-4c24-ac12-95fe695b2c96',
      email: 'lalo0892@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: '14785238-e059-4ab5-9085-7889de683fa0',
      username: 'mesero',
      password: bcrypt.hashSync('b@rS3rv1s3s', bcrypt.genSaltSync(8)),
      nombre: 'Estef',
      apellido: 'Hernandez',
      roleId: '9f991291-617f-4108-982d-e628b81ed68d',
      email: 'lalo0892@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
