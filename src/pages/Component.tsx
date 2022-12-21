import { useContext } from 'react';
import { Title } from 'react-wai';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { data } from './Component.language';
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
export function Component() {
  const { lang } = useContext(ContextStore);
  const { componentId } = useParams();
  const id = componentId || '';
  const comp = data[lang][id];
  const ref = data[lang].ref;

  return (
    <ContentsContainer>
      <Title lv="1">{comp.title}</Title>
      <Title id="about">{ref.about}</Title>

      <div>{comp.about}</div>
      <Title id="props">{ref.props}</Title>
      <PropsIntro>{comp.props}</PropsIntro>
      <Title id="demo">{ref.demo}</Title>
      <DemoComponent componentName={comp.title} />
      <Title id="a11y">{ref.a11y}</Title>
      <div>{comp.a11y}</div>
      <Title id="keyboard">{ref.keyboard}</Title>
      <PropsIntro>{comp.keyboard}</PropsIntro>

      <Sidebar>
        {Object.entries(ref).map(([key, value]) => (
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
