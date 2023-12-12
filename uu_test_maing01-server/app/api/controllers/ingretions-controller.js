"use strict";
const IngretionsAbl = require("../../abl/ingretions-abl.js");

class IngretionsController {

  get(ucEnv) {
    return IngretionsAbl.get(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  list(ucEnv) {
    return IngretionsAbl.list(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  ingretions(ucEnv) {
    return IngretionsAbl.ingretions(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new IngretionsController();
