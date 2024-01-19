import styled from "@emotion/styled";
import ProjectsList from "../components/ProjectsList";
import { Container } from "../libs";
import { useQuery } from "@tanstack/react-query";
import { httpService } from "../services";
type ProjectsPageProps = {};

const Wrapper = styled.section`
  min-height: 100dvh;
`;

const ProjectsPage: React.FC<ProjectsPageProps> = ({}) => {
  const projectsQuery = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      return await httpService.get("projects");
    },
  });

  return (
    <Wrapper>
      <Container>
        <ProjectsList projects={projectsQuery.data} />
      </Container>
    </Wrapper>
  );
};
export default ProjectsPage;
