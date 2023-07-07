import { createGlobalStyle } from "styled-components";
import getColor from "@style/themes/Color";

const GlobalStyle = createGlobalStyle`
body {
    //height: 100vh;
    margin: 0px;
}

::-webkit-scrollbar-track {
  background: ${getColor("scrollbar.background")};
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 0px;
  background-color: ${getColor("scrollbar.color")};
}

.custom-antd-picker {
  width: 100%
}

.col-space {
  padding-left: 5px;
  padding-right: 5px;
}

.form-item-valid {
  .ant-select-selector, 
  .ant-input-affix-wrapper,
  .ant-picker, 
  .ant-input,
  .ant-btn {
    border: 1px solid red !important;
  }
  
  .ant-input-affix-wrapper {
    input {
      border: none !important;
    }
  }
}
`;

export default GlobalStyle;
