"use strict";
const NutritionsAbl = require("../../abl/nutritions-abl.js");

class NutritionsController {

  get(ucEnv) {
    console.log(ucEnv.getDtoIn());
    return NutritionsAbl.get(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  list(ucEnv) {
    return NutritionsAbl.list(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  nutritions(ucEnv) {
    return NutritionsAbl.nutritions(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new NutritionsController();
