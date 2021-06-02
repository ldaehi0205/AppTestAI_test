import React from "react";
import styled from "styled-components";

function SpliterLeft(props) {
  return (
    <SpliterLeftUi
      onDrag={props.handleRelease}
      onDragEnd={props.dragEnd}
      onDragStart={props.dragStart}
      draggable="true"
    ></SpliterLeftUi>
  );
}

export default SpliterLeft;

const SpliterLeftUi = styled.div`
  display: inline;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 4px;
  height: 100%;
  background: #3c3f41;
  z-index: 2;
  cursor: move;
`;
