import styled from '@emotion/styled';
import { useContext } from 'react';
import { ContextStore } from '../../utils/index';

interface NavigationContainerProps {
  children: string | JSX.Element[] | JSX.Element;
}
interface SetLocalStorageProps {
  value: string;
}
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

export function NavigationContainer({ children }: NavigationContainerProps) {
  return (
    <Navigation>
      <LanguageChanger />
      {children}
    </Navigation>
  );
}
