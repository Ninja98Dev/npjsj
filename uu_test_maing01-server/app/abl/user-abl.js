"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/user-error.js");

const WARNINGS = {
  unsupportedKeys:{
    CODE: `${Errors.Create.UC_CODE}unsupportedKeys`
  }
};

class UserAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("user");
  }

  /* Check if user is in databse, and return user data */
  async check(dtoIn, uuAppErrorMap = {}){
    let validationResult = this.validator.validate("userCheckDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.unsupportedKeys.CODE, Errors.Check.InvalidDtoIn);

    let user;

    try{
      user = await this.dao.get(dtoIn);
      if(!user){
        dtoIn = {
          ...dtoIn,
          preferences:{
            theme: "#212121",
            color: {
              value: "light-blue",
              cssColor: "linear-gradient(135deg, #4FC3F7 0%, #0288D1 100%)"
            }
          }
        }
        user = await this.dao.create(dtoIn);
      }
    }catch(e){
      throw new Errors.Check.SomethingWentWrong({uuAppErrorMap}, e);
    }

    if(!user.preferences){
      user = {
        ...user,
        preferences: {
          theme: "dark",
          color: "primary"
        }
      }
    }

    return { user, uuAppErrorMap };
  }

  /* CREATE */
  async create(dtoIn, uuAppErrorMap = {}) {
    let validationResult = this.validator.validate("userCreateDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.unsupportedKeys.CODE, Errors.Create.InvalidDtoIn);

    let user;
    try{
      user = await this.dao.create({...dtoIn, awid});
    }catch(e){
      throw Errors.Create.UserCreateFailed({uuAppErrorMap}, e);
    }finally{
      return {
        user,
        uuAppErrorMap
      };
    }
  };

  /*GET*/
  async get(dtoIn, uuAppErrorMap = {}) {
    let validationResult = this.validator.validate("userGetDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.unsupportedKeys.CODE, Errors.Get.InvalidDtoIn);

    let user = await this.dao.get(dtoIn.id);

    if (!user){
      throw new Errors.Get.UserDoesNotExist({uuAppErrorMap}, {_id: dtoIn.id});
    }

    return {
      user,
      uuAppErrorMap,
    };
  };

  /*UPDATE*/
  async update(dtoIn, uuAppErrorMap = {}) {
    let validationResult = this.validator.validate("userUpdateDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.unsupportedKeys.CODE, Errors.Update.InvalidDtoIn);

    let user = await this.dao.get(dtoIn);
    if(!user){
      throw new Errors.Update.UserDoesNotExist({uuAppErrorMap}, {_id: dtoIn.id});
    }
    
    let userResult;
    try{
        userResult = await this.dao.update(dtoIn);
    }catch (e){
      throw new Errors.Update.UserUpdateFailed({uuAppErrorMap}, e);
    }

    return {
      userResult,
      uuAppErrorMap,
    };

  };
  /*DELETE*/
  async delete(dtoIn, uuAppErrorMap = {}) {
    let validationResult = this.validator.validate("userDeleteDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.unsupportedKeys.CODE, Errors.Delete.InvalidDtoIn);

    let user = await this.dao.get(awid, dtoIn.id);

    if (!user){
      throw new Errors.Delete.UserDoesNotExist({uuAppErrorMap}, {userId: dtoIn.id});
    }

    
    try{
      await this.dao.delete({...dtoIn, awid});
    }catch(e){
      throw new Errors.Delete.UserDeleteFailed({uuAppErrorMap}, e);
    }
    
    return {
      uuAppErrorMap,
    };

  };
};


module.exports = new UserAbl();
