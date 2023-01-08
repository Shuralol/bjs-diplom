"use strict";

const logoutButton = new LogoutButton();

logoutButton.action = () => {
  ApiConnector.logout((resp) => {
    console.log(resp);
    if (resp.success === true);
    {
      location.reload();
    }
  });
};
