import axios from "axios";
import type { AxiosRequestConfig } from "axios";
import { openProcessLoading, closeProcessLoading } from "@components/customComponents/ProcessLoading";
import { showMessage } from "@components/CommonComponent";
import i18n from "@locales/i18n";
import _ from "lodash";
import queryString from "query-string";
import { keycloakUtil, localStoreUtil, objectUtil } from "@utils/commonUtil";
import { AppConfig, Format, ServicesConst } from "@constants/constants";

interface ConfigRequest {
  queryRes?: string;
  showLoading?: boolean;
  timeout?: number;
  headers?: any;
  request?: AxiosRequestConfig;
}

const instance = axios.create();
instance.interceptors.request.use((config) => {
  const isLogging = localStoreUtil.checkLoginLocal();
  if (!isLogging) {
    alert(i18n.t("common:errors.sessionLoginIsExpired"));

    window.location.reload();

    throw new Error(i18n.t("common:errors.sessionLoginIsExpired") as string);
  }

  return config;
});

const configDefault: ConfigRequest = {
  queryRes: "res.data",
  showLoading: true,
  timeout: ServicesConst.TIMEOUT_REST_API,
};

//#region method
function get(path: string, data?: any, config?: ConfigRequest) {
  let url = genApiUrl(path);
  url = genStringQuery(url, data);

  config = genConfig(config);

  if (config.showLoading) {
    openProcessLoading();
  }

  const requestOptions: AxiosRequestConfig = {
    timeout: config.timeout,
    headers: config.headers,
    ...config.request,
  };

  return instance.get(url, requestOptions).then(handleRestApi(config)).catch(handleException(config));
}

function post(path: string, data?: any, config?: ConfigRequest) {
  const url = genApiUrl(path);
  config = genConfig(config);

  if (config.showLoading) {
    openProcessLoading();
  }

  const requestOptions = {
    timeout: config.timeout,
    headers: config.headers,
    ...config.request,
  };

  return instance.post(url, data, requestOptions).then(handleRestApi(config)).catch(handleException(config));
}

function put(path: string, data?: any, config?: ConfigRequest) {
  const url = genApiUrl(path);
  config = genConfig(config);

  if (config.showLoading) {
    openProcessLoading();
  }

  const requestOptions = {
    timeout: config.timeout,
    headers: config.headers,
    ...config.request,
  };

  return instance.put(url, data, requestOptions).then(handleRestApi(config)).catch(handleException(config));
}

function del(path: string, data?: any, config?: ConfigRequest) {
  let url = genApiUrl(path);
  url = genStringQuery(url, data);

  config = genConfig(config);

  if (config.showLoading) {
    openProcessLoading();
  }

  const requestOptions: AxiosRequestConfig = {
    timeout: config.timeout,
    headers: config.headers,
    ...config.request,
  };

  return instance.delete(url, requestOptions).then(handleRestApi(config)).catch(handleException(config));
}
//#endregion

//#region auth method
function login(path: string, data: any) {
  const url = genApiUrl(path);

  openProcessLoading();

  const requestOptions = {
    timeout: ServicesConst.TIMEOUT_REST_API,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + keycloakUtil.getBasicAuthToken(),
    },
  };

  return axios.post(url, data, requestOptions).then(handleRestApi(configDefault)).catch(handleException(configDefault));
}

// eslint-disable-next-line no-unused-vars
function logout() {
  // const config = genConfig({});
  // let url = genApiUrl(path);
  // showCircleLoading();
  // const requestOptions = {
  //     timeout: config.timeout,
  //     headers: config.headers
  // };
  // return axios.post(url, data, requestOptions).then(handleRestApi(callBackFunc)).catch(handleException);
}
//#endregion

//#region common method

const genConfig = (configOverride?: ConfigRequest) => {
  let config: ConfigRequest = {};

  config = { ...configDefault, ...configOverride };

  const defaultHeader = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStoreUtil.getData("token")?.["access_token"] || "",
  };
  config.headers = { ...defaultHeader, ...configOverride?.headers };

  return config;
};

const genApiUrl = (path: string) => {
  if (Format.REGEX.URL.test(path)) {
    return path;
  }

  const url = AppConfig.VITE_BUSINESS_URL_API.replace(/\/$/, "") + "/" + path.replace(/^\//, "");
  return url;
};

const genStringQuery = (path: string, data: any) => {
  let fullPath = "";

  const url = new URL(path);

  const currentData = queryString.parse(url.search);
  const newData = _.omitBy(data || {}, objectUtil.isEmptyValue);

  const stringQuery = queryString.stringify({ ...currentData, ...newData });

  url.search = stringQuery;

  fullPath = url.origin + url.pathname + url.search;

  return fullPath;
};

const handleRestApi = (config: ConfigRequest) => (res: any) => {
  if (config.showLoading === true) {
    closeProcessLoading();
  }

  const result = _.get({ res }, config.queryRes as string, {});

  return result;
};

const handleException = (config: ConfigRequest) => async (error: any) => {
  if (config.showLoading === true) {
    closeProcessLoading();
  }

  if (error?.response?.status === 401) {
    if (!localStoreUtil.checkLoginLocal()) {
      if (_.get({ error }, "error.response.request.responseURL", "").includes(keycloakUtil.getUrlLogin())) {
        showMessage({
          type: "error",
          message: i18n.t("login:infoLoginiIsValid"),
        });
      } else {
        alert(i18n.t("common:errors.sessionLoginIsExpired"));
        logout();
      }
    } else {
      //refresh token and resend request

      const params = new URLSearchParams();
      params.append("grant_type", "refresh_token");
      params.append("refresh_token", localStoreUtil.getData("token")["refresh_token"]);

      const tokenData = await login(keycloakUtil.getUrlLogin(), params);
      localStoreUtil.setData("token", tokenData);

      error.config.headers["Authorization"] = "Bearer " + localStoreUtil.getData("token")["access_token"];

      const res = await instance(error.config);

      return handleRestApi(config)(res);
    }
  } else if (error?.response?.status === 400 && error?.response?.data?.error === "invalid_grant") {
    alert(i18n.t("common:errors.sessionLoginIsExpired"));
    logout();
  } else {
    console.info(error);
    throw new Error(_.get({ error }, "error.response.data.message", i18n.t("common:errors.exception")));
  }
};

//#endregion

const axiosClient = {
  login,
  logout,

  get,
  post,
  put,
  del,
};

export default axiosClient;
