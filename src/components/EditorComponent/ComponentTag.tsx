import { TagText, ComponentText } from '../PageComponent';
interface ComponentTagProps {
  name: string;
  status?: 'closed';
  children?: string | JSX.Element[];
}

export function ComponentTag({ status, children, name }: ComponentTagProps) {
  return (
    <>
      <TagText>&lt;</TagText>
      <TagText>{status === 'closed' ? '/' : null}</TagText>
      <ComponentText>{name}</ComponentText>
      {children}
      <TagText>&gt;</TagText>
    </>
  );
}
