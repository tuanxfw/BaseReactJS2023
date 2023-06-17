import sizeLayout from "@style/abstracts/SizeLayout";
import getColor from "@style/themes/Color";
import styled from "styled-components";

const BodyStyle = styled.div`
  .ant-layout-content {
    height: calc(${sizeLayout.bodyHeight});
    max-width: 100vw;
    padding-left: 5px;
    padding-right: 5px;

    overflow-y: auto;
  }
`;

export default BodyStyle;
