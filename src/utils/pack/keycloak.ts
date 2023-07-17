import {
  LOGIN,
  LOGIN_SSO,
  LOGOUT_SSO,
  USER_MANAGER,
  USER_INFO,
} from "@constants/appPath";
import { AppConfig } from "@constants/constants";
import { localStoreUtil } from "@utils/commonUtil";

const {
  VITE_REALM,
  VITE_CLIENT,
  VITE_CLIENT_SECRET,
  VITE_AUTH_URL_API,
} = AppConfig;

function getBasicAuthToken() {
  return window.btoa(VITE_CLIENT + ":" + VITE_CLIENT_SECRET);
}

function getRedirectUrl() {
  return window.location.href;
}

function getUrlLogin() {
  const template = VITE_AUTH_URL_API + LOGIN.replace("{realm}", VITE_REALM);

  return template;
}

function getUrlUserInfo() {
  const template =
    VITE_AUTH_URL_API + USER_INFO.replace("{realm}", VITE_REALM);

  return template;
}

function getUrlLoginSSO(redirectUrl = window.location.href) {
  redirectUrl = getRedirectUrl() + "?redirectUrl=" + redirectUrl;

  const template =
    VITE_AUTH_URL_API +
    LOGIN_SSO.replace("{realm}", VITE_REALM)
      .replace("{clientId}", VITE_CLIENT)
      .replace("{redirectUrl}", redirectUrl);

  return template;
}

function getUrlLogoutSSO() {
  const template =
    VITE_AUTH_URL_API +
    LOGOUT_SSO.replace("{realm}", VITE_REALM)
      .replace("{idTokenHint}", localStoreUtil.getData("token")["id_token"])
      .replace("{redirectUrl}", window.location.href);

  return template;
}

function getUrlUserManager() {
  const template =
    VITE_AUTH_URL_API + USER_MANAGER.replace("{realm}", VITE_REALM);

  return template;
}

const keycloak = {
  getBasicAuthToken,
  getRedirectUrl,
  getUrlLogin,
  getUrlUserInfo,
  getUrlLoginSSO,
  getUrlLogoutSSO,
  getUrlUserManager,
};

export default keycloak;
