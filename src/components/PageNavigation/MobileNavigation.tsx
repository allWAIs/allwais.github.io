import styled from '@emotion/styled';

interface MobileNavigationProps {
  handler: (value: boolean) => void;
  sidebar: boolean;
}
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
export function MobileNavigation({ handler, sidebar }: MobileNavigationProps) {
  return (
    <MobileNavigationContainer>
      <SidebarOpenButton onClick={() => handler(!sidebar)}>☰</SidebarOpenButton>
    </MobileNavigationContainer>
  );
}
