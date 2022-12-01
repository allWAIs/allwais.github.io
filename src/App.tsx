import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PageNavigation } from "./components";
import { Home, Intro, Component } from "./page";

import "./App.css";
import styled from "@emotion/styled";

export const StyledApp = styled.div`
  display: flex;
  min-height: 100vh;
`;

function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <PageNavigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/intro" element={<Intro />}></Route>
          <Route
            path="/Components/:componentId"
            element={<Component />}
          ></Route>
        </Routes>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
