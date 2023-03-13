"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/nutritions-error.js");

const WARNINGS = {

};

class NutritionsAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("nutritions");
  }

  /*GET*/
  async get(awid, dtoIn, uuAppErrorMap ={}) {
    let validationResult = this.validator.validate("nutritionGetDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, Errors.Get.InvalidDtoIn);

    let nutrition = await this.dao.get(dtoIn.kod);

    if (!nutrition){
      throw new Errors.Get.NutritionsDoesNotExist({uuAppErrorMap}, {foodId: dtoIn.id});
    }
    return {
      ...nutrition,
      uuAppErrorMap,
    };

  };
  
  /*LIST*/
  async list(awid, dtoIn, uuAppErrorMap ={}) {
    let validationResult = this.validator.validate("nutritionsListDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, Errors.List.InvalidDtoIn);

    let ingretions;
    try{
      ingretions = await this.dao.list(dtoIn.kod);
    }catch(e){
      throw new Errors.List.NutritionsListFailed({uuAppErrorMap}, e);
    }

    return {
      ...ingretions,
      uuAppErrorMap,
    };
  };

  /*
  async nutritions(asid, dtoIn) {
    
  }
  */
}

module.exports = new NutritionsAbl();
