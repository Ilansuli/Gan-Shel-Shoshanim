import styled from "@emotion/styled";
import { TGalleryCategory, TProject } from "../types";
import GalleryCategoryCard from "./GalleryCategoryCard";

type CategoriesListProps = {
  categories: TGalleryCategory[];
};

const List = styled.ul`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  @media (min-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
  padding-block: var(--core-spacing-default);
`;
const GalleryCategoriesList: React.FC<CategoriesListProps> = ({
  categories,
}) => {
  return (
    <List>
      {categories.map((c) => (
        <GalleryCategoryCard key={c._id} category={c} />
      ))}
    </List>
  );
};
export default GalleryCategoriesList;
