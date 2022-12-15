interface dataType {
  [key: string]: {
    [key: string]: string;
  };
}
export const data: dataType = {
  english: {
    title: 'Thank you for your opinion',
    desc: `If you want to visit another page, use the Page Navigation on the left`,
  },
  korean: {
    title: '소중한 의견 감사합니다.',
    desc: `다른 페이지를 방문은, 좌측의 페이지 네비게이션을 이용하여 방문할 수 있습니다.`,
  },
};
