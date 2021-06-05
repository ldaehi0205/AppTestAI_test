import React from "react";
import styled from "styled-components";

const toolbar = props => {
  const Minimize = "/data/Minimize.png";
  const Shape = "/data/Shape.png";

  return (
    <Toolbar>
      <img src={Shape} alt="Shape" />
      <img
        src={Minimize}
        alt="Minimize"
        onClick={() => props.handleProject()}
      />
    </Toolbar>
  );
};

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
