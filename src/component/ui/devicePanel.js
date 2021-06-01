import React from "react";
import styled from "styled-components";
import Panel from "./panel";
import Toolbar from "./toolbar";
import SpliterLeft from "./spliterLeft";

const DevicePanel = () => {
  return (
    <Device>
      <SpliterLeft />
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
