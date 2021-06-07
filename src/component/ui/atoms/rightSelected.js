import React from "react";
import styled from "styled-components";

const RightSelected = props => {
  return (
    <RightSelectedbar
      tapNav={props.tapNav}
      onClick={() => props.handletapNav(props.id)}
    >
      <div className="name">{props.asideName}</div>
    </RightSelectedbar>
  );
};

export default RightSelected;

const RightSelectedbar = styled.div`
  position: relative;
  left: 24px;
  width: 100px;
  height: 25px;
  margin-bottom: 74px;
  color: rgb(255, 255, 255);
  background: ${props => (props.tapNav ? "#2b2b2b" : "3c3f41")};
  font-size: 14px;
  transform: rotate(90deg);
  transform-origin: left top;
  cursor: pointer;

  .name {
    margin: 4px 30px;
  }
`;
