import { useState } from 'react';
import { Alert } from 'react-wai';
import { PropsInput } from './../PageComponent';
import { ComponentTag, DemoContainer } from './../EditorComponent';

export function DemoAlert() {
  const [width, setWidth] = useState('100%');
  const [height, setHeight] = useState('100%');
  const [children, setChildren] = useState('Alert');
  return (
    <>
      <DemoContainer>
        <ComponentTag name="Alert">
          <PropsInput name="width" init={'100%'} handler={setWidth} />
          <PropsInput name="height" init={'50px'} handler={setHeight} />
        </ComponentTag>
        <PropsInput name="children" init={'50px'} handler={setChildren} />
        <br />
        <ComponentTag name="Alert" status="closed" />
      </DemoContainer>
      <Alert width={width} height={height}>
        {children}
      </Alert>
    </>
  );
}
