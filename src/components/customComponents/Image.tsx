import React from "react";
import { Image as ImageAntd } from "antd";
import type { ImageProps } from "antd";
import _ from "lodash";
import { AppConfig } from "@constants/constants";

const Image = (props: ImageProps) => {
  return (
    <ImageAntd
      fallback={`${AppConfig.VITE_PUBLIC_URL}/images/img-default.png`}
      {...props}
      preview={
        _.isObject(props.preview)
          ? {
              mask: <></>,
              ...props.preview,
            }
          : props.preview
      }
    />
  );
};

export default Image;
