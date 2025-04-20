'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.sequelize.query(`
        ALTER TABLE donations 
        DROP CONSTRAINT IF EXISTS donations_campaign_id_fkey,
        DROP CONSTRAINT IF EXISTS donations_user_id_fkey
      `, { transaction });

      await queryInterface.sequelize.query(`
        ALTER TABLE campaigns 
        DROP CONSTRAINT IF EXISTS campaigns_user_id_fkey,
        DROP CONSTRAINT IF EXISTS campaigns_category_id_fkey
      `, { transaction });

      await queryInterface.addColumn(
        'campaigns',
        'uuid_new',
        {
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('gen_random_uuid()'),
          allowNull: false
        },
        { transaction }
      );

      await queryInterface.sequelize.query(`
        UPDATE donations d
        SET campaign_id = c.uuid_new
        FROM campaigns c
        WHERE d.campaign_id::text = c.id::text
      `, { transaction });

      await queryInterface.removeColumn('campaigns', 'id', { transaction });
      await queryInterface.renameColumn('campaigns', 'uuid_new', 'id', { transaction });

      await queryInterface.sequelize.query(`
        ALTER TABLE campaigns 
        ADD PRIMARY KEY (id),
        ADD CONSTRAINT campaigns_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id),
        ADD CONSTRAINT campaigns_category_id_fkey FOREIGN KEY (category_id) REFERENCES categories(id)
      `, { transaction });

      await queryInterface.sequelize.query(`
        ALTER TABLE donations 
        ADD CONSTRAINT donations_campaign_id_fkey FOREIGN KEY (campaign_id) REFERENCES campaigns(id),
        ADD CONSTRAINT donations_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id)
      `, { transaction });
    });
  },

  async down(queryInterface) {
  }
};