import {
  TagText,
  ComponentText,
  PropsText,
  BracketText,
  BracketText2,
  FuncName,
  ConstText,
  Indent,
} from '../PageComponent';
/**
 * type
 */
interface status {
  status?: 'closed' | 'self-closed' | 'spread' | undefined;
}
interface Clickprops {
  name: string;
  vari?: string;
  n?: number;
}
interface ComponentTagProps extends status {
  n?: number;
  n2?: number;
  name: string;
  click?: string;
  children?: string | JSX.Element[] | JSX.Element;
  clickVar?: string;
}
/**
 * component
 */
function ClickProps({ name, vari, n }: Clickprops) {
  return (
    <>
      <Indent n={n} />
      <PropsText>onClick</PropsText> = <BracketText>&#123;</BracketText>
      {vari ? (
        <>
          <BracketText2> &#40;&#41; </BracketText2>
          <ConstText>=&#62; </ConstText>
        </>
      ) : null}
      <FuncName>{name}</FuncName>
      {vari ? (
        <>
          <BracketText2>&#40;</BracketText2>
          <PropsText>{vari}</PropsText>
          <BracketText2>&#41;</BracketText2>
        </>
      ) : null}
      <BracketText> &#125;</BracketText>
    </>
  );
}
function Spread({ status }: status) {
  return (
    <>
      {status === 'spread' ? (
        <>
          <br />
        </>
      ) : (
        <Indent n={1} />
      )}
    </>
  );
}
export function ComponentTag({
  status,
  children,
  name,
  click,
  clickVar,
  n,
  n2,
}: ComponentTagProps) {
  return (
    <>
      <Indent n={n} />
      <TagText>&lt;</TagText>
      <TagText>{status === 'closed' ? '/' : null}</TagText>
      <ComponentText>{name}</ComponentText>
      {click ? (
        <>
          <Spread status={status} />
          <ClickProps name={click} vari={clickVar} n={n2} />
        </>
      ) : null}
      {children}
      <TagText>{status === 'self-closed' ? '/' : null}</TagText>
      <TagText>&gt;</TagText>
    </>
  );
}
