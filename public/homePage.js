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

ApiConnector.current((resp) => {
  if (resp.success === true) {
    ProfileWidget.showProfile(resp.data);
  }
});

const ratesBoard = new RatesBoard();

setInterval(() => {
  ApiConnector.getStocks((resp) => {
    if (resp.success === true) {
      ratesBoard.clearTable();
      ratesBoard.fillTable(resp.data);
    }
  });
}, 60000);

const moneyManager = new MoneyManager();

moneyManager.addMoneyCallback = (data) => {
  ApiConnector.addMoney(data, (resp) => {
    if (resp.success === true) {
      ProfileWidget.showProfile(resp.data);
      moneyManager.setMessage(resp.success, "Работает");
    } else {
      moneyManager.setMessage(resp.success, resp.error);
    }
  });

};

