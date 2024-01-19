import styled from "@emotion/styled";
import { TProject } from "../types";
import ProjectPreviewCard from "./ProjectPreviewCard";

type ProjectsListProps = {
  projects: TProject[];
};

const List = styled.ul`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 700px) {
    grid-template-columns: repeat(4, 1fr);
  }
  padding-block: var(--core-spacing-default);
`;

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  return (
    <List>
      {projects?.map((p) => (
        <ProjectPreviewCard key={p._id} project={p} />
      ))}
    </List>
  );
};
export default ProjectsList;
