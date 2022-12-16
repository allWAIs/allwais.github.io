import styled from '@emotion/styled';
import { useContext } from 'react';
import { ContextStore } from '../../store/index';
import { ReactComponent as ToggleTheme } from '../../theme.svg';
const StyledButton = styled(ToggleTheme)`
  width: 25px;
  height: 25px;
  fill: var(--font-color);
`;

export function ThemeChanger() {
  const { theme, setTheme } = useContext(ContextStore);

  const handleChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return <StyledButton onClick={() => handleChange()} />;
}
