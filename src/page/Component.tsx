import { useContext } from 'react';
import { ContextStore } from '../utils';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { data } from './ComponentInfo';
import {
  NavigationContainer,
  ContentsContainer,
  DemoComponent,
} from '../components';
const PropsIntro = styled.pre`
  background-color: var(--editor-background-color);
  color: var(--editor-font-color);
  padding: 10px;
  line-height: 40px;
`;
export function Component() {
  const { lang } = useContext(ContextStore);
  const { componentId } = useParams();
  const id = componentId || '';
  const comp = data[lang][id];
  const ref = data[lang].ref;

  return (
    <ContentsContainer>
      <h1>{comp.title}</h1>
      <h2 id="about">{ref.about}</h2>
      <div>{comp.about}</div>
      <h2 id="a11y">{ref.demo}</h2>
      <DemoComponent componentName={comp.title} />
      <h2 id="a11y">{ref.a11y}</h2>
      <div>{comp.a11y}</div>
      <h2 id="keyboard">{ref.keyboard}</h2>
      <div>{comp.keyboard}</div>
      <h2 id="props">{ref.props}</h2>
      <PropsIntro>{comp.props}</PropsIntro>

      <NavigationContainer>
        {Object.entries(ref).map(([key, value]) => (
          <div key={key}>
            <a href={'#' + key} aria-current="location">
              {value}
            </a>
          </div>
        ))}
      </NavigationContainer>
    </ContentsContainer>
  );
}
