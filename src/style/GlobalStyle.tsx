import { createGlobalStyle } from "styled-components";
import getColor from "@style/themes/Color";

const GlobalStyle = createGlobalStyle`
html {
  overflow-x: hidden;
}

*[hidden] {
  display: none;
}

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

.page-space {
  padding-left: 10px;
  padding-right: 10px;
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

.ant-select-disabled .ant-col, 
.ant-input-affix-wrapper:disabled,
.ant-picker-input input:disabled , 
.ant-input:disabled {
  color: #505050 !important;
}

.form-footer {
  text-align: right;

  padding-left: 5px;
  padding-right: 5px;
  
  button {
    margin-left: 5px;
  }
}

.action-header-table {

  button {
    margin-right: 5px;
    margin-bottom: 5px;
  }
}
`;

export default GlobalStyle;
