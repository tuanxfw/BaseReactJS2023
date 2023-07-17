import { forwardRef } from "react";
import { Input } from "antd";
import type { TextAreaProps } from "antd/es/input/TextArea";
import _ from "lodash";

interface CustomProps extends Omit<TextAreaProps, "value"> {
  autoTrim?: boolean;
  autoUpper?: boolean;
  autoLower?: boolean;
  value?: string | null;
}

const TextArea = forwardRef(
  ({ autoTrim, autoUpper, autoLower, onChange, onBlur, onKeyDown, ...props }: CustomProps, ref: any) => {
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
      <Input.TextArea
        ref={ref}
        {...props}
        value={props.value || props.value === "" ? _.toString(props.value) : undefined}
        onBlur={customOnBlur}
        onChange={customOnChange}
        onKeyDown={customOnKeyDown}
      />
    );
  },
);

export default TextArea;

TextArea.defaultProps = {
  autoTrim: true,
  autoUpper: false,
  autoLower: false,
  onChange: (value) => console.log(value),
};
