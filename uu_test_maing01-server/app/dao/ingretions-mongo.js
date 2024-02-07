"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class IngretionsMongo extends UuObjectDao {

  async createSchema(){
  }

  /*GET*/
  async get(kod){
    let filter = {
      kod: kod
    };
    return await super.findOne(filter);
  }

  /*LIST*/
  async list(dtoIn){
    let filter = {
      kod: Number(dtoIn.kod)
    };
    return await super.find(filter);
  }

}

module.exports = IngretionsMongo;
