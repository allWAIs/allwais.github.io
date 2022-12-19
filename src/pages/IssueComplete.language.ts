interface dataType {
  [key: string]: {
    [key: string]: string;
  };
}
export const data: dataType = {
  english: {
    title: 'Thank you for your opinion',
    desc: `Your valuable comments have been sent to the Github Issues page. You can redirect the webpage using buttons below`,
    home: 'To the home',
    git: 'Visit Github page',
  },
  korean: {
    title: '소중한 의견 감사합니다.',
    desc: `소중한 의견은 깃 허브 이슈 페이지로 전송되었습니다. 아래 버튼을 이용하여 페이지 이동을 할 수 있습니다.`,
    home: '홈 화면으로 이동',
    git: '깃허브 페이지 방문하기',
  },
};
