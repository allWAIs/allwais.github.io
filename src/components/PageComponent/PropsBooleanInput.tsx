import { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { PropsText, BracketText } from './ColorSelector';
/**
 * type
 */
interface IPropsBooleanInput {
  name: string;
  handler: Dispatch<SetStateAction<boolean>>;
  init: string;
}
/**
 * styled
 */
const StyledInput = styled.input`
  border: 1px solid var(--input-border-color);
  text-align: center;
  background-color: var(--editor-background-color);
  color: var(--editor-font-color);
`;
/**
 * component
 */
export function PropsBooleanInput({ name, handler, init }: IPropsBooleanInput) {
  const handleChange = (value: boolean) => handler(value);
  return (
    <>
      <br />
      {name === 'children' ? null : (
        <>
          <PropsText>{name}</PropsText>=
        </>
      )}
      <BracketText>&#123;</BracketText>
      <StyledInput
        defaultValue={init}
        onChange={({ target }) => handleChange(!!target.value)}
      />
      <BracketText>&#125;</BracketText>
    </>
  );
}
