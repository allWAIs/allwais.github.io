import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageNavigation } from './components';
import { Home, Intro, Component } from './pages';
import { ContextProvider } from './utils';

import './App.css';
import styled from '@emotion/styled';

export const StyledApp = styled.div`
  display: flex;
`;

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <StyledApp>
          <PageNavigation />
          <Routes>
            <Route path="/allWAIs" element={<Home />} />
            <Route path="/allWAIs/intro" element={<Intro />} />
            <Route
              path="/allWAIs/Components/:componentId"
              element={<Component />}
            />
          </Routes>
        </StyledApp>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
