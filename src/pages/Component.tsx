import { useContext, useEffect } from 'react';
import { Title } from 'react-wai';
import { useParams, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { data, ref } from './Component.language';
import { ContextStore } from '../store';
import { Sidebar, ContentsContainer, DemoComponent } from '../components';
const PropsIntro = styled.div`
  background-color: var(--editor-background-color);
  color: var(--editor-font-color);
  padding: 10px;
  line-height: 40px;
  white-space: break-spaces;
  border-radius: 10px;
`;

const KeySpan = styled.code`
  padding: 1px 5px;
  border-radius: 0.3125rem;
  background-color: #f6f5f4;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export function Component() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.querySelector('#scroll')?.scrollTo(0, 0);
  }, [pathname]);
  const { lang } = useContext(ContextStore);
  const { componentId } = useParams();
  const id = componentId || '';
  const comp = data[lang][id];
  const reference = ref[lang];

  return (
    <ContentsContainer>
      <Title lv="1">{comp.title}</Title>
      <Title id="about">{reference.about}</Title>

      <div>{comp.about}</div>
      <Title id="props">{reference.props}</Title>
      <PropsIntro>{comp.props}</PropsIntro>
      <Title id="demo">{reference.demo}</Title>
      <DemoComponent componentName={comp.title} />
      <Title id="a11y">{reference.a11y}</Title>
      <div>{comp.a11y}</div>
      <Title id="keyboard">{reference.keyboard}</Title>
      {Array.isArray(comp.keyboard) ? (
        <PropsIntro>
          {comp.keyboard.map(({ key, event }, index) => (
            <div key={index}>
              <KeySpan>{key}</KeySpan> <span> : {event}</span>
            </div>
          ))}
        </PropsIntro>
      ) : (
        <PropsIntro>{comp.keyboard}</PropsIntro>
      )}

      <Sidebar>
        {Object.entries(reference).map(([key, value]) => (
          <div key={key}>
            <a href={'#' + key} aria-current="location">
              {value}
            </a>
          </div>
        ))}
      </Sidebar>
    </ContentsContainer>
  );
}
