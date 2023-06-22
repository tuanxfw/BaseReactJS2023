import { useEffect, useReducer } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Drawer, Button, Menu } from "antd";
import type { MenuProps } from "antd";
import SidebarStyle from "@style/layout/SidebarStyle";
import { useDispatch, useSelector } from "react-redux";
import store from "@redux/store";
import {
  getSidebarStatus,
  getSidebarData,
} from "@redux/selectors/sidebarSelectors";
import { toggleSidebar, setSidebarData } from "@redux/slices/sidebarSlice";
import { AppConfig } from "@constants/constants";
import _ from "lodash";
import { localStoreUtil } from "@utils/commonUtil";

const reducerData = (state: any, action: any) => {
  let newState = { ...state };

  if (action?.field) newState[action.field] = action.data;

  return newState;
};

const Sidebar = () => {
  //#region hook

  const dispatch = useDispatch();
  const sidebarIsOpen = useSelector(getSidebarStatus);
  const state = useSelector(getSidebarData);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let menuData = genMenuData();
    dispatch(setSidebarData({ items: menuData }));
  }, []);

  //#endregion

  //#region method
  const genMenuData = (): MenuProps["items"] => {
    const parseTree = (menu: any): MenuProps["items"] => {
      let tree: any[] = [];

      menu.map((menuItem: any) => {
        if (menuItem["children"]) {
          let childTree = parseTree(menuItem["children"]);

          let item: any = {
            key: menuItem["path"] || menuItem["id"],
            label: menuItem["name"],
            children: childTree,
          };

          tree?.push(item);
        } else {
          let item: any = {
            key: menuItem["path"],
            label: menuItem["name"],
            //title: menuItem["path"],
          };

          tree?.push(item);
        }
      });

      return tree;
    };

    let menuData = localStoreUtil.getData("menu");
    dispatch(setSidebarData({ subs: menuData.subs }));
    return parseTree(menuData.tree);
  };
  //#endregion

  //#region event
  const onCloseSidebar = () => {
    dispatch(toggleSidebar(false));
  };

  const onClick: MenuProps["onClick"] = (e) => {
    dispatch(setSidebarData({ selectedKeys: e.key }));
    dispatch(toggleSidebar(false));
    navigate(`/${params.lang}${e.key}`);
  };

  const onOpenChange = (keys: string[]) => {
    const latestOpenKey = _.find(
      keys,
      (key) => state.openKeys.indexOf(key) === -1
    );
    const roots = _.filter(state.subs, (sub: any) => sub.parent === "");

    if (!_.some(roots, (item) => item["id"] === latestOpenKey)) {
      dispatch(setSidebarData({ openKeys: keys }));
    } else {
      dispatch(
        setSidebarData({ openKeys: latestOpenKey ? [latestOpenKey] : [] })
      );
    }
  };
  //#endregion

  return (
    <>
      <SidebarStyle />
      <Drawer
        title={
          <div className="title-sidebar">
            <div className="logo">
              <img src={`${AppConfig.VITE_PUBLIC_URL}/images/logo.png`} />
            </div>
            <Button type="text" onClick={onCloseSidebar}>
              <i className="fa-solid fa-xmark" />
            </Button>
          </div>
        }
        placement={"left"}
        closable={false}
        onClose={onCloseSidebar}
        open={sidebarIsOpen}
      >
        <Menu
          onClick={onClick}
          onOpenChange={onOpenChange}
          selectedKeys={state.selectedKeys}
          openKeys={state.openKeys}
          mode="inline"
          items={state.items}
        />
      </Drawer>
    </>
  );
};

export default Sidebar;

export const openSidebar = () => {
  store.dispatch(toggleSidebar(true));
};
