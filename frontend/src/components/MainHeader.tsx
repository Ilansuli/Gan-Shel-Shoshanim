import styled from "@emotion/styled";
import { Container as ContainerOrigin, Link as LinkOrigin } from "../libs";
import { ReactComponent as Logo } from "../../public/gan-shel-shoshanim-logo.svg";

const Wrapper = styled.header`
  background: var(--component-main-header-background);
  position: sticky;
  top: 0;
  z-index: var(--core-z-index-sticky);
  backdrop-filter: var(--core-blur-10);
`;

const Container = styled(ContainerOrigin)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--core-spacing-xxxs);
`;

const Nav = styled.nav``;
const NavList = styled.ul`
  display: flex;
  gap: 1rem;
`;
const NavListItem = styled.li`
  position: relative;
  &::before {
    opacity: 0;
    content: "";
    height: var(--core-size-dot);
    position: absolute;
    left: 0;
    top: 1.75rem;
    width: 100%;
    transition: opacity 180ms ease-out;
    background-color: #e0473e;
  }
  &:hover::before {
    opacity: var(--core-opacity-none);
  }
`;

const Link = styled(LinkOrigin)`
  font-weight: var(--core-font-weight-semibold);
  color: inherit;
  text-decoration: none;
`;
type MainHeaderProps = {};

const MainHeader: React.FC<MainHeaderProps> = ({}) => {
  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavList>
            <NavListItem>
              <Link to="/projects">פרויקטים</Link>
            </NavListItem>
            <NavListItem>
              <Link to="/gallery">גלריה</Link>
            </NavListItem>
          </NavList>
        </Nav>
      </Container>
    </Wrapper>
  );
};
export default MainHeader;
