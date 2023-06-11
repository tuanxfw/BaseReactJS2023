import Header from "@components/layout/Header";
import Sidebar from "@components/layout/Sidebar";
import Breadcrumb from "@components/layout/Breadcrumb";
import Body from "@components/layout/Body";
import Footer from "@components/layout/Footer";
import { Layout } from "antd";
import { CommonNotification, CommonProcessLoading } from "@components/CommonComponent";
import ToolTipStyle from "@style/modules/ToolTipStyle";

function CommonLayout(props: any) {
  return (
    <Layout>
      <CommonProcessLoading />
      <CommonNotification/>
      <Header />
      <Breadcrumb />
      <Body>
        <Sidebar />
        {props.children}
      </Body>
      <Footer />
      <ToolTipStyle id="common-tooltip"></ToolTipStyle>
    </Layout>
  );
}

export default CommonLayout;
