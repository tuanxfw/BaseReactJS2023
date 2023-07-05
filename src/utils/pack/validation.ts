import i18n from "@locales/i18n";
import { objectUtil } from "@utils/commonUtil";
import _ from "lodash";
import * as yup from "yup";

//#region Mixed
declare module "yup" {
  interface MixedSchema {
    notEmpty(): yup.MixedSchema;
  }
}

yup.addMethod(yup.mixed, "notEmpty", function () {
  return this.test("notEmpty", "", function (value: any) {
    const { path, createError } = this;

    if (objectUtil.isEmptyValue(value)) {
      return createError({
        path,
        message: i18n.t("common:validate.notEmpty") as string,
      });
    }

    return true;
  });
});
//#endregion

//#region String
declare module "yup" {
  interface StringSchema {
    notEmpty(): yup.StringSchema;
  }
}

yup.addMethod(yup.string, "notEmpty", function () {
  return this.test("notEmpty", "", function (value: any) {
    const { path, createError } = this;

    if (_.isEmpty(value)) {
      return createError({
        path,
        message: i18n.t("common:validate.notEmpty") as string,
      });
    }

    return true;
  });
});
//#endregion

//#region Number
declare module "yup" {
  interface NumberSchema {
    notEmpty(): yup.NumberSchema;
  }
}

yup.addMethod(yup.number, "notEmpty", function () {
  return this.test("notEmpty", "", function (value: any) {
    const { path, createError } = this;

    if (!_.toString(value)) {
      return createError({
        path,
        message: i18n.t("common:validate.notEmpty") as string,
      });
    }

    return true;
  });
});
//#endregion

export default yup;
