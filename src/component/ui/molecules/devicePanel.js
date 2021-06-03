import React from "react";
import styled from "styled-components";
import Panel from "../atoms/panel";
import Toolbar from "../atoms/toolbar";
import SplitertDrag from "../atoms/splitertDrag";

const DevicePanel = () => {
  return (
    <Device>
      <SplitertDrag />
      <Toolbar />
      <Panel title="Device Panel" />
    </Device>
  );
};

export default DevicePanel;

const Device = styled.div`
  position: relative;
  width: 30vw;
  height: 96vh;
`;
