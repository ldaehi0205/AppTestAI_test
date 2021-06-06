import React from "react";
import styled from "styled-components";

const Titlebar = () => {
  const appTestIcon = "/data/appTestIcon.png";

  return (
    <Header>
      <img src={appTestIcon} alt="appTestAIIcon" />
    </Header>
  );
};

export default Titlebar;

const Header = styled.header`
  display: block;
  width: 100%;
  height: 40px;
  background: #3c3f41;
  border: 1px solid #383a3b;
  box-sizing: border-box;
`;
