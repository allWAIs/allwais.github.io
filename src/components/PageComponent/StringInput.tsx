import { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { PropsText, BracketText } from './ColorSelector';
import { pxCheck } from '../../store';
import { Indent } from './Indent';
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
export function StringInput({ ...props }: StringInput) {
  const handleChange = (value: string) => {
    const numberAttribute = ['width', 'height'];
    if (!numberAttribute.includes(props.name)) return props.handler(value);
    return props.handler(pxCheck(value));
  };
  return (
    <>
      <br />
      <Indent n={props.n} />
      {props.name === 'children' ? null : (
        <>
          <PropsText>{props.name}</PropsText>=
        </>
      )}
      <BracketText>&#123;</BracketText>
      <StyledInput
        defaultValue={props.init}
        onChange={({ target }) => handleChange(target.value)}
      />
      <BracketText>&#125;</BracketText>
    </>
  );
}
