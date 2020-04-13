import React, { useState } from "react";
import AppBar from "./components/AppBar";
import SideBar from "./components/SideBar";
import styled from "styled-components";
import Routes from "./routes";

const Root = styled.div`
  display: grid;
  grid-template-columns: ${({ isDrawerOpen }) =>
      isDrawerOpen ? "240px" : "0px"} 1fr;
`;

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  return (
    <Root isDrawerOpen={isDrawerOpen}>
      <SideBar isOpen={isDrawerOpen} />
      <main>
        <AppBar toogleDrawer={() => setIsDrawerOpen((state) => !state)} />
        <Routes />
      </main>
    </Root>
  );
}

export default App;
