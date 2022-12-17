import { TagText, ComponentText } from '../PageComponent';
/**
 * type
 */
interface ComponentTagProps {
  name: string;
  status?: 'closed' | 'self-closed';
  children?: string | JSX.Element[] | JSX.Element;
}
/**
 * component
 */
export function ComponentTag({ status, children, name }: ComponentTagProps) {
  return (
    <>
      <TagText>&lt;</TagText>
      <TagText>{status === 'closed' ? '/' : null}</TagText>
      <ComponentText>{name}</ComponentText>
      {children}
      <TagText>{status === 'self-closed' ? '/' : null}</TagText>
      <TagText>&gt;</TagText>
    </>
  );
}
