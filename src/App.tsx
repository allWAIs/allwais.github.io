import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageNavigation } from './components';
import { Home, Intro, Component, OpenIssue } from './pages';
import { ContextProvider } from './store';

import './App.css';
import styled from '@emotion/styled';
import { IssueComplete } from './pages/IssueComplete';

export const StyledApp = styled.div`
  display: flex;
`;

function App() {
  return (
    <ContextProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <StyledApp>
          <PageNavigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allWAIs" element={<Home />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/open-issue" element={<OpenIssue />} />
            <Route path="/issue-complete" element={<IssueComplete />} />
            <Route path="/Components/:componentId" element={<Component />} />
          </Routes>
        </StyledApp>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
