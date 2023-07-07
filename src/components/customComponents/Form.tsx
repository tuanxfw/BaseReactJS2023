import { FormHTMLAttributes, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import useFocusError from "@hooks/form/useFocusError";
import useFocusFirstElement from "@hooks/form/useFocusFirstElement";
import useConsoleLog from "@hooks/form/useConsoleLog";
import Label from "./Label";
import ValidTooltip from "./ValidTooltip";

interface CustomProps extends FormHTMLAttributes<HTMLFormElement> {
  errors?: any;
  watch?: any;
}

const Form = ({ errors, watch, ...props }: CustomProps) => {
  const refNameForm = useRef<string>(uuidv4());
  const refClickedElement = useRef<any>(null);

  useFocusFirstElement(refNameForm.current);
  useFocusError(refNameForm.current, errors);
  useConsoleLog(watch);

  const onClickElementForm = (e: any) => {
    const element = e.target;

    if (element.tagName === "BUTTON") {
      refClickedElement.current = element;
    }
  };

  const onSubmit = (e: any) => {
    const fakeEvent = { ...e };
    if (!e?.nativeEvent?.submitter) {
      //handle IOS
      e.preventDefault();
      fakeEvent.nativeEvent = { ...fakeEvent.nativeEvent };
      fakeEvent.nativeEvent.submitter = refClickedElement.current;

      if (props.onSubmit) props.onSubmit(fakeEvent);
    } else {
      if (props.onSubmit) props.onSubmit(e);
    }
  };

  return (
    <form name={refNameForm.current} autoComplete="off" {...props} onClick={onClickElementForm} onSubmit={onSubmit} />
  );
};

interface CustomPropsFormItem {
  children?: any;
  required?: boolean;
  valid?: any;
  label?: any;
}
Form.Item = (props: CustomPropsFormItem) => {
  return (
    <>
      <Label>{props.label}</Label>
      <ValidTooltip>{props.valid}</ValidTooltip>
      <div className={props.valid ? "form-item-valid" : ""}>{props.children}</div>
    </>
  );
};

export default Form;

Form.defaultProps = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  watch: () => {},
};
