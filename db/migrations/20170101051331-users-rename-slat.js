'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn('users', 'slat', 'salt')
  },

  down: function (queryInterface, Sequelize) {
  }
};
