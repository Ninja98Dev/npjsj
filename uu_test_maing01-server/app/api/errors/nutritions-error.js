"use strict";

const TestMainUseCaseError = require("./test-main-use-case-error.js");
const NUTRITIONS_ERROR_PREFIX = `${TestMainUseCaseError.ERROR_PREFIX}nutritions/`;

const Nutritions = {
  UC_CODE: `${NUTRITIONS_ERROR_PREFIX}nutritions/`,
  
};

// GET
const Get = {
  UC_CODE: `${NUTRITIONS_ERROR_PREFIX}get/`,

  InvalidDtoIn: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "Invalid input data"
    }
  },

  NutritionsDoesNotExist: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}IngretionGetFailed`;
      this.message = "Nutrition with this id does not exist.";
    }
  },
};

// LIST
const List = {
  UC_CODE: `${NUTRITIONS_ERROR_PREFIX}list/`,

  InvalidDtoIn: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}invalidDtoIn`;
      this.message = "Invalid input data"
    }
  },

  NutritionsListFailed: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}IngretionListFailed`;
      this.message = "Could't reach Nutritions data.";
    }
  },
};

module.exports = {
  Nutritions,
  Get,
  List
};
