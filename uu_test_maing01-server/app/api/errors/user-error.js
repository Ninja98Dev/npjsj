"use strict";

const TestMainUseCaseError = require("./test-main-use-case-error.js");
const USER_ERROR_PREFIX = `${TestMainUseCaseError.ERROR_PREFIX}user/`;

/*CREATE*/
const Check = {
  UC_CODE: `${USER_ERROR_PREFIX}check/`,

  InvalidDtoIn: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "Invalid input data"
    }
  },

  SomethingWentWrong: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}UserCheck`;
      this.message = "Something went wrong"
    }
  }
  
};

/*CREATE*/
const Create = {
  UC_CODE: `${USER_ERROR_PREFIX}create/`,

  InvalidDtoIn: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "Invalid input data"
    }
  },

  UserCreateFaild: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}UserCreateFailed`;
      this.message = "Creating user by DAQ method create failed";
    }
  },
  
};

/*GET*/
const Get = {
  UC_CODE: `${USER_ERROR_PREFIX}get/`,

  InvalidDtoIn: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "Invalid input data"
    }
  },

  UserDoesNotExist: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}UserGetFailed`;
      this.message = "User with this id does not exist.";
    }
  },
};

/*Update*/
const Update = {
  UC_CODE: `${USER_ERROR_PREFIX}update/`,

  InvalidDtoIn: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}invalidDtoIn`;
      this.message = "Invalid input data"
    }
  },

  UserDoesNotExist: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}UserDoesNotExist`;
      this.message = "User with this id does not exist."
    }
  },

  UserUpdateFaild: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}UserUpdateFailed`;
      this.message = "Updating user by DAQ method create failed";
    }
  },
  
};

/*LIST*/
const List = {
  UC_CODE: `${USER_ERROR_PREFIX}list/`,

  InvalidDtoIn: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}invalidDtoIn`;
      this.message = "Invalid input data"
    }
  },

  UserListFailed: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}UserListFailed`;
      this.message = "Could't reach User data.";
    }
  },
};

/*DELETE*/
const Delete = {
  UC_CODE: `${USER_ERROR_PREFIX}delete/`,

  InvalidDtoIn: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}invalidDtoIn`;
      this.message = "Invalid input data"
    }
  },

  UserDoesNotExist: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}UserDoesNotExist`;
      this.message = "User with this id does not exist."
    }
  },

  UserDeleteFaild: class extends TestMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}UserDeleteFailed`;
      this.message = "Deleting User by DAO mehod Delete failed";
    }
  },
};



module.exports = {
  Check,
  Create,
  Get,
  Delete,
  Update,
  List,
};
