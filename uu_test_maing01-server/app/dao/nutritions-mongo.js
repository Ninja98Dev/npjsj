"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class NutritionsMongo extends UuObjectDao {

  async createSchema(){
  }

  /*GET*/
  async get(kod){
    let filter = {
      kod: kod,
    };
    return await super.findOne(filter);
  }

  /*LIST*/
  async list(){
    let filter = {
      
    };
    return await super.find(filter);
  }

}

module.exports = NutritionsMongo;
