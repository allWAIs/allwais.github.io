import { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { PropsText, BracketText } from './ColorSelector';
import { pxCheck } from '../../utils';
interface IPropsStringInput {
  name: string;
  handler: Dispatch<SetStateAction<string>>;
  init: string;
}
const StyledInput = styled.input`
  border: 1px solid var(--input-border-color);
  text-align: center;
  background-color: var(--editor-background-color);
  color: var(--editor-font-color);
`;

export function PropsStringInput({ name, handler, init }: IPropsStringInput) {
  const handleChange = (value: string) => {
    const numberAttribute = ['width', 'height'];
    if (numberAttribute.includes(name)) return handler(pxCheck(value));
    else return handler(value);
  };
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
        onChange={({ target }) => handleChange(target.value)}
      />
      <BracketText>&#125;</BracketText>
    </>
  );
}
