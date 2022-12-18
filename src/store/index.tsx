import React, { createContext, useState, MouseEventHandler } from 'react';

interface ContextProviderProps {
  children: JSX.Element;
}

interface defaultStateProps {
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
  sidebar: boolean;
  setTheme: (value: string) => null;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  closeSidebar: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}
const setProperty = (key: string, value: string) =>
  document.documentElement.style.setProperty(key, value);

const getDefaultLocalSotrage = (field: string, defaultValue: string) => {
  return (
    localStorage.getItem(field) ??
    localStorage.setItem(field, defaultValue) ??
    defaultValue
  );
};

const defaultState: defaultStateProps = {
  lang: getDefaultLocalSotrage('lang', 'english'),
  setLang: () => null,
  theme: getDefaultLocalSotrage('theme', 'light'),
  setTheme: () => null,
  sidebar: false,
  setSidebar: () => null,
  closeSidebar: () => null,
};
const setThemeProperty = (theme: string) => {
  if (theme === 'dark') {
    setProperty('--font-color', 'white');
    setProperty('--background-color', 'black');
    setProperty('--sidebar-color', 'black');
    setProperty('--actvie-link-container', 'white');
  }
  if (theme === 'light') {
    setProperty('--font-color', 'black');
    setProperty('--background-color', 'white');
    setProperty('--sidebar-color', '#ebebeb');
    setProperty('--actvie-link-container', 'black');
  }
};
export const ContextStore = createContext(defaultState);

export function ContextProvider({ children }: ContextProviderProps) {
  const [lang, setLang] = useState(defaultState.lang);
  const [theme, setStateTheme] = useState(defaultState.theme);
  setThemeProperty(theme);

  const setTheme = (theme: string) => {
    setStateTheme(theme);
    localStorage.setItem('theme', theme);
    setThemeProperty(theme);
    return null;
  };
  const [sidebar, setSidebar] = useState(defaultState.sidebar);
  const closeSidebar = () => setSidebar(false);
  const value = {
    lang,
    setLang,
    theme,
    setTheme,
    sidebar,
    setSidebar,
    closeSidebar,
  };
  return (
    <ContextStore.Provider value={value}>{children}</ContextStore.Provider>
  );
}

export const pxCheck = (value: string) => {
  const exception = ['px', '%', 'rem', 'em'];
  if (exception.some((ex) => value.includes(ex))) return value;
  return value + 'px';
};
