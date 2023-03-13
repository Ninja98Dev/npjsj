"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/ingretions-error.js");

const WARNINGS = {

};

class IngretionsAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("ingretions");
  }

  /*GET*/
  async get(awid, dtoIn, uuAppErrorMap ={}) {
    let validationResult = this.validator.validate("ingretionsGetDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, Errors.Get.InvalidDtoIn);

    let ingretion = await this.dao.get(dtoIn.kod);

    if (!ingretion){
      throw new Errors.Get.IngretionDoesNotExist({uuAppErrorMap}, {foodId: dtoIn.id});
    }
    return {
      ...ingretion,
      uuAppErrorMap,
    };

  };
  
  /*LIST*/
  async list(awid, dtoIn, uuAppErrorMap ={}) {
    let validationResult = this.validator.validate("ingretionsListDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, Errors.List.InvalidDtoIn);

    let ingretions;
    try{
      ingretions = await this.dao.list(dtoIn);
    }catch(e){
      throw new Errors.List.IngretionListFailed({uuAppErrorMap}, e);
    }

    return {
      ...ingretions,
      uuAppErrorMap,
    };
  };

  /*
  async ingretions(awid, dtoIn) {
    
  }
  */
}

module.exports = new IngretionsAbl();
