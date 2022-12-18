import { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { PropsText, BracketText } from './ColorSelector';
import { Indent } from './Indent';
import { pxCheck } from '../../store';
/**
 * type
 */
interface StringInput {
  name: string;
  handler: Dispatch<SetStateAction<string>>;
  init: string;
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
`;
/**
 * component
 */
export function EntryInput({ name, handler, init, n }: StringInput) {
  const handleChange = (value: string) => {
    const numberAttribute = ['width', 'height'];
    if (numberAttribute.includes(name)) return handler(pxCheck(value));
    else return handler(value);
  };
  return (
    <>
      <br />
      <Indent n={n} />
      {name === 'children' ? null : (
        <>
          <PropsText>{name}</PropsText>:
        </>
      )}
      <BracketText>&#123;</BracketText>
      <StyledInput
        defaultValue={init}
        onChange={({ target }) => handleChange(target.value)}
      />
      <BracketText>&#125;</BracketText>
    </>
  );
}
