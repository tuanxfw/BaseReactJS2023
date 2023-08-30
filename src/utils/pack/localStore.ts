import { AppConfig } from "@constants/constants";
import _ from "lodash";

function checkLoginLocal(): boolean {
  const store = localStorage.getItem(AppConfig.VITE_CLIENT);

  const token = getToken();
  if (store && !_.isEmpty(token)) {
    return true;
  }

  return false;
}

function setToken(value: any) {
  const store: any = JSON.parse(_.toString(localStorage.getItem(AppConfig.VITE_CLIENT)) || "{}");

  const currentTimestamp = Math.floor(Date.now() / 1000); //second

  store["token"] = value;
  store["expireSession"] = currentTimestamp + value["refresh_expires_in"];

  localStorage.setItem(AppConfig.VITE_CLIENT, JSON.stringify(store));
}

function getToken() {
  const store: any = JSON.parse(_.toString(localStorage.getItem(AppConfig.VITE_CLIENT)) || "{}");

  const currentTimestamp = Math.floor(Date.now() / 1000); //second

  const expireToken: any = _.get(store, "expireSession", 0);
  const token: any = _.get(store, "token", {});

  if (currentTimestamp < expireToken) {
    return token;
  }

  return {};
}

function setData(key: string, value: any) {
  const store: any = JSON.parse(_.toString(localStorage.getItem(AppConfig.VITE_CLIENT)) || "{}");

  store[key] = value;

  localStorage.setItem(AppConfig.VITE_CLIENT, JSON.stringify(store));
}

function getData(key: string) {
  const store: any = localStorage.getItem(AppConfig.VITE_CLIENT) || "{}";

  const result = _.get(JSON.parse(_.toString(store)), key, {});

  return result;
}

function clearData() {
  localStorage.setItem(AppConfig.VITE_CLIENT, "");

  window.dispatchEvent(new Event("storage"));
}

const localStore = {
  checkLoginLocal,
  setToken,
  getToken,
  setData,
  getData,
  clearData,
};

export default localStore;

window.addEventListener("storage", (e) => {
  if (!e?.newValue && !checkLoginLocal()) {
    window.location.reload();
  }
});
