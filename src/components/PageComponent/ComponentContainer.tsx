import styled from '@emotion/styled';

/**
 * type
 */
interface ContentsContainerProps {
  children: string | JSX.Element | JSX.Element[];
}
/**
 * styled
 */
const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  /* overflow-y: auto; */
  /* overflow-x: hidden; */
  height: 100vh;
`;
const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 100px var(--content-padding);
  max-width: var(--max-page-width);

  margin-right: var(--synopsis-width);
  margin-left: var(--sidebar-width);
  height: fit-content;
  width: 100%;
  box-sizing: border-box;
  @media screen and (max-width: 1050px) {
    margin-right: 0;
    margin-left: 0;
  }
`;
/**
 * component
 */
export function ContentsContainer({ children }: ContentsContainerProps) {
  return (
    <ContentContainer id="scroll">
      <ComponentContainer>{children}</ComponentContainer>
    </ContentContainer>
  );
}
