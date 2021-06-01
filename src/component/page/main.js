import React, { useState } from "react";
import styled from "styled-components";
import Aside from "../ui/aside";
import Titlebar from "./../ui/titlebar";
import Project from "./../ui/project";
import EmptyPanel from "./../ui/emptyPanel";

function Main() {
  const [selectProject, setSelectProject] = useState(true);

  const handleProject = () => {
    setSelectProject(!selectProject);
  };

  return (
    <MainPage>
      <Titlebar />
      <main className="mainPanels">
        <Aside handleProject={handleProject} />
        {selectProject && <Project />}
        <EmptyPanel />
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
