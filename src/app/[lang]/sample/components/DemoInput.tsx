import { Col, Row } from "antd";
import {
  CommonLabel,
  DisplayBox,
  CommonInputText,
  CommonInputNumber,
  CommonTextArea,
  CommonInputPassword,
} from "@components/CommonComponent";

const DemoInput = () => {

  return (
    <>
      <DisplayBox title={"Input"} isOpen={false}>
        <Row>
          <Col
            className="col-space"
            {...{ xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 24 }}
          >
            <CommonLabel>Text</CommonLabel>
            <CommonInputText />
          </Col>
          <Col
            className="col-space"
            {...{ xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 24 }}
          >
            <CommonLabel>Number</CommonLabel>
            <CommonInputNumber />
          </Col>
          <Col
            className="col-space"
            {...{ xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 24 }}
          >
            <CommonLabel>TextArea</CommonLabel>
            <CommonTextArea rows={3} />
          </Col>
          <Col
            className="col-space"
            {...{ xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 24 }}
          >
            <CommonLabel>Password</CommonLabel>
            <CommonInputPassword autoComplete="off"/>
          </Col>
        </Row>
      </DisplayBox>
    </>
  );
};
export default DemoInput;
