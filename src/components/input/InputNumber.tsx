import { forwardRef } from "react";
import { Input } from "antd";
import { NumericFormat } from "react-number-format";
import type {
  NumericFormatProps,
  NumberFormatValues,
} from "react-number-format";
import _ from "lodash";
import { Format } from "@constants/constants";

interface CustomProps
  extends Omit<
    NumericFormatProps,
    "customInput" | "onValueChange" | "onChange"
  > {
  fieldValue?: "formattedValue" | "value" | "floatValue";
  customInput?: any;
  onChange?: (value: string | number | NumberFormatValues) => void;
}

const InputNumber = forwardRef(
  ({ onChange, fieldValue, ...props }: CustomProps, ref: any) => {
    const onValueChange = (values: NumberFormatValues) => {
      if (onChange) {
        let value = fieldValue ? values[fieldValue] : values;
        onChange(value || "");
      }
    };

    return <NumericFormat onValueChange={onValueChange} {...props} />;
  }
);

export default InputNumber;

InputNumber.defaultProps = {
  decimalSeparator: Format.NUMBER_SEPARATOR.DECIMAL,
  thousandSeparator: Format.NUMBER_SEPARATOR.THOUSAND,
  fieldValue: "value",
  customInput: Input,
  onChange: (value) => console.log(value)
};

export const exceptionChar =
  (chars: Array<string> = []) =>
  (values: NumberFormatValues) => {
    let value = _.toString(values["value"]);

    for (let i = 0; i < chars.length; i++) {
      const char = chars[i];

      if (value.includes(char)) {
        return false;
      }
    }

    return true;
  };
