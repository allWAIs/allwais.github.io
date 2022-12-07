import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';
import { StyledPageNavigation } from './StyledPageNavigation';
import { PageLink } from '../PageComponent/Link';
import { Heading } from '../PageComponent/Heading';
import { ReactComponent as Logo } from '../../logo.svg';

const StyledLogo = styled(Logo)`
  width: 100px;
  height: 100px;
`;
export function PageNavigation() {
  const { pathname } = useLocation();
  return (
    <StyledPageNavigation>
      <Link to="/" className="hi">
        <StyledLogo />
      </Link>
      <Heading category="Introduction">
        <PageLink to="/intro" pathname={pathname}>
          Why React WAI
        </PageLink>
      </Heading>
      <Heading category="Components">
        <>
          <PageLink to="/Components/Alert" pathname={pathname}>
            Alert
          </PageLink>
          <PageLink to="/Components/A11yHidden" pathname={pathname}>
            A11yHidden
          </PageLink>
          <PageLink to="/Components/Title" pathname={pathname}>
            Title
          </PageLink>
        </>
      </Heading>
      <Heading category="Improve this page">Open Issue on github</Heading>
    </StyledPageNavigation>
  );
}
