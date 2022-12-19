import { useState } from 'react';
import { Alert, Title } from 'react-wai';
import {
  ComponentTag,
  Demo,
  StringInput,
  Import,
  Func,
  ChildrenText,
  Return,
} from './../EditorComponent';

export function BasicUsage() {
  const [children, setChildren] = useState('Alert');
  return (
    <>
      <Demo>
        <ComponentTag name="Alert"></ComponentTag>
        <StringInput
          name="children"
          init={children}
          handler={setChildren}
          n={2}
        />
        <br />
        <ComponentTag name="Alert" status="closed" />
      </Demo>
      <Title lv="3">Basic Usage Component</Title>
      <Alert>{children}</Alert>
    </>
  );
}
function Usage1() {
  const [state, setState] = useState(false);
  const [children, setChildren] = useState('This is Alert msg');
  return (
    <>
      <Demo>
        <Import name="useState" origin="react" />
        <br />
        <Func name="DarkMode" n={2}>
          <Return n={2}>
            <ComponentTag name="button" click="toggle" clickVar="false" n={2} />
            <br />
            <ChildrenText n={4}>Show Alert!</ChildrenText>
            <br />
            <ComponentTag name="button" status="closed" n={2} />

            <br />
            <ComponentTag name="Alert" n={2} />
            <StringInput
              name="children"
              init={children}
              handler={setChildren}
              n={4}
            />
            <br />
            <ComponentTag name="Alert" status="closed" n={2} />
            <br />
          </Return>
        </Func>
      </Demo>
      <Title lv="3">Usage1 Component</Title>
      <button onClick={() => setState(true)}>Show Alert!</button>
      {state ? <Alert>{children}</Alert> : null}
    </>
  );
}

export function DemoAlert() {
  return (
    <>
      <Title lv="3">Basic Usage</Title>
      <BasicUsage />

      <Title lv="3">Usage1</Title>
      <Usage1 />
    </>
  );
}
