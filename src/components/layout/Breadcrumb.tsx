import BreadcrumbStyle from "@style/layout/BreadcrumbStyle";
import { localStoreUtil } from "@utils/commonUtil";
import { Breadcrumb as BreadcrumbAntd, Dropdown } from "antd";
import type { MenuProps } from "antd";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import type { IMenuItem, IMenuSub } from "@interface/model/Menu";
import { AppConfig } from "@constants/constants";

const Breadcrumb = () => {
  //#region hooks
  const params = useParams();

  const [itemsBreacrum, setItemsBreacrum] = useState<any[]>([]);

  const menuUser = localStoreUtil.getData("menu") || {};

  useEffect(() => {
    let currentPath: string = window.location.pathname.replace(`/${_.toString(params.lang)}`, "");
    currentPath = currentPath.replace(AppConfig.VITE_PUBLIC_URL, "").replace(/\/$/, "");

    const items: IMenuItem[] = menuUser.items;

    const menuItem: IMenuItem | undefined = _.find(items, (item: IMenuItem) => item.path === currentPath);

    let itemsBreacrum: any[] = [
      {
        title: (
          <BreadcrumbItem menu={{ id: "0", name: "Home", path: "/" } as IMenuItem}>
            <i className="fa-solid fa-house"></i>
          </BreadcrumbItem>
        ),
      },
    ];
    if (menuItem) {
      itemsBreacrum = [...itemsBreacrum, ...genBreadcrumb(menuItem)];
    }

    setItemsBreacrum(itemsBreacrum);
  }, []);

  //#endregion

  //#region method
  const genBreadcrumb = (menuItem: IMenuItem) => {
    const lstBreadcrumb: any[] = [];

    const subs: IMenuSub[] = menuUser.subs;

    let item: IMenuSub | IMenuItem | undefined = menuItem;
    item.type = "item";

    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (item?.type === "item") {
        lstBreadcrumb.unshift({
          title: <BreadcrumbItem menu={item}>{item?.name}</BreadcrumbItem>,
        });
      } else {
        lstBreadcrumb.unshift({
          title: <BreadcrumbSub menu={item}>{item?.name}</BreadcrumbSub>,
        });
      }

      if (item?.parent !== "") {
        item = _.find(subs, (sub: IMenuSub) => sub.id === item?.parent);
      } else {
        break;
      }
    }

    return lstBreadcrumb;
  };
  //#endregion

  //#region event

  //#endregion

  return (
    <BreadcrumbStyle>
      <BreadcrumbAntd items={itemsBreacrum} />
    </BreadcrumbStyle>
  );
};

export default Breadcrumb;

const BreadcrumbItem = (props: any) => {
  const params = useParams();
  const navigate = useNavigate();

  const menu: IMenuItem = props.menu;

  const onClick = () => {
    navigate(`/${params.lang}${menu.path}`);
  };

  return <div onClick={onClick}>{props.children}</div>;
};

const BreadcrumbSub = (props: any) => {
  const menu: IMenuItem = props.menu;

  //#region hooks
  const params = useParams();
  const navigate = useNavigate();

  const [menuData, setMenuData] = useState<any>([]);
  //#endregion

  //#region method
  const genMenuData = (currentTree: any): MenuProps["items"] => {
    const parseTree = (menu: any): MenuProps["items"] => {
      const tree: any[] = [];

      menu.map((menuItem: any) => {
        if (menuItem["children"]) {
          const childTree = parseTree(menuItem["children"]);

          const item: any = {
            key: menuItem["path"] || menuItem["id"],
            label: menuItem["name"],
            children: childTree,
          };

          tree?.push(item);
        } else {
          const item: any = {
            key: menuItem["path"],
            label: menuItem["name"],
            //title: menuItem["path"],
          };

          tree?.push(item);
        }
      });

      return tree;
    };

    return parseTree(currentTree);
  };
  //#endregion

  //#region event
  const onHover = () => {
    if (menuData.length > 0) {
      return;
    }

    const menuUser = localStoreUtil.getData("menu") || {};
    const treeUser: any[] = menuUser.tree;

    let child: any;
    const findOnTree = (tree: any[]) => {
      for (let i = 0; i < tree.length; i++) {
        const item = tree[i];

        if (item["id"] === menu.id) {
          child = item["children"];
          break;
        } else if (item["children"]) {
          findOnTree(item["children"]);
        }
      }
    };

    findOnTree(treeUser);
    const data = genMenuData(child);
    setMenuData(data);
  };

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(`/${params.lang}${e.key}`);
  };
  //#endregion

  return (
    <Dropdown
      arrow
      placement="bottomRight"
      trigger={["click"]}
      menu={{
        onClick: onClick,
        items: menuData,
      }}
      dropdownRender={(menus: any) => menus}
    >
      <div onMouseEnter={onHover}>{props.children}</div>
    </Dropdown>
  );
};
