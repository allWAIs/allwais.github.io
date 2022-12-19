import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Title } from 'react-wai';
import styled from '@emotion/styled';
import { ContentsContainer, Sidebar } from '../components';
import { ContextStore } from '../store';
import { data } from './IssueComplete.language';

const ButtonList = styled.ul`
  display: flex;
  gap: 15px;
`;

const Homelink = styled(Link)`
  display: inline-block;
  padding: 10px;
  width: fit-content;
  background-color: var(--font-color);
  color: var(--background-color);
`;
const GithubLink = styled.a`
  display: inline-block;
  padding: 10px;
  width: fit-content;
  background-color: var(--font-color);
  color: var(--background-color);
`;
export function IssueComplete() {
  const { lang } = useContext(ContextStore);
  const text = data[lang];
  return (
    <>
      <ContentsContainer>
        <Title lv="1">{text.title}</Title>
        <div>{text.desc}</div>
        <ButtonList>
          <Homelink to="/">{text.home}</Homelink>
          <GithubLink
            href="/allWAIs/react-wai"
            target="_blank"
            rel="noopener noreferrer"
          >
            {text.git}
          </GithubLink>
        </ButtonList>
        <Sidebar> </Sidebar>
      </ContentsContainer>
    </>
  );
}
