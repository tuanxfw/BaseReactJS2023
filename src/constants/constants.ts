/* eslint-disable no-useless-escape */
import { IAppConfig } from "@interface/model/Config";

export const AppConfig: IAppConfig = {
  VITE_MODE: import.meta.env.VITE_MODE,
  VITE_PUBLIC_URL: import.meta.env.VITE_PUBLIC_URL,
  VITE_APP: import.meta.env.VITE_APP,
  VITE_AUTH_URL_API: import.meta.env.VITE_AUTH_URL_API,
  VITE_BUSINESS_URL_API: import.meta.env.VITE_BUSINESS_URL_API,
  ...(window as any).globalConfig,
};

export const Component = {
  DATATABLE: {
    PAGE_SIZE_DEFAULT: 10,
  },
};

export const Action = {
  VIEW: "VIEW",
  INSERT: "INSERT",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
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
    // DATE_TIME_ISO_8601: "YYYY-MM-DDTHH:mm:ss",
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
