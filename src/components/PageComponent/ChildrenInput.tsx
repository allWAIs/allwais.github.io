import styled from '@emotion/styled';
/**
 * type
 */
interface IChildrenInputProps {
  name: string;
  handler: (value: string) => void;
  init: string;
}
/**
 * styled
 */
const StyledChildrenInput = styled.input`
  border: 1px solid var(--input-border-color);
  text-align: center;
  background-color: var(--editor-background-color);
  color: var(--editor-font-color);
`;
/**
 * component
 */
export function ChildrenInput({ handler, init }: IChildrenInputProps) {
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
