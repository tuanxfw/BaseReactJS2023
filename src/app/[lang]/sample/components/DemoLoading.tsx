import {
  CommonButton,
  openProcessLoading,
  closeProcessLoading,
  WrappedLoading,
  CommonInputText,
  DisplayBox,
} from "@components/CommonComponent";
import { Col, Row } from "antd";

const DemoLoading = () => {
  const onClick = (event: any) => {
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
        <Col {...{xxl: 12, xl: 12, lg: 12, md: 12, sm: 12, xs: 12}}>
          <WrappedLoading spinning={true}>
            <CommonInputText />
          </WrappedLoading>
        </Col>
        
        <Col {...{xxl: 12, xl: 12, lg: 12, md: 12, sm: 12, xs: 12}}>
          <WrappedLoading spinning={true}>
            <CommonInputText />
          </WrappedLoading>
        </Col>
      </Row>

      
    </DisplayBox>
  );
};

export default DemoLoading;
