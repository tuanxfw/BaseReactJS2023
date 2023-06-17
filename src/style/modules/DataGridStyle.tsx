import sizeLayout from "@style/abstracts/SizeLayout";
import getColor from "@style/themes/Color";
import styled from "styled-components";

const DataGridStyle = styled.div`
  /* border: 1px solid ${getColor("table.borderColor")};
  border-radius: 5px;
  padding: 5px; */

  .ant-table-row:hover,
  .ant-table-row-selected,
  .ant-table-row-hover {
    font-weight: bold;
    color: ${getColor("table.borderColor")};
  }

  .ant-table-cell {
    * {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .ant-table-thead {
    .ant-table-cell {
      text-align: center !important;
    }
  }

  .ant-table-tbody {
    .action-cell {
      margin: 0px;
    }
  }

  .pagination-client {
    display: flex;
    justify-content: center;
  }

  .total-field {
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 620px) {
    .total-field *,
    .action-field * {
      display: none;
    }
  }
`;

export default DataGridStyle;
