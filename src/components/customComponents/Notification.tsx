import { useEffect } from "react";
import { notification as notificationAntd } from "antd";
import i18n from "@locales/i18n";
import { useDispatch, useSelector } from "react-redux";
import store from "@redux/store";
import { getNotification } from "@redux/selectors/notificationSelectors";
import { createNotification } from "@redux/slices/notificationSlice";
import _ from "lodash";


interface Content {
  message?: any;
  duration?: number;
  title?: string | null | undefined;
  type: "info" | "success" | "warning" | "error";
}

const Notification = () => {
  //#region Hook
  const [api, contextHolder] = notificationAntd.useNotification();

  const dispatch = useDispatch();
  const notification: Content = useSelector(getNotification);

  useEffect(() => {
    if (notification.message) {
      switch (notification.type) {
        case "success":
          openNotificationSuccess(notification);
          break;

        case "warning":
          openNotificationWarning(notification);
          break;

        case "error":
          openNotificationError(notification);
          break;

        default: //"info":
          openNotificationInfo(notification);
          break;
      }

      dispatch(createNotification({}));

      focusBtnClose();
    }

  }, [notification]);
  //#endregion

  //#region Method

  const openNotificationInfo = (content: Content) => {
    api.info({
      message: content.title,
      description: content.message,
      placement: "top",
      duration: content.duration || 15,
      onClose: () => focusBtnClose(),
    });
  };

  const openNotificationSuccess = (content: Content) => {
    api.success({
      message: content.title,
      description: content.message,
      placement: "top",
      duration: content.duration || 5,
      onClose: () => focusBtnClose(),
    });
  };

  const openNotificationWarning = (content: Content) => {
    api.warning({
      message: content.title,
      description: content.message,
      placement: "top",
      duration: content.duration || 0,
      onClose: () => focusBtnClose(),
    });
  };

  const openNotificationError = (content: Content) => {
    api.error({
      message: content.title,
      description: content.message,
      placement: "top",
      duration: content.duration || 0,
      onClose: () => focusBtnClose(),
    });
  };

  const focusBtnClose = () => {
    setTimeout(() => {
      let btn: any = document.evaluate(
        '//a[@class="ant-notification-notice-close"][1]',
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;

      try {
        btn.focus();
      } catch (error) {}
    }, 500);
  };

  //#endregion

  return <>{contextHolder}</>;
};

export default Notification;

export const showMessage = (content: Content) => {
  if (!content.title) {
    content.title = content.title || i18n.t(`common.message.${content.type}`);
  }

  store.dispatch(createNotification(content));
};
