import { useState, useEffect } from 'react';
import { Title } from 'react-wai';
import { Breadcrumb } from 'react-wai';
import {
  PropsStringInput,
  PropsObjectInput,
  PropsEntryInput,
} from './../PageComponent';
import { ComponentTag, DemoContainer } from './../EditorComponent';

function BasicUsage() {
  return (
    <>
      <DemoContainer>
        <ComponentTag name="Breadcrumb" status="self-closed" />
      </DemoContainer>
      <Breadcrumb />
    </>
  );
}
function UsageBredcrumb() {
  const defaultRoot = location.origin + '/allWAIs';
  const [root, setRoot] = useState(defaultRoot);
  const [width, setWidth] = useState('fit-content');
  const [splitter, setSplitter] = useState('>');
  const [map, setMap] = useState({});
  useEffect(
    () =>
      setMap({
        ...map,
        [defaultRoot]: 'allWAIs Home',
        Components: '',
        Breadcrumb: 'Bread',
      }),
    []
  );
  return (
    <>
      <DemoContainer>
        <ComponentTag name="Breadcrumb">
          <PropsStringInput name="root" init={defaultRoot} handler={setRoot} />
          <PropsStringInput name="width" init={width} handler={setWidth} />
          <PropsStringInput
            name="Splitter"
            init={splitter}
            handler={setSplitter}
          />
          <PropsObjectInput name="map">
            <PropsEntryInput
              name={defaultRoot}
              init="allWAIs Home"
              handler={(value) => setMap({ ...map, defaultRoot: value })}
            />
            <PropsEntryInput
              name="Components"
              init=""
              handler={(value) => setMap({ ...map, Components: value })}
            />
            <PropsEntryInput
              name="Breadcrumb"
              init="Bread"
              handler={(value) => setMap({ ...map, Breadcrumb: value })}
            />
          </PropsObjectInput>
        </ComponentTag>

        <br />
        <ComponentTag name="Breadcrumb" status="closed" />
      </DemoContainer>
      <Breadcrumb root={root} map={map} width={width} splitter={splitter} />
    </>
  );
}

export function DemoBreadcrumb() {
  return (
    <>
      <Title lv="3">Basic Usage</Title>
      <BasicUsage />
      <Title lv="3">Usage1</Title>
      <UsageBredcrumb />
    </>
  );
}
