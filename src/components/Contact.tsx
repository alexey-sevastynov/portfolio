import React from "react";
import styled from "styled-components";
import SocialIcons from "./SocialIcons";
import { motion } from "framer-motion";
import { containerAnimationOpacity } from "../animateMotion/main";

const StyledContact = styled.div`
  height: 100vh;
  position: relative;
  width: 100%;
  @media (max-width: 900px) {
    /* position: static; */
    /* height: unset; */
  }
`;
const Location = styled.div`
  margin-top: 152px;

  margin-bottom: 10px;
  display: flex;
  align-items: center;
  & img {
    margin-right: 18px;
  }
  @media (max-width: 600px) {
    justify-content: center;
    margin-top: 50px;
  }
`;

const Phone = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  & img {
    margin-right: 18px;
  }
  @media (max-width: 600px) {
    margin-bottom: 0px;
    margin-top: 30px;
    justify-content: center;
  }
`;

const Foto = styled.div`
  position: absolute;
  bottom: 10px;
  right: 0;
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    position: static;
    bottom: unset;
    right: unset;
  }

  @media (max-width: 600px) {
    padding: 0px 10px;
    & img {
      max-width: 440px;
      max-height: 440px;
    }
  }
  @media (max-width: 500px) {
    & img {
      max-width: 340px;
      max-height: 340px;
    }
  }
`;

const CenterMob = styled.div`
  @media (max-width: 600px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    margin-bottom: 40px;
    bottom: 0;
  }
`;

interface ContactProps {
  refContact: React.LegacyRef<HTMLDivElement>;
}

const Contact: React.FC<ContactProps> = ({ refContact }) => {
  return (
    <div ref={refContact}>
      <StyledContact>
        <h2>Reach Out to me!</h2>

        <Location>
          <img src="image/locationNight.png" alt="location" />
          {/* <img src="image/location" alt="location" /> */}
          <p>Dnipro, Ukraine</p>
        </Location>

        <Foto>
          <motion.img
            src="image/foto.png"
            alt="foto"
            width={550}
            height={550}
            variants={containerAnimationOpacity}
            initial="hidden"
            whileInView="visible"
          />
        </Foto>

        <Phone>
          <img src="image/phoneNight.png" alt="phone" />
          {/* <img src="image/phone.png" alt="phone" /> */}
          <p>+38 097 421 19 29</p>
        </Phone>
        <CenterMob>
          <SocialIcons />
        </CenterMob>
      </StyledContact>
    </div>
  );
};

export default Contact;
