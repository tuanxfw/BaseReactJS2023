import React, { lazy } from "react";
import { useLocation, useParams } from "react-router-dom";
import NotFound from "@components/layout/NotFound";
import CommonLayout from "@components/layout/CommonLayout";
const Login = lazy(() => import("@components/authen/Login"));
import { localStoreUtil } from "@utils/commonUtil";
import _ from "lodash";
import { IMenuItem } from "@interface/Menu";

export const authen = (Component: React.ComponentType) => {
  const Authen = (props: any) => {
    if (localStoreUtil.checkLoginLocal()) {
      return (
        <CommonLayout>
          <Component {...props} />
        </CommonLayout>
      );
    }

    return <Login />;
  };

  return Authen;
}

export const author = (Component: React.ComponentType) => {
  const Author = (props: any) => {
    const location = useLocation();
    const params = useParams();

    const lstPer: IMenuItem[] = localStoreUtil.getData("menu").items;

    const checkPermission = (): boolean => {
      const currentPath = location.pathname.replace("/" + params.lang, "");
      const menu = _.find(lstPer, (per: IMenuItem) => per.path === currentPath);

      if (!menu) {
        return false;
      }

      document.title = menu.name;
      return true;
    };

    if (!checkPermission()) {
      return <NotFound />;
    }

    return <Component {...props} />;
  };

  return Author;
}
