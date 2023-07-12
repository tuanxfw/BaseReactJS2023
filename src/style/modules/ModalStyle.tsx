import getColor from "@style/themes/Color";
import styled from "styled-components";

const ModalStyle = styled.div`
  .ant-modal-header {
    margin-bottom: 0px;

    .modal-title {
      width: 100%;
      height: 35px;
      cursor: move;

      background: ${getColor("modal.header.background")};
      color: ${getColor("modal.header.fontColor")};
      border-radius: 6px 6px 0px 0px;

      div {
        width: 100%;
        height: 100%;
        padding-top: 5px;
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }

  .ant-modal-close {
    top: 6px;
    right: 10px;
  }

  .ant-modal-content {
    padding: 0px !important;

    .ant-modal-close-icon {
      color: ${getColor("modal.header.fontColor")};
    }

    .ant-modal-body {
      padding-top: 8px;
      padding-bottom: 8px;
      padding-left: 5px;
      padding-right: 5px;
    }

    .modal-footer {
      text-align: right;

      .ant-btn {
        margin-left: 5px;
      }
    }

    .close-modal {
      background: #888989;
    }
  }
`;

export default ModalStyle;
