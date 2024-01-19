import styled from "@emotion/styled";
import GalleryCategoriesList from "../components/GalleryCategoriesList";
import { Container } from "../libs";
import { httpService } from "../services";
import { useQuery } from "@tanstack/react-query";

const Wrapper = styled.section`
  min-height: 100dvh;
`;

const GalleryPage: React.FC = ({}) => {
  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      return await httpService.get("categories");
    },
  });
  return (
    <Wrapper>
      <Container>
        <h1>גלריה</h1>
        {categoriesQuery.data && (
          <GalleryCategoriesList
            categories={categoriesQuery.data}
          ></GalleryCategoriesList>
        )}
      </Container>
    </Wrapper>
  );
};
export default GalleryPage;
