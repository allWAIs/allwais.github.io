import { useContext } from 'react';
import { ContextStore } from '../../store/index';

import { Switch } from 'react-wai';

export function ThemeChanger() {
  const { theme, setTheme } = useContext(ContextStore);
  const handleChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <Switch
      a11yHidden={true}
      onClick={() => handleChange()}
      status={theme === 'dark'}
      height="30px"
      bg="white"
      border="white"
      bar="10% 33%/30% no-repeat url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Moon_at_night.svg/120px-Moon_at_night.svg.png) black"
      offBar="90% 30%/30% no-repeat url(https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/svg/sun.svg)"
    >
      Dark Mode
    </Switch>
  );
}
