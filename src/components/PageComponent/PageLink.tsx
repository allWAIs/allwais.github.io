import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { ContextStore } from '../../store';
const LinkContainer = styled.div`
  &.active {
    font-weight: 500;
    background-color: var(--actvie-link-container);
    border-radius: 10px;
  }
  padding: 5px 5px;
`;

export interface LinkProps {
  to: string;
  children?: string;
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
  const ComponentPageTo = 'allWAIs/Components/' + to;
  if (to === 'ref') return null;
  return (
    <Link to={ComponentPageTo}>
      <LinkContainer className={pathname === ComponentPageTo ? 'active' : ''}>
        {to}
      </LinkContainer>
    </Link>
  );
}
