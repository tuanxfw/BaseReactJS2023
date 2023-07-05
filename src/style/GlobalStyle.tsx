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
`;

export default GlobalStyle;
