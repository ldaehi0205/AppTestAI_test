import React from "react";
import styled from "styled-components";

const EmptyPanel = () => {
  return <EmptyPanelUI>Empty Panel</EmptyPanelUI>;
};

export default EmptyPanel;

const EmptyPanelUI = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 96vh;
  background: #2b2b2b;
  color: white;
`;
