"use strict";
const NpjsjMainAbl = require("../../abl/npjsj-main-abl.js");

class NpjsjMainController {
  init(ucEnv) {
    return NpjsjMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return NpjsjMainAbl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return NpjsjMainAbl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
}

module.exports = new NpjsjMainController();
