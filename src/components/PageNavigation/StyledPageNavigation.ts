import styled from '@emotion/styled';

export const StyledPageNavigation = styled.div<{ sidebar: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  width: var(--sidebar-width);
  padding: 10px 15px 50px 15px;
  box-sizing: border-box;
  overflow-y: scroll;
  position: fixed;
  z-index: 1;
  background-color: var(--sidebar-color);
  transition: 0.3s all;
  @media screen and (max-width: 900px) {
    transform: ${({ sidebar }) =>
      sidebar ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)'};
  }
`;
