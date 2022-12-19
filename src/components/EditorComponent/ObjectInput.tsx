import { PropsText, BracketText } from './ColorSelector';
import { Indent } from './Indent';
/**
 * type
 */
interface ObjectInput {
  name: string;
  children: string | JSX.Element | JSX.Element[];
  n?: number;
}
/**
 * styled
 */

/**
 * component
 */
export function ObjectInput({ name, children, n }: ObjectInput) {
  return (
    <>
      <br />
      <Indent n={n} />
      {name === 'children' ? null : (
        <>
          <PropsText>{name}</PropsText>=
        </>
      )}
      <BracketText>&#123;</BracketText>

      {children}
      <br />
      <BracketText>&#125;</BracketText>
    </>
  );
}
