import LabelStyle from "@style/modules/LabelStyle";
import React from "react";

interface CustomProps {
  required?: boolean;
  children?: any;
}

const Label = (props: CustomProps) => {
  return (
    <LabelStyle>
      <label>
        {props.children}
        {props.required ? <b>*</b> : null}
      </label>
    </LabelStyle>
  );
};

export default Label;
