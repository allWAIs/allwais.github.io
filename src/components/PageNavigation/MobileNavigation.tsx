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

  @media screen and (max-width: 900px) {
    display: block;
  }
`;
const SidebarOpenButton = styled.button`
  border: 0;
  background: none;
  font-size: 30px;
  padding: 10px;
`;
/**
 * Component
 */
export function MobileNavigation({ handler, sidebar }: MobileNavigationProps) {
  return (
    <MobileNavigationContainer>
      <SidebarOpenButton onClick={() => handler(!sidebar)}>☰</SidebarOpenButton>
    </MobileNavigationContainer>
  );
}
