"use strict";

const userForm = new UserForm();
userForm.loginFormCallback({ user: "oleg", password: "demo" }, (data) =>
  console.log(data)
);

ApiConnector.login({ login: "oleg@demo.ru", password: "demo" }, (response) =>
  console.log(response)
);

location.reload();
