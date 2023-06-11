import BreadcrumbStyle from "@style/layout/BreadcrumbStyle";
import { Breadcrumb as BreadcrumbAntd } from "antd";

function Breadcrumb(props: any) {
  return (
    <BreadcrumbStyle>
      <BreadcrumbAntd />
    </BreadcrumbStyle>
  );
}

export default Breadcrumb;
