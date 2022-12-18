import { useState } from 'react';
import { Alert } from 'react-wai';
import { StringInput } from './../PageComponent';
import { ComponentTag, DemoContainer } from './../EditorComponent';

export function DemoAlert() {
  const [width, setWidth] = useState('100%');
  const [height, setHeight] = useState('100%');
  const [children, setChildren] = useState('Alert');
  return (
    <>
      <DemoContainer>
        <ComponentTag name="Alert">
          <StringInput name="width" init={width} handler={setWidth} n={2} />
          <StringInput name="height" init={height} handler={setHeight} n={2} />
        </ComponentTag>
        <StringInput
          name="children"
          init={children}
          handler={setChildren}
          n={2}
        />
        <br />
        <ComponentTag name="Alert" status="closed" />
      </DemoContainer>
      <Alert width={width} height={height}>
        {children}
      </Alert>
    </>
  );
}
