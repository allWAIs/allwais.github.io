import { useContext } from 'react';
import { ContextStore } from '../../store/index';

interface SetLocalStorageProps {
  value: string;
}

export function LanguageChanger() {
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
