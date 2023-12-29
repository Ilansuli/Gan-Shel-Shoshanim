import styled from "@emotion/styled";
import {
  Button as ButtonOrigin,
  IconButton as IconButtonOrigin,
  Modal as ModalOrigin,
} from "../libs";
import { useState } from "react";
import { ReactComponent as Logo } from "../../public/gan-shel-shoshanim-logo-white.svg";

const StyledFooter = styled.footer`
  background-color: var(--system-common-heading);
  padding-block: 5.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding-inline: 1.5rem;
  text-align: center;
  & .MuiButton-outlined {
    color: white;
    border-color: white;
    align-self: unset;
    &:hover {
      background-color: white;
      color: var(--system-common-heading);
    }
  }
`;
const FooterTitle = styled.h1`
  color: white;
`;
const Button = styled(ButtonOrigin)`
  &.MuiButton-outlined {
    color: white;
    border: 2px solid white;
    align-self: center;
    min-width: 100px;
    max-width: 200px;
    letter-spacing: 0.2em;
    font-size: 1rem;

    &:hover {
      color: var(--component-button-primary);
      border: 2px solid var(--component-button-primary-border);
      background: white;
    }
  }
`;

const Modal = styled(ModalOrigin)`
  .MuiBox-root {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-rows: 1fr 1fr;
  }
`;
const ModalHeader = styled.header`
  background-image: url("../../public/images/contact-modal/contact-modal-header.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-block: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const StyledLogo = styled(Logo)`
  width: 150px;
  height: 150px;
`;

const ModalTitle = styled.h1`
  font-size: 2rem;
`;

const ContactUsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const ContactOptions = styled.div`
  display: flex;
`;

const IconButton = styled(IconButtonOrigin)`
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const MainFooter: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <StyledFooter>
      <FooterTitle>יש לכם פרויקט ? תקבעו איתנו להצעת מחיר </FooterTitle>
      <Button onClick={() => setOpenModal(true)} variant="outlined">
        צרו קשר
      </Button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <>
          <ModalHeader>
            <StyledLogo />
          </ModalHeader>
          <ContactUsWrapper>
            <ModalTitle>דברו איתנו</ModalTitle>
            <ContactOptions>
              <a
                href={`https://wa.me/+972504578996?text=${encodeURIComponent(
                  "היי, אשמח לקבל פגישת ייעוץ מותאמת לגינה שלי"
                )}`}
              >
                <IconButton iconName="WhatsApp" />
              </a>
              <a href="tel:0504578996">
                <IconButton iconName="Phone" />
              </a>
            </ContactOptions>
          </ContactUsWrapper>
        </>
      </Modal>
    </StyledFooter>
  );
};
export default MainFooter;
