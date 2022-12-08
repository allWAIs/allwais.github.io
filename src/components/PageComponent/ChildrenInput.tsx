import styled from '@emotion/styled';
interface IChildrenInputProps {
  name: string;
  handler: Function;
  init: string;
}
const StyledChildrenInput = styled.input`
  border: 1px solid var(--input-border-color);
  text-align: center;
  background-color: var(--editor-background-color);
  color: var(--editor-font-color);
`;

export function ChildrenInput({ name, handler, init }: IChildrenInputProps) {
  return (
    <>
      <br />
      <StyledChildrenInput
        defaultValue={init}
        onChange={({ target }) => handler(target.value)}
      />
    </>
  );
}
