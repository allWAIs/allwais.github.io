import { useState } from 'react';
import { List, ListItem } from 'react-wai';
import {
  ComponentTag,
  Demo,
  TagInput,
  ImportText,
  ConstText,
  FuncName,
  ObjectEntries,
  ObjectEntriesArray,
  Indent,
  StringInput,
  BracketText,
  TagText,
  PropsText,
} from './../EditorComponent';

interface ArrayProps {
  name: string;
  //eslint-disable-next-line
  object: Array<any>;
}

const Sidebar = [
  {
    title: 'Introduction',
    category: [{ name: 'Get Started', href: '/' }],
  },
  {
    title: 'Components',
    category: [
      { name: 'Alert', href: '/' },
      { name: 'A11yHidden', href: '/' },
    ],
  },
  {
    title: 'Improve this page',
    category: [{ name: 'Open Issue on gitbhub', href: '/' }],
  },
];

function Array({ name, object }: ArrayProps) {
  return (
    <>
      <ImportText>const</ImportText>
      <ConstText> {name}</ConstText>
      <> = </>
      <FuncName>{`[`}</FuncName>
      <br />
      <ImportText>{`{`}</ImportText> <br />
      <ObjectEntries title="title" value={object[0].title} n={4} />
      <br />
      <ObjectEntriesArray title="category" n={4}>
        <FuncName>{`{`}</FuncName>
        <ObjectEntries title="name" value={object[0].category[0].name} n={1} />
        {`,`}
        <ObjectEntries title="href" value={object[0].category[0].href} n={1} />
        <FuncName>{` }`}</FuncName>
      </ObjectEntriesArray>
      <ImportText>{`}`}</ImportText>, <br />
      <ImportText>{`{`}</ImportText> <br />
      <ObjectEntries title="title" value={object[1].title} n={4} />
      <br />
      <ObjectEntriesArray title="category" n={4}>
        <FuncName>{`{`}</FuncName>
        <ObjectEntries title="name" value={object[1].category[0].name} n={1} />
        {`,`}
        <ObjectEntries title="href" value={object[1].category[0].href} n={1} />
        <FuncName>{` },`}</FuncName>
        <br />
        <Indent n={5} />
        <FuncName>{`{`}</FuncName>
        <ObjectEntries title="name" value={object[1].category[1].name} n={1} />
        {`,`}
        <ObjectEntries title="href" value={object[1].category[1].href} n={1} />
        <FuncName>{` }`}</FuncName>
      </ObjectEntriesArray>
      {<ObjectEntries title="title" value={object[2].title} n={4} />}
      <br />
      <ImportText>{`}`}</ImportText>, <br />
      <ImportText>{`{`}</ImportText> <br />
      <ObjectEntriesArray title="category" n={4}>
        <FuncName>{`{`}</FuncName>
        <ObjectEntries title="name" value={object[2].category[0].name} n={1} />
        {`,`}
        <ObjectEntries title="href" value={object[2].category[0].href} n={1} />
        <FuncName>{` }`}</FuncName>
      </ObjectEntriesArray>
      <ImportText>{`}`}</ImportText>, <br />
      <FuncName>{`]`}</FuncName>
    </>
  );
}
export function DemoList() {
  const [as, setAs] = useState<'ul' | 'ol'>('ul');
  const [direction, setDirection] = useState<'row' | 'col'>('col');
  const [direction2, setDirection2] = useState<'row' | 'col'>('col');
  const [step, setStep] = useState<number>(2);
  return (
    <>
      <Demo>
        <Array name="Sidebar" object={Sidebar} />
        <br />
        <ComponentTag name="List">
          <TagInput name="as" init={as} handler={setAs} n={2} />
          <StringInput
            name="direction"
            init={direction}
            handler={setDirection}
            n={2}
          />
          <TagInput name="step" init={String(step)} handler={setStep} n={2} />
        </ComponentTag>
        <br />
        <Indent n={4} />
        <PropsText>Sidebar</PropsText>
        <>.</>
        <FuncName>{`map(`}</FuncName>
        <ImportText>{`(`}</ImportText>
        <BracketText>{`{`}</BracketText>
        <PropsText>title</PropsText>
        <> , </>
        <PropsText>category</PropsText>
        <BracketText>{`}`}</BracketText>
        <ImportText>{`)`}</ImportText>
        <BracketText>{`=>`}</BracketText>
        <ImportText>{`(`}</ImportText>
        <br />
        <Indent n={6} />
        <ComponentTag name="ListItem" status="spread">
          <PropsText> key </PropsText>
          <>= </>
          <BracketText>{`{`}</BracketText>
          <PropsText>title</PropsText>
          <BracketText>{`}`}</BracketText>
        </ComponentTag>
        <br />
        <Indent n={8} />
        <TagText>&lt;</TagText>
        <BracketText>h3</BracketText>
        <TagText>&gt;</TagText>
        <BracketText>{`{`}</BracketText>
        <>title</>
        <BracketText>{`}`}</BracketText>
        <TagText>/&lt;</TagText>
        <BracketText>h3</BracketText>
        <TagText>&gt;</TagText>
        <br />
        <Indent n={8} />
        <ComponentTag name="List" status="spread">
          <PropsText> key </PropsText>
          <>= </>
          <BracketText>{`{`}</BracketText>
          <PropsText>title</PropsText>
          <BracketText>{`}`}</BracketText>
          <StringInput
            name="direction2"
            init={direction2}
            handler={setDirection2}
            n={2}
            sameline={true}
          />
          <PropsText> nested </PropsText>
        </ComponentTag>
        <br />
        <Indent n={10} />
        <BracketText>{`{`}</BracketText>
        <PropsText>category</PropsText>
        <>.</>
        <FuncName>{`map(`}</FuncName>
        <ImportText>{`(`}</ImportText>
        <PropsText>cate</PropsText>
        <ImportText>{`)`}</ImportText>
        <BracketText>{`=>`}</BracketText>
        <ImportText>{`(`}</ImportText>
        <br />
        <Indent n={12} />
        <ComponentTag name="ListItem" status="spread">
          <PropsText> key </PropsText>
          <>= </>
          <BracketText>{`{`}</BracketText>
          <PropsText>cate</PropsText>
          <>.</>
          <PropsText>name</PropsText>
          <BracketText>{`}`}</BracketText>
        </ComponentTag>
        <br />
        <Indent n={14} />
        <TagText>&lt;</TagText>
        <BracketText>a</BracketText>
        <PropsText> href</PropsText>
        <>=</>
        <BracketText>{`{`}</BracketText>
        <PropsText>cate</PropsText>
        <>.</>
        <PropsText>href</PropsText>
        <BracketText>{`}`}</BracketText>
        <TagText>&gt;</TagText>
        <BracketText>{`{`}</BracketText>
        <PropsText>cate</PropsText>
        <>.</>
        <PropsText>name</PropsText>
        <BracketText>{`}`}</BracketText>
        <TagText>/&lt;</TagText>
        <BracketText>a</BracketText>
        <TagText>&gt;</TagText>
        <br />
        <Indent n={12} />
        <ComponentTag name="ListItem" status="closed" />
        <br />
        <Indent n={10} />
        <ImportText>{`)`}</ImportText>
        <FuncName>{`)`}</FuncName>
        <BracketText>{`}`}</BracketText>
        <br />
        <Indent n={8} />
        <ComponentTag name="List" status="closed" />
        <br />
        <Indent n={6} />
        <ComponentTag name="ListItem" status="closed" />
        <br />
        <Indent n={4} />
        <ImportText>{`)`}</ImportText>
        <FuncName>{`)`}</FuncName>
        <BracketText>{`}`}</BracketText>
        <br />
        <ComponentTag name="List" status="closed" />
      </Demo>
      <List direction={direction} step={step} as={as}>
        {Sidebar.map(({ title, category }) => (
          <ListItem key={title}>
            <h3>{title}</h3>
            <List key={title} nested direction={direction2}>
              {category.map((cate) => (
                <ListItem key={cate.name}>
                  <a href={cate.href}>{cate.name}</a>
                </ListItem>
              ))}
            </List>
          </ListItem>
        ))}
      </List>
    </>
  );
}
