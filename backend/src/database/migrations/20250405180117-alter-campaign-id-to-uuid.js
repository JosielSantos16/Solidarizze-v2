'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');

    await queryInterface.addColumn('campaigns', 'uuid_tmp', {
      type: Sequelize.UUID,
      defaultValue: Sequelize.literal('uuid_generate_v4()'),
      allowNull: false,
    });

    await queryInterface.removeColumn('campaigns', 'id');

    await queryInterface.renameColumn('campaigns', 'uuid_tmp', 'id');

    await queryInterface.sequelize.query(`
      ALTER TABLE "campaigns" ADD PRIMARY KEY ("id");
    `);
  },

  async down(queryInterface, Sequelize) {
    console.warn("Essa migration não implementa o down completo.");
  }
};
