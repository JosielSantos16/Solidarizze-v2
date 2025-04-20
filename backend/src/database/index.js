import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';

import User from '../app/models/User.js';
import Campaign from '../app/models/Campaign.js';
import Category from '../app/models/Category.js';
import Donation from '../app/models/Donation.js';

const models = [User, Campaign, Category, Donation];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate?.(this.connection.models)); 
  }
}

export default new Database();
