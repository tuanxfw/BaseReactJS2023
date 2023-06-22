import {
  CommonButton,
  CommonConfirm,
  showMessage,
  DisplayBox,
} from "@components/CommonComponent";


const DemoMessage = () => {
  const onClick = (event: any) => {
    let type = event?.target.innerText;

    showMessage({
      type: type.toLowerCase(),
      message: type,
    });
  };

  return (
    <DisplayBox title={"Message"} isOpen={false}>
      <CommonButton btnType="text" onClick={onClick}>
        Info
      </CommonButton>
      <hr />

      <CommonButton btnType="text" onClick={onClick}>
        Success
      </CommonButton>
      <hr />

      <CommonButton btnType="text" onClick={onClick}>
        Warning
      </CommonButton>
      <hr />

      <CommonButton btnType="text" onClick={onClick}>
        Error
      </CommonButton>
      <hr />

      <CommonConfirm
        description={"Bạn có chắc chắn muốn làm việc ấy?"}
        onConfirm={() =>
          showMessage({
            type: "success",
            message: "Việc ấy thực thi thành công!",
          })
        }
      >
        <CommonButton btnType="text">Confirm</CommonButton>
      </CommonConfirm>

    </DisplayBox>
  );
};

export default DemoMessage;
