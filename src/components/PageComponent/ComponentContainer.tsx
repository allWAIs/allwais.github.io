import styled from '@emotion/styled';

interface ContentsContainerProps {
  children: string | JSX.Element | JSX.Element[];
}
const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
`;
const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0 var(--content-padding);
  max-width: var(--max-page-width);
  margin-top: var(--content-padding);
  margin-bottom: var(--content-padding);
  margin-right: var(--synopsis-width);
  margin-left: var(--sidebar-width);
  height: fit-content;
  width: 100%;
  box-sizing: border-box;
  @media screen and (max-width: 900px) {
    margin-right: 0;
    margin-left: 0;
  }
`;
export function ContentsContainer({ children }: ContentsContainerProps) {
  return (
    <ContentContainer>
      <ComponentContainer>{children}</ComponentContainer>
    </ContentContainer>
  );
}
