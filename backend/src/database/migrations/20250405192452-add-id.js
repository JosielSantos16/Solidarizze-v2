// src/database/migrations/xxxx-add-user-id-to-campaigns.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('campaigns', 'user_id', {
      type: Sequelize.UUID,
      allowNull: true, 
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('campaigns', 'user_id');
  }
};
