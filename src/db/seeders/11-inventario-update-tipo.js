'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.bulkUpdate('Inventarios', {
      tipoId: '48fbfbc0-ceed-4016-90ed-dc129ae00f75'
    },{
      id: 'c4d85884-41b8-4b5f-8ad3-1d35abb5274a',
    }),
    queryInterface.bulkUpdate('Inventarios', {
      tipoId: '48fbfbc0-ceed-4016-90ed-dc129ae00f75'
    },{
      id: 'ec869dc8-6efe-4629-bb2d-d20748e8866b',
    })])
  },
  down: (queryInterface, Sequelize) => {
    return Promise.resolve();
  }
};
