import React from "react";
import styled from "styled-components";

const StyledEducationItem = styled.div`
  cursor: default;

  & img {
    margin-right: 35px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.34);
    border-radius: 100%;
  }

  & h3 {
    margin-bottom: 6px;
    font-size: 24px;
    font-weight: 700;
  }

  & p {
    font-size: 20px;
    margin-bottom: 6px;
    &:nth-child(1) {
      margin-bottom: 6px;
      color: yellow;
    }
  }

  &:hover {
    & #line {
      width: 100%;
      background-color: ${({ theme }) => theme.colors.backgroundTwo};
    }
  }
`;

const Item = styled.div`
  display: flex;

  &:hover {
    & div {
      &:last-child {
        width: 100%;
      }
    }
  }
`;

const Col1 = styled.div``;

const Col2 = styled.div``;

const Line = styled.div`
  margin: 20px 0px 35px 0px;
  width: 60%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

interface EducationItemProps {
  title: string;
  subTitle: string;
  text: string;
  image: any;
}

const EducationItem: React.FC<EducationItemProps> = ({
  title,
  subTitle,
  text,
  image,
}) => {
  return (
    <StyledEducationItem>
      <Item>
        <Col1>
          <img src={image} alt="img" />
        </Col1>
        <Col2>
          <h3>{title}</h3>
          <p>{subTitle}</p>
          <p>{text}</p>
        </Col2>
      </Item>

      <Line id="line"></Line>
    </StyledEducationItem>
  );
};

export default EducationItem;
