import getColor from "@style/themes/Color";
import styled from "styled-components";

const FieldsetStyle = styled.div`
  fieldset {
    padding: 0px 10px 10px 10px;
    border-radius: 5px;
    border: 2px solid ${getColor("fieldset.border")};
  }

  legend {
    float: none;
    color: ${getColor("fieldset.color")};
    font-size: 15px !important;
    font-weight: 500;
    width: auto;
    padding: 0px 5px 5px 5px;
  }
`;

export default FieldsetStyle;
