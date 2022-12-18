import { useState } from 'react';
import { A11yHidden } from 'react-wai';
import { StringInput, PropsBooleanInput } from './../PageComponent';
import { ComponentTag, DemoContainer } from './../EditorComponent';

export function DemoA11yHidden() {
  const [as, setAs] = useState('span');
  const [focusable, setFocusable] = useState(false);
  const [children, setChildren] = useState('Alert');
  return (
    <>
      <DemoContainer>
        <ComponentTag name="A11yHidden">
          <StringInput name="as" init={as} handler={setAs} n={2} />
          <PropsBooleanInput
            name="focusable"
            init={'false'}
            handler={setFocusable}
          />
        </ComponentTag>
        <StringInput
          name="children"
          init={'A11yHidden'}
          handler={setChildren}
          n={2}
        />
        <br />
        <ComponentTag name="A11yHidden" status="closed" />
      </DemoContainer>
      <A11yHidden as={as} focusable={Boolean(focusable)}>
        {children}
      </A11yHidden>
    </>
  );
}
