import getColor from "@style/themes/Color";
import styled from "styled-components";

const ProcessLoadingStyle = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${getColor("processLoading.backdrop")};

  .ant-spin {
    zoom: 5;

    i {
      color: ${getColor("processLoading.color")};
    }
  }
`;

export default ProcessLoadingStyle;
