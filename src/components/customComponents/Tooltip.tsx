import React from "react";
import PropTypes from "prop-types";
import { Tooltip } from "antd";

interface CustomProps {
  title?: string | undefined;
  children?: any;
}

const CommonTooltip = ({ title, children, ...props }: CustomProps) => {
  if (title) {
    return (
      <Tooltip title={title} mouseEnterDelay={0.03} mouseLeaveDelay={0}>
        {children}
      </Tooltip>
    );
  }

  return (
    <span
      onMouseEnter={openTooltip(title)}
      //onMouseMove={openTooltip(title)}
      onMouseLeave={closeTooltip}
      onMouseDown={closeTooltip}
    >
      {children}
    </span>
  );
};

export default CommonTooltip;

export const openTooltip =
  (title: string | undefined, x: number = 10, y: number = 0) =>
  (e: any) => {
    let content = e.target.innerText;

    if (title) {
      content = title;
    }

    if (content.trim() === "") return;

    let tooltip = document.getElementById("common-tooltip");

    if (!tooltip) {
      return;
    }

    tooltip.innerHTML = content;
    tooltip.style.visibility = "visible";
    tooltip.style.opacity = "1";
    tooltip.style.top = e.pageY + y + "px";
    tooltip.style.left = e.pageX + x + "px";
  };

export const closeTooltip = (e: any) => {
  let tooltip = document.getElementById("common-tooltip");

  if (!tooltip) {
    return;
  }

  tooltip.style.visibility = "hidden";
  tooltip.style.opacity = "0";
};
