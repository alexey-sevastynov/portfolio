import React from "react";
import styled from "styled-components";

const StyledExperiencesItem = styled.div`
  height: 540px;
  width: 436px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 25px;

  & span {
    padding: 63px 0px 13px 0px;
    font-size: 24px;
    display: block;
    text-align: center;
  }

  & p {
    font-size: 20px;
    text-align: center;

    &:last-child {
      margin-top: 35px;
    }
  }

  &:not(:last-child) {
    margin-right: 31px;
  }
`;

const HederBlock = styled.div`
  position: relative;
  height: 177px;
  width: 100%;
  background-color: aliceblue;
  border-radius: 25px 25px 0px 0px;
  background: linear-gradient(
    ${(props) => props.color},
    ${(props) => props.nonce}
  );

  & h3 {
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    padding-top: 59px;
  }
`;

const Icon = styled.div`
  position: absolute;
  bottom: -35%;
  left: 50%;
  transform: translateX(-50%);
`;

interface ExperiencesItemProps {
  title: string;
  image: any;
  subTitle: string;
  date: string;
  text: string;
  color: { color_1: string; color_2: string };
}

const ExperiencesItem: React.FC<ExperiencesItemProps> = ({
  title,
  image,
  subTitle,
  date,
  text,
  color,
}) => {
  return (
    <StyledExperiencesItem>
      <HederBlock color={color.color_1} nonce={color.color_2}>
        <h3>{title}</h3>
        <Icon>{image}</Icon>
      </HederBlock>

      <span>{subTitle}</span>
      <p>{date}</p>
      <p>{text}</p>
    </StyledExperiencesItem>
  );
};

export default ExperiencesItem;
