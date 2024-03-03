"use strict";
const UserAbl = require("../../abl/user-abl.js");

class UserController {

  check(ucEnv) {
    return UserAbl.check(ucEnv.getDtoIn());
  }
  create(ucEnv) {
    return UserAbl.create(ucEnv.getDtoIn());
  }
  get(ucEnv) {
    return UserAbl.get(ucEnv.getDtoIn());
  }
  update(ucEnv) {
    return UserAbl.update(ucEnv.getDtoIn());
  }
  list(ucEnv) {
    return UserAbl.list(ucEnv.getDtoIn());
  }
  delete(ucEnv) {
    return UserAbl.delete(ucEnv.getDtoIn());
  }

}

module.exports = new UserController();
