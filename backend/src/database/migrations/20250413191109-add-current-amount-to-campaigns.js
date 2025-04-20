'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('campaigns', 'current_amount', {
      type: Sequelize.DECIMAL,
      defaultValue: 0,
      allowNull: false,
    });
  },
  

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('campaigns', 'current_amount');
  }
};
