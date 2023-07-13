import dayjs from "dayjs";
import { default as quarterOfYear } from "dayjs/plugin/quarterOfYear";
import type { Dayjs } from "dayjs";
import { Format } from "@constants/constants";

dayjs.extend(quarterOfYear);

function getCurrent(format: string = Format.DATE_TIME_FORMAT.DATE): string {
  return dayjs().format(format);
}

function dateToString(value: Dayjs | null, format: string = Format.DATE_TIME_FORMAT.DATE): string {
  if (!value) {
    return "";
  }

  const result = dayjs(value).format(format);
  return result;
}

function stringToDate(valueString: string, format: string = Format.DATE_TIME_FORMAT.DATE): Dayjs | null {
  if (!valueString) {
    return null;
  }

  const result = dayjs(valueString, format);
  return result;
}

function changeFormatDateString(valueString: string, currentFormat: string, toFormat: string): string {
  if (!valueString) {
    return "";
  }

  const dateValue = dayjs(valueString, currentFormat);

  const stringValue = dayjs(dateValue).format(toFormat);

  return stringValue;
}

function checkFormat(valueString: string, format: string): boolean {
  if (!valueString) {
    return false;
  }

  return dayjs(valueString, format, true).isValid();
}

const date = {
  getCurrent,
  dateToString,
  stringToDate,
  changeFormatDateString,
  checkFormat,
};

export default date;
