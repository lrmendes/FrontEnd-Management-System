import React, { useState } from "react";
import AppBar from "../AppBar";
import SideBar from "../SideBar";
import styled from "styled-components";

const Root = styled.div`
  display: grid;
  grid-template-columns: ${({ isDrawerOpen }) =>
      isDrawerOpen ? "240px" : "0px"} 1fr;
`;

function MainLayout({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  return (
    <Root isDrawerOpen={isDrawerOpen}>
      <SideBar isOpen={isDrawerOpen} />
      <main>
        <AppBar toogleDrawer={() => setIsDrawerOpen((state) => !state)} />
        {children}
      </main>
    </Root>
  );
}

export default MainLayout;
