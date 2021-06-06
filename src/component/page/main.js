import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Aside from "../ui/molecules/Aside";
import Titlebar from "../ui/atoms/Titlebar";
import ProjectPanel from "../ui/molecules/ProjectPanel";
import EmptyPanel from "../ui/atoms/EmptyPanel";
import DevicePanel from "../ui/molecules/DevicePanel";
import LocatorPanel from "../ui/molecules/LocatorPanel";

const Main = () => {
  const [selectProject, setSelectProject] = useState(true);
  const [tapNav, setTapNav] = useState([]);

  const handleProject = () => {
    setSelectProject(!selectProject);
  };

  const handletapNav = index => {
    const newArray = Array(CREATE_NAV_RIGHTARRAY.length).fill(false);
    newArray[index] = true;
    setTapNav(newArray);
  };

  useEffect(() => {
    setTapNav([true, false]);
  }, []);
  return (
    <MainPage>
      <Titlebar />
      <main className="mainPanels">
        <Aside
          handleProject={handleProject}
          CREATE_NAV_LEFTARRAY={CREATE_NAV_LEFTARRAY}
          selectProject={selectProject}
          asideName="left"
          rotateText="-90"
        />
        {selectProject && <ProjectPanel handleProject={handleProject} />}
        <EmptyPanel />
        {tapNav[0] && <DevicePanel tapNav={tapNav[0]} />}
        {tapNav[1] && <LocatorPanel tapNav={tapNav[1]} />}
        <Aside
          CREATE_NAV_RIGHTARRAY={CREATE_NAV_RIGHTARRAY}
          tapNav={tapNav}
          asideName="right"
          rotateText="90"
          handletapNav={handletapNav}
        />
      </main>
    </MainPage>
  );
};

export default Main;
const MainPage = styled.div`
  width: 100%;
  height: 100%;

  .mainPanels {
    display: flex;
    flex-wrap: nowrap;
  }
`;
const CREATE_NAV_RIGHTARRAY = [
  {
    id: 0,
    content: "Device",
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
