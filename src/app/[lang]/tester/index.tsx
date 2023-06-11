import React, { useState } from "react";
import { Checkbox, Col, Radio, Row } from "antd";
import { authen } from "@routes/privateRoutes";
import {
  CommonButton,
  CommonModal,
  CommonLabel,
  DisplayBox,
  CommonInputText,
  CommonInputNumber,
  CommonTextArea,
  CommonDatePicker,
} from "@components/CommonComponent";

function Index(props: any) {
  const [modal, setModal] = useState<any>(null);

  const onClick = (event: any) => {
    let options = {};

    const Modal = CommonModal(TestForm);
    setModal(<Modal title="Sample form" width={"1000px"} options={options} />);
  };

  return (
    <>
      {modal}
      <div>
        <CommonButton onClick={onClick}>Open popup</CommonButton>
      </div>
    </>
  );
}

export default Index;

const TestForm = ({ closeModal, ...props }: any) => {
  return (
    <>
      <Row>
        <Col
          className="col-space"
          {...{ xxl: 8, xl: 8, lg: 8, md: 8, sm: 8, xs: 24 }}
        >
          <CommonLabel>Text</CommonLabel>
          <CommonInputText />
        </Col>

        <Col
          className="col-space"
          {...{ xxl: 8, xl: 8, lg: 8, md: 8, sm: 8, xs: 24 }}
        >
          <CommonLabel>Number</CommonLabel>
          <CommonInputNumber />
        </Col>

        <Col
          className="col-space"
          {...{ xxl: 8, xl: 8, lg: 8, md: 8, sm: 8, xs: 24 }}
        >
          <CommonLabel>TextArea</CommonLabel>
          <CommonTextArea rows={3} />
        </Col>
      </Row>
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
      <Row>
        <Col>
          <Checkbox onChange={e => console.log("checkbox 1", e.target.checked)}>Checkbox 1</Checkbox>
        </Col>
        <Col>
          <Checkbox onChange={e => console.log("checkbox 2", e.target.checked)}>Checkbox 2</Checkbox>
        </Col>
      </Row>
      <Row>
        <Col>
          <Radio.Group onChange={e => console.log(e.target.value)}>
            <Radio value={"radio 1"}>Radio 1</Radio>
            <Radio value={"radio 2"}>Radio 2</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <hr />
      <div style={{ textAlign: "right" }}>
        <CommonButton
          btnType="text"
          onClick={() => alert("Ok submíttt")}
          style={{ marginRight: "10px" }}
        >
          Submit
        </CommonButton>
        <CommonButton
          className="close-modal"
          btnType="text"
          onClick={closeModal}
        >
          Close
        </CommonButton>
      </div>
    </>
  );
};
