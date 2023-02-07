"use strict";

const FoodUseCaseError = require("./test-main-use-case-error.js");
const FOOD_ERROR_PREFIX = `${TestMainUseCaseError.ERROR_PREFIX}food/`;

const Create = {
  UC_CODE: `${FOOD_ERROR_PREFIX}create/`,

  InvalidDtoIn: class extends FoodUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "Invalid input data"
    }
  },

  FoodCreateFaild: class extends FoodUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}FoodCreateFailed`;
      this.message = "Creating food by DAQ method create failed";
    }
  },
  
};



module.exports = {
  Create
};
