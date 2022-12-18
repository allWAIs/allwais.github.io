import styled from '@emotion/styled';
import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { PageLink } from '../PageComponent/PageLink';
import { Heading } from '../PageComponent/Heading';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { MobileNavigation } from './MobileNavigation';
import { ComponentPageNavigation } from './ComponentPageNavigation';
import { ContextStore } from '../../store';
/**
 * styled
 */
const StyledLogo = styled(Logo)`
  width: 100px;
  height: 100px;
  stroke: var(--font-color);
`;
const StyledCloseSidebar = styled.button`
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
const Search = styled.input`
  padding: 5px;
  background: none;
  border: none;
  border-bottom: 1px solid var(--font-color);
`;
const StyledPageNavigation = styled.div<{ sidebar: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  width: var(--sidebar-width);
  padding: 10px 15px 50px 15px;
  box-sizing: border-box;
  overflow-y: scroll;
  position: fixed;
  z-index: 1;
  background-color: var(--sidebar-color);
  transition: 0.3s all;
  @media screen and (max-width: 900px) {
    transform: ${({ sidebar }) =>
      sidebar ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)'};
  }
`;

/**
 * Component
 */
export function PageNavigation() {
  const { sidebar, setSidebar, closeSidebar } = useContext(ContextStore);
  const { pathname } = useLocation();
  const [keyword, setKeyword] = useState('');

  return (
    <>
      <MobileNavigation sidebar={sidebar} handler={setSidebar} />
      <StyledPageNavigation sidebar={sidebar}>
        <PageLink to="/">
          <StyledLogo />
        </PageLink>
        <StyledCloseSidebar onClick={closeSidebar}>⨉</StyledCloseSidebar>
        <Search
          placeholder="Search Component"
          onChange={({ target: { value } }) => setKeyword(value)}
        />

        {keyword.trim() !== '' ? (
          <ComponentPageNavigation pathname={pathname} keyword={keyword} />
        ) : (
          <>
            <Heading category="Introduction">
              <PageLink to="/intro" pathname={pathname}>
                Why React WAI
              </PageLink>
            </Heading>
            <ComponentPageNavigation pathname={pathname} keyword={keyword} />
            <Heading category="Improve this page">
              <PageLink to="/open-issue" pathname={pathname}>
                Open Issue on github
              </PageLink>
            </Heading>
          </>
        )}
      </StyledPageNavigation>
    </>
  );
}
