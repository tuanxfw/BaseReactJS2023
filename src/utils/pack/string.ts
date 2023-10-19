import _ from "lodash";

function compareString(
  targetStr: string,
  str: string,
  mode:
    | "equals"
    | "notEquals"
    | "notContains"
    | "startWith"
    | "endWith"
) {
  let result = false;

  targetStr = _.toLower(_.toString(targetStr));
  str = _.toLower(_.toString(str));

  switch (mode) {
    case "equals":
      result = targetStr === str;
      break;

    case "notEquals":
      result = !(targetStr === str);
      break;

    case "notContains":
      result = !str.includes(targetStr);
      break;

    case "startWith":
      result = _.startsWith(str, targetStr);
      break;

    case "endWith":
      result = _.endsWith(str, targetStr);
      break;

    default: //"contains"
      result = str.includes(targetStr);
      break;
  }

  return result;
}

function getBytesString(value: string) {
  value = _.toString(value);
  const bytes = new Blob([value]).size;

  return bytes
};

const string = {
  compareString,
  getBytesString,
};

export default string;
