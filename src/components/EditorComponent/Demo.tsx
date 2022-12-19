import styled from '@emotion/styled';
/**
 * styled
 */
interface Demo {
  children: string | JSX.Element | JSX.Element[];
}
export const DemoContent = styled.div`
  width: max-content;
  font-family: Consolas, 'Courier New', monospace;
  line-height: 40px;
  padding: 30px;

  color: var(--editor-font-color);
`;
export const DemoContainer = styled.div`
  overflow-x: auto;
  background-color: var(--editor-background-color);
`;
export function Demo({ children }: Demo) {
  return (
    <DemoContainer>
      <DemoContent>{children}</DemoContent>
    </DemoContainer>
  );
}
