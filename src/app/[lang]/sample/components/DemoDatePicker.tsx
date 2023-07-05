import { Col, Row } from "antd";
import {
  CommonDatePicker,
  CommonLabel,
  DisplayBox,
} from "@components/CommonComponent";

const DemoDatePicker = () => {
  return (
    <>
      <DisplayBox title={"Date picker"} isOpen={false}>
        <Row>
          <Col
            className="col-space"
            {...{ xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 24 }}
          >
            <CommonLabel>Time</CommonLabel>
            <CommonDatePicker pickerType="time" />
          </Col>
          <Col
            className="col-space"
            {...{ xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 24 }}
          >
            <CommonLabel>Date</CommonLabel>
            <CommonDatePicker />
          </Col>
          <Col
            className="col-space"
            {...{ xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 24 }}
          >
            <CommonLabel>Datetime</CommonLabel>
            <CommonDatePicker pickerType="datetime" />
          </Col>
          <Col
            className="col-space"
            {...{ xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 24 }}
          >
            <CommonLabel>Week</CommonLabel>
            <CommonDatePicker pickerType="week" />
          </Col>
          <Col
            className="col-space"
            {...{ xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 24 }}
          >
            <CommonLabel>Month</CommonLabel>
            <CommonDatePicker pickerType="month" />
          </Col>
          <Col
            className="col-space"
            {...{ xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 24 }}
          >
            <CommonLabel>Quarter</CommonLabel>
            <CommonDatePicker pickerType="quarter" />
          </Col>
          <Col
            className="col-space"
            {...{ xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 24 }}
          >
            <CommonLabel>Year</CommonLabel>
            <CommonDatePicker pickerType="year" />
          </Col>
        </Row>
      </DisplayBox>
    </>
  );
};

export default DemoDatePicker;
