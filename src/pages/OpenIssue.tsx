import { useRef } from 'react';
import { ContentsContainer } from '../components';
import { Octokit } from '@octokit/rest';
import { createAppAuth } from '@octokit/auth-app';

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

export function OpenIssue() {
  const issueTitle = useRef<HTMLInputElement | null>(null);
  const issueDetail = useRef<HTMLTextAreaElement | null>(null);
  console.log(process.env.REACT_APP_APP_ID);
  const sendIssue = async (title?: string, detail?: string) => {
    try {
      if (typeof title !== undefined && typeof detail !== undefined) {
        await octokit.rest.issues.create({
          owner: 'allWAIs',
          repo: 'allWAIs',
          title: title + '',
          body: detail || '',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ContentsContainer>
        <h1>Open Issue on github</h1>
        <span>
          If you have any improvements to this page or react-wai, please fill
          them out!
        </span>
        <input id="issuetitle" ref={issueTitle}></input>
        <textarea name="" id="issuedetail" ref={issueDetail}></textarea>
        <button
          onClick={() =>
            sendIssue(issueTitle?.current?.value, issueDetail?.current?.value)
          }
        >
          send it
        </button>
      </ContentsContainer>
    </>
  );
}
