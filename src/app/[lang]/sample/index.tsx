import { Col, Row } from "antd";
import { authen } from "@routes/privateRoutes";
import DemoButton from "./components/DemoButton";
import DemoMessage from "./components/DemoMessage";
import DemoLoading from "./components/DemoLoading";
import DemoModal from "./components/DemoModal";
import DemoInput from "./components/DemoInput";
import DemoDatePicker from "./components/DemoDatePicker";
import DemoSelect from "./components/DemoSelect";
import DemoDataGrid from "./components/DemoDataGrid";
import { useEffect } from "react";
import { create } from "zustand";
import DemoForm from "./components/DemoForm";
import DemoLib from "./components/DemoLib";

const Index = () => {
  useEffect(() => {
    //throw new Error("2");
  }, []);

  return (
    <Row>
      <Col {...{ xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24 }}>
        <DemoLib />
      </Col>
      <Col {...{ xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24 }}>
        <DemoButton />
      </Col>
      <Col {...{ xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24 }}>
        <DemoMessage />
      </Col>
      <Col {...{ xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24 }}>
        <DemoLoading />
      </Col>
      <Col {...{ xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24 }}>
        <DemoModal />
      </Col>
      <Col {...{ xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24 }}>
        <DemoInput />
      </Col>
      <Col {...{ xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24 }}>
        <DemoDatePicker />
      </Col>
      <Col {...{ xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24 }}>
        <DemoSelect />
      </Col>
      <Col {...{ xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24 }}>
        <DemoDataGrid />
      </Col>
      <Col {...{ xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24 }}>
        <DemoForm />
      </Col>
    </Row>
  );
};

export default authen(Index);

interface MyStore {
  myStore: number;
  setMyStore: (input: number) => void;
}

const useMyStore = create<MyStore>()((set) => ({
  myStore: 1,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setMyStore: (input: number) => set((state: any) => ({ myStore: input })),
}));

export { useMyStore };
