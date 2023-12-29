import styled from "@emotion/styled";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { TGalleryImg } from "../types/galleryImg";
import galleryImgs from "../data/galleryImgs.json";
import galleryCategories from "../data/galleryCategories.json";
import { Container, Modal as ModalOrigin } from "../libs";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import Masonry from "@mui/lab/Masonry";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide as MuiSwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Keyboard } from "swiper/modules";
import { Oval } from "react-loader-spinner";
import { httpService } from "../services";

const Wrapper = styled.section`
  min-height: 100dvh;
`;

const Header = styled.header`
  padding-block-end: 3rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
`;
const ImgPreview = styled.img`
  cursor: pointer;
`;

const Modal = styled(ModalOrigin)`
  .MuiBox-root {
    max-width: 500px;
    &:focus-visible {
      outline: unset;
    }
  }
`;

type ModalImgProps = {
  imgSrc: string;
};
const ModalImg = styled.div<ModalImgProps>`
  background-image: ${(props) => `url(${props.imgSrc})`};
  background-position: center;
  background-size: cover;
  aspect-ratio: 1/1;
  &:focus-visible {
    outline: unset;
  }
`;

const SwiperSlide = styled(MuiSwiperSlide)``;

const SubGalleryPage: React.FC = ({}) => {
  const { ref, inView } = useInView();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [clickedImgIdx, setClickedImgIdx] = useState<number>(-1);
  const { categoryId } = useParams({ from: "/gallery/category/$categoryId" });

  const onOpenImgModal = (galleryImg: TGalleryImg) => {
    const idx = imgsQuery.data?.findIndex(
      (i: TGalleryImg) => i._id === galleryImg._id
    );
    setClickedImgIdx(idx ?? 0);
    setOpenModal(true);
  };

  const currCategoryQuery = useQuery({
    queryKey: ["category", categoryId],
    queryFn: async () => {
      return await httpService.get(`categories/${categoryId}`);
    },
  });

  const imgsQuery = useQuery({
    queryKey: ["categoryImgs", categoryId],
    queryFn: async () => {
      return await httpService.get(`galleryImgs?categoryId=${categoryId}`);
    },
  });

  const {
    status,
    error,
    data,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    getNextPageParam: (lastPage) => lastPage.nextId,
    queryKey: ["categoryImgsInfinte", categoryId],
    initialPageParam: 1,
    queryFn: async ({ pageParam }: { pageParam: number }) => {
      return await httpService.get(
        `galleryImgs?pageParam=${pageParam}&limit=10&categoryId=${categoryId}`
      );
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (status === "pending")
    return (
      <Oval
        height={40}
        width={40}
        strokeWidth={5}
        strokeWidthSecondary={1}
        color="white"
        secondaryColor="rgb(130 163 89)"
        wrapperStyle={{
          marginBlock: "1rem",
          justifyContent: "center",
        }}
      />
    );

  if (status === "error") return <h1>Error:{error.message}</h1>;

  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>{currCategoryQuery.data?.[0].name}</Title>
        </Header>
        <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={1}>
          <>
            {data?.pages.map((page) => {
              return page.data?.map((img: TGalleryImg, index: number) => {
                if (page.data.length == index + 1) {
                  return (
                    <ImgPreview
                      onClick={() => onOpenImgModal(img)}
                      key={index}
                      src={img.imgSrc}
                      ref={ref}
                    />
                  );
                }
                return (
                  <ImgPreview
                    key={index}
                    src={img.imgSrc}
                    onClick={() => onOpenImgModal(img)}
                  />
                );
              });
            })}
          </>
        </Masonry>
        {isFetchingNextPage && (
          <Oval
            height={40}
            width={40}
            strokeWidth={5}
            strokeWidthSecondary={1}
            color="white"
            secondaryColor="rgb(130 163 89)"
            wrapperStyle={{
              marginBlock: "1rem",
              justifyContent: "center",
            }}
          />
        )}
      </Container>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <>
          <Swiper
            spaceBetween={10}
            navigation={true}
            modules={[FreeMode, Navigation, Keyboard]}
            className="mySwiper2"
            initialSlide={clickedImgIdx}
          >
            {imgsQuery.data?.map((i: TGalleryImg, index: number) => (
              <SwiperSlide key={index}>
                <ModalImg imgSrc={i.imgSrc} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </Modal>
    </Wrapper>
  );
};
export default SubGalleryPage;
