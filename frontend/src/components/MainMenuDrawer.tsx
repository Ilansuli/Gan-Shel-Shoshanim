import styled from "@emotion/styled";
import { useState } from "react";
import {
  AccordionDetails,
  AccordionSummary,
  SwipeableDrawerProps,
} from "@mui/material";
import { IconButton, SwipeableDrawer as SwipeableDrawerOrigin } from "../libs";
import { TGalleryCategory } from "../types";
import {
  Face,
  FavoriteBorderOutlined,
  Inventory2Outlined,
  PermIdentityOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { useQuery } from "@tanstack/react-query";
import { httpService } from "../services";
import { url } from "inspector";

const SwipeableDrawer = styled(SwipeableDrawerOrigin)`
  .MuiDrawer-paper {
    width: clamp(17.5rem, 50%, 22.5rem);
  }
`;

const Header = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1;
`;

type HeaderGenderProps = {
  isSelected: boolean;
};

const HeaderGender = styled.button<HeaderGenderProps>`
  width: 50%;
  padding-block: var(--core-spacing-xxxs);
  border: 0;
  background-color: var(--system-global-background);
  color: ${(props) =>
    props.isSelected
      ? "var(--component-button-primary)"
      : "var(--system-global-body_01)"};
  border-bottom: ${(props) =>
      props.isSelected
        ? "var(--component-button-primary)"
        : "var(--system-common-body_01)"}
    3px solid;
  cursor: pointer;
  &:first-of-type {
    position: relative;
    &::after {
      background-color: var(--system-common-body_01);
      content: "";
      height: 20px;
      margin-top: -10px;
      position: absolute;
      right: 0;
      top: 50%;
      width: 1px;
    }
  }
`;

const DrawerMain = styled.main``;

const Categories = styled.ul`
  padding: var(--system-common-padding-small);
  display: flex;
  flex-direction: column;
  gap: var(--system-common-padding-small);
`;

const Category = styled.li`
  display: flex;
  align-items: center;
  padding-block: var(--system-common-padding);
  padding-inline: var(--system-common-padding);
  background: var(--system-common-body_01);
  font-weight: var(--core-font-weight-heavy);
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const Home = styled(Category)`
  color: var(--system-global-body);
  padding-block: var(--system-common-padding-small);
`;

const SocialNav = styled.nav``;

const SocialNavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

type SocialListItemProps = {
  social: string;
};
const SocialListItem = styled.li<SocialListItemProps>`
  background-image: ${({ social }) =>
    `url(../../public/images/social-icons/${social}.svg)`};
  height: 35px;
  width: 35px;
  margin-block-end: var(--core-spacing-xxs);
  border-radius: 50%;
  &:hover {
    border: 1px solid black;
  }
  a {
    height: 100%;
    display: block;
  }
`;

const MainNav = styled.nav``;

const AccountAuth = styled.div`
  background-color: var(--system-common-body_01);
  display: flex;
  gap: var(--core-spacing-mini);
  padding-block: var(--core-spacing-xxs);
  padding-inline: 1.75rem;
  a {
    color: var(--system-common-body);
    text-decoration: underline;
    &:hover {
      color: var(--component-button-primary);
    }
  }
`;

const Nav = styled.nav`
  padding-block-end: var(--core-spacing-xxs);
`;

const NavList = styled(Categories)`
  gap: unset;
  background-color: var(--system-common-body_01);
`;

const NavListItem = styled.li`
  display: flex;
  align-items: center;
  color: var(--system-common-body);
  gap: var(--core-spacing-mini);
  padding-block-end: var(--core-spacing-xxxs);
  padding-inline: var(--core-spacing-mini);
  cursor: pointer;
  &:hover {
    color: var(--component-button-primary);
  }
`;

const Txt = styled.p``;

const MyAccountWrapper = styled.div`
  display: flex;
  gap: var(--core-spacing-mini);
`;

const UserInfoList = styled.ul`
  padding-inline: var(--core-spacing-xxs);
`;

const UserInfoListItem = styled.li`
  display: flex;
  align-items: center;
  gap: var(--core-spacing-mini);
  color: var(--system-common-body);
  padding-block: var(--core-spacing-mini);
  &:hover {
    color: var(--component-button-primary);
  }
`;

const MenuDrawer: React.FC<SwipeableDrawerProps> = ({
  sx,
  onClose,
  ...props
}) => {
  const [isMen, setIsMen] = useState<boolean>(
    location.pathname.includes("/men") ? true : false
  );
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<TCategory | null>(
    null
  );

  const menCategoriesQuery = useQuery({
    queryKey: ["categories", "men"],
    queryFn: async () => {
      const res = await httpService.get("categories", { gender: "men" });
      return res;
    },
  });

  const womenCategoriesQuery = useQuery({
    queryKey: ["categories", "women"],
    queryFn: async () => {
      const res = await httpService.get("categories", {
        gender: "women",
      });
      return res;
    },
  });
  const onCloseAllDrawers = (ev: React.MouseEvent<HTMLButtonElement>) => {
    onClose(ev);
    setIsSubMenuOpen(false);
  };

  if (menCategoriesQuery.isError || womenCategoriesQuery.isError)
    return (
      <pre>
        {JSON.stringify(
          menCategoriesQuery.error ?? menCategoriesQuery.error,
          undefined,
          2
        )}
      </pre>
    );
  return (
    <SwipeableDrawer sx={sx as any} {...props} onClose={onClose}>
      <Header>
        <HeaderGender onClick={() => setIsMen(true)} isSelected={isMen}>
          <h3>MEN</h3>
        </HeaderGender>
        <HeaderGender onClick={() => setIsMen(false)} isSelected={!isMen}>
          <h3>WOMEN</h3>
        </HeaderGender>
      </Header>
      <DrawerMain>
        <Categories>
          {(isMen ? menCategoriesQuery.data : womenCategoriesQuery.data)?.map(
            (category: TCategory) => (
              <Category
                key={category._id}
                onClick={() => {
                  setIsSubMenuOpen(true);
                  setCurrentCategory(category);
                }}
              >
                {category.name}
              </Category>
            )
          )}
        </Categories>
        <SocialNav>
          <SocialNavList>
            {["facebook", "instagram", "snapchat"].map((socialName: string) => (
              <SocialListItem social={socialName}>
                <a href={`https://www.${socialName}.com/fitty/`} />
              </SocialListItem>
            ))}
          </SocialNavList>
        </SocialNav>

        <MainNav>
          <AccountAuth>
            {/* TODO: if user is connected :
            <p>Hey 'username'</p>
            <Link>Sign out</Link>
            else:
            */}
          </AccountAuth>
          <Nav>
            <NavList></NavList>
          </Nav>
        </MainNav>
      </DrawerMain>
      {/* condition is because SubMenuDrawer wont except null as initial state */}
    </SwipeableDrawer>
  );
};
export default MenuDrawer;
