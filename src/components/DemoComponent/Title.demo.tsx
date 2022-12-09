import { useState } from 'react';
import { Title } from 'react-wai';
import { PropsInput } from './../PageComponent';
import { ComponentTag, DemoContainer } from './../EditorComponent';

type typeLv = 1 | 2 | 3 | 4 | 5 | 6 | '1' | '2' | '3' | '4' | '5' | '6';

export function DemoTitle() {
  const [lv, setLv] = useState('2');
  const [hidden, setHidden] = useState('false');
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
      <DemoContainer>
        <ComponentTag name="Title">
          <PropsInput name="lv" init={lv} handler={setLv} />
          <PropsInput name="hidden" init={'false'} handler={setHidden} />
          <PropsInput name="focusable" init={'false'} handler={setFocusable} />
        </ComponentTag>
        <PropsInput name="children" init={children} handler={setChildren} />
        <br />
        <ComponentTag name="Title" status="closed" />
      </DemoContainer>
      <Title
        lv={lvCheck(lv)}
        hidden={hidden === 'false' ? false : true}
        focusable={focusable}
      >
        {children}
      </Title>
    </>
  );
}
