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
moneyManager.conversionMoneyCallback = (data) => {
  ApiConnector.convertMoney(data, (resp) => {
    if (resp.success === true) {
      ProfileWidget.showProfile(resp.data);
      moneyManager.setMessage(resp.success, "Работает");
    } else {
      moneyManager.setMessage(resp.success, resp.error);
    }
  });
};

moneyManager.sendMoneyCallback = (data) => {
  ApiConnector.transferMoney(data, (resp) => {
    if (resp.success === true) {
      ProfileWidget.showProfile(resp.data);
      moneyManager.setMessage(resp.success, "Работает");
    } else {
      moneyManager.setMessage(resp.success, resp.error);
    }
  });
};

const favoritesWidget = new FavoritesWidget();
ApiConnector.getFavorites((resp) => {
  if (resp.success === true) {
    favoritesWidget.clearTable();
    favoritesWidget.fillTable(resp.data);
    moneyManager.updateUsersList(resp.data);
  }
});

favoritesWidget.addUserCallback = (data) => {
  ApiConnector.addUserToFavorites(data, (resp) => {
    if (resp.success === true) {
      favoritesWidget.clearTable();
      favoritesWidget.fillTable(resp.data);
      moneyManager.updateUsersList(resp.data);
      favoritesWidget.setMessage(resp.success, "Работает");
    } else {
      favoritesWidget.setMessage(resp.success, resp.error);
    }
  });
};

favoritesWidget.removeUserCallback = (data) => {
  ApiConnector.removeUserFromFavorites(data, (resp) => {
    if (resp.success === true) {
      favoritesWidget.clearTable();
      favoritesWidget.fillTable(resp.data);
      moneyManager.updateUsersList(resp.data);
      favoritesWidget.setMessage(resp.success, "Работает");
    } else {
      favoritesWidget.setMessage(resp.success, resp.error);
    }
  });
};
