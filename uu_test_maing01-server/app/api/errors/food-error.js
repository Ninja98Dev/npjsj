"use strict";

const TestMainUseCaseError = require("./test-main-use-case-error.js");
const FOOD_ERROR_PREFIX = `${TestMainUseCaseError.ERROR_PREFIX}food/`;

const Create = {
  UC_CODE: `${FOOD_ERROR_PREFIX}create/`,
  
};

module.exports = {
  Create
};
