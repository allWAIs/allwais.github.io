import { createContext, useState } from "react";

const getLocalSotrage = (field: string, defaultValue: string) => {
  return (
    localStorage.getItem(field) ??
    localStorage.setItem(field, defaultValue) ??
    defaultValue
  );
};
const ContextStore = createContext({});

export const ContextProvider = (children: JSX.Element): JSX.Element => {
  const [lang, setLang] = useState(getLocalSotrage("lang", "english"));
  const [theme, setTheme] = useState(getLocalSotrage("theme", "light"));
  const info = {
    lang,
    setLang,
    theme,
    setTheme,
  };
  return <ContextStore.Provider value={info}>{children}</ContextStore.Provider>;
};
