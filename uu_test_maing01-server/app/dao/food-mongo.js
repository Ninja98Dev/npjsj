"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class FoodMongo extends UuObjectDao {
  async createSchema(){}

  /*CREATE*/
  async create(food) {
    await super.insertOne(food);
  }

  /*GET*/
  async get(dtoIn){
    return await super.findOne(dtoIn);
  }

   /*UPDATE*/
   async update(food) {
    let filter = {
      awid: food.awid,
      id: food.id
    };
    return await super.findOneAndUpdate(filter, food, "NONE");
  }

  /*LIST*/
  async list(awid, dtoIn){
    let filter = {
      ...dtoIn,
      nazov: { $regex : new RegExp(dtoIn.nazov, "i") },
      kategoria: { $in : dtoIn.kategoria }
    };
    let pageInfo = {
      pageSize : 50
    };
    return await super.find(filter, pageInfo);
  }
  
  /*DELETE*/
  async delete(uuObject){
    let filter = {
      awid: uuObject.awid,
      id: uuObject.id,
    };
    return await super.deleteOne(filter);
  } 

}

module.exports = FoodMongo;
