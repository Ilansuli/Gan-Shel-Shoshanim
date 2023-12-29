import styled from "@emotion/styled";
import {
  SwipeableDrawer as MuiSwipeableDrawer,
  SwipeableDrawerProps,
} from "@mui/material";

const StyledSwipeableDrawer = styled(MuiSwipeableDrawer)`
  .MuiDrawer-paper {
    background: var(--system-global-background);
    color: var(--system-global-body);
    box-shadow: var(--system-common-shadow);
  }
`;

const SwipeableDrawer: React.FC<SwipeableDrawerProps> = ({ sx, ...props }) => {
  return (
    <StyledSwipeableDrawer sx={sx as any} {...props}></StyledSwipeableDrawer>
  );
};
export default SwipeableDrawer;
