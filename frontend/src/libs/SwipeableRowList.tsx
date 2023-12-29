import styled from "@emotion/styled";
import { Swiper as SwiperOriginal, SwiperProps } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Keyboard, FreeMode } from "swiper/modules";

const CustomSwiper = styled(SwiperOriginal)`
  padding-block: var(--system-common-padding);

  & .swiper-wrapper {
    padding: 1px;
  }
  & .swiper-button-next,
  .swiper-button-prev {
    color: var(--component-button-primary);
    display: none;
    @media (min-width: 700px) {
      display: flex;
    }
  }
`;

const SwipeableRowList: React.FC<SwiperProps> = ({ children }) => {
  const lang = document.documentElement.lang;
  const swiperSettings = {
    modules: [Navigation, Keyboard, FreeMode],
    navigation: true,
    freeMode: true,
    cssMode: true,
    keyboard: {
      enabled: true,
    },
    slidesPerView: 1.8,
    spaceBetween: 10,
    breakpoints: {
      400: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      700: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
      1000: {
        slidesPerView: 4.5,
        spaceBetween: 10,
      },
    },
  };

  return (
    <CustomSwiper
      dir={(document.documentElement.dir = lang === "he" ? "rtl" : "ltr")}
      {...swiperSettings}
    >
      {children}
    </CustomSwiper>
  );
};

export default SwipeableRowList;
