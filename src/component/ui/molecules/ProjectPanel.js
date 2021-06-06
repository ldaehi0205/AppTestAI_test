import React from "react";
import styled from "styled-components";
import Panel from "../atoms/Panel";
import Toolbar from "../atoms/Toolbar";
import Spliter from "../atoms/Spliter";

const project = props => {
  return (
    <Project>
      <Toolbar handleProject={props.handleProject} />
      <Panel title="Project Panel" />
      <Spliter />
    </Project>
  );
};

export default project;

const Project = styled.div`
  position: relative;
  width: 30vw;
  height: 96vh;
`;
