import { Indent, ImportText, TagText } from '../EditorComponent';
interface Indent {
  children?: string | JSX.Element | JSX.Element[];
  n?: number;
}
export function Return({ n, children }: Indent) {
  return (
    <>
      <Indent n={n} />
      <ImportText>return</ImportText>
      <TagText>&#40;</TagText>
      <br />
      {children}
      <TagText>&#41;</TagText>
    </>
  );
}
