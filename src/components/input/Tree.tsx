import React, { useState, useEffect, useRef } from "react";
import _ from "lodash";
import { Input, Tree as AntdTree } from "antd";
import type { TreeProps } from "antd";
import { useTranslation } from "react-i18next";
import { stringUtil } from "@utils/commonUtil";
import TreeStyle from "@style/modules/TreeStyle";

interface FieldOption {
  value: string;
  label: string;
  child: string;
}

interface CustomProps extends Omit<TreeProps, "treeData" | "onSelect"> {
  showSearch?: boolean | undefined;
  treeData: any[];
  fieldOption: FieldOption;
  onSelect?: (selectedKeys: any, node?: any, e?: any) => void;
}

const { Search } = Input;

const Tree = ({ showSearch, fieldOption, treeData, onSelect, ...props }: CustomProps) => {
  //#region Hooks
  const { t } = useTranslation(["common"]);

  const treeRef = useRef<any>();
  const dataList = useRef<any[]>([]);
  const flatList = useRef<any[]>([]);
  const searchCondition = useRef("");

  const [expandedKeys, setExpandedKeys] = useState<any>(props.defaultExpandedKeys);
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);

  useEffect(() => {
    dataList.current = [];
    flatList.current = [];

    parseTreeToList(treeData);

    if (props.defaultExpandAll) {
      const expandedKeys: any[] = [];

      dataList.current.map((item) => {
        expandedKeys.push(item[fieldOption.value]);
      });

      setExpandedKeys(expandedKeys);
    }
  }, [treeData]);

  //#endregion Method
  const genTreeHighLight = (data: any): any => {
    return data.map((item: any) => {
      const index = item[fieldOption.label].toLowerCase().indexOf(searchCondition.current.toLowerCase());

      const beforeStr = item[fieldOption.label].substring(0, index);
      const centerStr = item[fieldOption.label].slice(index, index + searchCondition.current.length);
      const afterStr = item[fieldOption.label].slice(index + searchCondition.current.length);

      const title =
        index > -1 ? (
          <span>
            {beforeStr}
            <span className="highlight-text">{centerStr}</span>
            {afterStr}
          </span>
        ) : (
          <span>{item[fieldOption.label]}</span>
        );

      if (item[fieldOption.child]) {
        return {
          title,
          key: item[fieldOption.value],
          children: genTreeHighLight(item[fieldOption.child]),
        };
        // return (
        //   <TreeNode title={title} key={item[fieldOption.value]}>
        //     {genTreeHighLight(item[fieldOption.child])}
        //   </TreeNode>
        // );
      }

      return {
        title,
        key: item[fieldOption.value],
      };
      //return <TreeNode title={title} key={item[fieldOption.value]} />;
    });
  };

  const parseTreeToList = (data: any) => {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];

      dataList.current.push({
        [fieldOption.label]: item[fieldOption.label],
        [fieldOption.value]: item[fieldOption.value],
      });

      flatList.current.push(item);

      if (item[fieldOption.child]) {
        parseTreeToList(item[fieldOption.child]);
      }
    }
  };

  const getParentKey = (value: string, tree: any) => {
    let parentKey = "";
    for (let i = 0; i < tree.length; i++) {
      const node = tree[i];

      if (node[fieldOption.child]) {
        if (_.some(node[fieldOption.child], (item) => item[fieldOption.value] === value)) {
          parentKey = node[fieldOption.value];
        } else if (getParentKey(value, node[fieldOption.child])) {
          parentKey = getParentKey(value, node[fieldOption.child]);
        }
      }
    }
    return parentKey;
  };

  const filter = (condition: string) => {
    searchCondition.current = condition;

    const data = dataList.current;
    const tree = treeData;

    if (condition === "") {
      setExpandedKeys([]);
      setAutoExpandParent(false);
      return;
    }

    const expandedKeys: any[] = [];

    _.map(data, (obj) => {
      if (stringUtil.compareString(condition, obj[fieldOption.label])) {
        expandedKeys.push(getParentKey(obj[fieldOption.value], tree));
      }
    });

    treeRef.current.scrollTo({ key: expandedKeys[0], align: "top" });

    setExpandedKeys(expandedKeys);
    setAutoExpandParent(true);
  };
  //#region

  //#endregion

  //#region Event
  const onExpand = (expandedKeys: any) => {
    setExpandedKeys(expandedKeys);
    setAutoExpandParent(false);
  };

  const onSearch = _.debounce((e) => {
    filter(e.target.value);
  }, 300);

  const onCustomSelect = (value: any, e: any) => {
    const nodeKey = e?.node?.key;
    let node = null;

    if (nodeKey) {
      node = _.find(flatList.current, (obj) => obj[fieldOption.value] === nodeKey);
    }

    if (onSelect) {
      onSelect(value, node, e);
    }
  };
  //#endregion

  return (
    <TreeStyle>
      <div className="search-field" hidden={!showSearch}>
        <Search
          allowClear
          defaultValue={searchCondition.current}
          placeholder={t("common:button.search") as string}
          onChange={onSearch}
        />
      </div>
      <AntdTree
        ref={treeRef}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        onExpand={onExpand}
        treeData={genTreeHighLight(treeData)}
        onSelect={onCustomSelect}
        {...props}
      >
        {/* {genTreeHighLight(treeData)} */}
      </AntdTree>
    </TreeStyle>
  );
};

export default Tree;

Tree.defaultProps = {
  height: 300,
  showSearch: true,
  defaultExpandAll: false,
  defaultExpandedKeys: [],
  checkable: false,
  treeData: [],
  showLine: { showLeafIcon: false },
  onSelect: (selectedKeys: any, node: any, e: any) => console.info("onSelect", { selectedKeys, node, e }),
  onCheck: (checkedKeys: any, node: any, e: any) => console.info("onCheck", { checkedKeys, node, e }),
};
