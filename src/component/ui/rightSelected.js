import React from "react";
import styled from "styled-components";

function RightSelected(props) {
  return (
    <RightSelectedbar
      onClick={props.handleProject}
      rotateText={props.rotateText}
      selectProject={props.selectProject}
      tapNav={props.tapNav}
      onClick={() => props.handletapNav?.(props.id)}
    >
      <div className="asd">{props.asideName}</div>
    </RightSelectedbar>
  );
}

export default RightSelected;

const RightSelectedbar = styled.div`
  position: relative;
  left: ${props => Number(props.rotateText) > 0 && "24px"};
  top: ${props => Number(props.rotateText) < 0 && "100px"};
  width: 100px;
  height: 25px;
  margin-bottom: 74px;
  transform-origin: left top;
  transform: ${props =>
    Number(props.rotateText) > 0 ? "rotate(90deg)" : "rotate(-90deg)"};
  color: rgb(255, 255, 255);
  background: ${props => (props.tapNav ? "#2b2b2b" : "3c3f41")};

  font-size: 14px;
  cursor: pointer;

  .asd {
    margin: 4px 30px;
  }
`;
