import {
  CardProps,
  CardMedia as MuiCardMedia,
  CardContent as MuiCardContent,
  CardActionArea,
} from "@mui/material";
import { TGalleryCategory } from "../types";
import styled from "@emotion/styled";
import { Card as CardOrigin, Link } from "../libs";

type GalleryCategoryCardProps = {
  category: TGalleryCategory;
} & CardProps;

const Card = styled(CardOrigin)`
  transition: scale 0.2s ease-in;
  &:hover {
    .MuiCardMedia-root {
      scale: 1.01;
    }
  }
`;

const CardMedia = styled(MuiCardMedia)`
  background-position: top, center;
  aspect-ratio: 1/1.2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--system-common-gap-small);
  /* filter: blur(1px); */
  transition: all 0.2s ease-in;
`;

const TitleWrapper = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block-end: 5px;
`;
const Title = styled.h1`
  color: white;
  font-size: 1.5rem;
`;

const GalleryCategoryCard: React.FC<GalleryCategoryCardProps> = ({
  category,
  ...props
}) => {
  return (
    <Link
      key={category._id}
      to="/gallery/category/$categoryId"
      params={{
        categoryId: category._id,
      }}
    >
      <Card {...props}>
        <CardActionArea>
          <CardMedia image={category.imgSrc}></CardMedia>
          <TitleWrapper>
            <Title>{category.name}</Title>
          </TitleWrapper>
          {/* <CardContent>
          </CardContent> */}
        </CardActionArea>
      </Card>
    </Link>
  );
};
export default GalleryCategoryCard;
