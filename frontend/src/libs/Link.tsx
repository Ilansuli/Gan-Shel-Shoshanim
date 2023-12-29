import { styled } from "@mui/system";
import { Link } from "@tanstack/react-router";

const CustomLink = styled(Link)`
  text-decoration: none;
`;
//@ts-ignore
const Card = ({ ...props }) => <CustomLink {...props} />;

export default Card;
