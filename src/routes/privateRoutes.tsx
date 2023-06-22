import React, { lazy, useLayoutEffect } from "react";
import { useLocation, useParams  } from "react-router-dom";
import NotFound from "@components/layout/NotFound";
import CommonLayout from "@components/layout/CommonLayout";
const Login = lazy(() => import("@components/authen/Login"));
import { localStoreUtil } from "@utils/commonUtil";
import _ from "lodash";

export function authen(Component: React.ComponentType) {
  return (props: any) => {
    if (localStoreUtil.checkLoginLocal()) {
      return (
        <CommonLayout>
          <Component {...props} />
        </CommonLayout>
      );
    }

    return <Login />;
  };
}

export function author(Component: React.ComponentType) {
  return (props: any) => {
    const location = useLocation();
    const params = useParams();

    const lstPer = localStoreUtil.getData("menu").items;

    const checkPermission = (): boolean => {
      let currentPath = location.pathname.replace("/" + params.lang, "");
      let menu = _.find(lstPer, per => per["path"] === currentPath);

      if (!menu) {
        return false;
      }

      document.title = menu["name"];
      return true;

    };

    if (!checkPermission()) {
      return <NotFound />;
    }

    return <Component {...props} />;
  };
}
