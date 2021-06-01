import React, { useState } from "react";
import styled from "styled-components";
import Aside from "../ui/aside";
import Titlebar from "./../ui/titlebar";
import Project from "./../ui/project";
import EmptyPanel from "./../ui/emptyPanel";

function Main() {
  const [selectProject, setSelectProject] = useState(true);
  // const [selectArr, setSelectArr] = useState(["Divice", "Locator"]);

  const handleProject = () => {
    setSelectProject(!selectProject);
  };

  return (
    <MainPage>
      <Titlebar />
      <main className="mainPanels">
        <Aside
          handleProject={handleProject}
          selectProject={selectProject}
          asideName="left"
          rotateText="-90"
        />
        {selectProject && <Project />}
        <EmptyPanel />
        <Aside
          handleProject={handleProject}
          asideName="right"
          rotateText="90"
          // selectNumber="2"
        />
      </main>
    </MainPage>
  );
}

export default Main;
const MainPage = styled.div`
  width: 100%;
  height: 100%;

  .mainPanels {
    display: flex;
    flex-wrap: nowrap;
  }
`;
