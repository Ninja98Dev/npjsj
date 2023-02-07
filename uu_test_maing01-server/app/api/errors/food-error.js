"use strict";

const TestMainUseCaseError = require("./test-main-use-case-error.js");
const FOOD_ERROR_PREFIX = `${TestMainUseCaseError.ERROR_PREFIX}food/`;
/*CREATE*/
const Create = {
  UC_CODE: `${FOOD_ERROR_PREFIX}create/`,

  InvalidDtoIn: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "Invalid input data"
    }
  },

  FoodCreateFaild: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}FoodCreateFailed`;
      this.message = "Creating food by DAQ method create failed";
    }
  },
  
};

/*GET*/
const Get = {
  UC_CODE: `${FOOD_ERROR_PREFIX}get/`,

  InvalidDtoIn: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "Invalid input data"
    }
  },

  FoodDoesNotExist: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}FoodGetFailed`;
      this.message = "Food with this id does not exist.";
    }
  },
};

/*Update*/
const Update = {
  UC_CODE: `${FOOD_ERROR_PREFIX}update/`,

  InvalidDtoIn: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}invalidDtoIn`;
      this.message = "Invalid input data"
    }
  },

  FoodDoesNotExist: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}FoodDoesNotExist`;
      this.message = "Food with this id does not exist."
    }
  },

  FoodUpdateFaild: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}FoodUpdateFailed`;
      this.message = "Updating food by DAQ method create failed";
    }
  },
  
};

/*LIST*/
const List = {
  UC_CODE: `${FOOD_ERROR_PREFIX}list/`,

  InvalidDtoIn: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}invalidDtoIn`;
      this.message = "Invalid input data"
    }
  },

  FoodListFaild: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}FoodListFailed`;
      this.message = "Could't reach food data.";
    }
  },
};

/*DELETE*/
const Delete = {
  UC_CODE: `${FOOD_ERROR_PREFIX}delete/`,

  InvalidDtoIn: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}invalidDtoIn`;
      this.message = "Invalid input data"
    }
  },

  FoodDoesNotExist: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}FoodDoesNotExist`;
      this.message = "Food with this id does not exist."
    }
  },

  FoodDeleteFaild: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}FoodDeleteFailed`;
      this.message = "Deleting food by DAO mehod Delete failed";
    }
  },
};



module.exports = {
  Create,
  Get,
  Delete,
  Update,
  List,
};
