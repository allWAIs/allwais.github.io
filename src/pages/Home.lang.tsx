interface dataType {
  [key: string]: {
    [key: string]: string;
  };
}
export const data: dataType = {
  english: {
    title: 'React WAI',
    desc: `A library of React components that provides accessible UI components.`,
  },
  korean: {
    title: 'React WAI',
    desc: `접근 가능한 UI 컴포넌트를 제공하는 React 컴포넌트 라이브러리입니다.`,
  },
};
