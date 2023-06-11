import sizeLayout from "@style/abstracts/SizeLayout";
import getColor from "@style/themes/Color";
import styled from "styled-components";

const FooterStyle = styled.div`
  .ant-layout-footer {
    height: ${sizeLayout.footerHeight};
    padding: 5px 10px 0px 10px;
    background-color: ${getColor("footer.background")};

    display: flex;
    justify-content: space-between;
  }

  .info-field {
    color: ${getColor("footer.fontColor")};
  }

  .lang-field {
    cursor: pointer;
    color: ${getColor("footer.fontColor")};

    i {
      vertical-align: text-bottom;
      font-size: 17px;
      margin-right: 4px;
    }
  }
`;

export default FooterStyle;
