import React from "react";
import styled from "styled-components";

const projectSelected = props => {
  return (
    <ProjectSelected
      onClick={props.handleProject}
      rotateText={props.rotateText}
      selectProject={props.selectProject}
    >
      <div className="name">{props.asideName}</div>
    </ProjectSelected>
  );
};

export default projectSelected;

const ProjectSelected = styled.div`
  position: relative;
  top: 100px;
  width: 100px;
  height: 25px;
  margin-bottom: 74px;
  color: rgb(255, 255, 255);
  background: ${props => (props?.selectProject ? "#2b2b2b" : "3c3f41")};
  font-size: 14px;
  transform-origin: left top;
  transform: rotate(-90deg);
  cursor: pointer;

  .name {
    margin: 4px 30px;
  }
`;
