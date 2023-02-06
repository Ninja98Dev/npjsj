"use strict";
const FoodAbl = require("../../abl/food-abl.js");

class FoodController {

  create(ucEnv) {
    return FoodAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new FoodController();
