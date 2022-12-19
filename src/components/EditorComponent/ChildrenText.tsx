import styled from '@emotion/styled';
import { Indent } from './Indent';
interface ChildrenText {
  children: string;
  n?: number;
}

const Text = styled.span`
  color: white;
`;

export function ChildrenText(props: ChildrenText) {
  return (
    <>
      <Indent n={props.n} />
      <Text>{props.children}</Text>;
    </>
  );
}
ChildrenText.default = {
  n: '0',
};
