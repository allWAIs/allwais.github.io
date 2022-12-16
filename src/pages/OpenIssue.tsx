import { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Title } from 'react-wai';
import { Octokit } from '@octokit/rest';
import { createAppAuth } from '@octokit/auth-app';
import styled from '@emotion/styled';
import { data } from './OpenIssue.language';
import { ContextStore } from '../store';
import { ContentsContainer, Sidebar } from '../components';
const octokit = new Octokit({
  authStrategy: createAppAuth,
  auth: {
    appId: process.env.REACT_APP_APP_ID,
    privateKey: process.env.REACT_APP_PRIVATE_KEY,
    clientId: process.env.REACT_APP_CLIENT_ID,
    clientSecret: process.env.REACT_APP_CLIENT_SECRET,
    installationId: process.env.REACT_APP_INSTALLATION_ID,
  },
});

const StyledButton = styled.button`
  border: 0;
  background-color: var(--font-color);
  color: var(--background-color);
  padding: 15px;
  border-radius: 10px;
`;

const IssueTitle = styled.input`
  font-size: 16px;
  padding: 15px;
  border-radius: 10px;
  color: black;
`;

const IssueComment = styled.textarea`
  font-size: 16px;
  padding: 15px;
  height: 400px;
  border-radius: 10px;
  color: black;
`;

export function OpenIssue() {
  const issueTitle = useRef<HTMLInputElement | null>(null);
  const issueDetail = useRef<HTMLTextAreaElement | null>(null);
  const { lang } = useContext(ContextStore);
  const redirect = useNavigate();
  const text = data[lang];
  const sendIssue = async (title?: string, detail?: string) => {
    try {
      if (typeof title == undefined || typeof detail == undefined) return;
      await octokit.rest.issues.create({
        owner: 'allWAIs',
        repo: 'allWAIs',
        title: title + '',
        body: detail || '',
      });
      redirect('/issue-complete');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ContentsContainer>
        <Title lv="1">{text.title}</Title>
        <span>{text.desc}</span>
        <IssueTitle ref={issueTitle} placeholder={text.titleph}></IssueTitle>
        <IssueComment ref={issueDetail} placeholder={text.commentph} />
        <StyledButton
          onClick={() =>
            sendIssue(issueTitle?.current?.value, issueDetail?.current?.value)
          }
        >
          {text.button}
        </StyledButton>
      </ContentsContainer>
      <Sidebar>
        <a href="/allWAIs/react-wai" target="_blank" rel="noopener noreferrer">
          {text.visit}
        </a>
      </Sidebar>
    </>
  );
}
