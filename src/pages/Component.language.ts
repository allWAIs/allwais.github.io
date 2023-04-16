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
      props: `
width(string):
- default: undefined
- It determines Component width.

height(string):
- default: undefined
- It determines Component height.

color(string):
- default: black
- It determines Component color.

bg(string):
- default: rgb(224, 231, 235)
- It determines Component background.

children(string):
- required
- It determines Alert message.

`,
      ref: 'https://www.w3.org/WAI/ARIA/apg/patterns/alert/',
    },
    A11yHidden: {
      title: 'A11yHidden',
      about:
        'Sometimes it is necessary to hide elements in a web page. The conventional way is to use CSS (display:none; and visibility:hidden;) or the HTML5 `hidden` attribute. These properties hide elements not only on the screen, but also for screen reader users. Thus, these elements will not be visible nor vocalized by Assistive technologies (AT).',
      a11y: `
      To make understanding the state of the switch easier for users with visual or cognitive disabilities, a text equivalent of the state (on or off) is displayed adjacent to the graphical state indicator. CSS attribute selectors ensure the label displayed is synchronized with the value of the aria-checked attribute.
      NOTE: To prevent redundant announcement of the state by screen readers, the text indicators of state are hidden from assistive technologies with aria-hidden.
      Spacing, border widths and fill are important to ensure the graphical states are visible and discernible to people with visual impairments, including when browser or operating system high contrast settings are enabled:

      To make the graphical representation of the state of a switch readily perceivable, two pixel borders are used for the switch state container and a solid color is used for the fill of the circles indicating the on and off states.
      To ensure users can perceive the difference between the container and the circles used to indicate the state of the switch, there are two pixels of space between the container border and the circles.
      `,
      keyboard: 'Not applicable',
      props: `
as(string):
- default: span
- It determines Component tag.

focusable(string):
- default: false
- It determines Component focusable.

children(string | JSX.Element):
- default: undefined
- It determines accessible hidden message.

`,

      ref: 'https://a11y-guidelines.orange.com/en/web/components-examples/accessible-hiding/',
    },

    Breadcrumb: {
      title: 'Breadcrumb',
      about:
        "A breadcrumb trail consists of a list of links to the parent pages of the current page in hierarchical order. It helps users find their place within a website or web application. Breadcrumbs are often placed horizontally before a page's main content.",
      a11y: 'The set of links is structured using an ordered list .A nav element labeled Breadcrumb identifies the structure as a breadcrumb trail and makes it a navigation landmark so that it is easy to locate.',
      keyboard: 'Not applicable',
      props: `
src(string):
- default: location.origin
- It determines Breadcrumb config address.

root(string):
- default: location.origin.split("/")[0]
- It determines Breadcrumb first path.

map(object):
- default: {}
- It determines Breadcrumb path.

width(string):
- default: fit-content
- It determines Breadcrumb width.

splitter(string):
- default: "/"
- It determines Breadcrumb splitter.

`,
      ref: 'https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/',
    },
    Switch: {
      title: 'Switch',
      about: `
      To make understanding the state of the switch easier for users with visual or cognitive disabilities, a text equivalent of the state (on or off) is displayed adjacent to the graphical state indicator. CSS attribute selectors ensure the label displayed is synchronized with the value of the aria-checked attribute.
      NOTE: To prevent redundant announcement of the state by screen readers, the text indicators of state are hidden from assistive technologies with aria-hidden.
      Spacing, border widths and fill are important to ensure the graphical states are visible and discernible to people with visual impairments, including when browser or operating system high contrast settings are enabled:
      To enhance perceivability when operating the switches, visual keyboard focus and hover are styled using the CSS :hover and :focus pseudo-classes:
      `,
      a11y: `
        A switch is an input widget that allows users to choose one of two values: on or off. Switches are similar to checkboxes and toggle buttons, which can also serve as binary inputs. One difference, however, is that switches can only be used for binary input while checkboxes and toggle buttons allow implementations the option of supporting a third middle state. Checkboxes can be checked or not checked and can optionally also allow for a partially checked state. Toggle buttons can be pressed or not pressed and can optionally allow for a partially pressed state.
        Since switch, checkbox, and toggle button all offer binary input, they are often functionally interchangeable. Choose the role that best matches both the visual design and semantics of the user interface. For instance, there are some circumstances where the semantics of on or off would be easier for assistive technology users to understand than the semantics of checked or unchecked, and vice versa. Consider a widget for turning lights on or off. In this case, screen reader output of Lights switch on is more user friendly than Lights checkbox checked. However, if the same input were in a group of inputs labeled Which of the following must be included in your pre-takeoff procedures?, Lights checkbox checked would make more sense.
        Important: it is critical the label on a switch does not change when its state changes.
        `,
      keyboard: `
Tab : Moves keyboard focus to the switch.
Space | Enter :	Toggle switch between on and off.
      `,
      props: `
delay(string):
- default: 0.3s
- It determines transition delay.

height(string):
- default: 20px
- It determines Component(bar, ball, component) height.

ratio(string):
- default: 2
- It determines Component aspect ratio.

text(string):
- default: on
- It determines switch on text.

bg(string):
- default: green
- It determines switch on background.

border(string):
- default: green
- It determines switch on border.

offText(string):
- default: off
- It determines switch off text.

offBg(string):
- default: none
- It determines switch off background.

offBorder(string):
- default: none
- It determines switch off border.

children(string):
- default: Switch
- It determines switch name.

`,
      ref: 'https://www.w3.org/WAI/ARIA/apg/patterns/switch/',
    },
    Title: {
      title: 'Title',
      about:
        'Navigating through the <h1> and <h2> give a user an overview of a page and how its content is structured. The <h3> through <h6> elements provide a quick understanding of the details in each section.',
      a11y: 'Heading tags should be in order. That means an <h1> is followed by an <h2>, an <h2> is followed by a <h2> or <h3> and so on. It is ok to skip heading levels when going up in order (ex. <h4> to <h1>).',
      keyboard: 'Not applicable',
      props: `
lv(string|number):
- default: 2
- It determines Heading tag level

hidden(boolean):
- default: false
- It determines accessible hidden

focusable(boolean):
- default:false
- It determines Component focusable

children(string):
- default: null
- It determines title text

      `,

      ref: 'https://a11y-style-guide.com/style-guide/section-structure.html',
    },
    List: {
      title: 'List',
      about:
        'A list component that is easily accessible by the keyboard. You can use List and ListItem to move to the component you want.',
      a11y: 'You can orient the list with direction profiles.The direction changes the value of the aria-orientation, affecting the keyboard interaction.',
      keyboard: `
Tab: Move focus to next layer. Move out of the component if the currently focused element is the last layer of the component

Shift+Tab: Move focus to previous layer. Move out of the component if the currently focused element is the first layer of the component

↑/←: Move focus to previous elements in the layer. Do not move if the currently focused element is the first element in the layer.

↓/→: Move focus to the next element in the layer. Do not move if the currently focused element is the last element in the layer.

Home (⌘+↑/← for macOS): Move focus to the first element in the layer

End (⌘+↓/→ for macOS): Move focus to the last element in the layer

Ctrl+Home: Move focus to the first element in the component

Ctrl+End: Move focus to the last element in the component

PageUp (⌥+↑/← for macOS): Move to previous element as many times as specified in the layer

PageDown (⌥+↓/→ for macOS): Move to the next element by the specified number in the layer`,
      props: `   
as?:'ul'|'ol';
- default: 'ul'
- It determines  type of list tag
direction?:'row':'col';
- default: 'row'
- It determines logical/visual direction of list.
- If direction is row, use arrowleft/arrowright key to move forward/backward
- If direction is col, use arrowup/arrowdown key to move forward/backward
nested?:boolean;
- default: 'false'
- It determines whether this component is nested in other List component.
- When it is true, List component is children of ListItem component.
step?:number;
- It determines number of items that will be skipped when pageup/pagedown key pressed in keyboard navigation
children: React.ReactNode;
- default : undefined;
- It determines items of list`,

      ref: 'https://a11y-style-guide.com/style-guide/section-structure.html',
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
      props: `
width(string):
- 기본값: undefined
- 컴포넌트의 너비를 결정합니다.

height(string):
- 기본값: undefined
- 컴포넌트의 높이를 결정합니다.

color(string):
- 기본값: black
- 컴포넌트의 높이를 결정합니다.

bg(string):
- 기본값: rgb(224, 231, 235)
- 컴포넌트의 높이를 결정합니다.

children(string):
Alert 메시지를 결정합니다.`,
    },
    A11yHidden: {
      title: 'A11yHidden',
      about:
        '때때로 웹 페이지에서 요소를 숨겨야 하는 경우가 있습니다. 일반적인 방법은 CSS(display:none; and visibility:hidden;) 또는 HTML5 hidden attribute을 사용하는 것이다. 이러한 properties는 화면의 요소뿐만 아니라 스크린리더 사용자를 위한 요소도 숨깁니다. 따라서, 이러한 요소들은 보조 기술(AT)로 보이거나 음성화가 안될 것입니다',
      a11y: 'A11yHidden은 스크린 유저가 접근할 때는 접근할 수 있지만, 화면에서 요소를 사라지게 합니다. 이상적으로는 모든 해결책을 결합하여 모든 브라우저에서 제대로 작동하는지 확인하는 것이 가장 좋습니다.',
      keyboard: '없음',
      props: `
as(string):
- 기본값: span
- 컴포넌트의 태그를 결정합니다.

focusable(string):
- 기본값: false
- 컴포넌트의 포커스 가능함을 결정합니다.

children(string):
- 기본값: undefined
- 스크린 리더에서 읽을 메시지를 결정합니다.

`,

      ref: 'https://a11y-guidelines.orange.com/en/web/components-examples/accessible-hiding/',
    },

    Breadcrumb: {
      title: 'Breadcrumb',
      about:
        'Breadcrumb trail은 현재 페이지의 상위 페이지에 대한 연결 목록을 계층 순서로 이루어져있습니다. 사용자가 웹 사이트 내에서 현재 위치를 찾을 수 있게 합니다. Breadcrumb는 페이지의 메인 컨텐츠 전에 수평으로 보통 배치됩니다.',
      a11y: '링크들은 정렬된 목록으로 구성되어 있습니다. Breadcrumb라고 라벨된 네비게이션 요소는 구조를 breadcrumb trail로 식별하고, 원하는 주소로 쉽게 이동하기 위해 네비게이션 랜드마크를 생성합니다.',
      keyboard: '없음',
      props: `
src(string):
- default: location.origin
- 컴포넌트에 적용된 주소를 결정합니다.

root(string):
- default: location.origin.split("/")[0]
- 컴포넌트의 첫 번째 path를 결정합니다.

map(object):
- default: {}
- 컴포넌트의 path 단어를 결정합니다.

width(string):
- default: fit-content
- 컴포넌트의 너비를 결정합니다

splitter(string):
- default: "/"
- path를 나누는 문자를 정합니다.

      `,
      ref: 'https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/',
    },
    Switch: {
      title: 'Switch',
      about: `
      스위치는 사용자가 on 또는 off의 두 가지 값 중 하나를 선택할 수 있는 입력 위젯입니다. 스위치는 이진 입력의 역할을 하는 체크 박스 및 토글 버튼과 유사합니다. 그러나 한 가지 차이점은 스위치는 이진 입력에만 사용할 수 있지만, 체크박스와 토글 버튼은 중간 상태를 지원하는 옵션을 허용됩니다.체크 박스와 토글 버튼은 선택하거나 선택하지 않을 수 있으며 선택적으로 부분 선택 상태를 허용할 수도 있습니다.
      `,
      a11y: `
      시각적 또는 인지적으로 불편한 유저가 스위치 상태를 더 쉽게 이해할 수 있도록 상태(ON 또는 OFF)에 해당하는 텍스트가 그래픽 상태 옆에 표시된다. CSS 속성 선택기는 표시된 레이블이 아리아 체크 속성의 값과 동기화되는지 확인합니다.
      참고: 화면 판독기에 의한 상태의 중복 알림을 방지하기 위해 상태 표시기는 아리아가 숨겨진 보조 기술로부터 숨겨집니다.
      브라우저 또는 운영 체제의 고대비 설정이 활성화된 경우를 포함하여 시각적으로 불편한 사람이 그래픽 상태를 볼 수 있고 식별할 수 있도록 하려면 간격, 테두리 너비 및 채우기가 중요합니다.
      
      스위치 상태의 그래픽 표현을 쉽게 인식할 수 있도록 스위치 상태 컨테이너에는 두 개의 픽셀 경계가 사용되고 On/Off 상태를 나타내는 원의 채우기에는 단색이 사용됩니다.
      사용자가 용기와 스위치 상태를 표시하는 데 사용되는 원 사이의 차이를 인식할 수 있도록 용기 테두리와 원 사이에 두 픽셀의 공간이 있습니다.
      `,
      keyboard: `
Tab : 스위치로 포커스시킵니다.
Space | Enter :	스위치를 on, off 토글시킵니다.
      `,
      props: `
delay(string):
- 기본값: 0.3s
- On Off 애니메이션 시간을 결정합니다.

height(string):
- 기본값: 20px 
- 컴포넌트의 높이를 결정합니다.

ratio(string):
- 기본값: 2
- 컴포넌트의 좌우 비율을 결정합니다.

text(string):
- 기본값: on
- 스위치 on 일 때 텍스트를 결정합니다.

bg(string):
- 기본값: green
- on일 때 배경을 결정합니다.

border(string):
- 기본값: green
- 테두리를 결정합니다.

offText(string):
- 기본값: off
- 스위치 off 일 때 텍스트를 결정합니다.

offBg(string):
- 기본값: none
- off일 때 배경을 결정합니다.

offBorder(string):
- 기본값: none
- 스위치가 꺼졌을 때 테두리 색을 결정합니다.

children(string):
- 기본값: Switch
- 스위치의 이름을 결정합니다.

`,
      ref: 'https://www.w3.org/WAI/ARIA/apg/patterns/switch/',
    },
    Title: {
      title: 'Title',
      about:
        '<h1>과 <h2>를 탐색하면 사용자에게 페이지의 개요와 페이지 내용의 구조 제공할 수 있습니다. <h3> ~ <h6> 요소를 통해 각 섹션의 세부 사항을 빠르게 이해할 수 있습니다.',
      a11y: '제목 태그는 순서대로 배치되어야만 한다. 즉, <h1> 뒤에 <h2>, <h2> 뒤에 <h2> 또는 <h3> 등이 뒤따른다는 것이다. 순서대로 올라갈 때 헤딩 레벨을 건너뛰어도 괜찮습니다(예: <h4>에서 <h1>).',
      keyboard: '없음',
      props: `
lv(string|number):
- 기본값: 2
- 타이틀의 태그 레벨을 결정합니다.

hidden(boolean):
- 기본값: false
- 컴포넌트의 A11yHidden을 결정합니다.

focusable(boolean):
- 기본값: false
- 컴포넌트의 포커스 가능함을 결정합니다.

children(string):
- 기본값: null
- 컴포넌트의 텍스트 내용을 결정합니다.

      `,

      ref: 'https://a11y-style-guide.com/style-guide/section-structure.html',
    },
    List: {
      title: 'List',
      about:
        '키보드로 쉽게 접근할 수 있는 리스트 컴포넌트입니다. List와 ListItem을 이용하여 원하는 컴포넌트로 이동할 수 있습니다.',
      a11y: 'direction props로 리스트의 방향을 정할 수 있습니다.direction이 aria-orientation의 값을 바꾸며, 키보드 인터렉션에 영향을 줍니다.',
      keyboard: `
as?:'ul'|'ol';
- 기본값: 'ul'
- 리스트 태그의 타입을 정합니다
direction?:'row':'col';
- 기본값: 'row'
- 리스트의 방향을 정합니다
- 방향이 row인 경우, 화살표 좌 우를 사용하여 앞 뒤로 이동할 수 있습니다.
- 방향이 col인 경우, 화살표 위 아래를 사용하여, 앞 뒤로 이동할 수 있습니다.
nested?:boolean;
- 기본값: false
- 리스트 컴포넌트 안에 다른 컴포넌트가 들어오는지 여부를 정합니다.
- true라면 리스트 컴포넌트에 List 컴포넌트는 ListItem의 children이 됩니다.
step?:number;
- pageup과 pagedown 키를 눌렀을 때 몇 칸씩 이동하는지를 결정합니다.
children: React.ReactNode;
- 기본값 : undefined;
- 리스트의 아이템을 결정합니다.`,
      props: `
lv(string|number):
- 기본값: 2
- 타이틀의 태그 레벨을 결정합니다.

hidden(boolean):
- 기본값: false
- 컴포넌트의 A11yHidden을 결정합니다.

focusable(boolean):
- 기본값: false
- 컴포넌트의 포커스 가능함을 결정합니다.

children(string):
- 기본값: null
- 컴포넌트의 텍스트 내용을 결정합니다.

      `,

      ref: 'https://a11y-style-guide.com/style-guide/section-structure.html',
    },
    ref: {
      about: '컴포넌트 특징',
      demo: '이용',
      a11y: '접근성',
      keyboard: '키보드 입력',
      props: 'Props',
    },
  },
};
