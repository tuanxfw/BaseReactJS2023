import { LOGIN, LOGIN_SSO, LOGOUT_SSO, USER_MANAGER } from "@constants/appPath";
import { AppConfig } from "@constants/constants";
import { localStoreUtil } from "@utils/commonUtil";

const { VITE_PUBLIC_URL, VITE_REALM, VITE_CLIENT, VITE_CLIENT_SECRET, VITE_AUTH_URL_API } = AppConfig

function getBasicAuthToken() {
    return window.btoa(VITE_CLIENT + ":" + VITE_CLIENT_SECRET);
};

function getRedirectUrl() {
    return window.location.href;
};

function getUrlLogin() {
    let template = VITE_AUTH_URL_API + LOGIN.replaceAll("{realm}", VITE_REALM);

    return template;
};

function getUrlLoginSSO(redirectUrl = window.location.href) {
    redirectUrl = getRedirectUrl() + "?redirectUrl=" + redirectUrl;

    let template = VITE_AUTH_URL_API + LOGIN_SSO.replaceAll("{realm}", VITE_REALM).replaceAll("{clientId}", VITE_CLIENT).replaceAll("{redirectUrl}", redirectUrl);

    return template;
};

function getUrlLogoutSSO() {
    let template = VITE_AUTH_URL_API + LOGOUT_SSO.replaceAll("{realm}", VITE_REALM).replaceAll("{idTokenHint}", localStoreUtil.getData("token")["id_token"]).replaceAll("{redirectUrl}", window.location.href);

    return template;
};

function getUrlUserManager() {
    let template = VITE_AUTH_URL_API + USER_MANAGER.replaceAll("{realm}", VITE_REALM);

    return template;
};

const keycloak = {
    getBasicAuthToken,
    getRedirectUrl,
    getUrlLogin,
    getUrlLoginSSO,
    getUrlLogoutSSO,
    getUrlUserManager,
};

export default keycloak;
