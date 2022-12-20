interface dataType {
  [key: string]: {
    [key: string]: string;
  };
}
export const data: dataType = {
  english: {
    title: 'Get Started',
    subtitle1: 'Installation',
    subtitle2: 'Import',
  },
  korean: {
    title: '시작하기',
    subtitle1: '설치',
    subtitle2: 'Import',
  },
};
