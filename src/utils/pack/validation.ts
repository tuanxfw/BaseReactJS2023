import i18n from "@locales/i18n";
import { objectUtil, stringUtil } from "@utils/commonUtil";
import _ from "lodash";
import * as yup from "yup";

//#region Mixed
declare module "yup" {
  interface MixedSchema {
    required(): yup.MixedSchema;
  }
}

yup.addMethod(yup.mixed, "required", function () {
  return this.test("required", "", function (value: any) {
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
    required(): yup.StringSchema;
    maxLength(length: number): yup.StringSchema;
    maxByte(byte: number): yup.StringSchema;
  }
}

yup.addMethod(yup.string, "required", function (message?: string) {
  return this.test("required", "", function (value: string | undefined | null) {
    const { path, createError } = this;

    if (!_.toString(value).trim()) {
      return createError({
        path,
        message: message || (i18n.t("common:validate.notEmpty") as string),
      });
    }

    return true;
  });
});

yup.addMethod(yup.string, "maxLength", function (length: number) {
  return this.test("required", "", function (value: string | undefined | null) {
    const { path, createError } = this;

    if (_.toString(value).trim() && _.toString(value).trim().length > length) {
      return createError({
        path,
        message: (i18n.t("common:validate.maxLength") as string).replace("{length}", _.toString(length)),
      });
    }

    return true;
  });
});

yup.addMethod(yup.string, "maxByte", function (byte: number) {
  return this.test("required", "", function (value: string | undefined | null) {
    const { path, createError } = this;

    if (_.toString(value).trim() && stringUtil.getBytesString(value?.trim() ?? "") > byte) {
      return createError({
        path,
        message: i18n.t("common:validate.maxByte") as string,
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

yup.addMethod(yup.number, "required", function () {
  return this.test("required", "", function (value: number | undefined | null) {
    const { path, createError } = this;

    if (!value || _.isNaN(value)) {
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
