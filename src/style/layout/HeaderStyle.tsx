import { ResponsiveConst } from "@constants/constants";
import sizeLayout from "@style/abstracts/SizeLayout";
import getColor from "@style/themes/Color";
import styled from "styled-components";

const HeaderStyle = styled.div`
  .ant-layout-header {
    height: ${sizeLayout.headerHeight};
    line-height: ${sizeLayout.headerHeight};
    padding-inline: 0px;
    background: none;
  }

  .custom-header {
    height: 100%;
    background: ${getColor("header.background")};
    display: flex;
    justify-content: space-between;
    color: ${getColor("header.fontColor")};
  }

  .left-header {
    width: 70px;
    text-align: center;

    button {
      padding: 0px;
      width: 35px;
      font-size: 18px;
    }

    button:hover {
      color: ${getColor("header.fontColor")};
      border-color: ${getColor("header.fontColor")};
    }
  }

  .center-header {
    display: inherit;
    width: 100%;
    text-align: left;
    margin-right: 20px;

    .logo-app {
      height: 40px;
      margin-top: 5px;
    }

    .title-app {
      font-size: 22px;
      font-weight: 450;
    }
  }

  .right-header {
    text-align: right;
    padding-right: 10px;

    .ant-dropdown-trigger {
      position: absolute;
      right: 0px;
      padding-right: 10px;
      display: -webkit-box;
      cursor: pointer;

      i {
        font-size: 16px;
        margin-right: 5px;
      }
    }
  }

  @media only screen and (max-width: ${ResponsiveConst.sm}px) {
    .center-header {
      display: flex;
      justify-content: center;

      .title-app {
        display: none;
      }
    }

    .right-header {
      .title-dropdown {
        display: none;
      }
    }
  }
`;

export default HeaderStyle;
