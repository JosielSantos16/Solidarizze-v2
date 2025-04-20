import { Sequelize, Model } from 'sequelize';

class Donation extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4, 
          primaryKey: true,
        },
        amount: Sequelize.DECIMAL,
        donation_date: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        campaign_id: Sequelize.UUID,
        user_id: Sequelize.UUID,
      },
      {
        sequelize,
        tableName: 'donations',
        timestamps: true,
        underscored: true,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Campaign, {
      foreignKey: 'campaign_id',
      as: 'campaign',
      onDelete: 'CASCADE',
    });

    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'donor',
      onDelete: 'SET NULL',
    });
  }
}

export default Donation;
