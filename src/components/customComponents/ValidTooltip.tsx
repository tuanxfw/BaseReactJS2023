import ValidTooltipStyle from "@style/modules/ValidTooltipStyle";
import _ from "lodash";

const ValidTooltip = (props: any) => {
  return (
    <ValidTooltipStyle>
      <div
        className="tooltip-validate-content"
        hidden={_.isEmpty(props.children)}
      >
        {props.children}
      </div>
    </ValidTooltipStyle>
  );
};

export default ValidTooltip;
