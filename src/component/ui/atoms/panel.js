import React from "react";
import styled from "styled-components";

const Panel = props => {
  return <CommonPanel>{props.title}</CommonPanel>;
};

export default Panel;

const CommonPanel = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 97%;
  background: #2b2b2b;
  color: white;
`;
