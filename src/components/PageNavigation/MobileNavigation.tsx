import { ReactComponent as Hamburger } from '../../assets/hamburger.svg';

import styled from '@emotion/styled';
/**
 * type
 */
interface MobileNavigationProps {
  handler: (value: boolean) => void;
  sidebar: boolean;
}
/**
 * styled
 */
const MobileNavigationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: none;

  @media screen and (max-width: 1050px) {
    display: block;
    width: 99vw;
    background: var(--background-color);
  }
`;
const SidebarOpenButton = styled(Hamburger)`
  border: 0;
  background: none;
  font-size: 30px;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid var(--font-color);
  fill: var(--font-color);
`;
/**
 * Component
 */
export function MobileNavigation({ handler, sidebar }: MobileNavigationProps) {
  return (
    <MobileNavigationContainer>
      <SidebarOpenButton onClick={() => handler(!sidebar)}></SidebarOpenButton>
    </MobileNavigationContainer>
  );
}
