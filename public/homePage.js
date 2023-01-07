"use strict";

const logoutButton = new LogoutButton();
LogoutButton.action = () => {
    ApiConnector.logout(location.reload())
  /* if (action === true) return location.reload(); */
};
