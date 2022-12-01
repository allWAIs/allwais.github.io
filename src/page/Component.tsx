import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { data } from "./ComponentInfo";

/*
 *temp : 현재 언어는 korean라고 작성한다.
 */
const lang = "korean";
const ComponentContainer = styled.div`
  width: 500px;
`;
const NavigationContainer = styled.ul``;

export function Component() {
  const { componentId } = useParams();
  const id = componentId || "";
  const comp = data[lang][id /*componentId */];
  const ref = data[lang].ref;
  console.log(componentId);
  return (
    <>
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
    </>
  );
}
