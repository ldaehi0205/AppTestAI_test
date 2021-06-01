import React from "react";
import styled from "styled-components";
import ProjectSelected from "./projectSelected";

const slider = props => {
  return (
    <Aside>
      {props.asideName === "right" &&
        CREATE_NAV_RIGHTARRAY.map(e => {
          return (
            <ProjectSelected
              key={e.id}
              // handleProject={props.handleProject}
              asideName={e.content}
              rotateText={props.rotateText}
              // selectProject={props.selectProject}
            />
          );
        })}
      {props.asideName === "left" &&
        CREATE_NAV_LEFTARRAY.map(e => {
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
    </Aside>
  );
};

export default slider;

const Aside = styled.aside`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  left: 0px;
  width: 25px;
  height: 96vh;
  background: #3c3f41;
`;

const CREATE_NAV_RIGHTARRAY = [
  {
    id: 0,
    content: "Divice",
  },
  {
    id: 1,
    content: "Locator",
  },
];

const CREATE_NAV_LEFTARRAY = [
  {
    id: 0,
    content: "Project",
  },
];
