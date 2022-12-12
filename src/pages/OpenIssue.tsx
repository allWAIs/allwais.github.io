import { useRef } from 'react';
import { ContentsContainer } from '../components';
import { Octokit } from '@octokit/rest';
const octokit = new Octokit({
  auth: 'l4i2WmqZAVPaEbwgmFybuDwBGS3KtjHrgN+E56mvBiA=',
});
export function OpenIssue() {
  const issueTitle = useRef<HTMLInputElement | null>(null);
  const issueDetail = useRef<HTMLTextAreaElement | null>(null);

  const sendIssue = async (title?: string, detail?: string) => {
    if (typeof title && typeof detail) {
      octokit.rest.issues.create({
        owner: 'allWAIs',
        repo: 'allWAIs',
        title: title + '',
        body: detail,
      });
      // await octokit.request('POST /repos/{owner}/{repo}/issues', {
      //   owner: 'allWAIs',
      //   repo: 'allWAIs',
      //   title: title + '',
      //   body: detail,
      //   // assignees: ['octocat'],
      //   milestone: 1,
      //   // labels: ['bug'],
      // });
    }

    // fetch('https://api.github.com/repos/allWAIs/issues', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: 'token ' + '3e92c76fb5dc5cba9f4d1080b7d108e69a381f7d',
    //   },
    //   body: JSON.stringify({
    //     title: title,
    //     body: detail,
    //   }),
    // }).then(() => {
    //   // input 초기화 하기
    // });
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
