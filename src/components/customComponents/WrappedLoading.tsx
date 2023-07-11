import WrappedLoadingStyle from "@style/modules/WrappedLoadingStyle";
import { Spin } from "antd";
import type { SpinProps } from "antd";

const WrappedLoading = (props: SpinProps) => {
  return (
    <WrappedLoadingStyle>
      <Spin {...props} />
    </WrappedLoadingStyle>
  );
};

export default WrappedLoading;

WrappedLoading.defaultProps = {
  spinning: false,
};
