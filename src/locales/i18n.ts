import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import dictionary from "./dictionary";
import { AppConfig } from "@constants/constants";
import _ from "lodash";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(Backend)
  .init({
    returnNull: false,
    returnEmptyString: true,
    react: {
      useSuspense: false
    },
    fallbackLng: dictionary[0].ns,
    debug: false,
    lng: dictionary[0].ns,
    ns: "common",
    defaultNS: "common",

    backend: {
      // for all available options read the backend's repository readme file
      loadPath: AppConfig.VITE_PUBLIC_URL + '/locales/{{lng}}/{{ns}}.json'
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

export default i18n;

export const getCurrentLocale = (pathname: string): any => {
  const locales = dictionary;

  pathname = _.endsWith(location.pathname, "/")
    ? location.pathname
    : location.pathname + "/";

  let currentLocale;

  for (let index = 0; index < locales.length; index++) {
    if (pathname.startsWith(`${AppConfig.VITE_PUBLIC_URL}/${locales[index].ns}/`)) {
      currentLocale = locales[index];
      break;
    }
  }

  return currentLocale;
};

export const checkLocale = (currentLocation: Location) => {
  const locales = dictionary;

  const locale = getCurrentLocale(currentLocation.pathname)?.ns;

  if (!locale) {
    //navigate(`/${locales[0]}${pathname}`)
    window.location.href = `${AppConfig.VITE_PUBLIC_URL}/${locales[0].ns}${currentLocation.pathname}`;
  }
};
