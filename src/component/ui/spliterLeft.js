import React from "react";
import styled from "styled-components";

function SpliterLeft() {
  return <SpliterLeftUi></SpliterLeftUi>;
}

export default SpliterLeft;

const SpliterLeftUi = styled.div`
  display: inline;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 2%;
  height: 100%;
  background: #3c3f41;
  z-index: 2;
`;
