import React from "react";
import styled from "styled-components";

const panel = props => {
  return <Panel>{props.title}</Panel>;
};

export default panel;

const Panel = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 97%;
  background: #2b2b2b;
  color: white;
`;

