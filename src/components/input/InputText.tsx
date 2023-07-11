import { forwardRef } from "react";
import { Input } from "antd";
import type { InputProps } from "antd";
import _ from "lodash";

interface CustomProps extends InputProps {
  autoTrim?: boolean;
  autoUpper?: boolean;
  autoLower?: boolean;
}

const InputText = forwardRef(
  ({ autoTrim, autoUpper, autoLower, value, onChange, onBlur, onKeyDown, ...props }: CustomProps, ref: any) => {
    const customOnChange = (e: any) => {
      let value = e.target.value;

      if (autoUpper) {
        value = value.toUpperCase();
      }

      if (autoLower) {
        value = value.toLowerCase();
      }

      if (onChange) onChange(value || "");
    };

    const customOnBlur = (e: any) => {
      const value = e.target.value;

      if (autoTrim && _.toString(value) !== "" && value.trim() !== value) {
        if (onChange) onChange(value.trim());
      }

      if (onBlur) onBlur(e);
    };

    const customOnKeyDown = (e: any) => {
      const value = e.target.value;

      if (e.key === "Enter" && autoTrim) {
        if (onChange) onChange(value.trim());
      }

      if (onKeyDown) onKeyDown(e);
    };

    return (
      <Input
        ref={ref}
        {...props}
        value={value}
        onBlur={customOnBlur}
        onChange={customOnChange}
        onKeyDown={customOnKeyDown}
      />
    );
  },
);

export default InputText;

InputText.defaultProps = {
  autoTrim: true,
  autoUpper: false,
  autoLower: false,
  onChange: (value) => console.log(value),
};
