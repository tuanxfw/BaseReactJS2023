import sizeLayout from "@style/abstracts/SizeLayout";
import styled from "styled-components";

const BreadcrumbStyle = styled.div`
  height: ${sizeLayout.breadcrumbHeight};

  padding-left: 10px;

  li {
    cursor: pointer;
  }

  .ant-breadcrumb-separator {
    cursor: auto;
  }
`;

export default BreadcrumbStyle;
