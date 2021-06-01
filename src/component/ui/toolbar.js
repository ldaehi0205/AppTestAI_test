import React from "react";
import styled from "styled-components";
import Minimize from "./minimize.png";
import Shape from "./Shape.png";

function toolbar() {
  return (
    <Toolbar>
      <img src={Shape} alt="Shape" />
      <img src={Minimize} alt="Minimize" />
    </Toolbar>
  );
}

export default toolbar;

const Toolbar = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 3%;
  background: #3c3f41;
  border: 1px solid #383a3b;
  box-sizing: border-box;

  img {
    margin-right: 5px;
  }

  img:nth-child(2) {
    width: 14px;
    height: 3px;
    margin: auto 13px;
    cursor: pointer;
  }
`;
