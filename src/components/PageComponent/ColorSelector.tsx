import styled from '@emotion/styled';
import { Indent } from './Indent';
/**
 * styled
 */
interface TextProps {
  name: string;
  origin: string;
}
interface FuncName {
  n?: number;
  name: string;
  children?: JSX.Element | JSX.Element[];
}
const OriginText = styled.span`
  color: #ce9178;
`;
const ImportText = styled.span`
  color: #c586c0;
`;
const ComponentText = styled.span`
  color: #2fc9b0;
`;
const PropsText = styled.span`
  color: #7ddcfe;
`;
const BracketText = styled.span`
  color: #296cc5;
`;
const BracketText2 = styled.span`
  color: #e2d100;
`;
const DeclareText = styled.span`
  color: #569cd6;
`;
const ConstText = styled.span`
  color: #4fc1ff;
`;
const TagText = styled.span`
  color: #7a8080;
`;
const FuncName = styled.span`
  color: #dcdcaa;
`;
function Import({ name, origin }: TextProps) {
  return (
    <>
      <ImportText>import</ImportText>
      <TagText> &#123;</TagText>
      <PropsText> {name}</PropsText>
      <TagText> &#125;</TagText>
      <ImportText> from</ImportText>
      <OriginText> &#039;{origin}&#039;</OriginText>
    </>
  );
}

function Func({ name, children, n }: FuncName) {
  return (
    <>
      <DeclareText>function</DeclareText>
      <FuncName> {name}</FuncName>
      <BracketText2>&#40;&#41;</BracketText2>
      <TagText> &#123;</TagText>
      <br />
      <Indent n={n} />
      <DeclareText>const</DeclareText>
      <ImportText> &#91;</ImportText>
      <ConstText>state</ConstText>, <FuncName>setState</FuncName>
      <ImportText>&#93;</ImportText> =<FuncName> useState</FuncName>
      <ImportText> &#40;</ImportText>
      <OriginText>false</OriginText>
      <ImportText>&#41;</ImportText>
      <br />
      {children}
      <TagText>&#125;</TagText>
    </>
  );
}
export {
  ComponentText,
  PropsText,
  BracketText,
  BracketText2,
  TagText,
  ConstText,
  Import,
  Func,
  FuncName,
};
