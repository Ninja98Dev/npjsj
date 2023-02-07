"use strict";
const FoodAbl = require("../../abl/food-abl.js");

class FoodController {

  create(ucEnv) {
    return FoodAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  get(ucEnv) {
    return FoodAbl.get(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  update(ucEnv) {
    return FoodAbl.update(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  list(ucEnv) {
    return FoodAbl.list(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  delete(ucEnv) {
    return FoodAbl.delete(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new FoodController();
