import styled from '@emotion/styled';
import { useContext } from 'react';
import { ContextStore } from '../../utils/index';
import { ReactComponent as ToggleTheme } from '../../theme.svg';
interface NavigationContainerProps {
  children: string | JSX.Element[] | JSX.Element;
}
interface SetLocalStorageProps {
  value: string;
}
const StyledButton = styled(ToggleTheme)`
  width: 25px;
  height: 25px;
  position: absolute;
  transform: translate3d(0, -25px, 0);
  fill: var(--font-color);
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
    display: none;
  }
`;

function LanguageChanger() {
  const { lang, setLang } = useContext(ContextStore);

  const handleChange = ({ value }: SetLocalStorageProps) => {
    localStorage.setItem('lang', value);
    setLang(value);
  };
  return (
    <select value={lang} onChange={({ target }) => handleChange(target)}>
      <option value="english">english</option>
      <option value="korean">한국어</option>
    </select>
  );
}

function ThemeChanger() {
  const { theme, setTheme } = useContext(ContextStore);
  const toggleTheme = (theme: string) => {
    if (theme === 'dark') {
      document.documentElement.style.setProperty('--font-color', 'white');
      document.documentElement.style.setProperty('--background-color', 'black');
      document.documentElement.style.setProperty('--sidebar-color', 'black');
    }
    if (theme === 'light') {
      document.documentElement.style.setProperty('--font-color', 'black');
      document.documentElement.style.setProperty('--background-color', 'white');
      document.documentElement.style.setProperty('--sidebar-color', '#ebebeb');
    }
  };
  const handleChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    localStorage.setItem('theme', theme);
    toggleTheme(theme);
  };
  return <StyledButton onClick={() => handleChange()}>convert</StyledButton>;
}
export function NavigationContainer({ children }: NavigationContainerProps) {
  return (
    <Navigation>
      <ThemeChanger />
      <LanguageChanger />
      {children}
    </Navigation>
  );
}
