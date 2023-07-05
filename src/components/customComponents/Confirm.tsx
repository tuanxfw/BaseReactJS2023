import { Popconfirm } from "antd";
import type { PopconfirmProps } from "antd";
import { useTranslation } from "react-i18next";

interface CustomeProps extends Omit<PopconfirmProps, "title"> {
  title?: any;
}

const Confirm = (props: CustomeProps) => {
  const { t } = useTranslation(["common"]);

  const focusBtnOK = (isOpen: boolean) => {
    if (!isOpen) {
      return;
    }

    setTimeout(() => {
      const btn: any = document.evaluate(
        '//*[@class="ant-popconfirm-buttons"]/button[2]',
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null,
      ).singleNodeValue;

      try {
        btn.focus();
      } catch (error) {
        /* empty */
      }
    }, 500);
  };

  return (
    <Popconfirm
      okText={t("confirm.yes")}
      cancelText={t("confirm.cancel")}
      title={t("confirm.title")}
      onOpenChange={focusBtnOK}
      {...props}
    />
  );
};

export default Confirm;
