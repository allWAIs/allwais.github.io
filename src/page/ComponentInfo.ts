interface dataType {
  [key: string]: {
    [key: string]: {
      [key: string]: string;
    };
  };
}
export const data: dataType = {
  english: {
    Button: {
      title: "Button",
      about:
        "An alert is an element that displays a brief, important message in a way that attracts the user's attention without interrupting the user's task. Dynamically rendered alerts are automatically announced by most screen readers, and in some operating systems, they may trigger an alert sound. It is important to note that, at this time, screen readers do not inform users of alerts that are present on the page before page load completes. Because alerts are intended to provide important and potentially time-sensitive information without interfering with the user's ability to continue working, it is crucial they do not affect keyboard focus. The alert dialog is designed for situations where interrupting work flow is necessary. It is also important to avoid designing alerts that disappear automatically. An alert that disappears too quickly can lead to failure to meet WCAG 2.0 success criterion 2.2.3. Another critical design consideration is the frequency of interruption caused by alerts. Frequent interruptions inhibit usability for people with visual and cognitive disabilities, which makes meeting the requirements of WCAG 2.0 success criterion 2.2.4 more difficult.",
      a11y: "Because an alert is for critical information, assistive technologies may provide special behaviors designed to help call attention to changes in the text of an alert. For example, screen readers may interrupt all other speech and preface announcement of the new alert text with a special sound or phrase.",
      keyboard: "Not applicable",
      props: "backgroundColor : color \nborderColor: color",
    },
    ref: {
      about: "About this component",
      a11y: "Accessibility Features",
      keyboard: "Keyboard Interaction",
      props: "Props",
    },
  },
  korean: {
    Button: {
      title: "Button",
      about:
        "An alert is an element that displays a brief, important message in a way that attracts the user's attention without interrupting the user's task. Dynamically rendered alerts are automatically announced by most screen readers, and in some operating systems, they may trigger an alert sound. It is important to note that, at this time, screen readers do not inform users of alerts that are present on the page before page load completes. Because alerts are intended to provide important and potentially time-sensitive information without interfering with the user's ability to continue working, it is crucial they do not affect keyboard focus. The alert dialog is designed for situations where interrupting work flow is necessary. It is also important to avoid designing alerts that disappear automatically. An alert that disappears too quickly can lead to failure to meet WCAG 2.0 success criterion 2.2.3. Another critical design consideration is the frequency of interruption caused by alerts. Frequent interruptions inhibit usability for people with visual and cognitive disabilities, which makes meeting the requirements of WCAG 2.0 success criterion 2.2.4 more difficult.",
      a11y: "Because an alert is for critical information, assistive technologies may provide special behaviors designed to help call attention to changes in the text of an alert. For example, screen readers may interrupt all other speech and preface announcement of the new alert text with a special sound or phrase.",
      keyboard: "Not applicable",
      props: "backgroundColor : color \nborderColor: color",
    },
    ref: {
      about: "컴포넌트 특징",
      a11y: "접근성",
      keyboard: "키보드 입력",
      props: "프롭스",
    },
  },
};
export interface componentType {}
