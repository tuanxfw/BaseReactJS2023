import {
  CommonButton,
  openProcessLoading,
  closeProcessLoading,
  WrappedLoading,
  CommonInputText,
  DisplayBox,
  CommonTextArea,
} from "@components/CommonComponent";
import { Col, Row } from "antd";

const DemoLoading = () => {
  const onClick = () => {
    openProcessLoading();

    setTimeout(() => {
      closeProcessLoading();
    }, 5000);
  };

  return (
    <DisplayBox title={"Loading"} isOpen={false}>
      <CommonButton btnType="text" onClick={onClick}>
        Show Loading
      </CommonButton>
      <hr />
      <Row>
        <Col className="col-space" {...{ xxl: 12, xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
          <WrappedLoading spinning={true} style={{ zoom: "2" }}>
            <CommonTextArea rows={10} value={"Một văn bản dài nhưng mà ngắn"} />
          </WrappedLoading>
        </Col>

        <Col className="col-space" {...{ xxl: 12, xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
          <WrappedLoading spinning={true}>
            <CommonInputText />
          </WrappedLoading>
        </Col>
      </Row>
    </DisplayBox>
  );
};

export default DemoLoading;
