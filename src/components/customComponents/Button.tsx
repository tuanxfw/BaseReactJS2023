import { forwardRef } from "react";
import { Button as AntdButton } from "antd";
import type { ButtonProps } from "antd";
import ButtonStyle from "@style/modules/ButtonStyle";

interface CustomProps extends ButtonProps {
  btnType?: "icon" | "text" | "iconText" | "actionTable";
}

const Button = forwardRef(({ btnType, ...props }: CustomProps, ref: any) => {
  if (btnType === "iconText") {
    return (
      <ButtonStyle>
        <AntdButton
          ref={ref}
          {...props}
          className={(props.className || "") + ` ${btnType}`}
        />
      </ButtonStyle>
    );
  } else if (btnType === "actionTable") {
    return (
      <ButtonStyle>
        <AntdButton
          ref={ref}
          {...props}
          size="small"
          className={(props.className || "") + ` ${btnType}`}
          type="link"
        />
      </ButtonStyle>
    );
  }

  // "icon" | "text"
  return (
    <ButtonStyle>
      <AntdButton
        ref={ref}
        {...props}
        className={(props.className || "") + ` ${btnType}`}
      />
    </ButtonStyle>
  );
});

export default Button;

Button.defaultProps = {
  btnType: "text",
};
