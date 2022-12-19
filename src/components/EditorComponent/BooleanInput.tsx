import { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { Indent } from './Indent';
import { PropsText, BracketText } from './ColorSelector';
/**
 * type
 */
interface BooleanInput {
  name: string;
  handler: Dispatch<SetStateAction<boolean>>;
  init: boolean;
  n?: number;
}
/**
 * styled
 */
const StyledInput = styled.input`
  border: 1px solid var(--input-border-color);
  text-align: center;
  background-color: var(--editor-background-color);
  color: var(--editor-font-color);
  @media screen and (max-width: 1050px) {
    width: 150px;
  }
`;
/**
 * component
 */
export function BooleanInput({ name, handler, init, n }: BooleanInput) {
  const handleChange = (value: boolean) => handler(value);
  return (
    <>
      <br />
      {name === 'children' ? null : (
        <>
          <Indent n={n} />
          <PropsText>{name}</PropsText>=
        </>
      )}
      <BracketText>&#123;</BracketText>
      <StyledInput
        defaultValue={String(init)}
        onChange={({ target }) => handleChange(!!target.value)}
      />
      <BracketText>&#125;</BracketText>
    </>
  );
}
