import { useState, useRef } from "react";
import { Modal as AntdModal } from "antd";
import type { ModalProps } from "antd";
import Draggable from "react-draggable";
import type { DraggableData, DraggableEvent } from "react-draggable";
import ModalStyle from "@style/modules/ModalStyle";
import { v4 as uuidv4 } from "uuid";
import i18n from "@locales/i18n";
import { ResponsiveConst } from "@constants/constants";
interface CustomProps extends ModalProps {
  propsContent: any;
}

const Modal = (Component: React.ComponentType) => {
  const CustomModal = ({ propsContent, title, ...props }: CustomProps) => {
    const [open, setOpen] = useState<boolean>(true);
    const [disabled, setDisabled] = useState(true);
    const [bounds, setBounds] = useState({
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
    });

    const draggleRef = useRef<HTMLDivElement>(null);
    const idRef = useRef("modal" + uuidv4());

    const onClose = () => {
      const xpath = `//*[@id="${idRef.current}"]//button[contains(@class, "close-modal")]`;
      const element: any = document.evaluate(
        xpath,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null,
      ).singleNodeValue;

      if (element) {
        element?.click();
      } else {
        close();
      }
    };

    const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
      const { clientWidth, clientHeight } = window.document.documentElement;
      const targetRect = draggleRef.current?.getBoundingClientRect();
      if (!targetRect) {
        return;
      }
      setBounds({
        left: -targetRect.left + uiData.x,
        right: clientWidth - (targetRect.right - uiData.x),
        top: -targetRect.top + uiData.y,
        bottom: clientHeight - (targetRect.bottom - uiData.y),
      });
    };

    const close = () => {
      setOpen(false);
    };

    return (
      <AntdModal
        maskClosable={false}
        destroyOnClose={true}
        title={
          <div
            className="modal-title"
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false);
              }
            }}
            onMouseOut={() => {
              setDisabled(true);
            }}
          >
            <div>{title}</div>
          </div>
        }
        open={open}
        onCancel={onClose}
        footer={[]}
        modalRender={(modal) => (
          <Draggable
            disabled={window.innerWidth < ResponsiveConst.md || disabled}
            bounds={bounds}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <ModalStyle id={idRef.current} ref={draggleRef}>
              {modal}
            </ModalStyle>
          </Draggable>
        )}
        {...props}
      >
        <Component {...propsContent} />
      </AntdModal>
    );
  };
  return CustomModal;
};

const confirmClose = (isDataChange: boolean, funcCallBack: () => void) => {
  if (!isDataChange) {
    funcCallBack();
    return;
  }

  AntdModal.confirm({
    title: i18n.t("common:confirm.title") as string,
    content: i18n.t("common:confirm.confirmWhenClose") as string,
    onOk: () => {
      funcCallBack();
    },
  });
};

Modal.confirmClose = confirmClose;

export default Modal;
