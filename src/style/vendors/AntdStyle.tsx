import { ResponsiveConst } from "@constants/constants";
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

    .ant-collapse-ghost {
        .ant-collapse-content {
            .ant-collapse-content-box {
                //padding-block: 0px !important;
                padding: 0px;
            }
        }
    }

    .ant-modal-wrap {
        overflow-x: hidden !important;

        @media only screen and (max-width: ${ResponsiveConst.md}px) {
            .ant-modal {
                top: 10px;
            }
        }
    }
`;

export default AntdStyle;
