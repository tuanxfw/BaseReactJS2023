import { CommonButton, DisplayBox } from "@components/CommonComponent";

const DemoButton = () => {

  return (
    <DisplayBox title={"Button"} isOpen={false}>
      <CommonButton
        btnType="icon"
        icon={<i className="fa-solid fa-tents"></i>}
      />
      <CommonButton
        disabled
        btnType="icon"
        icon={<i className="fa-solid fa-tents"></i>}
      />
      <hr />

      <CommonButton
        btnType="iconText"
        icon={<i className="fa-solid fa-tents" />}
      >
        123
      </CommonButton>
      <CommonButton
        disabled
        btnType="iconText"
        icon={<i className="fa-solid fa-tents" />}
      >
        123
      </CommonButton>
      <hr />

      <CommonButton btnType="text">123</CommonButton>
      <CommonButton btnType="text" disabled>
        123
      </CommonButton>
      <hr />

      <CommonButton
        btnType="actionTable"
        icon={<i className="fa-solid fa-tents"></i>}
      />
      <CommonButton
        btnType="actionTable"
        icon={<i className="fa-solid fa-tents"></i>}
      />
      <CommonButton
        disabled
        btnType="actionTable"
        icon={<i className="fa-solid fa-tents"></i>}
      />
    </DisplayBox>
  );
};

export default DemoButton;
