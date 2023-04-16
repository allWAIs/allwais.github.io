import { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import {
  PropsText,
  BracketText,
  TagText,
  KeyText,
  FuncName,
} from './ColorSelector';
import { pxCheck } from '../../store';
import { Indent } from './Indent';
/**
 * type
 */
interface ObjectBracket {
  n: number;
  children: string;
}

interface StringInput {
  name: string;
  handler: Dispatch<SetStateAction<any>>;
  init: string;
  sameline?: boolean;
  n?: number;
}
interface TagInput {
  name: string;
  handler: Dispatch<SetStateAction<any>>;
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
      {props.sameline ? null : <br />}

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
  const handleChange = (value: string) => props.handler(value);
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

export function ObjectBracket(props: ObjectBracket) {
  const { n, children } = props;
  return (
    <>
      {n ? <Indent n={n} /> : null}
      <TagText>{children}</TagText>
    </>
  );
}
interface ObjectEntriesProps {
  title: string;
  value: string;
  n: number;
}
interface ObjectEntriesArrayProps {
  title: string;
  children: React.ReactNode;
  n: number;
}
export function ObjectEntries(props: ObjectEntriesProps) {
  const { title, value, n } = props;
  return (
    <>
      {n ? <Indent n={n} /> : null}
      <PropsText>{title}:</PropsText>
      <KeyText>{` '${value}'`}</KeyText>
    </>
  );
}

export function ObjectEntriesArray(props: ObjectEntriesArrayProps) {
  const { title, children, n } = props;
  return (
    <>
      {n ? <Indent n={n} /> : null}
      <PropsText>{title}:</PropsText>
      <FuncName>{` [`}</FuncName>
      <br />
      {n ? <Indent n={n + 1} /> : <Indent n={1} />}
      {children}
      <br />
      {n ? <Indent n={n} /> : null}
      <FuncName>{`]`}</FuncName>
      <br />
    </>
  );
}
