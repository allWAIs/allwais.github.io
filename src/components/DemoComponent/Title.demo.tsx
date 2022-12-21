import { useState } from 'react';
import { Title } from 'react-wai';
import {
  ComponentTag,
  Demo,
  StringInput,
  BooleanInput,
  StyleInput,
} from './../EditorComponent';

type typeLv = 1 | 2 | 3 | 4 | 5 | 6 | '1' | '2' | '3' | '4' | '5' | '6';
export function BasicUsage() {
  const [children, setChildren] = useState('TIIIIIITLE');
  return (
    <>
      <Demo>
        <ComponentTag name="Title"></ComponentTag>
        <StringInput
          name="children"
          init={children}
          handler={setChildren}
          n={2}
        />
        <br />
        <ComponentTag name="Title" status="closed" />
      </Demo>
      <Title lv="3">Basic Usage Component</Title>
      <Title>{children}</Title>
    </>
  );
}
export function Usage1() {
  const [lv, setLv] = useState('2');
  const [color, setColor] = useState('blue');
  const [hidden, setHidden] = useState(false);
  const [focusable, setFocusable] = useState(false);
  const [children, setChildren] = useState('This is title');
  const lvCheck = (lv: string | number): typeLv => {
    const l = Number(lv);
    if (l === 1 || l === 2 || l === 3 || l === 4 || l === 5 || l === 6)
      return l;
    return '2';
  };
  return (
    <>
      <Demo>
        <ComponentTag name="Title">
          <StringInput name="lv" init={lv} handler={setLv} n={2} />
          <StyleInput name="color" init={color} handler={setColor} n={2} />
          <BooleanInput name="hidden" init={hidden} handler={setHidden} n={2} />
          <BooleanInput
            name="focusable"
            init={focusable}
            handler={setFocusable}
            n={2}
          />
        </ComponentTag>
        <StringInput
          name="children"
          init={children}
          handler={setChildren}
          n={2}
        />
        <br />
        <ComponentTag name="Title" status="closed" />
      </Demo>
      <Title
        lv={lvCheck(lv)}
        hidden={hidden}
        focusable={focusable}
        style={{ color }}
      >
        {children}
      </Title>
    </>
  );
}
export function DemoTitle() {
  return (
    <>
      <Title lv="3">Basic Usage</Title>
      <BasicUsage />

      <Title lv="3">Usage1</Title>
      <Usage1 />
    </>
  );
}
