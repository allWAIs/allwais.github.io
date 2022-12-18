import { useState } from 'react';
import { Title } from 'react-wai';
import { StringInput, PropsBooleanInput } from './../PageComponent';
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
          <StringInput name="lv" init={lv} handler={setLv} n={2} />
          <StringInput name="hidden" init={'false'} handler={setHidden} n={2} />
          <PropsBooleanInput
            name="focusable"
            init={'false'}
            handler={setFocusable}
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
