import getColor from "@style/themes/Color";
import styled from "styled-components";

const DisplayBoxStyle = styled.div`
  margin-bottom: 10px;

  .ant-collapse {
    background-color: ${getColor("displayBox.background")};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    color: ${getColor("displayBox.fontColor")};
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;

export default DisplayBoxStyle;
