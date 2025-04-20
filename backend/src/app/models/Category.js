import { Sequelize, Model } from 'sequelize';

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'categories',
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Campaign, {
      foreignKey: 'category_id',
      as: 'campaigns',
    });
  }
}

export default Category;
