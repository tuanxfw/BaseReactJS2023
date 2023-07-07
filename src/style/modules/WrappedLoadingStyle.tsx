import getColor from "@style/themes/Color";
import styled from "styled-components";

const WrappedLoadingStyle = styled.div`
  .ant-spin {
    i {
      color: ${getColor("wrappedLoading.color")};
      opacity: 60%;
    }
  }
`;

export default WrappedLoadingStyle;
