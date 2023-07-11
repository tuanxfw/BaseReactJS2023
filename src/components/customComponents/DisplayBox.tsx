import { useLayoutEffect, useState, useRef } from "react";
import { Collapse } from "antd";
import type { CollapseProps } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import DisplayBoxStyle from "@style/modules/DisplayBoxStyle";

interface CustomProps extends CollapseProps {
  isOpen?: boolean;
  title?: string;
  children?: any;
  forceRender?: boolean | undefined;
}

const DisplayBox = (props: CustomProps) => {
  const key = useRef(uuidv4());

  const [isOpen, setIsOpen] = useState(props.isOpen);

  useLayoutEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  return (
    <DisplayBoxStyle>
      <Collapse
        className="display-box"
        onChange={() => setIsOpen(!isOpen)}
        size="small"
        activeKey={[isOpen ? key.current : ""]}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        items={[
          {
            key: key.current,
            label: props.title,
            forceRender: props.forceRender,
            children: props.children,
          },
        ]}
      />
    </DisplayBoxStyle>
  );
};

export default DisplayBox;

DisplayBox.defaultProps = {
  isOpen: true,
  forceRender: false,
};
