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
  const [width, setWidth] = useState('100%');
  const [height, setHeight] = useState('100%');
  const [color, setColor] = useState('black');
  const [bg, setBg] = useState('hsl(200deg 20% 90%)');
  return (
    <>
      <Demo>
        <Import name="useState" origin="react" />
        <br />
        <Func name="DarkMode" n={2}>
          <Return n={2}>
            <ComponentTag name="button" click="toggle" clickVar="false" n={4} />
            <br />
            <ChildrenText n={6}>Show Alert!</ChildrenText>
            <br />
            <ComponentTag name="button" status="closed" n={4} />
            <br />
            <ComponentTag name="Alert" n={4}>
              <StringInput name="width" init={width} handler={setWidth} n={6} />

              <StringInput
                name="height"
                init={height}
                handler={setHeight}
                n={6}
              />

              <StringInput name="color" init={color} handler={setColor} n={6} />

              <StringInput name="bg" init={bg} handler={setBg} n={6} />
            </ComponentTag>

            <StringInput
              name="children"
              init={children}
              handler={setChildren}
              n={6}
            />
            <br />
            <ComponentTag name="Alert" status="closed" n={4} />
            <br />
          </Return>
        </Func>
      </Demo>
      <Title lv="3">Usage1 Component</Title>
      <button style={{ color: 'black' }} onClick={() => setState(true)}>
        Show Alert!
      </button>
      {state ? (
        <Alert width={width} height={height} bg={bg} color={color}>
          {children}
        </Alert>
      ) : null}
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
