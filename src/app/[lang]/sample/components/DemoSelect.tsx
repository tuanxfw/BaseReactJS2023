import { Col, Row } from "antd";
import { CommonLabel, DisplayBox, CommonSelect, CommonTreeSelect, CommonTree } from "@components/CommonComponent";

const DemoSelect = () => {
  const data = [
    {
      value: 1,
      name1: "Dòng 1",
      name2: "Row1 là một 1 dòng rất chi là dàiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
      name3: "1",
    },
    {
      value: 2,
      name1: "Dòng 2",
      name2: "Row2",
      name3: "2",
    },
    {
      value: 3,
      name1: "Dòng 3",
      name2: "Row3",
      name3: "3",
    },
    {
      value: 4,
      name1: "Dòng 4",
      name2: "Row4",
      name3: "4",
    },
  ];

  const treeData = [
    {
      id: "1",
      name: "1",
      children: [
        {
          id: "1.1",
          name: "1.1",
        },
        {
          id: "1.2",
          name: "1.2",
        },
      ],
    },
    {
      id: "2",
      name: "2",
      children: [
        {
          id: "2.1",
          name: "2.1",
          children: [
            {
              id: "2.1.1",
              name: "2.1.1",
            },
            {
              id: "2.1.2",
              name: "2.1.2",
            },
          ],
        },
        {
          id: "2.2",
          name: "2.2",
        },
      ],
    },
  ];

  const sampleFetchData = async () => {
    const result = await fetch("https://randomuser.me/api/?results=20");

    const resultData = await result.json();

    return resultData.results;
  };

  return (
    <>
      <DisplayBox title={"Select"} isOpen={false}>
        <Row>
          <Col
            className="col-space"
            {...{
              xxl: 6,
              xl: 6,
              lg: 6,
              md: 12,
              sm: 12,
              xs: 24,
            }}
          >
            <CommonLabel>Single Column</CommonLabel>
            <CommonSelect
              fieldValue={"value"}
              datalist={data}
              columnOptions={[
                {
                  fieldName: "name1",
                },
              ]}
              onChange={(value, item) =>
                console.log({
                  value,
                  item,
                })
              }
            />
          </Col>

          <Col
            className="col-space"
            {...{
              xxl: 6,
              xl: 6,
              lg: 6,
              md: 12,
              sm: 12,
              xs: 24,
            }}
          >
            <CommonLabel>Multiple Column</CommonLabel>
            <CommonSelect
              fieldValue={"value"}
              datalist={data}
              columnOptions={[
                {
                  fieldName: "name1",
                  header: "Cột 1",
                  width: 8,
                },
                {
                  fieldName: "name2",
                  header: "Cột 2",
                  width: 8,
                },
                {
                  fieldName: "name3",
                  header: "Cột 3",
                  width: 8,
                },
              ]}
            />
          </Col>

          <Col
            className="col-space"
            {...{
              xxl: 6,
              xl: 6,
              lg: 6,
              md: 12,
              sm: 12,
              xs: 24,
            }}
          >
            <CommonLabel>Multiple select</CommonLabel>
            <CommonSelect
              fieldValue={"value"}
              datalist={data}
              columnOptions={[
                {
                  fieldName: "name1",
                },
              ]}
              mode="multiple"
              //isCheckAll={true}
              onChange={(value, item) =>
                console.log({
                  value,
                  item,
                })
              }
            />
          </Col>

          <Col
            className="col-space"
            {...{
              xxl: 6,
              xl: 6,
              lg: 6,
              md: 12,
              sm: 12,
              xs: 24,
            }}
          >
            <CommonLabel>Lazy select</CommonLabel>
            <CommonSelect
              fieldValue={"cell"}
              datalist={sampleFetchData}
              columnOptions={[
                {
                  fieldName: "email",
                },
              ]}
              onChange={(value, item) =>
                console.log({
                  value,
                  item,
                })
              }
            />
          </Col>

          <Col
            className="col-space"
            {...{
              xxl: 6,
              xl: 6,
              lg: 6,
              md: 12,
              sm: 12,
              xs: 24,
            }}
          >
            <CommonLabel>Tree select</CommonLabel>
            <CommonTreeSelect
              treeData={treeData}
              fieldOption={{
                value: "id",
                label: "name",
                child: "children",
              }}
              onChange={(value, item) =>
                console.log({
                  value,
                  item,
                })
              }
            />
          </Col>

          <Col
            className="col-space"
            {...{
              xxl: 24,
              xl: 24,
              lg: 24,
              md: 24,
              sm: 24,
              xs: 24,
            }}
          >
            <CommonLabel>Tree select</CommonLabel>
            <CommonTree
              treeData={treeData}
              fieldOption={{
                value: "id",
                label: "name",
                child: "children",
              }}
              onSelect={(value, item) =>
                console.log({
                  value,
                  item,
                })
              }
            />
          </Col>
        </Row>
      </DisplayBox>
    </>
  );
};

export default DemoSelect;
