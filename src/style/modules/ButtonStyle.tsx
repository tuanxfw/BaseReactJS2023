import getColor from "@style/themes/Color";
import styled from "styled-components";

const ButtonStyle = styled.span`
  .ant-btn > * {
    pointer-events: none;
  }

  .icon.ant-btn,
  .text.ant-btn,
  .iconText.ant-btn {
    background: ${getColor("button.background")};
    color: ${getColor("button.fontColor")} !important;
    min-width: 40px;
  }

  .icon.ant-btn:disabled,
  .text.ant-btn:disabled,
  .iconText.ant-btn:disabled {
    opacity: 0.7;
  }

  .actionTable.ant-btn {
    color: ${getColor("button.background")} !important;
    width: 22px;
    height: 20px;
    font-size: 14px;
    margin-top: 4px;
    margin-bottom: 4px;
    margin-left: 2px;
    margin-right: 2px;
  }
  .actionTable.ant-btn:hover,
  .actionTable.ant-btn:focus {
    //border-color: ${getColor("button.background")};
    box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
  }
  .actionTable.ant-btn:disabled {
    opacity: 0.2;
  }
`;

export default ButtonStyle;
