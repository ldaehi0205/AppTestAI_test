import React from "react";
import styled from "styled-components";

function projectSelected(props) {
  return (
    <ProjectSelected onClick={props.handleProject}>Project</ProjectSelected>
  );
}

export default projectSelected;

const ProjectSelected = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  left: -37px;
  top: 40px;
  width: 100px;
  height: 25px;
  transform: rotate(-90deg); //크로스브라우징 무시
  color: rgb(255, 255, 255);
  background: #2b2b2b;
  font-size: 14px;
  cursor: pointer;
`;
