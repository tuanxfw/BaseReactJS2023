import { createGlobalStyle } from "styled-components";

const AntdStyle = createGlobalStyle`
    .header-select-options {
        text-align: center;
        font-weight: bold;
    }

    .select-options {
        .ant-col {
            padding-left: 8px;
            padding-right: 8px;

            * {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        :nth-child(n+2) {
            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        }
    }
`;

export default AntdStyle;
