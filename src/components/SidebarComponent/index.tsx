import styled from '@emotion/styled';
import { LanguageChanger } from './LanguageChanger';
import { ThemeChanger } from './ThemeChanger';
interface NavigationContainerProps {
  children: string | JSX.Element[] | JSX.Element;
}

const StyledChildren = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;
export const Navigation = styled.div`
  font-size: 80%;
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: var(--synopsis-width);
  padding: 0 var(--content-padding);
  margin: var(--content-padding) 0;
  border-left: 1px solid var(--sidbar-border-color);
  box-sizing: border-box;
  top: 0;
  right: 0;
  @media screen and (max-width: 1050px) {
    flex-direction: row;
    margin: 10px;
    border: none;
    padding-right: 5px;
    padding-top: 5px;
    flex-direction: row-reverse;
    z-index: 2;
  }
`;

export function Sidebar({ children }: NavigationContainerProps) {
  return (
    <Navigation>
      <ThemeChanger />
      <LanguageChanger />
      <StyledChildren>{children}</StyledChildren>
    </Navigation>
  );
}
