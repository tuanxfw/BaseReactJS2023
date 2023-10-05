import { CommonButton, CommonDataGrid, CommonTooltip, DisplayBox } from "@components/CommonComponent";
import type { ColumnsType } from "@components/CommonComponent";
import { Collapse } from "antd";
import { v4 as uuidv4 } from "uuid";

const DemoDataGrid = () => {
  const data: any[] = [];
  for (let i = 0; i < 20; i++) {
    data.push({
      id: `id-${i}`,
      col1: `cell 1-${i} cell 1-${i} cell 1-${i} cell 1-${i} cell 1-${i} cell 1-${i} cell 1-${i} cell 1-${i} cell 1-${i} cell 1-${i} cell 1-${i}`,
      col2: `cell 2-${i}`,
      col3: `cell 3-${i}`,
      col4: `cell 4-${i}`,
      col5: `cell 5-${i}`,
      col6: `cell 6-${i}`,
      col7: `cell 7-${i}`,
      col8: `cell 8-${i}`,
      col9: `cell 9-${i}`,
      col10: `cell 10-${i}`,
    });
  }

  const columns: ColumnsType = [
    {
      key: uuidv4(),
      title: "#",
      dataIndex: "#",
      width: 70,
      render: (_cell: any, _row: any, index) => <div>{index}</div>,
      fixed: "left",
      align: "center",
    },
    {
      key: uuidv4(),
      title: <i className="fa-solid fa-gear"></i>,
      dataIndex: "col1",
      width: 160,
      render: () => (
        <div>
          <CommonButton btnType="actionTable" icon={<i className="fa-solid fa-eye"></i>} />
          <CommonButton btnType="actionTable" icon={<i className="fa-solid fa-plus"></i>} />
          <CommonButton btnType="actionTable" icon={<i className="fa-solid fa-pen-to-square"></i>} />
          <CommonButton btnType="actionTable" icon={<i className="fa-solid fa-trash-can"></i>} />
        </div>
      ),
      fixed: "left",
      align: "center",
    },
    {
      key: uuidv4(),
      title: <div>Col1</div>,
      dataIndex: "col1",
      width: 200,
      render: (cell: any) => <div>{cell}</div>,
    },
    {
      key: uuidv4(),
      title: "Col2",
      dataIndex: "col2",
      width: 200,
      align: "right",
    },
    {
      key: uuidv4(),
      title: "Col3",
      dataIndex: "col3",
      width: 200,
    },
    {
      key: uuidv4(),
      title: "Col4",
      dataIndex: "col4",
      width: 200,
    },
    {
      key: uuidv4(),
      title: "Col5",
      dataIndex: "col5",
      width: 200,
    },
    {
      key: uuidv4(),
      title: "Col6",
      dataIndex: "col6",
      width: 200,
    },
    {
      key: uuidv4(),
      title: "Col7",
      dataIndex: "col7",
      width: 200,
    },
    {
      key: uuidv4(),
      title: "Col8",
      dataIndex: "col8",
      width: 200,
    },
    {
      key: uuidv4(),
      title: "Col9",
      dataIndex: "col9",
      width: 200,
    },
    {
      key: uuidv4(),
      title: "Col10",
      dataIndex: "col10",
      width: 200,
    },
  ];
  const render: any = columns[1].render;
  columns[1].render = (cell: any, row: any) => <CommonTooltip>{render(cell, row, 0)}</CommonTooltip>;

  return (
    <DisplayBox title={"Data grid"} isOpen={false}>
      <Collapse
        items={[
          {
            key: "grid1",
            label: "Pagination client",
            forceRender: true,
            children: (
              <>
                <CommonDataGrid
                  rowKey={"id"}
                  dataSource={data}
                  columns={columns}
                  rowSelection={{
                    type: "checkbox",
                    //selectedRowKeys
                    onChange: (selectedRowKeys: any, selectedRows: any) => {
                      console.log({ selectedRowKeys, selectedRows });
                    },
                  }}
                />
              </>
            ),
          },
          {
            key: "grid2",
            label: "Pagination api",
            forceRender: true,
            children: (
              <>
                <CommonDataGrid
                  rowKey={"id"}
                  //rowKey={obj => obj.id}
                  paginationType="api"
                  dataSource={data}
                  columns={columns}
                  pagination={{
                    onChange: (page: number, pageSize: number) => console.log({ page, pageSize }),
                    pageSize: 10,
                    total: 2000,
                    current: 2,
                  }}
                />
              </>
            ),
          },
        ]}
      />
    </DisplayBox>
  );
};

export default DemoDataGrid;
