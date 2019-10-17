'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.removeColumn('addresses','name'),

  down: (queryInterface, Sequelize) => queryInterface.addColumn('addresses','name',Sequelize.INTEGER)
};
