import { DisplayBox } from "@components/CommonComponent";
import { Typography } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";

const DemoLib = () => {
  return (
    <DisplayBox title={"Lib"} isOpen={false}>
      <a style={{ fontSize: "25px" }} href="https://fontawesome.com/search?o=r&m=free" target="_blank" rel="noreferrer">
        Icon: Fontawesome <i className="fa-solid fa-font-awesome"></i>
      </a>
      <hr />
      <a href="https://ant.design/components/overview/" target="_blank" rel="noreferrer">
        <Typography.Text style={{ fontSize: "25px" }} type="success">
          UI component: Ant Design <AntDesignOutlined />
        </Typography.Text>
      </a>
      <hr />
    </DisplayBox>
  );
};

export default DemoLib;
