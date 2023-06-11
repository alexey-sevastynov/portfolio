import React from "react";
import styled from "styled-components";
import SocialIcons from "./SocialIcons";

const StyledContact = styled.div`
  height: 100vh;

  position: relative;

  & h2 {
    padding-top: 85px;
    font-size: 48px;
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

  & p {
    font-size: 20px;
  }
`;

const Phone = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;

  & img {
    margin-right: 18px;
  }

  & p {
    font-size: 20px;
  }
`;

const Foto = styled.div`
  position: absolute;
  bottom: 10px;
  right: 0;
`;

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <StyledContact>
      <h2>Reach Out to me!</h2>

      <Location>
        <img src="image/locationNight.png" alt="location" />
        {/* <img src="image/location" alt="location" /> */}
        <p>Dnipro, Ukraine</p>
      </Location>
      <Phone>
        <img src="image/phoneNight.png" alt="phone" />
        {/* <img src="image/phone.png" alt="phone" /> */}
        <p>+38 097 421 19 29</p>
      </Phone>

      <SocialIcons />

      <Foto>
        <img src="image/foto.png" alt="foto" width={550} height={550} />
      </Foto>
    </StyledContact>
  );
};

export default Contact;
