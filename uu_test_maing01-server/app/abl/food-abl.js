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
  /* CREATE */
  async create(awid, dtoIn, uuAppErrorMap = {}) {
    let validationResult = this.validator.validate("foodCreateDtoInType", dtoIn);

    uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.unsupportedKeys.CODE, Errors.Create.InvalidDtoIn);
  
    console.log(dtoIn);

    let foodResult;
    try{
      foodResult = await this.dao.create({...dtoIn, awid});
    }catch(e){
      throw new Errors.Create.FoodCreateFailed({uuAppErrorMap}, e);
    }

    return {
      ...foodResult,
      uuAppErrorMap,
    };
  
  };
  /*GET*/
  async get(awid, dtoIn, uuAppErrorMap ={}) {
    let validationResult = this.validator.validate("foodGetDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.unsupportedKeys.CODE, Errors.Get.InvalidDtoIn);

    let food = await this.dao.get(dtoIn);

    if (!food){
      throw new Errors.Get.FoodDoesNotExist({uuAppErrorMap}, {foodId: dtoIn.id});
    }
    return {
      ...food,
      uuAppErrorMap,
    };

  };

  /*UPDATE*/
  async update(awid, dtoIn, uuAppErrorMap ={}) {
    let validationResult = this.validator.validate("foodUpdateDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.unsupportedKeys.CODE, Errors.Update.InvalidDtoIn);

    let food = await this.dao.get(awid,dtoIn.id);
    
    if(!food){
      throw new Errors.Update.FoodDoesNotExist({uuAppErrorMap}, {jokeId: dtoIn.id});
    }
    
    let foodResult;
    try{
      foodResult = await this.dao.update({...dtoIn, awid});
    }catch (e){
      throw new Errors.Update.FoodUpdateFailed({uuAppErrorMap}, e);
    }
    return {
      ...foodResult,
      uuAppErrorMap,
    };

  };
  /*DELETE*/
  async delete(awid, dtoIn, uuAppErrorMap ={}) {
    let validationResult = this.validator.validate("foodDeleteDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.unsupportedKeys.CODE, Errors.Delete.InvalidDtoIn);

    let food = await this.dao.get(awid, dtoIn.id);

    if (!food){
      throw new Errors.Delete.FoodDoesNotExist({uuAppErrorMap}, {foodId: dtoIn.id});
    }

    
    try{
      await this.dao.delete({...dtoIn, awid});
    }catch(e){
      throw new Errors.Delete.FoodDeleteFailed({uuAppErrorMap}, e);
    }
    
    return {
      uuAppErrorMap,
    };

  };
  
  /*LIST*/
  async list(awid, dtoIn, uuAppErrorMap ={}) {
    let validationResult = this.validator.validate("foodListDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.unsupportedKeys.CODE, Errors.Delete.InvalidDtoIn);

    let foodResult;
    try{
      foodResult = await this.dao.list(awid, dtoIn);
    }catch(e){
      throw new Errors.List.FoodListFailed({uuAppErrorMap}, e);
    }

    return {
      ...foodResult,
      uuAppErrorMap,
    };
  };

};


module.exports = new FoodAbl();
