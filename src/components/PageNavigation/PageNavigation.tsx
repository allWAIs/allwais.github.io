import styled from '@emotion/styled';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledPageNavigation } from './StyledPageNavigation';
import { PageLink } from '../PageComponent/PageLink';
import { Heading } from '../PageComponent/Heading';
import { ReactComponent as Logo } from '../../logo.svg';
import { MobileNavigation } from './MobileNavigation';
const StyledLogo = styled(Logo)`
  width: 100px;
  height: 100px;
  stroke: var(--font-color);
`;
const CloseSidebar = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: 0;
  background: none;
  display: none;
  @media screen and (max-width: 900px) {
    display: block;
  }
`;
export function PageNavigation() {
  const [sidebar, setSidebar] = useState(false);
  const { pathname } = useLocation();
  const closeSidebar = () => setSidebar(false);
  return (
    <>
      <MobileNavigation sidebar={sidebar} handler={setSidebar} />
      <StyledPageNavigation sidebar={sidebar}>
        <Link to="allWAIs" className="hi">
          <StyledLogo />
        </Link>
        <CloseSidebar onClick={closeSidebar}>⨉</CloseSidebar>
        <Heading category="Introduction">
          <PageLink to="allWAIs/intro" pathname={pathname}>
            Why React WAI
          </PageLink>
        </Heading>
        <Heading category="Components">
          <>
            <PageLink to="allWAIs/Components/Alert" pathname={pathname}>
              Alert
            </PageLink>
            <PageLink to="allWAIs/Components/A11yHidden" pathname={pathname}>
              A11yHidden
            </PageLink>
            <PageLink to="allWAIs/Components/Title" pathname={pathname}>
              Title
            </PageLink>
          </>
        </Heading>
        <Heading category="Improve this page">Open Issue on github</Heading>
      </StyledPageNavigation>
    </>
  );
}
