import { AppConfig } from "@constants/constants";
import _ from "lodash";

function checkLoginLocal(): boolean {
    const store = localStorage.getItem(AppConfig.VITE_CLIENT);

    if (store) {
        return true;
    }

    return false;
};

function setData(key: string, value: any) {
    let store: any = JSON.parse(_.toString(localStorage.getItem(AppConfig.VITE_CLIENT)) || "{}");

    store[key] = value;

    localStorage.setItem(AppConfig.VITE_CLIENT, JSON.stringify(store));
};

function getData(key: string) {
    let store: any = localStorage.getItem(AppConfig.VITE_CLIENT);

    let result = _.get(JSON.parse(_.toString(store)), key, {});

    return result;
};

function clearData() {
    localStorage.setItem(AppConfig.VITE_CLIENT, "");

    window.dispatchEvent(new Event("storage"));
};

const localStore = {
    checkLoginLocal,
    setData,
    getData,
    clearData
};

export default localStore;

window.addEventListener('storage', (e) => {
    if (!e?.newValue && !checkLoginLocal()) {
        window.location.reload();
    }
});