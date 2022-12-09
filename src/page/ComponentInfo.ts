interface dataType {
  [key: string]: {
    [key: string]: {
      [key: string]: string;
    };
  };
}
export const data: dataType = {
  english: {
    Alert: {
      title: 'Alert',
      about:
        "An alert is an element that displays a brief, important message in a way that attracts the user's attention without interrupting the user's task. Dynamically rendered alerts are automatically announced by most screen readers, and in some operating systems, they may trigger an alert sound. It is important to note that, at this time, screen readers do not inform users of alerts that are present on the page before page load completes.\nBecause alerts are intended to provide important and potentially time-sensitive information without interfering with the user's ability to continue working, it is crucial they do not affect keyboard focus. The alert dialog is designed for situations where interrupting work flow is necessary.\nIt is also important to avoid designing alerts that disappear automatically. An alert that disappears too quickly can lead to failure to meet WCAG 2.0 success criterion 2.2.3. Another critical design consideration is the frequency of interruption caused by alerts. Frequent interruptions inhibit usability for people with visual and cognitive disabilities, which makes meeting the requirements of WCAG 2.0 success criterion 2.2.4 more difficult.",
      a11y: 'Because an alert is for critical information, assistive technologies may provide special behaviors designed to help call attention to changes in the text of an alert. For example, screen readers may interrupt all other speech and preface announcement of the new alert text with a special sound or phrase.',
      keyboard: 'Not applicable',
      props: [
        'width(string):It determines Component width',
        'height(string):It determines Component height',
        'children(string):It determines Alert message',
      ].join('\n'),
      ref: 'https://www.w3.org/WAI/ARIA/apg/patterns/alert/',
    },
    A11yHidden: {
      title: 'A11yHidden',
      about:
        'Sometimes it is necessary to hide elements in a web page. The conventional way is to use CSS (display:none; and visibility:hidden;) or the HTML5 `hidden` attribute. These properties hide elements not only on the screen, but also for screen reader users. Thus, these elements will not be visible nor vocalized by Assistive technologies (AT).',
      a11y: 'A11yHidden allows an element to disappear from the screen, while being accessible to screen reader users. Ideally, it is best to combine all the solutions to make sure it is working properly in all browsers.',
      keyboard: 'Not applicable',
      props: [
        'as(string):It determines Component tag',
        'focusable(string):It determines Component focusable',
        'children(string):It determines accessible hidden message',
      ].join('\n'),
      ref: 'https://a11y-guidelines.orange.com/en/web/components-examples/accessible-hiding/',
    },
    Title: {
      title: 'Title',
      about:
        "Navigating through the <h1> and <h2> give a user an overview of a page and how its content is structured. The <h3> through <h6> elements provide a quick understanding of the details in each section.",
      a11y: 'Heading tags should be in order. That means an <h1> is followed by an <h2>, an <h2> is followed by a <h2> or <h3> and so on. It is ok to skip heading levels when going up in order (ex. <h4> to <h1>).',
      keyboard: 'Not applicable',
      props: [
        'lv(string|number):It determines Heading tag level',
        'hidden(string):It determines accessible hidden',
        'focusable(string):It determines Component focusable',
        'children(string):It determines title text',
      ].join('\n'),
      ref:'https://a11y-style-guide.com/style-guide/section-structure.html'
    },
    ref: {
      about: 'About this component',
      demo: 'Usage',
      a11y: 'Accessibility Features',
      keyboard: 'Keyboard Interaction',
      props: 'Props',
    },
  },
  korean: {
    Alert: {
      title: 'Alert',
      about:
        'Alert는 작업을 중단하지 않고 주의를 끄는 방식으로 짧고 중요한 메시지를 표시하는 요소입니다. 동적으로 렌더링되는 경보는 대부분의 화면 판독기에서 자동으로 발표되며 일부 운영 체제에서는 경보 사운드를 트리거할 수 있습니다. 이때 스크린 리더는 페이지가 로딩이 완료되기 전에 페이지에 있는 경고를 사용자에게 알리지 않습니다.\n경보는 사용자의 작업 지속 능력을 방해하지 않고 중요하고 잠재적으로 시간에 민감한 정보를 제공하기 위한 것이므로 키보드 초점에 영향을 미치지 않는 것이 중요합니다. Alert dialog는 작업 흐름을 중단해야 하는 상황에 맞게 설계되었습니다.\n자동으로 사라지는 경보를 설계하지 않는 것도 중요합니다. 경고가 너무 빨리 사라지면 WCAG 2.0 성공 기준 2.2.3을 충족하지 못할 수 있습니다. 또 다른 중요한 설계 고려사항은 경보로 인한 중단의 빈도입니다. 빈번한 중단은 시각 및 인지 장애가 있는 사람들의 사용성을 저해하며, 이는 WCAG 2.0 성공 기준 2.2.4의 요건을 충족하는 것을 더욱 어렵게 만듭니다.',
      a11y: 'Alert는 중요한 정보에 대한 것이기 때문에 보조 기술은 Alert 텍스트의 변경 사항에 대한 주의를 환기하는 데 도움이 되도록 설계된 특별한 동작을 제공할 수 있습니다. 예를 들어, 스크린리더는 다른 모든 음성을 중단하고 특별한 소리나 문구로 새 경고 텍스트의 서문을 발표할 수 있습니다.',
      keyboard: '없음',
      props: [
        'width(string):컴포넌트의 너비를 결정합니다',
        'height(string):컴포넌트의 높이를 결정합니다',
        'children(string):Alert 메시지를 결정합니다',
      ].join('\n'),
    },
    A11yHidden: {
      title: 'A11yHidden',
      about:
        '때때로 웹 페이지에서 요소를 숨겨야 하는 경우가 있습니다. 일반적인 방법은 CSS(display:none; and visibility:hidden;) 또는 HTML5 'hidden' attribute을 사용하는 것이다. 이러한 properties는 화면의 요소뿐만 아니라 스크린리더 사용자를 위한 요소도 숨깁니다. 따라서, 이러한 요소들은 보조 기술(AT)로 보이거나 음성화가 안될 것입니다',
      a11y: 'A11yHidden은 스크린 유저가 접근할 때는 접근할 수 있지만, 화면에서 요소를 사라지게 합니다. 이상적으로는 모든 해결책을 결합하여 모든 브라우저에서 제대로 작동하는지 확인하는 것이 가장 좋습니다.',
      keyboard: '없음',
      props: [
        'as(string):컴포넌트의 태그를 결정합니다.',
        'focusable(string):컴포넌트의 포커스 가능함을 결정합니다.',
        'children(string):스크린 리더에서 읽을 메시지를 결정합니다.',
      ].join('\n'),
      ref: 'https://a11y-guidelines.orange.com/en/web/components-examples/accessible-hiding/',
    },
    Title: {
      title: 'Title',
      about:
        "<h1>과 <h2>를 탐색하면 사용자에게 페이지의 개요와 페이지 내용의 구조 제공할 수 있습니다. <h3> ~ <h6> 요소를 통해 각 섹션의 세부 사항을 빠르게 이해할 수 있습니다.",
      a11y: '제목 태그는 순서대로 배치되어야만 한다. 즉, <h1> 뒤에 <h2>, <h2> 뒤에 <h2> 또는 <h3> 등이 뒤따른다는 것이다. 순서대로 올라갈 때 헤딩 레벨을 건너뛰어도 괜찮습니다(예: <h4>에서 <h1>).',
      keyboard: '없음',
      props: [
        'lv(string|number):타이틀의 태그 레벨을 결정합니다',
        'hidden(string):컴포넌트의 A11yHidden을 결정합니다',
        'focusable(string):컴포넌트의 포커스 가능함을 결정합니다',
        'children(string):컴포넌트의 텍스트 내용을 결정합니다',
      ].join('\n'),
      ref:'https://a11y-style-guide.com/style-guide/section-structure.html'
    },
    ref: {
      about: '컴포넌트 특징',
      demo: '이용',
      a11y: '접근성',
      keyboard: '키보드 입력',
      props: '프롭스',
    },
  },
};
