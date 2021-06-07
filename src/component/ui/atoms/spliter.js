import React from "react";
import styled from "styled-components";

const Spliter = () => {
  return <SpliterBar />;
};

export default Spliter;

const SpliterBar = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 4px;
  height: 100%;
  background: #3c3f41;
`;
