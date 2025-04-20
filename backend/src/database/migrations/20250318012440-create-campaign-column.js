'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('campaigns', 'path', {
       type: Sequelize.STRING });
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('campaigns', 'path');
     
  }
};
