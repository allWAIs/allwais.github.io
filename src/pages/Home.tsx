import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Switch, Title, Breadcrumb } from 'react-wai';
import styled from '@emotion/styled';
import { data } from './Home.lang';
import { ContextStore } from '../store';
import { Sidebar, ContentsContainer } from '../components';
const GetStartedButton = styled.button`
  color: var(--background-color);
  background-color: var(--font-color);
  padding: 10px 20px;
  border-radius: 5px;
`;

const breadMap = {
  [`${location.origin}`]: 'Home',
  Components: '',
  Title: 'Title Component',
  Switch: 'Switch Component',
  Alert: 'Alert Component',
  Breadcrumb: 'Breadcrumb Component',
};
export function Home() {
  const { lang } = useContext(ContextStore);
  const text = data[lang];
  const [switchStatus, setSwitchStatus] = useState(false);
  return (
    <>
      <ContentsContainer>
        <Title lv="1" style={{ fontSize: '75px' }}>
          {text.title}
        </Title>

        <div>{text.desc}</div>
        <Link to="/intro">
          <GetStartedButton>Get Started</GetStartedButton>
        </Link>
        <Title>Components</Title>
        <Title lv="3">Alert</Title>
        <Alert>Alert Example</Alert>
        <Title lv="3">Breadcrumb</Title>
        <Breadcrumb
          map={breadMap}
          src={window.location + '/Components/Alert'}
          splitter=">"
        />
        <Breadcrumb
          map={breadMap}
          src={window.location + '/Components/Breadcrumb'}
          splitter=">"
        />
        <Breadcrumb
          map={breadMap}
          src={window.location + '/Components/Title'}
          splitter=">"
        />
        <Title lv="3">Switch</Title>
        <Switch
          onClick={() => setSwitchStatus(!switchStatus)}
          status={switchStatus}
        />

        <Sidebar>Motivation</Sidebar>
      </ContentsContainer>
    </>
  );
}
