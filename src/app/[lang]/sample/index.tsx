import { Col, Row } from "antd";
import { authen, author } from "@routes/privateRoutes";
import DemoButton from "./components/DemoButton";
import DemoMessage from "./components/DemoMessage";
import DemoLoading from "./components/DemoLoading";
import DemoModal from "./components/DemoModal";
import DemoInput from "./components/DemoInput";
import DemoDatePicker from "./components/DemoDatePicker";
import DemoSelect from "./components/DemoSelect";

const Index = (props: any) => {
  return (
    <Row>
      <Col {...{ xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24 }}>
        <DemoButton/>
      </Col>
      <Col {...{ xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24 }}>
        <DemoMessage/>
      </Col>
      <Col {...{ xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24 }}>
        <DemoLoading/>
      </Col>
      <Col {...{ xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24 }}>
        <DemoModal/>
      </Col>
      <Col {...{ xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24 }}>
        <DemoInput/>
      </Col>
      <Col {...{ xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24 }}>
        <DemoDatePicker/>
      </Col>
      <Col {...{ xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24 }}>
        <DemoSelect/>
      </Col>
    </Row>
  );
};

export default authen(Index);
