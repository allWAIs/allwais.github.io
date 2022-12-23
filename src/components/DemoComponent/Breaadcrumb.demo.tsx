import { useState, useEffect } from 'react';
import { Title, Breadcrumb } from 'react-wai';
import {
  ComponentTag,
  Demo,
  StringInput,
  ObjectInput,
  EntryInput,
} from './../EditorComponent';

function BasicUsage() {
  return (
    <>
      <Demo>
        <ComponentTag name="Breadcrumb" status="self-closed" />
      </Demo>
      <Title lv="3">Basic Usage Component</Title>
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
      <Demo>
        <ComponentTag name="Breadcrumb">
          <StringInput name="root" init={defaultRoot} handler={setRoot} n={2} />
          <StringInput name="width" init={width} handler={setWidth} n={2} />
          <StringInput
            name="Splitter"
            init={splitter}
            handler={setSplitter}
            n={2}
          />
          <ObjectInput name="map" n={2}>
            <EntryInput
              name={defaultRoot}
              init="allWAIs Home"
              n={4}
              handler={(value) => setMap({ ...map, defaultRoot: value })}
            />
            <EntryInput
              name="Components"
              init=""
              n={4}
              handler={(value) => setMap({ ...map, Components: value })}
            />
            <EntryInput
              name="Breadcrumb"
              init="Bread"
              n={4}
              handler={(value) => setMap({ ...map, Breadcrumb: value })}
            />
          </ObjectInput>
        </ComponentTag>

        <br />
        <ComponentTag name="Breadcrumb" status="closed" />
      </Demo>
      <Title lv="3">Usage1 Component</Title>

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
