import { Sequelize, Model } from 'sequelize';

class Campaign extends Model {
    static init(sequelize) {
        super.init(
            {
                title: Sequelize.STRING,
                description: Sequelize.TEXT,
                goal_amount: Sequelize.DECIMAL,
                current_amount: Sequelize.DECIMAL,
                end_date: Sequelize.DATE,
                photo: Sequelize.STRING,
                path: Sequelize.STRING,
                is_private: Sequelize.BOOLEAN,
                url: {
                    type: Sequelize.VIRTUAL,
                    get() {
                        return this.path ? `http://localhost:3001/campaign-file/${this.path}` : null;
                    },
                },
            },
            {
                sequelize,
                tableName: 'campaigns',
                paranoid: true,
                underscored: true,
                defaultScope: {
                    where: {
                        end_date: {
                            [Sequelize.Op.gt]: new Date()
                        }
                    }
                },
                scopes: {
                    all: {
                        where: {}
                    },
                    public: {
                        where: {
                            is_private: false,
                            end_date: {
                                [Sequelize.Op.gt]: new Date()
                            }
                        }
                    }
                }
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Category, {
            foreignKey: 'category_id',
            as: 'category',
            onDelete: 'SET NULL'
        });

        this.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'organizer',
            onDelete: 'CASCADE'
        });
    }
}

export default Campaign;
