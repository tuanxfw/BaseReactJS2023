import { useState } from "react";
import { CommonButton, CommonModal, DisplayBox } from "@components/CommonComponent";

const DemoModal = () => {
  const [modal, setModal] = useState<any>(null);

  const onClick = () => {
    const propsContent = {
      onClose: () => {
        setModal(null);
      },
    };

    const Modal = CommonModal(Content1);
    setModal(<Modal title="Test" width={"1000px"} propsContent={propsContent} />);
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

const Content1 = (props: any) => {
  const [modal, setModal] = useState<any>(null);

  const onClick = () => {
    const propsContent = {
      onClose: () => {
        setModal(null);
      },
    };

    const Modal = CommonModal(Content2);
    setModal(<Modal title="Test" width={"300px"} propsContent={propsContent} />);
  };

  const onClose = () => {
    alert("onClose");
    props.onClose();
  };

  return (
    <>
      <div>
        <CommonButton>Làm gì đó</CommonButton>
      </div>
      <div>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
      <hr />
      <div className="modal-footer">
        <CommonButton btnType="text" onClick={onClick}>
          Modal child
        </CommonButton>
        <CommonButton className="close-modal" btnType="text" onClick={onClose}>
          Close
        </CommonButton>
      </div>
      {modal}
    </>
  );
};

const Content2 = (props: any) => {
  return (
    <>
      <div>
        <p>Some contents...</p>
      </div>
      <hr />
      <div style={{ textAlign: "right" }}>
        <CommonButton className="close-modal" btnType="text" onClick={props.onClose}>
          Close
        </CommonButton>
      </div>
    </>
  );
};
