import { useState } from 'react';
import { A11yHidden } from 'react-wai';
import { PropsInput } from './../PageComponent';
import { ComponentTag, DemoContainer } from './../EditorComponent';

export function DemoA11yHidden() {
  const [as, setAs] = useState('span');
  const [focusable, setFocusable] = useState(false);
  const [children, setChildren] = useState('Alert');
  return (
    <>
      <DemoContainer>
        <ComponentTag name="A11yHidden">
          <PropsInput name="as" init={as} handler={setAs} />
          <PropsInput name="focusable" init={'false'} handler={setFocusable} />
        </ComponentTag>
        <PropsInput name="children" init={'A11yHidden'} handler={setChildren} />
        <br />
        <ComponentTag name="A11yHidden" status="closed" />
      </DemoContainer>
      <A11yHidden as={as} focusable={Boolean(focusable)}>
        {children}
      </A11yHidden>
    </>
  );
}
