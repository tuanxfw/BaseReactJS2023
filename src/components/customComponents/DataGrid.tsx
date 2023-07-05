import DataGridStyle from "@style/modules/DataGridStyle";
import { Table, Pagination } from "antd";
import type { TableProps, PaginationProps } from "antd";
import type { ColumnsType as ColumnsTypeAntd } from "antd/es/table";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

import { useTranslation } from "react-i18next";
import { CommonTooltip } from "@components/CommonComponent";

interface CustomProps extends TableProps<any> {
  paginationType?: "client" | "api";
}

//#region function

//#endregion

const DataGrid = ({ paginationType, ...props }: CustomProps) => {
  const { t } = useTranslation(["dataGrid"]);

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

          return <CommonTooltip>{column.render ? column.render(cell, row, index) : cell}</CommonTooltip>;
        },
        ellipsis: {
          showTitle: false,
        },
      };

      result.push(item);
    });

    return result;
  };

  if (paginationType === "api") {
    return (
      <DataGridStyle>
        <Table {...props} columns={genColumns(props.columns)} pagination={false}></Table>
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
        // rowSelection={{
        //   type: "checkbox",
        // }}
        // footer={() => (
        //   <div className="footer-table">
        //     <div className="total-field">
        //       <div>
        //         {props.dataSource?.length || 0} {t("footer.record")}
        //       </div>
        //     </div>
        //     <div className="pagination-field">
        //       <Pagination
        //         size="default"
        //         showSizeChanger
        //         showLessItems
        //         itemRender={genItemPaging}
        //         //onShowSizeChange={onShowSizeChange}
        //         //defaultCurrent={1}
        //         total={props.dataSource?.length || 0}
        //       />
        //     </div>
        //     <div className="action-field"></div>
        //   </div>
        // )}
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
