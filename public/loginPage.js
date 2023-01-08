"use strict";

const userForm = new UserForm();
userForm.loginFormCallback = (data) => {
  ApiConnector.login(data, (resp) => {
    console.log(resp);
    if (resp.success === true) {
      location.reload();
    } else {
      userForm.setLoginErrorMessage(resp.error);
    }
  });
};

userForm.registerFormCallback = (data) => {
  ApiConnector.register(data, (resp) => {
    console.log(resp);
    if (resp.success === true) {
      location.reload();
    } else {
      userForm.setRegisterErrorMessage(resp.error);
    }
  });
};
