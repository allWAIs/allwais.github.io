import { useContext } from 'react';
import { ContentsContainer, Sidebar } from '../components';
import { Title } from 'react-wai';
import { ContextStore } from '../store';
import { data } from './IssueComplete.language';
export function IssueComplete() {
  const { lang } = useContext(ContextStore);
  const text = data[lang];
  return (
    <>
      <ContentsContainer>
        <Title lv="1">{text.title}</Title>
        <div>{text.desc}</div>
        <Sidebar> </Sidebar>
      </ContentsContainer>
    </>
  );
}
