import styled from "styled-components";

const ValidTooltipStyle = styled.div`
  position: relative;

  .tooltip-validate-content {
    position: absolute;
    right: 0%;
    bottom: 0%;
    //top: 0%;
    z-index: 5;
    background-color: #cc0033;
    color: white;
    border-radius: 5px;
    box-shadow: #999 2px 2px 3px;
    padding: 2px 10px;
    font-family: "Helvetica" !important;
    font-size: 13px;
    font-weight: bold;
  }

  .tooltip-validate-content:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 5%;
    margin-left: 0px;
    border-width: 5px;
    border-style: solid;
    border-color: #cc0033 transparent transparent transparent;
  }
`;

export default ValidTooltipStyle;
