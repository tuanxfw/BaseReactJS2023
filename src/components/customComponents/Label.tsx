import LabelStyle from "@style/modules/LabelStyle";
interface CustomProps {
  required?: boolean;
  children?: any;
}

const Label = (props: CustomProps) => {
  return (
    <LabelStyle>
      {props.children}
      {props.required ? <b>*</b> : null}
    </LabelStyle>
  );
};

export default Label;
