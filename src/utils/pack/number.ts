import { Format } from "@constants/constants";
import _ from "lodash";

const formatToNumberString = (
  valueNumber: any,
  decimalSeparator = Format.NUMBER_SEPARATOR.DECIMAL,
  thousandSeparator = Format.NUMBER_SEPARATOR.THOUSAND,
) => {
  if (!valueNumber) {
    return valueNumber;
  }

  valueNumber += "";
  valueNumber = valueNumber.split(decimalSeparator);

  if (valueNumber[0].length > 3) {
    valueNumber[0] = valueNumber[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + thousandSeparator);
  }
  return valueNumber.join(decimalSeparator);
};

const getValueFromNumberString = (
  stringNumber: any,
  decimalSeparator = Format.NUMBER_SEPARATOR.DECIMAL,
  thousandSeparator = Format.NUMBER_SEPARATOR.THOUSAND,
) => {
  stringNumber += "";
  stringNumber = stringNumber.split(decimalSeparator);

  if (stringNumber[0]) {
    stringNumber[0] = stringNumber[0].replace(thousandSeparator, "");
  }

  return _.toNumber(stringNumber.join("."));
};

const number = {
  formatToNumberString,
  getValueFromNumberString,
};

export default number;
