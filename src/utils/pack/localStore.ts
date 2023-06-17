import { AppConfig } from "@constants/constants";

function checkLoginLocal(): boolean {
    const store = localStorage.getItem(AppConfig.APP_CODE);

    if (store) {
        return true;
    }

    return false;
};

function setData(key: string, value: any) {
    let store: any = localStorage.getItem(AppConfig.APP_CODE) || {};

    store[key] = value;

    localStorage.setItem(AppConfig.APP_CODE, JSON.stringify(store));
};

function getData(key: string) {
    let store: any = localStorage.getItem(AppConfig.APP_CODE);

    let result = store[key];

    if (result) {
        result = JSON.parse(result);
    }

    return result;
};

function clearData() {
    localStorage.setItem(AppConfig.APP_CODE, "");

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