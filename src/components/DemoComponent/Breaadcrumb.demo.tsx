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
      <Breadcrumb />
    </>
  );
}
function UsageBredcrumb1() {
  const defaultRoot = location.origin;
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
        <ComponentTag name="Breadcrumb" status="spread-closed">
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
      </Demo>
      <Breadcrumb root={root} map={map} width={width} splitter={splitter} />
    </>
  );
}
function UsageBredcrumb2() {
  const defaultRoot = location.origin;
  const [map, setMap] = useState({});
  const [color, setColor] = useState('skyblue');
  const [bg, setBg] = useState('black');
  const [src, setSrc] = useState(location.origin + '/Components/Title');
  useEffect(
    () =>
      setMap({
        ...map,
        [defaultRoot]: 'allWAIs Home',
        Components: '',
        Title: 'Title',
      }),
    []
  );
  return (
    <>
      <Demo>
        <ComponentTag name="Breadcrumb" status="spread-closed">
          <StringInput name="bg" init={bg} handler={setBg} n={2} />
          <StringInput name="color" init={color} handler={setColor} n={2} />
          <StringInput name="src" init={src} handler={setSrc} n={2} />

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
              name="Title"
              init="Title"
              n={4}
              handler={(value) => setMap({ ...map, Title: value })}
            />
          </ObjectInput>
        </ComponentTag>

        <br />
      </Demo>
      <Breadcrumb color={color} bg={bg} src={src} map={map} />
    </>
  );
}

export function DemoBreadcrumb() {
  return (
    <>
      <Title lv="3">Basic Usage</Title>
      <BasicUsage />
      <Title lv="3">Usage1</Title>
      <UsageBredcrumb1 />
      <Title lv="3">Usage2</Title>
      <UsageBredcrumb2 />
    </>
  );
}
