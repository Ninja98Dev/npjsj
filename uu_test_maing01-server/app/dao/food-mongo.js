"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class FoodMongo extends UuObjectDao {
  async createSchema(){}

  /*CREATE*/
  async create(food) {
    await super.insertOne(food);
  }

  /*GET*/
  async get(awid, id){
    let filter = {
      awid: awid,
      id: id,
    };
    return await super.findOne(filter);
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
  async list(awid){
    let filter = {
      
    };
    return await super.find(filter);
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
