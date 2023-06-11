import { forwardRef } from "react";
import { Input } from "antd";
import type { PasswordProps } from "antd/es/input/Password";
import _ from "lodash";

interface CustomProps extends PasswordProps {
  autoTrim?: boolean;
  autoUpper?: boolean;
  autoLower?: boolean;
}

const InputPassword = forwardRef(
  (
    {
      autoTrim,
      autoUpper,
      autoLower,
      value,
      onChange,
      onBlur,
      onKeyPress,
      ...props
    }: CustomProps,
    ref: any
  ) => {
    const customOnChange = (e: any) => {
      let value = e.target.value;

      if (autoUpper) {
        value = value.toUpperCase();
      }

      if (autoLower) {
        value = value.toLowerCase();
      }

      if (onChange) onChange(value);
    };

    const customOnBlur = (e: any) => {
      let value = e.target.value;

      if (autoTrim && _.toString(value) !== "" && value.trim() !== value) {
        if (onChange) onChange(value.trim());
      }

      if (onBlur) onBlur(e);
    };

    const customOnKeyPress = (e: any) => {
      let value = e.target.value;

      if (e.key === "Enter" && autoTrim) {
        if (onChange) onChange(value.trim());
      }

      if (onKeyPress) onKeyPress(e);
    };

    return (
      <Input.Password
        ref={ref}
        {...props}
        value={value}
        onBlur={customOnBlur}
        onChange={customOnChange}
        onKeyPress={customOnKeyPress}
      />
    );
  }
);

export default InputPassword;

InputPassword.defaultProps = {
  autoTrim: true,
  autoUpper: false,
  autoLower: false,
};
