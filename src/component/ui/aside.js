import React from "react";
import styled from "styled-components";
import ProtectSelected from "./projectSelected";

const slider = props => {
  return (
    <Aside>
      <ProtectSelected handleProject={props.handleProject} />
    </Aside>
  );
};

export default slider;

const Aside = styled.aside`
  position: relative;
  left: 0px;
  width: 25px;
  height: 96vh;
  background: #3c3f41;
`;
