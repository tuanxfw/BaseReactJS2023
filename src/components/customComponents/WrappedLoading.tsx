import { Spin } from "antd";
import type { SpinProps } from "antd";

const WrappedLoading = (props: SpinProps) => {
  return (
    <>
      <Spin spinning {...props} />
    </>
  );
};

export default WrappedLoading;

WrappedLoading.defaultProps = {
  spinning: false,
};
