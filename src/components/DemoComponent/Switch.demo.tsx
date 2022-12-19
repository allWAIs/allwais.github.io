import { useState } from 'react';
import { Title, Switch } from 'react-wai';

import {
  ComponentTag,
  Demo,
  Func,
  StringInput,
  BooleanInput,
  Indent,
  Import,
} from './../EditorComponent';

function BasicUsage() {
  const [state, setState] = useState(false);
  return (
    <>
      <Demo>
        <Import name="useState" origin="react" />
        <br />
        <Func name="ToggleComponent" n={2}>
          <ComponentTag
            name="Switch"
            click="toggle"
            clickVar="!state"
            status="self-closed"
            n={2}
          />
          <br />
        </Func>
      </Demo>
      <Switch status={state} onClick={() => setState(!state)} />
    </>
  );
}
function Usage1() {
  const [state, setState] = useState(false);
  const [height, setHeight] = useState('30px');
  const [delay, setDelay] = useState('0.5');
  const [ratio, setRatio] = useState('2');
  const [a11yHidden, setA11yHidden] = useState(false);
  const [text, setText] = useState('dark');
  const [bg, setBg] = useState('white');
  const [border, setBorder] = useState('black');
  const [bar, setBar] = useState(
    '10% 33%/30% no-repeat url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Moon_at_night.svg/120px-Moon_at_night.svg.png) black'
  );
  const [offText, setOffText] = useState('light');
  const [offBg, setOffBg] = useState('black');
  const [offBorder, setOffBorder] = useState('black');
  const [offBar, setOffBar] = useState(
    '90% 30%/30% no-repeat url(https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/svg/sun.svg)'
  );
  const [children, setChildren] = useState('darkMode');

  return (
    <>
      <Demo>
        <Import name="useState" origin="react" />
        <br />
        <Func name="DarkMode" n={2}>
          <Indent n={2} />
          <ComponentTag
            name="Switch"
            click="toggle"
            clickVar="!state"
            status="spread"
            n={2}
            n2={6}
          >
            <BooleanInput
              name="a11yHidden"
              init={a11yHidden}
              handler={setA11yHidden}
              n={6}
            />
            <StringInput name="delay" init={delay} handler={setDelay} n={6} />
            <StringInput
              name="height"
              init={height}
              handler={setHeight}
              n={6}
            />
            <StringInput name="ratio" init={ratio} handler={setRatio} n={6} />
            <StringInput name="text" init={text} handler={setText} n={6} />
            <StringInput name="bg" init={bg} handler={setBg} n={6} />
            <StringInput
              name="border"
              init={border}
              handler={setBorder}
              n={6}
            />
            <StringInput name="bar" init={bar} handler={setBar} n={6} />
            <StringInput
              name="offText"
              init={offText}
              handler={setOffText}
              n={6}
            />
            <StringInput name="offBg" init={offBg} handler={setOffBg} n={6} />
            <StringInput
              name="offBorder"
              init={offBorder}
              handler={setOffBorder}
              n={6}
            />
            <StringInput
              name="offBar"
              init={offBar}
              handler={setOffBar}
              n={6}
            />
            <br />
            <Indent n={4} />
          </ComponentTag>

          <StringInput
            name="children"
            init={children}
            handler={setChildren}
            n={6}
          />
          <br />
          <ComponentTag name="Switch" status="closed" n={4} />
          <br />
        </Func>
      </Demo>
      <Switch
        a11yHidden={a11yHidden}
        height={height}
        ratio={ratio}
        text={text}
        delay={delay}
        offText={offText}
        status={state}
        bg={bg}
        border={border}
        bar={bar}
        offBg={offBg}
        offBorder={offBorder}
        offBar={offBar}
        onClick={() => setState(!state)}
      >
        {children}
      </Switch>
    </>
  );
}
export function DemoSwitch() {
  return (
    <>
      <Title lv="3">Basic Usage</Title>
      <BasicUsage />
      <Title lv="3">Usage1</Title>
      <Usage1 />
    </>
  );
}
