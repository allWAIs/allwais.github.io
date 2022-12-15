import React, { createContext, useState, MouseEventHandler } from 'react';

interface ContextProviderProps {
  children: JSX.Element;
}

interface defaultStateProps {
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  closeSidebar: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}
const getLocalSotrage = (field: string, defaultValue: string) => {
  return (
    localStorage.getItem(field) ??
    localStorage.setItem(field, defaultValue) ??
    defaultValue
  );
};

const defaultState: defaultStateProps = {
  lang: getLocalSotrage('lang', 'english'),
  setLang: () => null,
  theme: getLocalSotrage('theme', 'light'),
  setTheme: () => null,
  sidebar: false,
  setSidebar: () => null,
  closeSidebar: () => null,
};

export const ContextStore = createContext(defaultState);

export function ContextProvider({ children }: ContextProviderProps) {
  const [lang, setLang] = useState(defaultState.lang);
  const [theme, setTheme] = useState(defaultState.theme);
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
