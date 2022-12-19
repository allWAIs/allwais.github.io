import { useState, useContext, ElementType } from 'react';
import { A11yHidden } from 'react-wai';
import { ContextStore } from '../../store';
import {
  ComponentTag,
  Demo,
  StringInput,
  BooleanInput,
  TagInput,
} from './../EditorComponent';
import { data } from './A11yHidden.lang';
export function DemoA11yHidden() {
  const { lang } = useContext(ContextStore);

  const [as, setAs] = useState<ElementType<any> & string>('span');
  const [focusable, setFocusable] = useState(false);
  const [children, setChildren] = useState('Alert');
  return (
    <>
      <Demo>
        <ComponentTag name="A11yHidden">
          <TagInput name="as" init={as} handler={setAs} n={2} />
          <BooleanInput
            name="focusable"
            init={focusable}
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
      </Demo>
      {data[lang]}
      <A11yHidden as={as} focusable={Boolean(focusable)}>
        {children}
      </A11yHidden>
    </>
  );
}
