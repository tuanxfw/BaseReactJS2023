import ProcessLoadingStyle from "@style/modules/ProcessLoadingStyle";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import store from "@redux/store";
import { getProcessLoadingValue } from "@redux/selectors/processLoadingSelectors";
import {
  openProcessLoading as open,
  closeProcessLoading as close,
} from "@redux/slices/processLoadingSlice";

const ProcessLoading = () => {
  const processLoadingValue = useSelector(getProcessLoadingValue);

  return (
    <ProcessLoadingStyle
      style={{ display: processLoadingValue > 0 ? "inherit" : "none" }}
    >
      
      <Spin 
      //indicator={<i className="fa-solid fa-spinner fa-spin-pulse "></i>}
      />
    </ProcessLoadingStyle>
  );
};

export default ProcessLoading;

export const openProcessLoading = () => {
  store.dispatch(open(null));
};

export const closeProcessLoading = () => {
  store.dispatch(close(null));
};
