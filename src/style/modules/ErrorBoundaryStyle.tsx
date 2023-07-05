import getColor from "@style/themes/Color";
import styled from "styled-components";

const ErrorBoundaryStyle = styled.div`
  height: 90vh;
  background-color: ${getColor("errorBoundary.background")};

  padding: 30px;

  .ant-card-head {
    background-color: ${getColor("errorBoundary.title.background")};
    color: ${getColor("errorBoundary.title.color")};
  }
`;

export default ErrorBoundaryStyle;
