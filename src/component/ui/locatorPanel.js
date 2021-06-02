import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import DragResizeContainer from "react-drag-resize";
import Panel from "./panel";
import Toolbar from "./toolbar";
import SpliterLeft from "./spliterLeft";

const LocatorPanel = () => {
  let xx;
  let locator = useRef();

  const handleRelease = e => {
    e.preventDefault();
    console.log(e.clientX / 100);
  };

  const dragEnd = e => {
    e.preventDefault();
    setTimeout(function () {
      locator.current.style.width = `${e.clientX / 10 + 30}vw`;
      locator.current.style.display = "block";
      // locator.current = null;
    }, 0);
  };
  // console.log(locator.current?.style.width);

  const dragStart = () => {
    console.log("start");
    setTimeout(function () {
      locator.current.style.display = "none";
    }, 0);
  };

  return (
    <Locator ref={locator} style={{ width: "30vw" }}>
      <SpliterLeft
        handleRelease={handleRelease}
        dragEnd={dragEnd}
        dragStart={dragStart}
        // dragOver={dragOver}
      />
      <Toolbar />
      <Panel title="Locator Panel" />
    </Locator>
  );
};

export default LocatorPanel;

const Locator = styled.div`
  position: relative;
  /* width: 30vw; */
  height: 96vh;
`;
