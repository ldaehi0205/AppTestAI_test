import React, { useRef } from "react";
import styled from "styled-components";
import Panel from "../atoms/panel";
import Toolbar from "../atoms/toolbar";
import SpliterLeft from "../atoms/spliterLeft";

const LocatorPanel = () => {
  let locator = useRef();

  const handleRelease = e => {
    e.preventDefault();
    locator.current.style.width = `${
      (document.body.offsetWidth -
        e.clientX +
        Number(
          locator.current.style.width.split("")[0] +
            locator.current.style.width.split("")[1]
        )) /
      7.5
    }vw`;
  };

  const dragEnd = e => {
    e.preventDefault();
    console.log("end");
    setTimeout(function () {
      locator.current.style.width = `${
        (document.body.offsetWidth -
          e.clientX +
          Number(
            locator.current.style.width.split("")[0] +
              locator.current.style.width.split("")[1]
          )) /
        7.5
      }vw`;
      locator.current.style.display = "block";
    }, 0);
  };
  // console.log(locator.current?.style.width);

  const dragStart = e => {
    console.log("start", locator.current.style.width);
    console.log(
      document.body.offsetWidth,
      e.clientX,
      Number(
        locator.current.style.width.split("")[0] +
          locator.current.style.width.split("")[1]
      ),
      (document.body.offsetWidth -
        e.clientX +
        Number(
          locator.current.style.width.split("")[0] +
            locator.current.style.width.split("")[1]
        )) /
        7.5
    );
  };

  return (
    <Locator ref={locator} style={{ width: "30vw" }}>
      <SpliterLeft
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
  /* width: 30vw; */
  height: 96vh;
`;
