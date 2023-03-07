"use strict";
const IngretionsAbl = require("../../abl/ingretions-abl.js");

class IngretionsController {

  ingretions(ucEnv) {
    return IngretionsAbl.ingretions(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new IngretionsController();
