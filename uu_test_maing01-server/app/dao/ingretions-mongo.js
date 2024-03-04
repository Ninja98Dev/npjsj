"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class IngretionsMongo extends UuObjectDao {

  async createSchema(){
  }

  /*GET*/
  async get(dtoIn){
    return await super.findOne(dtoIn);
  }

  /*LIST*/
  async list(dtoIn){
    return await super.find(dtoIn);
  }

}

module.exports = IngretionsMongo;
