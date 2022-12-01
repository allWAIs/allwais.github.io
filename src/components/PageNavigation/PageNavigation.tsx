import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
import { CategoryProps, LinkProps } from "./PagaeNavigation.d";
import { StyledPageNavigation } from "./StyledPageNavigation";

const LinkContainer = styled.div`
  &.active {
    background-color: var(--actvie-link-container);
  }
`;
export function PageNavigation() {
  const { pathname } = useLocation();
  return (
    <StyledPageNavigation>
      <Link to="/" className="hi">
        <PageNavigation.Logo />
      </Link>
      <PageNavigation.Category category="Introduction">
        <PageNavigation.Link to="/intro" pathname={pathname}>
          Why React WAI
        </PageNavigation.Link>
      </PageNavigation.Category>
      <PageNavigation.Category category="Components">
        <div>Accordion</div>
        <div>Alert</div>
        <div>Alert and Message</div>
        <div>Dialogs</div>
        <div>Breadcrumb</div>
        <PageNavigation.Link to="/Components/Button" pathname={pathname}>
          Button
        </PageNavigation.Link>
        <div>Carousel</div>
        <div>Checkbox</div>
        <div>Combobox</div>
        <div>Dialog</div>
        <div>Disclosure</div>
        <div>Feed</div>
        <div>Grids</div>
        <div>Landmarks</div>
        <div>Link</div>
        <div>Listbox</div>
        <div>Menu or Menu bar</div>
        <div>Menu</div>
        <div>Button</div>
        <div>Meter</div>
        <div>Radio</div>
        <div>Group</div>
        <div>Slider</div>
        <div>Slider</div>
        <div>Spinbutton</div>
        <div>Switch</div>
        <div>Table</div>
        <div>Tabs</div>
        <div>Toolbar</div>
        <div>Tooltip</div>
        <div>Widget</div>
        <div>Tree</div>
        <div>View</div>
        <div>Treegrid</div>
        <div>Window</div>
        <div>Splitter</div>
      </PageNavigation.Category>
      <PageNavigation.Category category="Improve this page">
        Open Issue on github
      </PageNavigation.Category>
    </StyledPageNavigation>
  );
}

PageNavigation.Logo = () => {
  return <>Logo</>;
};

PageNavigation.Category = ({ category, children }: CategoryProps) => {
  return (
    <>
      <h3>{category}</h3>
      {children}
    </>
  );
};
PageNavigation.Link = ({ to, children, pathname }: LinkProps) => {
  return (
    <Link to={to}>
      <LinkContainer className={pathname === to ? "active" : ""}>
        {pathname === to}
        {children}
      </LinkContainer>
    </Link>
  );
};
// PageNavigation.Content = () => {
//   return <>Content</>;
// };
