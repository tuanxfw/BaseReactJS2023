import sizeLayout from "@style/abstracts/SizeLayout";
import getColor from "@style/themes/Color";
import styled from "styled-components";
import { AppConfig } from "@constants/constants";

const LoginStyle = styled.div`
  .login-page {
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(${AppConfig.PUBLIC_URL}/images/background.jpg);
  }

  .left-layout {
    //background: red;
  }

  .right-layout {
    background: rgba(255, 255, 255, 0.95);

    .login-title {
      margin-top: 10vh;
      width: 100%;
      text-align: center;

      .logo-app {
        height: 18vh;
        background-size: 300px 100px;
        background-repeat: no-repeat;
        background-position: bottom;
        background-image: url(${AppConfig.PUBLIC_URL}/images/logo.png);
      }
    }

    .login-form {
      width: 100%;
      text-align: center;
      padding: 0px 30px 0px 30px;

      .ant-input-affix-wrapper {
        margin-bottom: 15px;
      }

      i {
        margin-right: 3px;
        opacity: 0.8;
      }
    }

    .advance-action {
        width: 100%;
        margin-top: 20px;
        text-align: right;
        cursor: pointer;
        padding-right: 10px;
        color: #4c96f7;
    }
  }
`;

export default LoginStyle;
