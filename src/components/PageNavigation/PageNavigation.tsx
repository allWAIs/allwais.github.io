import styled from '@emotion/styled';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledPageNavigation } from './StyledPageNavigation';
import { PageLink } from '../PageComponent/PageLink';
import { Heading } from '../PageComponent/Heading';
import { ReactComponent as Logo } from '../../logo.svg';
import { MobileNavigation } from './MobileNavigation';
import { ComponentPageNavigation } from './ComponentPageNavigation';
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
const Search = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid black;
`;
export function PageNavigation() {
  const [sidebar, setSidebar] = useState(false);
  const { pathname } = useLocation();
  const [keyword, setKeyword] = useState('');
  const closeSidebar = () => setSidebar(false);

  return (
    <>
      <MobileNavigation sidebar={sidebar} handler={setSidebar} />
      <StyledPageNavigation sidebar={sidebar}>
        <Link to="allWAIs" className="hi">
          <StyledLogo></StyledLogo>
        </Link>
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
              <PageLink to="allWAIs/intro" pathname={pathname}>
                Why React WAI
              </PageLink>
            </Heading>
            <ComponentPageNavigation pathname={pathname} keyword={keyword} />
            <Heading category="Improve this page">
              <PageLink to="allWAIs/open-issue" pathname={pathname}>
                Open Issue on github
              </PageLink>
            </Heading>
          </>
        )}
      </StyledPageNavigation>
    </>
  );
}
