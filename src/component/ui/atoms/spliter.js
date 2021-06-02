import React from "react";
import styled from "styled-components";

function spliter() {
  return <Spliter />;
}

export default spliter;

const Spliter = styled.div`
  display: inline;
  position: absolute;
  right: 0px;
  top: 0px;
  width: 2%;
  height: 100%;
  background: #3c3f41;
`;
