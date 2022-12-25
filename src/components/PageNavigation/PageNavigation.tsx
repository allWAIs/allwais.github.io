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
const ImageLogo = styled(Logo)`
  width: 100px;
  height: 100px;
  stroke: var(--font-color);
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;
const TextLogo = styled.span`
  display: none;
  font-size: 30px;
  font-weight: 700;
  @media screen and (max-width: 1050px) {
    display: block;
  }
`;
const CloseSidebar = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  border: 1px solid var(--font-color);
  border-radius: 100%;
  width: 40px;
  height: 40px;
  background: none;
  display: none;
  @media screen and (max-width: 1050px) {
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
  overflow-y: auto;
  position: fixed;
  z-index: 3;
  background-color: var(--sidebar-color);
  transition: 0.3s all;
  @media screen and (max-width: 1050px) {
    padding-top: 70px;
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
          <ImageLogo />
          <TextLogo>allWAIs</TextLogo>
        </PageLink>
        <CloseSidebar onClick={closeSidebar}>⨉</CloseSidebar>
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
                Get Started
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
