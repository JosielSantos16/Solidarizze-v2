'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.addColumn('campaigns', 'is_private', {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
      });
  },

  down: async (queryInterface) => {
      return queryInterface.removeColumn('campaigns', 'is_private');
  }
};
