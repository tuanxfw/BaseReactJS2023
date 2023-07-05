import getColor from "@style/themes/Color";
import styled from "styled-components";

const NotFoundStyle = styled.div`
  height: 90vh;
  background-color: ${getColor("notFound.background")};

  padding: 30px;
`;

export default NotFoundStyle;
