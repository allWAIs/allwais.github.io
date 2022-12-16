import styled from '@emotion/styled';
import { LanguageChanger } from './LanguageChanger';
import { ThemeChanger } from './ThemeChanger';
interface NavigationContainerProps {
  children: string | JSX.Element[] | JSX.Element;
}

const StyledChildren = styled.div`
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
export const Navigation = styled.div`
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
  @media screen and (max-width: 900px) {
    flex-direction: row;
    margin: 10px;
    border: none;
    padding-right: 10px;
    padding-top: 10px;
    flex-direction: row-reverse;
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
