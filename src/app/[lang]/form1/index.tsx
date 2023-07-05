import React, { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { authen, author } from "@routes/privateRoutes";

function Index(props: any) {
  const { t } = useTranslation(["common"]);

  // console.log({ t });

  // const param = useParams();
  // {
  //   console.log("props", props);
  // }
  // {
  //   console.log("param", param);
  // }

  useLayoutEffect(() => {
    //throw new Error("123");
  }, []);

  return (
    <div>
      <h1>Form1 {t("common.appTitle")}</h1>
      <h1>{props?.pageProps?.title}</h1>
      <p>{props?.pageProps?.description}</p>
    </div>
  );
}

export default authen(author(Index));
