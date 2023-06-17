import Header from "@components/layout/Header";
import Sidebar from "@components/layout/Sidebar";
import Breadcrumb from "@components/layout/Breadcrumb";
import Body from "@components/layout/Body";
import Footer from "@components/layout/Footer";
import { Layout } from "antd";
import ToolTipStyle from "@style/modules/ToolTipStyle";

function CommonLayout(props: any) {
  return (
    <>
      <Layout>
        <Header />
        <Breadcrumb />
        <Body>
          <Sidebar />
          {props.children}
        </Body>
        <Footer />
      </Layout>
      <ToolTipStyle id="common-tooltip"></ToolTipStyle>
    </>
  );
}

export default CommonLayout;
