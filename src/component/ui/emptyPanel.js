import React from "react";
import styled from "styled-components";

function emptyPanel() {
  return <EmptyPanel>Empty Panel</EmptyPanel>;
}

export default emptyPanel;

const EmptyPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* width: calc(100% - 25px); */
  width: 100%;
  height: 96vh;
  background: #2b2b2b;
  color: white;
`;
