import React from "react";
import styled from "styled-components";

function projectSelected(props) {
  return (
    <ProjectSelected
      onClick={props.handleProject}
      rotateText={props.rotateText}
      selectProject={props.selectProject}
    >
      <div className="asd">{props.asideName}</div>
    </ProjectSelected>
  );
}

export default projectSelected;

const ProjectSelected = styled.div`
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
  background: ${props => (props.selectProject ? "#2b2b2b" : "3c3f41")};
  font-size: 14px;
  border: 1px solid red;
  cursor: pointer;

  .asd {
    margin: 4px 30px;
  }
`;
