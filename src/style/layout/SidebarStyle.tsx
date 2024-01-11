import { AppConfig } from "@constants/constants";
import sizeLayout from "@style/abstracts/SizeLayout";
import { createGlobalStyle } from "styled-components";

const SidebarStyle = createGlobalStyle`
  .ant-drawer-content-wrapper {
    width: ${sizeLayout.sidebarWidth} !important;
  }
  .ant-drawer-body {
    padding: 0px !important;

    background-image: ${`url(${AppConfig.VITE_PUBLIC_URL}/images/background.jpg)`};
    background-repeat: no-repeat;
    background-size: cover;
    background-color: hsla(0, 0%, 99%, 0.95);
    background-blend-mode: overlay;

    .ant-menu{
      background: transparent;
    }
  }

  .title-sidebar {
    display: flex;
    justify-content: space-between;

    margin: -10px;
    
    .logo {
      width: 100%;
      text-align: center;

      img {
        width: auto;
        height: 40px;
      }
    }
    
    button {
      padding: 0px;
      font-size: 25px;
    }
    button:hover {
      background-color: transparent !important;
    }
  }

  
`;

export default SidebarStyle;
