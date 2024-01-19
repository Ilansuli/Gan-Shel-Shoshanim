import SvgIcon from "@mui/material/SvgIcon";
import { styled } from "@mui/system";
import { IconButtonProps, IconButton as MuiIconButton } from "@mui/material";

type CustomIconButtonProps = {
  Icon: typeof SvgIcon;
} & IconButtonProps;

const CustomIconButton = styled(MuiIconButton)`
  .MuiSvgIcon-root {
    color: var(--system-common-body);
  }
  // Click background animation
  & .MuiTouchRipple-root {
    color: var(--system-common-body);
  }
  &:hover {
    background-color: var(--component-button-primary-active);
  }
`;

const IconButton: React.FC<CustomIconButtonProps> = ({
  Icon,
  // There's an issue with `sx` in the current version of @mui/material
  sx,
  ...props
}) => {
  return (
    <CustomIconButton sx={sx as any} {...props}>
      <Icon />
    </CustomIconButton>
  );
};
export default IconButton;
