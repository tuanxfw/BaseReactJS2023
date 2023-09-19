import DataGridStyle from "@style/modules/DataGridStyle";
import { Table, Pagination } from "antd";
import type { TableProps, PaginationProps } from "antd";
import type { ColumnsType as ColumnsTypeAntd } from "antd/es/table";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

import { useTranslation } from "react-i18next";
import { CommonTooltip } from "@components/CommonComponent";
import { ResponsiveConst } from "@constants/constants";
import { useEffect, useRef } from "react";

interface CustomProps extends TableProps<any> {
  paginationType?: "client" | "api";
}

//#region function
const genItemPaging = (
  page: number,
  type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
  element: React.ReactNode,
) => {
  let resultElement = null;

  switch (type) {
    case "prev":
      resultElement = (
        <button className="ant-pagination-item-link">
          <i className="fa-solid fa-backward" />
        </button>
      );
      break;

    case "next":
      resultElement = (
        <button className="ant-pagination-item-link">
          <i className="fa-solid fa-forward" />
        </button>
      );
      break;

    default:
      resultElement = element;
      break;
  }

  return resultElement;
};
//#endregion

const DataGrid = ({ paginationType, ...props }: CustomProps) => {
  const { t } = useTranslation(["dataGrid"]);

  const idTable = useRef<string>(props.id || uuidv4());

  useEffect(() => {
    //reload scroll
    const element: any = document.evaluate(
      `//*[@id="${idTable.current}"]//div[@class="ant-table-body"]`,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null,
    ).singleNodeValue;

    element.scrollTop = element.scrollTop + 0;
    element.scrollLeft = element.scrollLeft + 0;
  }, [props.dataSource, props.columns]);

  const genColumns = (columnsData: ColumnsType | undefined) => {
    const result: ColumnsType = [];

    _.map(columnsData, (column) => {
      const item: any = {
        key: uuidv4(),
        ...column,
        render: (cell: any, row: any, index: number) => {
          index = index + 1;

          const pagination = props.pagination as PaginationProps;
          if (paginationType === "api" && pagination.current && pagination.current > 1 && pagination.pageSize) {
            index = index + pagination.pageSize * pagination.current;
          }

          return (
            <CommonTooltip title={window.innerWidth < ResponsiveConst.md ? cell : ""}>
              {column.render ? column.render(cell, row, index) : cell}
            </CommonTooltip>
          );
        },
        ellipsis: {
          showTitle: false,
        },
        fixed: window.innerWidth < ResponsiveConst.md ? null : column.fixed,
      };

      result.push(item);
    });

    return result;
  };

  if (paginationType === "api") {
    return (
      <DataGridStyle>
        <Table {...props} id={idTable.current} columns={genColumns(props.columns)} pagination={false}></Table>
        <ul className="pagination-client ant-pagination ant-table-pagination ant-table-pagination-center">
          <Pagination
            size="default"
            responsive
            showSizeChanger
            showLessItems
            itemRender={genItemPaging}
            defaultCurrent={1}
            showTotal={(total) => (
              <div className="total-field">
                <div>
                  {total} {t("footer.record")}
                </div>
              </div>
            )}
            {...props.pagination}
          />
        </ul>
      </DataGridStyle>
    );
  }

  return (
    <DataGridStyle>
      <Table
        {...props}
        id={idTable.current}
        columns={genColumns(props.columns)}
        pagination={
          props.pagination !== false
            ? {
                position: ["bottomCenter"],
                size: "default",
                responsive: true,
                showSizeChanger: true,
                showLessItems: true,
                itemRender: genItemPaging,
                defaultCurrent: 1,
                showTotal: (total) => (
                  <div className="total-field">
                    <div>
                      {total} {t("footer.record")}
                    </div>
                  </div>
                ),
                showTitle: false,
                ...props.pagination,
              }
            : false
        }
      ></Table>
    </DataGridStyle>
  );
};

export default DataGrid;
export type ColumnsType = ColumnsTypeAntd<any>;

DataGrid.defaultProps = {
  scroll: { x: window.innerWidth, y: "460px" },
  paginationType: "client",
  size: "small",
  bordered: true,
};
