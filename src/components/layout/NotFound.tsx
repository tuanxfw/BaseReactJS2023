import NotFoundStyle from "@style/modules/NotFoundStyle";
import { Skeleton, Divider, Card } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";

const NotFound = () => {
  const [content, setContent] = useState<any>(<PageLoading />);

  useEffect(() => {
    const idTimeout = setTimeout(() => {
      setContent(<Page404 />);
    }, 3000);

    return () => {
      clearTimeout(idTimeout);
    };
  }, []);

  return <div>{content}</div>;
};

export default NotFound;

const PageLoading = () => {
  return (
    <NotFoundStyle>
      <Skeleton active />
      <Divider />
      <Skeleton active />
      <Divider />
      <Skeleton active />
    </NotFoundStyle>
  );
};

const Page404 = () => {
  const localtion = useLocation();
  const { t } = useTranslation(["page404"]);

  return (
    <NotFoundStyle>
      <Card title={`${t("title")} ${localtion.pathname}`} bordered={false}>
        <p>{t("content")}</p>
        <p>{t("recommend")}</p>
      </Card>
    </NotFoundStyle>
  );
};
