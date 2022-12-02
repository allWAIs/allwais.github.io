import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { data } from "./ComponentInfo";

/*
 *temp : 현재 언어는 korean라고 작성한다.
 */
const lang = "korean";
const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: var(--content-padding-top);
  max-width: var(--max-page-width);
  margin-right: var(--sidebar-width);
  width: calc(100% - var(--sidebar-width));
`;
const NavigationContainer = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: var(--sidebar-width);
  padding-top: var(--content-padding-top);
  box-sizing: border-box;
  top: 0;
  right: 0;
`;

export function Component() {
  const { componentId } = useParams();
  const id = componentId || "";
  const comp = data[lang][id];
  const ref = data[lang].ref;
  console.log(componentId);
  return (
    <ContentContainer>
      <ComponentContainer>
        <h1>{comp.title}</h1>
        <h2 id="about">{ref.about}</h2>
        <div>{comp.about}</div>
        <h2 id="a11y">{ref.a11y}</h2>
        <div>{comp.a11y}</div>
        <h2 id="keyboard">{ref.keyboard}</h2>
        <div>{comp.keyboard}</div>
        <h2 id="props">{ref.props}</h2>
        <div>{comp.props}</div>
      </ComponentContainer>
      <NavigationContainer>
        {Object.entries(ref).map(([key, value]) => (
          <li key={key}>
            <a href={"#" + key} aria-current="location">
              {value}
            </a>
          </li>
        ))}
      </NavigationContainer>
    </ContentContainer>
  );
}
