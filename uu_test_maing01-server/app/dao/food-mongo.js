"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class FoodMongo extends UuObjectDao {

  async createSchema(){
  }

  async create(food) {
    await super.insertOne(food);
  }

}

module.exports = FoodMongo;
