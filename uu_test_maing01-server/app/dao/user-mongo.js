"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class UserMongo extends UuObjectDao {
  async createSchema(){}

  /*CREATE*/
  async create(dtoIn) {
    return await super.insertOne(dtoIn);
  }

  /*GET*/
  async get(dtoIn){
    let filter = {
      _id: dtoIn.id,
    };
    return await super.findOne(filter);
  }

   /*UPDATE*/
   async update(dtoIn) {
    let filter = {
      _id: dtoIn.id
    };
    return await super.findOneAndUpdate(filter, dtoIn, "NONE");
  }
  
  /*DELETE*/
  async delete(dtoIn){
    let filter = {
      id: dtoIn.id,
    };
    return await super.deleteOne(filter);
  } 

}

module.exports = UserMongo;
