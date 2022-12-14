import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { ContextStore } from '../../store';

interface children {
  children?: string | JSX.Element | JSX.Element[];
}
const LinkContainer = styled.div<children>`
  &.active {
    font-weight: 500;
    border: 1px solid var(--actvie-link-container);
    border-radius: 10px;
  }
  padding: 5px 5px;
`;

export interface LinkProps extends children {
  to: string;
  pathname?: string;
}

export function PageLink({ to, children, pathname }: LinkProps) {
  const { closeSidebar } = useContext(ContextStore);
  return (
    <Link to={to} onClick={closeSidebar}>
      <LinkContainer className={pathname === to ? 'active' : ''}>
        {children}
      </LinkContainer>
    </Link>
  );
}
export function ComponentPageLink({ to, pathname }: LinkProps) {
  const { closeSidebar } = useContext(ContextStore);
  const ComponentPageTo = 'Components/' + to;
  if (to === 'ref') return null;
  return (
    <Link to={ComponentPageTo} onClick={closeSidebar}>
      <LinkContainer
        className={pathname === '/' + ComponentPageTo ? 'active' : ''}
      >
        {to}
      </LinkContainer>
    </Link>
  );
}
