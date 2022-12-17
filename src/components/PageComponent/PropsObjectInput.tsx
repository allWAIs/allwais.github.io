import { PropsText, BracketText } from './ColorSelector';

/**
 * type
 */
interface PropsObjectInput {
  name: string;
  children: string | JSX.Element | JSX.Element[];
}
/**
 * styled
 */

/**
 * component
 */
export function PropsObjectInput({ name, children }: PropsObjectInput) {
  return (
    <>
      <br />
      {name === 'children' ? null : (
        <>
          &nbsp;&nbsp;<PropsText>{name}</PropsText>=
        </>
      )}
      <BracketText>&#123;</BracketText>

      {children}
      <br />
      <BracketText>&#125;</BracketText>
    </>
  );
}
