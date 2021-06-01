import React, { useRef } from "react";
import styled from "styled-components";
import Panel from "./panel";
import Toolbar from "./toolbar";
import SpliterLeft from "./spliterLeft";

const LocatorPanel = () => {
  let xx;
  const locator = useRef();
  const handleRelease = e => {
    e.preventDefault();
    xx = e.clientX;
  };
  console.log(locator.current);
  return (
    <Locator ref={locator}>
      <SpliterLeft handleRelease={handleRelease} />
      <Toolbar />
      <Panel title="Locator Panel" />
    </Locator>
  );
};

export default LocatorPanel;

const Locator = styled.div`
  position: relative;
  width: 30vw;
  height: 96vh;
`;
