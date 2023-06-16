import React from "react";
import styled from "styled-components";
import SocialIcons from "./SocialIcons";
import Button from "./Button";
import AnimationMain from "./AnimationMain";
import { motion } from "framer-motion";
import { animateCoverCol1, animateCoverCol2 } from "../animateMotion/main";
import { selectTranslations } from "../redux/slices/i18next";
import { useAppSelector } from "../redux/hook";

const StyledCover = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 10px); // 50px(header), 10px(padding body)
  width: calc(100% - 20px);

  @media (max-width: 1262px) {
    height: calc(100vh - 65px); // 100px(header), 10px(padding body)
  }

  @media (max-width: 1050px) {
    flex-direction: column;
    height: unset;
  }

  @media (max-width: 1050px) {
    width: 100%;
  }
`;

const Col1 = styled(motion.div)`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 1050px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    align-items: center;
    padding-left: 0px;
    width: 100%;
  }
`;

const Col2 = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 50%;
  position: relative;
  @media (max-width: 1050px) {
    padding-top: 50px;
    width: 100%;
  }
  @media (max-width: 600px) {
    padding-top: 0px;
    width: 100%;
  }

  & svg {
    position: absolute;
    bottom: 0px;
    right: 50%;
    transform: translateX(50%);

    @media (max-width: 1261px) {
      /* max-width: 100%; */
    }
    @media (max-width: 1050px) {
      position: static;
      bottom: unset;
      right: unset;
      transform: unset;
    }
    @media (max-width: 600px) {
      max-height: 400px;
      max-width: 400px;
    }
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
  @media (max-width: 600px) {
    margin-top: 40px;
  }
  & svg {
    margin-left: 30px;
  }
`;

const SubTitle = styled.p`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  font-weight: 700;
  letter-spacing: 0.2rem;
  word-spacing: 0.4rem;
  line-height: 40px;

  @media (max-width: 600px) {
    text-align: center;
    line-height: 30px;
  }
`;

const BlockBtns = styled.div`
  margin-top: 60px;
  display: flex;
  & button {
    &:nth-child(1) {
      margin-right: 50px;
    }
  }
`;

type CoverProps = {
  refContact: any;
};

const Cover: React.FC<CoverProps> = ({ refContact }) => {
  const lang = useAppSelector(selectTranslations);

  const buttonHandler = (ref: any) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <StyledCover>
      <Col1 initial="hidden" animate="visible" variants={animateCoverCol1}>
        <Title>
          <h1>{lang.cover.title}</h1>
          <motion.svg
            //@ts-ignore
            animate={{
              rotate: [0, 15, -15, 15, 0, 0, 0, 0, 0, 0, 0, 0],
              // transform: [
              //   "matrix(1.00,-0.00,0.00,1.00,0,0)",
              //   "matrix(1,-0.34,0.34,1,0,0)",
              //   "matrix(1.00,-0.00,0.00,1.00,0,0)",
              //   "matrix(1,0.34,-0.34,1,0,0)",
              //   "matrix(1.00,-0.00,0.00,1.00,0,0)",
              // ],
              transformOrigin: "50% bottom",
            }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            width="62"
            height="59"
            viewBox="0 0 62 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46.6995 5.10362C49.3524 5.51812 54.9938 8.772 56.3368 18.4715M48.5026 1C52.1503 2.2228 59.7565 7.429 61 18.4715M5.60116 36.1295C5.74624 39.7357 7.91411 47.5947 15.425 50.1812M1.00014 36.1295C0.979413 40.2538 3.28822 49.5843 12.6892 53.9118"
              stroke="#EEA986"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M10.9908 6.85435C10.5954 7.6605 10.3897 8.59862 10.3692 9.65073C8.37425 9.78411 6.6581 11.1037 5.7818 12.7672C4.94916 14.3478 4.8088 16.2894 5.66005 18.0963C4.92791 18.284 4.17507 18.6162 3.53486 19.1793C1.70751 20.7865 1.55939 23.4568 3.04219 26.899L3.10084 27.0352L3.18499 27.1572C7.188 32.9616 16.4125 45.2102 20.5114 50.5926L20.5579 50.6537L20.6104 50.7097C22.3128 52.5256 25.1926 54.6659 28.6915 55.8322C32.2231 57.0094 36.4522 57.2099 40.6813 54.9914C43.3108 53.612 45.5306 52.4467 47.3036 51.3323C49.0756 50.2186 50.5235 49.0829 51.5398 47.71C53.6669 44.8365 53.5671 41.4092 52.2789 36.4658C52.0078 34.3586 51.5019 32.3444 50.5613 28.5992C50.4436 28.1308 50.3191 27.6353 50.1875 27.1091C50.1702 26.1123 50.0193 25.4084 49.8616 24.8112C49.8283 24.6852 49.7975 24.5722 49.7691 24.4681C49.6539 24.0458 49.579 23.7716 49.5467 23.3831C49.4675 22.4335 49.6666 20.7167 51.3418 16.1255L51.4327 15.8764V15.6113C51.4327 13.9671 50.945 11.6847 49.1271 10.566C47.1497 9.34915 44.6053 10.0584 41.8132 12.1783L41.6729 12.2848L41.5612 12.4209C41.1565 12.9135 40.8335 13.6262 40.5717 14.3178C40.2929 15.0542 40.0217 15.9383 39.7687 16.8936C39.5339 17.78 39.3099 18.7465 39.1067 19.7415C36.8351 16.6378 33.7936 12.4028 31.416 9.09231C30.3593 7.62102 29.4338 6.33233 28.7653 5.4067L28.7264 5.35279L28.6828 5.30254C27.7696 4.24887 26.0759 2.85314 24.0528 2.70894C22.9754 2.63215 21.864 2.9197 20.8569 3.70875C20.3032 4.14265 19.8065 4.70752 19.3648 5.40175C17.7315 4.32581 15.748 3.86459 13.98 4.35835C12.7257 4.70867 11.6369 5.5369 10.9908 6.85435Z"
              fill="url(#paint0_linear_60_14)"
              stroke="#49220E"
              strokeWidth="3"
            />
            <path
              d="M37.5253 37.4241C37.2586 36.1588 37.4462 34.7651 37.9108 33.5408C38.8006 31.1962 40.4073 33.0441 40.503 35.55C40.6007 38.1086 38.0534 39.9296 37.5253 37.4241Z"
              fill="#FCCCB4"
            />
            <path
              d="M38.1814 28.1709C35.5493 30.6787 31.8643 37.2984 38.1814 43.7149"
              stroke="#49220E"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M6.78251 17.9119L20.9586 36.7512M11.0727 10.2021L25.8705 30.3471M18.8447 6.09845L32.9586 26.1813"
              stroke="#49220E"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_60_14"
                x1="19.4042"
                y1="14.9896"
                x2="53.7876"
                y2="46.9481"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFD4BF" />
                <stop offset="1" stopColor="#EEA986" />
              </linearGradient>
            </defs>
          </motion.svg>
        </Title>
        <SubTitle>{lang.cover.subTitle}</SubTitle>
        <SocialIcons />

        <BlockBtns>
          <div onClick={() => buttonHandler(refContact)}>
            <Button text={lang.cover.btn_1} />
          </div>

          <a
            href="document/Alexey_Sevastynov_Frontend_React_developer.pdf"
            download
          >
            <Button text={lang.cover.btn_2} />
          </a>
        </BlockBtns>
      </Col1>

      <Col2 initial="hidden" animate="visible" variants={animateCoverCol2}>
        <AnimationMain />
      </Col2>
    </StyledCover>
  );
};

export default Cover;
