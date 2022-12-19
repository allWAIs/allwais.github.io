import { Dispatch, SetStateAction, ElementType } from 'react';
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
interface TagInput {
  name: string;
  handler: Dispatch<SetStateAction<ElementType & string>>;
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
  @media screen and (max-width: 1050px) {
    width: 150px;
  }
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
export function TagInput({ ...props }: TagInput) {
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
        onChange={({ target }) => target.value}
      />
      <BracketText>&#125;</BracketText>
    </>
  );
}
