"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/food-error.js");

const WARNINGS = {
  unsupportedKeys:{
    CODE: `${Errors.Create.UC_CODE}unsupportedKeys`
  }
};

class FoodAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("food");
  }

  async create(awid, dtoIn, uuAppErrorMap = {}) {
    let validationResult = this.validatoor("foodCreateDtoInType", dtoIn);

    uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.unsupportedKeys.CODE, Errors.Create.InvalidDtoIn);
  
    let foodResult;
    try{
      foodResult = await this.dao.create({...dtoIn, awid});
    }catch(e){
      throw new Error.Create.FoodCreateFailed({uuAppErrorMap}, e);
    }

    return {
      ...foodResult,
      uuAppErrorMap,
    };
  
  }

}

module.exports = new FoodAbl();
