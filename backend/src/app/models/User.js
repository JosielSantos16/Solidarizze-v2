import { Model, DataTypes } from "sequelize";
import bcrypt from 'bcrypt';

class User extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
        unique: true,
        validate: {
          len: [11, 11],
          isNumeric: true
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'users',
      hooks: {
        beforeSave: async (user) => {
          if (user.password) {
            user.password_hash = await bcrypt.hash(user.password, 10);
          }
        }
      }
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Campaign, { 
      foreignKey: 'user_id', 
      as: 'campaigns' 
    });
    this.hasMany(models.Donation, { 
      foreignKey: 'user_id', 
      as: 'donations' 
    });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;