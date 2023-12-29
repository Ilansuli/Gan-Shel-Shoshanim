import {
  CardActionArea,
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
} from "@mui/material";
import { Card as CardOrigin, Link } from "../libs";
import { TProject } from "../types";
import { useQuery } from "@tanstack/react-query";
import styled from "@emotion/styled";
import galleryImgs from "../data/galleryImgs.json";
import { httpService } from "../services";
import { TGalleryImg } from "../types/galleryImg";

type ProjectPreviewCardProps = {
  project: TProject;
};

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
  transition: all 0.2s ease-in;
`;

const CardContent = styled(MuiCardContent)`
  text-align: center;
`;
const Title = styled.h1``;

const ProjectPreviewCard: React.FC<ProjectPreviewCardProps> = ({
  project,
  ...props
}) => {
  const imgQuery = useQuery({
    queryKey: ["projectImg", project._id],
    queryFn: async () => {
      const imgs = await httpService.get(
        `galleryImgs?projectId=${project._id}`
      );
      return imgs[0];
    },
  });

  return (
    <Link
      key={project._id}
      to="/projects/$projectId"
      params={{
        projectId: project._id,
      }}
    >
      <Card {...props}>
        <CardActionArea>
          <CardMedia image={imgQuery.data?.imgSrc}></CardMedia>
          <CardContent>
            <Title>{project.city}</Title>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
export default ProjectPreviewCard;
