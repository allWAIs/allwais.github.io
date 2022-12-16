import { useContext } from 'react';
import { ContentsContainer } from '../components';
import { Sidebar } from '../components';
import { Title } from 'react-wai';
import { ContextStore } from '../store';
import { data } from './Intro.language';
export function Intro() {
  const { lang } = useContext(ContextStore);
  const text = data[lang];
  return (
    <>
      <ContentsContainer>
        <Title lv="1">{text.title}</Title>
        <Title>{text.subtitle}</Title>
        <div>{text.desc}</div>
        <Sidebar>Motivation</Sidebar>
      </ContentsContainer>
    </>
  );
}
