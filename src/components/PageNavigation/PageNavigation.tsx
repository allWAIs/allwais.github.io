import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
import { CategoryProps, LinkProps } from "./PagaeNavigation.d";
import { StyledPageNavigation } from "./StyledPageNavigation";
import { ReactComponent as Logo } from "../../logo.svg";
const tempStyle = {
  padding: "5px 5px",
};
const LinkContainer = styled.div`
  &.active {
    background-color: var(--actvie-link-container);
    border-radius: 10px;
  }
  padding: 5px 5px;
`;
const StyledLogo = styled(Logo)`
  width: 100px;
  height: 100px;
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
        <div style={tempStyle}>Accordion</div>
        <div style={tempStyle}>Alert</div>
        <div style={tempStyle}>Alert and Message</div>
        <div style={tempStyle}>Dialogs</div>
        <div style={tempStyle}>Breadcrumb</div>
        <PageNavigation.Link to="/Components/Button" pathname={pathname}>
          Button
        </PageNavigation.Link>
        <div style={tempStyle}>Carousel</div>
        <div style={tempStyle}>Checkbox</div>
        <div style={tempStyle}>Combobox</div>
        <div style={tempStyle}>Dialog</div>
        <div style={tempStyle}>Disclosure</div>
        <div style={tempStyle}>Feed</div>
        <div style={tempStyle}>Grids</div>
        <div style={tempStyle}>Landmarks</div>
        <div style={tempStyle}>Link</div>
        <div style={tempStyle}>Listbox</div>
        <div style={tempStyle}>Menu or Menu bar</div>
        <div style={tempStyle}>Menu</div>
        <div style={tempStyle}>Button</div>
        <div style={tempStyle}>Meter</div>
        <div style={tempStyle}>Radio</div>
        <div style={tempStyle}>Group</div>
        <div style={tempStyle}>Slider</div>
        <div style={tempStyle}>Slider</div>
        <div style={tempStyle}>Spinbutton</div>
        <div style={tempStyle}>Switch</div>
        <div style={tempStyle}>Table</div>
        <div style={tempStyle}>Tabs</div>
        <div style={tempStyle}>Toolbar</div>
        <div style={tempStyle}>Tooltip</div>
        <div style={tempStyle}>Widget</div>
        <div style={tempStyle}>Tree</div>
        <div style={tempStyle}>View</div>
        <div style={tempStyle}>Treegrid</div>
        <div style={tempStyle}>Window</div>
        <div style={tempStyle}>Splitter</div>
      </PageNavigation.Category>
      <PageNavigation.Category category="Improve this page">
        Open Issue on github
      </PageNavigation.Category>
    </StyledPageNavigation>
  );
}

PageNavigation.Logo = () => {
  return <StyledLogo />;
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
