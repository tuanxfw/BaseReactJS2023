import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CommonButton, CommonModal, DisplayBox } from "@components/CommonComponent";

const DemoModal = () => {
  const [modal, setModal] = useState<any>(null);

  const onClick = (event: any) => {
    let options = {};

    const Modal = CommonModal(Content1);
    setModal(<Modal title="Test" width={"1000px"} options={options} />);
  };

  return (
    <>
      {modal}
      <DisplayBox title={"Modal"} isOpen={false}>
        <CommonButton btnType="text" onClick={onClick}>
          Open Modal
        </CommonButton>
      </DisplayBox>
    </>
  );
};

export default DemoModal;

const Content1 = ({closeModal, ...props}: any) => {
  const [modal, setModal] = useState<any>(null);

  const onClick = (event: any) => {
    let options = {};

    const Modal = CommonModal(Content2);
    setModal(<Modal title="Test" width={"300px"} options={options} />);
  };

  const onClose = () => {
    alert("onClose");
    closeModal();
  };

  return (
    <>
      {modal}
      <div>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
      <hr />
      <div style={{ textAlign: "right" }}>
        <CommonButton btnType="text" onClick={onClick}>
          Modal child
        </CommonButton>
        <CommonButton
          className="close-modal"
          btnType="text"
          onClick={onClose}
        >
          Close
        </CommonButton>
      </div>
    </>
  );
};

const Content2 = ({closeModal, ...props}: any) => {
  return (
    <>
      <div>
        <p>Some contents...</p>
      </div>
      <hr />
      <div style={{ textAlign: "right" }}>
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
