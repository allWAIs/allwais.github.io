import { useContext, useState } from 'react';
import { ContentsContainer } from '../components';
import { Sidebar } from '../components';
import { Title, Switch } from 'react-wai';
import { ContextStore } from '../store';
import { Demo, Import, ComponentTag, Func } from '../components';
import { data } from './Intro.language';
export function Intro() {
  const { lang } = useContext(ContextStore);
  const [state, setState] = useState(false);
  const text = data[lang];
  return (
    <>
      <ContentsContainer>
        <Title lv="1">{text.title}</Title>
        <Title>{text.subtitle1}</Title>
        <div>Using npm:</div>
        <Demo>npm install react-wai</Demo>
        <div>Using yarn:</div>
        <Demo>yarn add react-wai</Demo>
        <div>Using pnpm:</div>
        <Demo>npm install react-wai</Demo>
        <Title>{text.subtitle2}</Title>
        <Demo>
          <Import name="useState" origin="react" />
          <br />
          <Func name="ToggleComponent" n={2}>
            <ComponentTag
              name="Switch"
              click="toggle"
              clickVar="!state"
              status="self-closed"
              n={2}
            />
            <br />
          </Func>
        </Demo>
        <Switch status={state} onClick={() => setState(!state)} />
        <Sidebar>Motivation</Sidebar>
      </ContentsContainer>
    </>
  );
}
