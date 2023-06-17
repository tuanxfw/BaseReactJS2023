import React, { lazy, useLayoutEffect } from "react";
import {
  useLocation,
  useNavigate,
  Location,
  NavigateFunction,
} from "react-router-dom";
import NotFound from "@components/layout/NotFound";
import CommonLayout from "@components/layout/CommonLayout";
const Login = lazy(() => import("@components/authen/Login"));
import { localStoreUtil } from "@utils/commonUtil";
import {
  CommonNotification,
  CommonProcessLoading,
} from "@components/CommonComponent";

export function authen(Component: React.ComponentType) {
  return (props: any) => {
    return (
      <>
        <CommonNotification />
        <CommonProcessLoading/>
        {localStoreUtil.checkLoginLocal() ? (
          <CommonLayout>
            <Component {...props} />
          </CommonLayout>
        ) : (
          <Login />
        )}
      </>
    );
  };
}

export function author(Component: React.ComponentType) {
  return (props: any) => {
    const currentLocation: Location = useLocation();

    const lstPer = ["/form1"];

    const checkPermission = (): boolean => {
      return true;
    };

    if (!checkPermission()) {
      return (
        <>
          <NotFound />
        </>
      );
    }

    return (
      <>
        <Component {...props} />
      </>
    );
  };
}
