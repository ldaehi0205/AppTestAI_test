import React, { useRef } from "react";
import styled from "styled-components";
import Panel from "../atoms/Panel";
import Toolbar from "../atoms/Toolbar";
import SplitertDrag from "../atoms/SplitertDrag";

const LocatorPanel = () => {
  const locator = useRef();
  const img = new Image();
  img.src = null;

  const handleRelease = e => {
    if (e.clientX !== 0) {
      locator.current.style.width = `${
        (document.body.offsetWidth -
          e.clientX +
          Number(
            locator.current.style.width.split("")[0] +
              locator.current.style.width.split("")[1]
          )) /
          7.5 -
        20
      }vw`;
    }
  };

  const dragEnd = e => {
    locator.current.style.width = `${
      (document.body.offsetWidth -
        e.clientX +
        Number(
          locator.current.style.width.split("")[0] +
            locator.current.style.width.split("")[1]
        )) /
        7.5 -
      20
    }vw`;
    locator.current.style.display = "block";
  };

  const dragStart = e => {
    e.dataTransfer.setDragImage(img, 0, 0);
  };

  return (
    <Locator ref={locator} style={{ width: "40vw" }}>
      <SplitertDrag
        handleRelease={handleRelease}
        dragEnd={dragEnd}
        dragStart={dragStart}
      />
      <Toolbar />
      <Panel title="Locator Panel" />
    </Locator>
  );
};

export default LocatorPanel;

const Locator = styled.div`
  position: relative;
  height: 96vh;
`;
