import styled from "styled-components";

const ToolTipStyle = styled.div`
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 3px;
  padding: 3px 5px;
  box-shadow: #555 2px 2px 5px;
  position: absolute;
  z-index: 2000;
  color: white;
  opacity: 0;
  transition: visibility 0.2s, opacity 0.2s linear;
  font-family: "Tahoma" !important;
  font-size: 13px;
  overflow-wrap: anywhere;
`;

export default ToolTipStyle;
