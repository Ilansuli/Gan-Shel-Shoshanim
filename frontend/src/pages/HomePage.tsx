import styled from "@emotion/styled";
import {
  Container as ContainerOrigin,
  Button as ButtonOrigin,
  Link as LinkOrigin,
} from "../libs";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper as SwiperOrigin, SwiperProps, SwiperSlide } from "swiper/react";
import { ReactComponent as Logo } from "../../public/gan-shel-shoshanim-logo-white.svg";
import { Autoplay, FreeMode, Keyboard } from "swiper/modules";
import { Parallax } from "react-scroll-parallax";
import { useQuery } from "@tanstack/react-query";
import { httpService } from "../services";
import { TGalleryImg } from "../types/galleryImg";

const Wrapper = styled.section`
  min-height: 100dvh;
  padding-block-end: 3rem;
`;

const Container = styled(ContainerOrigin)`
  width: 95%;
`;
const ImgWrapperIntro = styled(Parallax)`
  background-image: url("../../public/images/intro1-garden-wide.jpg");
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: hard-light;
  background-position: center;
  background-size: cover, cover;
  background-repeat: no-repeat;
  aspect-ratio: 1/1.3;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 700px) {
    aspect-ratio: 1/0.6;
  }
  @media (min-width: 1000px) {
    aspect-ratio: 1/0.4;
  }
`;

const Modal = styled(Parallax)``;

const LogoIcon = styled(Logo)`
  width: 150px;
  height: 150px;
  @media (min-width: 700px) {
    width: 200px;
    height: 200px;
  }
`;

const DescriptionWrapper = styled(Parallax)`
  padding-block: 5rem;
  padding-inline: 2rem;

  @media (min-width: 1000px) {
    padding-inline: 8rem;
    gap: 5rem;
  }
`;

const Description = styled.div`
  display: grid;
  gap: 2rem;
  justify-items: center;
  @media (min-width: 700px) {
    gap: 5rem;
    grid-auto-flow: column;
    justify-items: unset;
  }
`;

const DescriptionMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DescriptionTitle = styled.h3`
  color: var(--system-common-heading);
  font-size: 1.5rem;
`;

const DescriptionParagraph = styled.p``;

const Link = styled(LinkOrigin)`
  align-self: center;
  letter-spacing: 0.2em;
  font-size: 1rem;
  @media (min-width: 700px) {
    align-self: flex-start;
    grid-column: 1;
    margin-block-start: 0.5rem;
  }
`;

const Button = styled(ButtonOrigin)`
  min-width: 100px;
  max-width: 200px;
`;

const Swiper = styled(SwiperOrigin)<SwiperProps>`
  width: 100%;
  align-self: flex-start;
  grid-column: 1;
  @media (min-width: 700px) {
    margin-block-start: 0.5rem;
  }
`;

type SwiperImgProps = {
  bgcImgSrc: string;
};
const SwiperImg = styled.div<SwiperImgProps>`
  background-image: ${({ bgcImgSrc }) => `url(${bgcImgSrc})`};
  aspect-ratio: 1/1.1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const FollowUs = styled(Parallax)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  align-items: center;
`;

const FollowUsTitle = styled.h1`
  font-size: 1.5rem;
`;

const SocialNav = styled.nav``;

const SocialNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

type SocialListItemProps = {
  social: string;
};
const SocialListItem = styled.li<SocialListItemProps>`
  background-image: ${({ social }) =>
    `url(../../public/images/social-icons/${social}.svg)`};
  height: 35px;
  width: 35px;
  border-radius: 50%;
  transition: 0.2s ease-in;
  &:hover {
    scale: 1.1;
  }
  a {
    height: 100%;
    display: block;
  }
`;

const HomePage: React.FC = () => {
  const imgsQuery = useQuery({
    queryKey: ["imgs"],
    queryFn: async () => {
      return await httpService.get(`galleryImgs`);
    },
  });

  return (
    <Wrapper>
      <Container>
        <ImgWrapperIntro speed={5}>
          <Modal speed={-5}>
            <LogoIcon />
          </Modal>
        </ImgWrapperIntro>
        <DescriptionWrapper speed={20}>
          <Description>
            <DescriptionMain>
              <DescriptionTitle>
                אנחנו עוסקים בפיתוח והקמת גינות או שדרוג ושיקום גינות קיימות
              </DescriptionTitle>
              <DescriptionParagraph>
                בגן של שושנים אנו מקימים גינות שמייצרות יופי ושלווה בבית שלך,
                אנו מספקים את חומרי הגלם האיכותיים ביותר בשוק ויחד עם זאת אנו
                מאמינים בדייקנות, הקשבה ללקוח ,תכנון בהתאם לצרכיו ורצונותיו
                וייעוץ מכוון .השירותים שלנו מציעים בין היתר גם הרכבת דשא
                סינטטי,צמחייה, שתילת עצי נוי ופרי מקצועית ,ערוגות עם תיחום,
                בניית דקים,פרגולות גדרות ושערים מאלומיוניום ועץ ,תאורת
                .גינה,מערכות השקייה ,פינות מנגל ,אבני מדרך, מחסנים וחיפוי מטבחי
                חוץ
              </DescriptionParagraph>
            </DescriptionMain>
            <Link to="/projects">
              <Button variant="outlined">פרויקטים</Button>
            </Link>
          </Description>
        </DescriptionWrapper>

        <FollowUs speed={10}>
          <FollowUsTitle>
            עקבו אחרינו ברשתות החברתיות כדי לראות פרויקטים חדשים בהתפתחות
          </FollowUsTitle>
          <SocialNav>
            <SocialNavList>
              {[
                {
                  name: "facebook",
                  url: "https://www.facebook.com/profile.php?id=100047960959009",
                },
                {
                  name: "instagram",
                  url: "https://www.instagram.com/gan_shel_shoshanim/",
                },
              ].map((social: { name: string; url: string }, index) => (
                <SocialListItem social={social.name} key={index}>
                  <a href={social.url} />
                </SocialListItem>
              ))}
            </SocialNavList>
          </SocialNav>
          <Swiper
            freeMode={true}
            effect={"fade"}
            cssMode={true}
            keyboard={{ enabled: true }}
            slidesPerView={2}
            spaceBetween={1}
            breakpoints={{
              400: {
                slidesPerView: 2,
                spaceBetween: 1,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 1,
              },
              1000: {
                slidesPerView: 4,
                spaceBetween: 1,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Keyboard, FreeMode]}
          >
            {imgsQuery.data?.map((img: TGalleryImg, index: number) => (
              <SwiperSlide key={index}>
                <SwiperImg bgcImgSrc={img.imgSrc} />
              </SwiperSlide>
            ))}
          </Swiper>
        </FollowUs>
      </Container>
    </Wrapper>
  );
};
export default HomePage;
