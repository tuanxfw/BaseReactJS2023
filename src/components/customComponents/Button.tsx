import { forwardRef } from "react";
import { Button as AntdButton } from "antd";
import type { ButtonProps } from "antd";
import ButtonStyle from "@style/modules/ButtonStyle";
import { useWindowWidth } from "@react-hook/window-size";
import { ResponsiveConst } from "@constants/constants";

interface CustomProps extends ButtonProps {
  btnType?: "icon" | "text" | "iconText" | "actionTable";
}

const Button = forwardRef(({ btnType, ...props }: CustomProps, ref: any) => {
  const width = useWindowWidth({ wait: 500 });

  if (btnType === "iconText") {
    return (
      <ButtonStyle>
        <AntdButton ref={ref} {...props} className={(props.className || "") + ` ${btnType}`}>
          {width < ResponsiveConst.md ? "" : props.children}
        </AntdButton>
      </ButtonStyle>
    );
  } else if (btnType === "actionTable") {
    return (
      <ButtonStyle>
        <AntdButton ref={ref} {...props} size="small" className={(props.className || "") + ` ${btnType}`} type="link" />
      </ButtonStyle>
    );
  }

  // "icon" | "text"
  return (
    <ButtonStyle>
      <AntdButton ref={ref} {...props} className={btnType + " " + (props.className || "")} />
    </ButtonStyle>
  );
});

export default Button;

Button.defaultProps = {
  btnType: "text",
};
