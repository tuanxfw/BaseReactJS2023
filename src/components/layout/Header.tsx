import React from "react";
import { Layout, Dropdown, Button } from "antd";
import type { MenuProps } from "antd";
import HeaderStyle from "@style/layout/HeaderStyle";
import { useTranslation } from "react-i18next";
import { AppConfig } from "@constants/constants";
import { openSidebar } from "@components/layout/Sidebar";
import { localStoreUtil } from "@utils/commonUtil";

function Header() {
  const { t } = useTranslation(["header", "common"]);

  const actions: MenuProps["items"] = [
    {
      key: "reloadWeb",
      icon: <i className="fa-solid fa-rotate"></i>,
      label: t("reloadWeb"),
    },
    {
      key: "changePassword",
      icon: <i className="fa-solid fa-key"></i>,
      label: t("changePassword"),
    },
    {
      key: "logout",
      icon: <i className="fa-solid fa-power-off"></i>,
      label: t("logout"),
    },
  ];

  //#region Method
  const logout = () => {
    localStoreUtil.clearData();
  };

  const reloadWeb = () => {
    window.location.reload();
  };
  //#endregion

  //#region Event
  const onClickAction = ({ key }: any) => {
    switch (key) {
      case "logout":
        logout();
        break;

      case "reloadWeb":
        reloadWeb();
        break;

      default:
        break;
    }
  };
  //#endregion

  return (
    <>
      <HeaderStyle>
        <Layout.Header>
          <div className="custom-header">
            <div className="left-header">
              <Button ghost onClick={openSidebar}>
                <i className="fa-solid fa-bars" />
              </Button>
            </div>
            <div className="center-header">
              <img className="logo-app" src={`${AppConfig.VITE_PUBLIC_URL}/images/logo2.png`} alt="" />
              <span className="title-app">{t("common:appTitle")}</span>
            </div>
            <div className="right-header">
              <Dropdown
                placement="bottomLeft"
                trigger={["click"]}
                menu={{
                  items: actions,
                  onClick: onClickAction,
                }}
              >
                <div>
                  <i className="fa-solid fa-user"></i>
                  <div className="title-dropdown">Username</div>
                </div>
              </Dropdown>
            </div>
          </div>
        </Layout.Header>
      </HeaderStyle>
    </>
  );
}

export default Header;
