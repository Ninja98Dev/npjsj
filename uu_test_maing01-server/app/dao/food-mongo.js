"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class FoodMongo extends UuObjectDao {

  async createSchema(){
  }

}

module.exports = FoodMongo;
