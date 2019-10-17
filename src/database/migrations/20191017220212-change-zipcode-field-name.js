'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.renameColumn('addresses', 'zipcode', 'zip_code'),

  down: (queryInterface, Sequelize) => queryInterface.renameColumn('addresses','zip_code','zipcode')
};
