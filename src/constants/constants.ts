/* eslint-disable no-useless-escape */
import { IAppConfig } from "@interface/Config";

export const AppConfig: IAppConfig = {
  VITE_MODE: import.meta.env.VITE_MODE,
  VITE_PUBLIC_URL: import.meta.env.VITE_PUBLIC_URL,
  VITE_REALM: import.meta.env.VITE_REALM,
  VITE_CLIENT: import.meta.env.VITE_CLIENT,
  VITE_AUTH_URL_API: import.meta.env.VITE_AUTH_URL_API,
  VITE_BUSINESS_URL_API: import.meta.env.VITE_BUSINESS_URL_API,
  VITE_CLIENT_SECRET: import.meta.env.VITE_CLIENT_SECRET,
  ...(window as any).globalConfig,
};

export const Format = {
  DATE_TIME_FORMAT: {
    TIME: "HH:mm:ss",
    DATE: "DD/MM/YYYY",
    DATE_TIME: "DD/MM/YYYY HH:mm:ss",
    WEEK: "ww",
    MONTH: "MM",
    QUARTER: "Q",
    YEAR: "YYYY",
    // DATE_ISO_8601: "YYYY-MM-DD",
    // DATE_TIME_ISO_8601: "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]",
  },

  REGEX: {
    EMAIL:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    DATE: /^[0-9]{2}[\/]{1}[0-9]{2}[\/]{1}[0-9]{4}$/g,
    URL: /^http[s]?:\/\/(www\.)?(.*)?\/?(.)*/i,
    FILE_NAME: /^[a-z0-9+áàạảãâấầậẩẫăắằặẳẵéèẹẻẽêếềệểễóòọỏõôốồộổỗơớờợởỡúùụủũưứừựửữíìịỉĩđýỳỵỷỹ_ \-()]+\.[a-z0-9]+$/i,
  },

  NUMBER_SEPARATOR: {
    DECIMAL: ".",
    THOUSAND: ",",
  },
};

export const ServicesConst = {
  TIMEOUT_REST_API: undefined,
};

export const ResponsiveConst = {
  xs: 576, // <
  sm: 576, // >=
  md: 768, // >=
  lg: 992, // >=
  xl: 1200, // >=
  xxl: 1400, // >=
};
