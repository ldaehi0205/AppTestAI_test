import React from "react";
import styled from "styled-components";
import ProjectSelected from "../atoms/ProjectSelected";
import RightSelected from "../atoms/RightSelected";

const Aside = props => {
  return (
    <AsideBar>
      {props.asideName === "right" &&
        props.CREATE_NAV_RIGHTARRAY.map(e => {
          return (
            <RightSelected
              key={e.id}
              id={e.id}
              tapNav={props.tapNav[e.id]}
              asideName={e.content}
              rotateText={props.rotateText}
              handletapNav={props.handletapNav}
            />
          );
        })}
      {props.asideName === "left" &&
        props.CREATE_NAV_LEFTARRAY.map(e => {
          return (
            <ProjectSelected
              key={e.id}
              handleProject={props.handleProject}
              asideName={e.content}
              rotateText={props.rotateText}
              selectProject={props.selectProject}
            />
          );
        })}
    </AsideBar>
  );
};

export default Aside;

const AsideBar = styled.aside`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  left: 0px;
  width: 25px;
  height: 96vh;
  background: #3c3f41;
`;
