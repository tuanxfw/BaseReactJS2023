import FieldsetStyle from "@style/modules/FieldsetStyle";
import React from "react";

const Fieldset = (props: any) => {
  return (
    <FieldsetStyle>
      <fieldset {...props} className={"common-fieldset " + props.className} />
    </FieldsetStyle>
  );
};

export default Fieldset;
