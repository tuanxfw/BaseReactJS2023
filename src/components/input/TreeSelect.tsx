import { v4 as uuidv4 } from "uuid";
import { TreeSelect as AntdTreeSelect } from "antd";
import type { TreeSelectProps } from "antd";
import { CommonTooltip } from "@components/CommonComponent";
import _ from "lodash";

const { TreeNode, SHOW_ALL, SHOW_PARENT, SHOW_CHILD } = AntdTreeSelect;

interface FieldOption {
  value: string;
  label: string;
  child: string;
}

interface CustomProps extends Omit<TreeSelectProps, "onChange"> {
  fieldOption: FieldOption;
  onChange?: (value: any, item: any) => void;
}

const filterTreeNode = (input: any, event: any) => {
  return String(event.title.props.children)
    .toLowerCase()
    .includes(input.toLowerCase());
};

const renderTreeOptions = (fieldOption: FieldOption, treeData: any = []) => {
  let tree = [];

  if (treeData?.length > 0) {
    const genElement = (tree: any) => {
      if (tree) {
        return tree.map((item: any) => {
          let name = item[fieldOption.label];
          let value = item[fieldOption.value];
          let key = item[fieldOption.value]; //uuidv4();

          return (
            <TreeNode
              item={item}
              value={value}
              title={<CommonTooltip key={uuidv4()}>{name}</CommonTooltip>}
              key={key}
            >
              {genElement(item[fieldOption.child])}
            </TreeNode>
          );
        });
      }
    };

    tree = genElement(treeData);
  }

  return tree;
};

const TreeSelect = ({
  fieldOption,
  onChange,
  treeData,
  ...props
}: CustomProps) => {
  const customOnChange = (value: any) => {
    if (_.isEmpty(value) && onChange) {
      onChange(value, value);
    }
  };

  const customOnSelect = (value: any, element: any) => {
    if (onChange) {
      onChange(_.toString(value), element?.item);
    }
  };

  return (
    <AntdTreeSelect
      {...props}
      style={{ ...props.style, width: "100%" }}
      onSelect={customOnSelect}
      onChange={customOnChange}
    >
      {renderTreeOptions(fieldOption, treeData)}
    </AntdTreeSelect>
  );
};

export default TreeSelect;

TreeSelect.defaultProps = {
  showSearch: true,
  allowClear: true,
  showArrow: true,
  maxTagCount: "responsive",
  treeDefaultExpandAll: false,
  multiple: false,
  treeCheckable: false,
  showCheckedStrategy: SHOW_ALL,
  treeLine: { showLeafIcon: false },
  dropdownStyle: { maxHeight: 400, overflow: "auto" },
  filterTreeNode: filterTreeNode,
  onChange: (value: any, item: any) => console.log({ value, item }),
};
