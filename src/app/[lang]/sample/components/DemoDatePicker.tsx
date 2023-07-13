import { Col, DatePicker, Row, Space } from "antd";
import { CommonDatePicker, CommonLabel, DisplayBox } from "@components/CommonComponent";
import { InputMask } from "@react-input/mask";
import { dateUtil } from "@utils/commonUtil";
import { useEffect, useState } from "react";
import _ from "lodash";
import styled from "styled-components";

const DemoDatePicker = () => {
  return (
    <>
      <DisplayBox title={"Date picker"} isOpen={false}>
        <Row>
          <Col className="col-space" {...{ xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 24 }}>
            <CommonLabel>Time</CommonLabel>
            <CommonDatePicker pickerType="time" />
          </Col>
          <Col className="col-space" {...{ xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 24 }}>
            <CommonLabel>Date</CommonLabel>
            <CommonDatePicker />
          </Col>
          <Col className="col-space" {...{ xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 24 }}>
            <CommonLabel>Datetime</CommonLabel>
            <CommonDatePicker pickerType="datetime" />
          </Col>
          <Col className="col-space" {...{ xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 24 }}>
            <CommonLabel>Week</CommonLabel>
            <CommonDatePicker pickerType="week" />
          </Col>
          <Col className="col-space" {...{ xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 24 }}>
            <CommonLabel>Month</CommonLabel>
            <CommonDatePicker pickerType="month" />
          </Col>
          <Col className="col-space" {...{ xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 24 }}>
            <CommonLabel>Quarter</CommonLabel>
            <CommonDatePicker pickerType="quarter" />
          </Col>
          <Col className="col-space" {...{ xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 24 }}>
            <CommonLabel>Year</CommonLabel>
            <CommonDatePicker pickerType="year" />
          </Col>
          <Col className="col-space" {...{ xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 24 }}>
            <CommonLabel>DatePicker Custom</CommonLabel>
            <DatePickerCustom />
          </Col>
        </Row>
      </DisplayBox>
    </>
  );
};

export default DemoDatePicker;

const DatePickerCustom = () => {
  const [value, setValue] = useState<any>();
  const [openCalendar, setOpenCalendar] = useState<boolean>();

  useEffect(() => {
    const input: any = document.getElementById("test-test");
    input.value = dateUtil.dateToString(value, "DD/MM/YYYY");
  }, [value]);

  const onInputChange = (e: any, keepWhenWrongFormat = false) => {
    const stringValue = e.target.value;

    if (dateUtil.checkFormat(stringValue, "DD/MM/YYYY")) {
      setValue(dateUtil.stringToDate(stringValue, "DD/MM/YYYY"));
    } else if (!keepWhenWrongFormat) {
      const input: any = document.getElementById("test-test");
      input.value = dateUtil.dateToString(value, "DD/MM/YYYY");
    }
  };

  return (
    <PickerTest onBlur={() => setOpenCalendar(false)}>
      <Space.Compact style={{ width: "100%" }}>
        <InputMask
          id="test-test"
          placeholder="DD/MM/YYYY"
          onBlur={onInputChange}
          onChange={_.debounce((e: any) => onInputChange(e, true), 500)}
          className="ant-input css-dev-only-do-not-override-12upa3x ant-input-compact-item ant-input-compact-first-item"
          mask="DD/MM/YYYY"
          replacement={{ D: /\d/, M: /\d/, Y: /\d/, H: /\d/, m: /\d/, s: /\d/ }}
          showMask
          separate
        />
        <DatePicker
          format={"DD/MM/YYYY"}
          style={{ width: "40px" }}
          inputReadOnly
          changeOnBlur
          allowClear={false}
          value={value}
          onChange={(value: any) => {
            setValue(value);
          }}
          open={openCalendar}
          onOpenChange={() => setOpenCalendar(!openCalendar)}
        />
      </Space.Compact>
    </PickerTest>
  );
};

const PickerTest = styled.div`
  .ant-picker-input {
    input {
      display: none !important;
    }

    span {
      margin-inline-start: 1px;
    }
  }
`;
