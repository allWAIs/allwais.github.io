interface dataType {
  [key: string]: {
    [key: string]: string;
  };
}
export const data: dataType = {
  english: {
    title: 'Open Issue on github',
    desc: 'If you have any improvements to this page or react-wai, please fill them out!',
    titleph: 'Title',
    commentph: 'Leave a comment',
    button: 'Submit new issue',
    visit: 'Visit Github',
  },
  korean: {
    title: 'Open Issue on github',
    desc: '이 페이지 혹은 react-wai에 대한 개선사항이 있다면, 제보해주시기 바랍니다.',
    titleph: '이슈 제목',
    commentph: '내용을 작성해주세요',
    button: '이슈 올리기',
    visit: '깃허브로 이동',
  },
};
