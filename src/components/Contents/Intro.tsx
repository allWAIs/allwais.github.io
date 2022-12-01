export function Intro() {
  return (
    <div>
      <h1>Why React WAI</h1>
      <h2>React WAI is goooooooooood</h2>
      <hr />
      <div>
        An alert is an element that displays a brief, important message in a way
        that attracts the user's attention without interrupting the user's task.
        Dynamically rendered alerts are automatically announced by most screen
        readers, and in some operating systems, they may trigger an alert sound.
        It is important to note that, at this time, screen readers do not inform
        users of alerts that are present on the page before page load completes.
        Because alerts are intended to provide important and potentially
        time-sensitive information without interfering with the user's ability
        to continue working, it is crucial they do not affect keyboard focus.
        The alert dialog is designed for situations where interrupting work flow
        is necessary. It is also important to avoid designing alerts that
        disappear automatically. An alert that disappears too quickly can lead
        to failure to meet WCAG 2.0 success criterion 2.2.3. Another critical
        design consideration is the frequency of interruption caused by alerts.
        Frequent interruptions inhibit usability for people with visual and
        cognitive disabilities, which makes meeting the requirements of WCAG 2.0
        success criterion 2.2.4 more difficult.
      </div>
    </div>
  );
}
