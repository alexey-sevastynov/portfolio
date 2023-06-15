import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { setShowLinkAnimation } from "../redux/slices/main";

const StyledProjectsItem = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 460px;
  height: 218px;
  padding: 12px 18px;

  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.34);

  cursor: default;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundTwo};
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.77);
  }
`;

const Header = styled.div`
  display: flex;
  margin-bottom: 17px;

  & a {
    text-decoration: none;
  }

  & p {
    margin-left: 11px;
  }

  & svg {
    & path {
      fill: ${({ theme }) => theme.colors.border};
    }
  }
`;

const Footer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  & p {
    font-size: 10px;
  }
`;

const LanguageBlock = styled.div`
  margin-right: 30px;

  display: flex;

  align-items: center;
`;

const ViewsBlock = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & svg {
    &:first-child {
      cursor: pointer;
    }
  }
`;

const Circle = styled.div`
  margin-right: 6px;
  width: 10px;
  height: 10px;
  background-color: ${(props) =>
    props.color === "TypeScript" ? "#043bff" : "#FFA800"};
  border-radius: 100%;
`;

const SiteIconBlock = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  cursor: pointer;
`;

interface ProjectsItemProps {
  id: number;
  title: string;
  text: string;
  languageProgram: string;
  link: string;
  handleMouseEnter: any;
  handleMouseLeave: any;
}

const ProjectsItem: React.FC<ProjectsItemProps> = React.forwardRef(
  (
    {
      title,
      text,
      languageProgram,
      link,
      handleMouseLeave,
      handleMouseEnter,
      id,
    },
    ref: any
  ) => {
    const { linkAnimationId, brigthTheme } = useAppSelector(
      (props) => props.main
    );

    const linkGitHub = `https://github.com/alexey-sevastynov/${title}`;

    return (
      <StyledProjectsItem
        ref={ref}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <div>
          <Header>
            <svg
              width="17"
              height="23"
              viewBox="0 0 17 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0H17V20.7185H0V0ZM3.14384 1.47989H15.8356V14.5523H3.14384V1.47989ZM15.8356 15.6622H1.63014V19.1153H15.8356V15.6622Z"
                fill="white"
              />
              <path
                d="M4.59932 17.3271V23L6.75342 20.9651L8.90753 23V17.3271H4.59932Z"
                fill="white"
              />
              <path
                d="M4.77397 2.83646H6.17123V4.31635H4.77397V2.83646Z"
                fill="white"
              />
              <path
                d="M4.77397 5.79625H6.17123V7.27614H4.77397V5.79625Z"
                fill="white"
              />
              <path
                d="M4.77397 8.75603H6.17123V10.2359H4.77397V8.75603Z"
                fill="white"
              />
              <path
                d="M4.77397 11.7158H6.17123V13.1957H4.77397V11.7158Z"
                fill="white"
              />
            </svg>
            <motion.a
              initial={{ textDecoration: "unset" }}
              whileHover={{ textDecoration: "underline" }}
              transition={{ duration: 0.4 }}
              href={linkGitHub}
              target="blank"
            >
              <p>{title}</p>
            </motion.a>
          </Header>
          <h6>{text}</h6>
        </div>

        <Footer>
          <LanguageBlock>
            <Circle color={languageProgram} />
            <p>{languageProgram}</p>
          </LanguageBlock>
          <ViewsBlock>
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                fill="#FFA800"
              />
            </svg>
            <p>23</p>

            <svg
              width="20"
              height="15"
              viewBox="0 0 20 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 15C15.5228 15 19.3 11.4516 20 7.36559C19.3 3.33333 15.5228 0 10 0C4.47715 0 0.65 3.17204 0 7.36559C0.9 11.7742 4.47715 15 10 15ZM9.95 12.7419C14.0645 12.7419 16.3 10.6452 17.4 7.36559C16.15 4.19355 14.0645 1.98925 9.95 1.98925C5.83548 1.98925 3.55 4.4086 2.5 7.36559C3.65 10.0538 5.83548 12.7419 9.95 12.7419Z"
                fill="#BEBEBE"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.2 7.36559C14.2 9.85978 12.3196 11.8817 10 11.8817C7.6804 11.8817 5.8 9.85978 5.8 7.36559C5.8 4.8714 7.6804 2.84946 10 2.84946C12.3196 2.84946 14.2 4.8714 14.2 7.36559ZM7.7 7.36559C7.7 8.73146 8.72974 9.83871 10 9.83871C11.2703 9.83871 12.3 8.73146 12.3 7.36559C12.3 5.99973 11.2703 4.89247 10 4.89247C8.72974 4.89247 7.7 5.99973 7.7 7.36559Z"
                fill="#BEBEBE"
              />
            </svg>
            <p>3</p>
          </ViewsBlock>
          <SiteIconBlock>
            <a href={link} target="blank">
              {brigthTheme ? (
                linkAnimationId === id ? (
                  <motion.img
                    animate={{
                      rotate: [0, 360],
                      transform: ["scale(1,1)", "scale(1.2,1.2)"],
                    }}
                    transition={{
                      repeat: Infinity,
                      type: "spring",
                      duration: 0.6,
                      delay: 2,
                      damping: 0.2,
                    }}
                    src="image/link.png"
                    alt="link"
                    width={25}
                    height={25}
                  />
                ) : (
                  <img src="image/link.png" alt="link" width={25} height={25} />
                )
              ) : linkAnimationId === id ? (
                <motion.img
                  animate={{
                    rotate: [0, 360],
                    transform: ["scale(1,1)", "scale(1.2,1.2)"],
                  }}
                  transition={{
                    repeat: Infinity,
                    type: "spring",
                    duration: 0.6,
                    delay: 2,
                    damping: 0.2,
                  }}
                  src="image/linkNight.png"
                  alt="link"
                  width={25}
                  height={25}
                />
              ) : (
                <img
                  src="image/linkNight.png"
                  alt="link"
                  width={25}
                  height={25}
                />
              )}
            </a>
          </SiteIconBlock>
        </Footer>
      </StyledProjectsItem>
    );
  }
);

export default ProjectsItem;

export const MProjectsItem = motion(ProjectsItem);
