import BodyStyle from "@style/layout/BodyStyle";
import { Layout } from "antd";

function Body(props: any) {
  return (
    <BodyStyle>
      <Layout.Content>{props.children}</Layout.Content>
    </BodyStyle>
  );
}

export default Body;
