import dayjs from "dayjs";
import { default as quarterOfYear } from 'dayjs/plugin/quarterOfYear';
import type { Dayjs } from "dayjs";
import _ from "lodash";
import { Format } from "@constants/constants";

dayjs.extend(quarterOfYear)

function getCurrent(format: string = Format.DATE_TIME_FORMAT.DATE): string {
    return dayjs().format(format);
};

function dateToString(value: Dayjs | null, format: string = Format.DATE_TIME_FORMAT.DATE): string {
    if (!value) {
        return "";
    }

    let result = dayjs(value).format(format);
    return result;
};

function stringToDate(valueString: string, format: string = Format.DATE_TIME_FORMAT.DATE): Dayjs | null {
    if (!valueString) {
        return null;
    }

    let result = dayjs(valueString, format);
    return result;
};

function changeFormatDateString(valueString: string, currentFormat: string, toFormat: string): string {
    if (!valueString) {
        return "";
    }

    let dateValue = dayjs(valueString, currentFormat);

    let stringValue = dayjs(dateValue).format(toFormat);

    return stringValue;
};

const date = {
    getCurrent,
    dateToString,
    stringToDate,
    changeFormatDateString,
};

export default date;