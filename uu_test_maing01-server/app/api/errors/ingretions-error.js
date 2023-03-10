"use strict";

const TestMainUseCaseError = require("./test-main-use-case-error.js");
const INGRETIONS_ERROR_PREFIX = `${TestMainUseCaseError.ERROR_PREFIX}ingretions/`;

const Ingretions = {
  UC_CODE: `${INGRETIONS_ERROR_PREFIX}ingretions/`,
  
};

// GET
const Get = {
  UC_CODE: `${INGRETIONS_ERROR_PREFIX}get/`,

  InvalidDtoIn: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "Invalid input data"
    }
  },

  IngretionDoesNotExist: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}IngretionGetFailed`;
      this.message = "Ingretion with this id does not exist.";
    }
  },
};

// LIST
const List = {
  UC_CODE: `${INGRETIONS_ERROR_PREFIX}list/`,

  InvalidDtoIn: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}invalidDtoIn`;
      this.message = "Invalid input data"
    }
  },

  IngretionListFailed: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}IngretionListFailed`;
      this.message = "Could't reach Ingretion data.";
    }
  },
};

module.exports = {
  Ingretions,
  Get,
  List
};
